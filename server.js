require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 5000;
const ASSEMBLYAI_API_KEY = process.env.ASSEMBLYAI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Initialize Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Middleware
// app.use(cors());
app.use(cors({
  origin: "https://speech-to-text-app-frontend.vercel.app",
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));

app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/transcribe', upload.single('audio'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    try {
        const uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', req.file.buffer, {
            headers: { 'Authorization': ASSEMBLYAI_API_KEY, 'Content-Type': 'application/octet-stream' }
        });

        const audioUrl = uploadResponse.data.upload_url;
        const transcriptResponse = await axios.post('https://api.assemblyai.com/v2/transcript', { audio_url: audioUrl }, {
            headers: { 'Authorization': ASSEMBLYAI_API_KEY }
        });

        const transcriptId = transcriptResponse.data.id;

        let transcriptResult;
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 5000)); 
            const pollingResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
                headers: { 'Authorization': ASSEMBLYAI_API_KEY }
            });

            if (pollingResponse.data.status === 'completed') {
                transcriptResult = pollingResponse.data.text;
                break;
            }
        }

        await supabase.from('transcriptions').insert([{ transcription: transcriptResult, created_at: new Date() }]);

        res.json({ transcription: transcriptResult });

    } catch (error) {
        res.status(500).json({ error: 'Failed to transcribe audio' });
    }
});
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Speech-to-Text API</h1><p>Use the <code>/transcribe</code> endpoint to upload audio files.</p>');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
