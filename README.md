# 🗣️ Converso – Real-Time AI Transcription Chat App

Converso is a full-stack AI-powered web app that transcribes voice to text in real-time and displays it in a clean, chat-like UI. Ideal for meetings, interviews, or casual voice notes, Converso makes spoken communication searchable and shareable.

---

## 🚀 Features

- 🎙️ **Real-Time Voice Transcription** – Powered by [Vapi](https://vapi.ai)
- 🔐 **Secure Authentication** – Easy login/signup via [Clerk](https://clerk.dev)
- ☁️ **Cloud Sync** – Data stored and managed via [Supabase](https://supabase.io)
- 🧑‍💬 **Chat-Like Interface** – Distinct speaker blocks with timestamps
- 📱 **Responsive Design** – Built using Tailwind CSS for mobile-first experience
- 🧪 **TypeScript Support** – Reliable and type-safe development

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS  
- **Auth**: Clerk  
- **Backend/Database**: Supabase  
- **Voice API**: Vapi  
- **Deployment**: Vercel  

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/kreamtea/Converso.git
cd Converso

### 2.Install Dependencies
npm install

### 3. Set environment variables
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
VAPI_API_KEY=your_vapi_api_key

### 4. Run App Locally
npm run dev
