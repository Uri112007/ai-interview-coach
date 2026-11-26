# 🤖 AI Interview Coach

An AI-powered interview preparation platform that helps users practice technical interview questions and receive intelligent feedback on their answers.

## 📌 Project Overview

AI Interview Coach is a full-stack web application designed to help job seekers improve their interview skills using Artificial Intelligence.

Users can practice interview questions, submit their answers, and receive AI-generated evaluations, scores, strengths, areas for improvement, and suggested answers.

## ✨ Features

- **AI Answer Evaluation:** Evaluate interview answers using Google's Gemini AI.
- **Performance Scoring:** Receive an overall score out of 100.
- **Detailed Feedback:** Identify strengths and areas for improvement.
- **Score Breakdown:** Evaluate technical accuracy, relevance, clarity, and completeness.
- **STAR Method Analysis:** Analyze behavioral interview answers when applicable.
- **Improved Answers:** Receive suggestions for better interview responses.
- **Interview Question Generation:** Generate interview questions through the API.

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Python
- FastAPI
- Uvicorn
- Google Gemini API

## 📂 Project Structure

```text
ai-interview-coach/
│
├── backend/
│   ├── app/
│   │   └── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── Evaluation.jsx
│   │   ├── Evaluation.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ai-interview-coach
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows:

```powershell
.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Configure your environment variables:

Create a `.env` file using `.env.example` as a template and add your Gemini API key and other required configuration.

Start the backend:

```bash
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend URL:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs

### 3. Frontend Setup

Open a second terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Frontend URL:

http://localhost:5173

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/questions/generate` | Generate interview questions |
| POST | `/api/evaluation/evaluate` | Evaluate interview answers |

## 🧪 Testing

The API can be tested using FastAPI Swagger documentation:

http://127.0.0.1:8000/docs

Submit an interview question, answer, and job role to receive an AI-generated evaluation.

## 🔐 Environment Variables

Store API keys and sensitive configuration in your local `.env` file.

Never commit your actual `.env` file or expose your Gemini API key publicly.

## 🚀 Future Improvements

- AI-powered mock interview sessions.
- Voice-based interview practice.
- Interview performance dashboard.
- User authentication and profile management.
- Interview history and progress tracking.
- Support for multiple job roles and difficulty levels.

## 👨‍💻 Author

Uri

GitHub: [Uri112007](https://github.com/Uri112007)

---

⭐ If you find this project interesting, consider giving it a star!!!
