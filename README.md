# 🌐 MiniLink – Your Trusted URL Shortener

MiniLink is a modern, full-stack URL shortening service built with **Next.js 15**, **MongoDB**, and **Tailwind CSS**. It allows users to shorten long URLs into clean, easy-to-share links — with a blazing fast redirect experience and elegant UI.

![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Modern-blue?logo=tailwindcss)

---

## 🚀 Features

- ✂️ Shorten long URLs instantly
- 🔗 Clean and unique short links
- ✏️ Custom short URLs
- 🚀 Lightning-fast redirects
- 🌈 Beautiful, responsive UI with gradient background
- 🧭 About and Contact Us pages
- 💽 MongoDB Atlas for database storage

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS
- **Backend:** Next.js API Routes, MongoDB (via `mongodb` package)
- **Styling:** Tailwind CSS + Google Fonts (Geist)
- **Icons:** react-icons
- **Deployment:** Not live yet. You can run it locally using the instructions below.

---

## 📁 Project Structure

```
MINILINK/
├── app/
│   ├── [shortURL]/              # Redirect page (dynamic route)
│   │   └── page.js
│   ├── about/                   # About page
│   │   └── page.js
│   ├── api/
│   │   └── shorten/             # API route to handle URL creation
│   │       └── route.js
│   ├── contact/                 # Contact page
│   │   └── page.js
│   ├── shorten/                 # Form for creating short URLs
│   │   └── page.js
│   ├── layout.js                # Main layout
│   ├── globals.css              # Global styles
│   ├── not-found.js             # 404 fallback
│   └── page.js                  # Home page
│
├── components/
│   └── Navbar.js                # Navigation bar
│
├── lib/
│   └── mongodb.js               # MongoDB client connection
│
├── public/
│   └── sample.jpg              # Sample image / public assets
│
├── .env.local                  # Environment variables
├── .gitignore
├── README.md
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
└── jsconfig.json
```

---

## 🧪 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Naveed-Bhatti1/Minilink-Your-Trusted-URL-Shortener
cd minilink
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run the app

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Future Improvements

- 🔐 User authentication
- 📊 Click analytics
- 📷 QR code generation
- 📨 Functional contact form with email integration

---

## 🤝 Contact

Made with 💻 by **Naveed Bhatti**

- 📧 Email: [codeholder1@gmail.com](mailto:codeholder1@gmail.com)
- 🐙 GitHub: [github.com/Naveed-Bhatti1](https://github.com/Naveed-Bhatti1)

---

## 📝 License

This project is open-source and free to use.
