# 🎤 Speech-to-Text Transcription (Backend)

This is a **Node.js + Express.js** backend for a Speech-to-Text Transcription app using **AssemblyAI** for speech processing and **Supabase** for storing transcriptions. The backend handles audio file uploads, live recording, and speech-to-text conversion.

---

## 🚀 Features

✅ Upload audio files (MP3, WAV, etc.)  
✅ Live audio recording support  
✅ Process speech-to-text conversion using **AssemblyAI**  
✅ Store transcriptions in **Supabase**  
✅ REST API for frontend integration  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** Supabase (PostgreSQL)  
- **API Used:** [AssemblyAI Speech-to-Text API](https://www.assemblyai.com/)  

---

## 📂 Folder Structure

```
speech-to-text-backend/
│── .env                  # Environment variables
│── server.js             # Main server file
│── package.json          # Project dependencies
│── package-lock.json     # Lock file for dependencies
│── README.md             # Project documentation
│── node_modules/         # Installed dependencies
```

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/speech-to-text-backend.git
cd speech-to-text-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4️⃣ Start the Server
```sh
npm start
```
The backend will run at **http://localhost:5000/** 🚀

---

## 📜 API Endpoints

### 🔹 Upload Audio File
```http
POST /api/upload
```
- **Request Body:** FormData (audio file)
- **Response:** `{ message: "File uploaded successfully", fileUrl: "..." }`

### 🔹 Convert Speech to Text
```http
POST /api/transcribe
```
- **Request Body:** `{ fileUrl: "..." }`
- **Response:** `{ transcription: "Hello, this is a test." }`

### 🔹 Fetch Transcriptions
```http
GET /api/transcriptions
```
- **Response:** `{ transcriptions: [...] }`

---

## 🎯 To-Do List

- [ ] Implement authentication with Supabase  
- [ ] Add support for multiple languages  
- [ ] Improve error handling  

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).  

---

⭐ **If you found this project useful, consider giving it a star!** ⭐# 🎤 Speech-to-Text Transcription (Backend)

This is a **Node.js + Express.js** backend for a Speech-to-Text Transcription app using **AssemblyAI** for speech processing and **Supabase** for storing transcriptions. The backend handles audio file uploads, live recording, and speech-to-text conversion.

---

## 🚀 Features

✅ Upload audio files (MP3, WAV, etc.)  
✅ Live audio recording support  
✅ Process speech-to-text conversion using **AssemblyAI**  
✅ Store transcriptions in **Supabase**  
✅ REST API for frontend integration  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** Supabase (PostgreSQL)  
- **API Used:** [AssemblyAI Speech-to-Text API](https://www.assemblyai.com/)  

---

## 📂 Folder Structure

```
speech-to-text-backend/
│── .env                  # Environment variables
│── server.js             # Main server file
│── package.json          # Project dependencies
│── package-lock.json     # Lock file for dependencies
│── README.md             # Project documentation
│── node_modules/         # Installed dependencies
```

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/speech-to-text-backend.git
cd speech-to-text-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
ASSEMBLYAI_API_KEY=your_assemblyai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4️⃣ Start the Server
```sh
npm start
```
The backend will run at **http://localhost:5000/** 🚀

---

## 📜 API Endpoints

### 🔹 Upload Audio File
```http
POST /api/upload
```
- **Request Body:** FormData (audio file)
- **Response:** `{ message: "File uploaded successfully", fileUrl: "..." }`

### 🔹 Convert Speech to Text
```http
POST /api/transcribe
```
- **Request Body:** `{ fileUrl: "..." }`
- **Response:** `{ transcription: "Hello, this is a test." }`

### 🔹 Fetch Transcriptions
```http
GET /api/transcriptions
```
- **Response:** `{ transcriptions: [...] }`

---

## 🎯 To-Do List

- [ ] Implement authentication with Supabase  
- [ ] Add support for multiple languages  
- [ ] Improve error handling  

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).  

---

⭐ **If you found this project useful, consider giving it a star!** ⭐


