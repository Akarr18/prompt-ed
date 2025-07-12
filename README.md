<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/logo.png" alt="Logo" width="300" height="300">
  </a>
  <p align="center">
    <a href="https://prompt-ed-rose.vercel.app/">Visit Site</a>
    ·
    <a href="https://github.com/Akarr18/prompt-ed/issues">Report Bug</a>
    ·
    <a href="https://github.com/Akarr18/prompt-ed/pulls">Request Feature</a>
  </p>
</div>

# PromptEd


PromptEd is a powerful AI-powered Learning Management System (LMS) SaaS app built using Next.js. It enables educators to create interactive and AI-enriched courses while providing learners with a seamless and intelligent platform for personalized learning.



---

## 🗂️ Table of Contents

1. [About The Project](#-about-the-project)  
2. [Key Features](#-key-features)  
3. [Tech Stack](#️-tech-stack)  
4. [Getting Started](#-getting-started)  
5. [Contributing](#-contributing)    
6. [Contact](#-contact)

---

## 🚀 About The Project

**PromptEd** is an AI-first LMS built to transform the way students and educators interact with content. Educators can generate content like notes, flashcards, and quizzes instantly using AI while learners enjoy a highly personalized and efficient learning journey.

---

## ✨ Key Features

- AI-based content generation: notes, flashcards, quizzes, Q&A
- Authentication via Clerk
- Stripe-powered payment system
- Background processing with Inngest
- Data management using Neon + Drizzle ORM
- Fully responsive UI using Tailwind CSS + Radix UI

---

## 🛠️ Tech Stack

### Frontend:
- Next.js
- React.js
- Tailwind CSS
- Radix UI
- Framer Motion
- Lucide React

### Backend & Services:
- Inngest
- Neon Database
- Drizzle ORM
- Stripe
- Google Generative AI

### Authentication:
- Clerk

### Additional Libraries:
- Axios
- clsx
- date-fns

### Tooling & Utilities:
- ESLint
- Drizzle Kit
- tailwind-merge
- tailwindcss-animate
- uuidv4

---

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js v16.0.0 or higher
- npm v7.0.0 or higher
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akarr18/prompt-ed.git
   cd prompt-ed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file and add:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   NEXT_PUBLIC_DRIZZLE_DATABASE_URL=your_neon_database_url
   NEXT_PUBLIC_DATABASE_CONNECTION_STRING=your_database_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_sign_in_url
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_sign_up_url
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PRICE_ID=your_stripe_price_id
   HOST_URL=your_host_url
   STRIPE_WEB_HOOK_KEY=your_stripe_webhook_key
   ```

4. **Set up the database**
   ```bash
   npm run db:generate   # Generate schema
   npm run db:push       # Push schema to Neon DB
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions are what make the open source community so great! Feel free to fork the repository and make your changes.

1. Fork the project  
2. Create your feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a Pull Request

---



## 📧 Contact

Akshat Arora - [GitHub](https://github.com/Akarr18)

Project Link: [https://github.com/Akarr18/prompt-ed](https://github.com/Akarr18/prompt-ed)
