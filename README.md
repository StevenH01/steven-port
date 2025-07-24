# Steven Ho – Developer Portfolio 🚀

Welcome to my personal developer portfolio, built using **Next.js 14 (App Router)**, styled with **Tailwind CSS**, animated with **Framer Motion**, and powered by the **Spotify Web API**.

Live site: [https://your-vercel-deployment-url.com](https://your-vercel-deployment-url.com)

---

## 🧰 Tech Stack

- ⚡ [Next.js 14 (App Router)](https://nextjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🎵 [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
- 🎞 [Framer Motion](https://www.framer.com/motion/)
- 📦 Hosted on [Vercel](https://vercel.com)

---

## 📂 Folder Structure

```bash
.
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind + global styles
│   └── api/
│       └── spotify/
│           └── route.ts     # Server-side Spotify API handler
├── components/
│   ├── AnimatedSection.tsx  # Scroll reveal animation wrapper
│   └── TopSpotifyGrid.tsx   # Spotify tracks/artists/genres display
├── public/
│   └── placeholder.png
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

⚙️ Environment Variables
```bash
Create a .env.local file at the root and add:

env
Copy
Edit
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
RESEND_API_KEY=your_resend_api_key
```
Note: Do not commit this file.

🚀 Getting Started
1. Clone the Repository
```bash
git clone https://github.com/your-username/steven-portfolio.git
cd steven-portfolio
```

2. Install Dependencies
```bash

npm install
```
3. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:3000

🪄 Features
Spotify Integration – View your top tracks, artists, and favorite genres dynamically.

Scroll-based Animations – Components animate in as they scroll into view.

Dark/Light friendly theme variables – Easily extendable with CSS variables.

Responsive Design – Looks great on desktop and mobile.

🧪 Build & Deploy
Build
```bash
npm run build
```
Preview
```bash
npm run start
```
Deploy
Deploy directly using Vercel CLI:

vercel
🔐 Security & Tips
Do not expose your Spotify credentials.

Rotate your refresh token occasionally.

Use environment variables in Vercel Dashboard for deployment.

🙋‍♂️ Author
Steven Ho

Connect with me on LinkedIn or check out more at your-domain.com

📜 License
This project is licensed under the MIT License.

---