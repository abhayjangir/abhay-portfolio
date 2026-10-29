# Abhay Jangir - Software Development Engineer Portfolio

A premium, recruiter-focused personal portfolio website engineered for **Abhay Jangir**, Software Development Engineer and Full-Stack Developer based in Gurugram, India.

Designed with the aesthetic and architectural precision of a high-end developer SaaS product. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

---

## 🚀 Live Demo & Positioning

- **Role Focus**: Software Development Engineer (SDE), Frontend Developer, Full-Stack Developer, Python Developer.
- **Core Stack**: React.js, TypeScript, Next.js, Python, Django, REST APIs, PostgreSQL.
- **Key Metrics Highlighted**:
  - **15+ Full-Stack Features Delivered** across React.js & Django/Python.
  - **30+ REST API Endpoints** designed and implemented with Django REST Framework.
  - **40–50% Reduction** in manual Accounts processing effort via automation.
  - **~10% Reduction** in radiology task review time for medical imaging workflows.
  - **10+ Production Issues/Month** diagnosed and resolved in production.
  - **DPDP Act 2023 Implementation**: IT compliance and technical documentation across 4 business lines.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a precision 3D executive design system: **Deep Obsidian/Anthracite Base** (`#0E0F12` / `#2A2A2E`), **Brushed Metallic Silver** (`#C0C0C0`), and **Precision Crimson Red** (`#E10600` primary brand, active CTAs, and telemetry highlights) with tactile 3D perspective layers and specular rim lighting.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **SEO & Structured Data**: OpenGraph, Twitter Cards, Semantic HTML5, JSON-LD (`Person` and `WebSite` schemas), dynamic `sitemap.ts`, and `robots.ts`

---

## 📁 Project Architecture

```
d:/Abhay Portfolio/
├── app/
│   ├── favicon.svg             # Brand monogram favicon
│   ├── globals.css             # Tailwind base, dark palette, smooth scroll, reduced motion
│   ├── icon.svg                # Dynamic SVG favicon
│   ├── layout.tsx              # Root layout, fonts, SEO metadata, JSON-LD schema
│   ├── page.tsx                # Main single-page portfolio assembling all 10 sections
│   ├── robots.ts               # Web crawling directives
│   └── sitemap.ts              # Search engine XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky frosted navbar with scroll spy & monogram
│   │   ├── Footer.tsx          # Clean footer with copyright, quick links, closing quote
│   │   └── MobileMenu.tsx      # Accessible slide-over mobile drawer with ESC key & focus trap
│   ├── sections/
│   │   ├── Hero.tsx            # Two-column hero with live interactive code/API visual
│   │   ├── Metrics.tsx         # Verified resume metrics strip
│   │   ├── About.tsx           # Narrative, U4RAD context, DICOM/PACS, DPDP Act 2023, 4 principles
│   │   ├── Skills.tsx          # Categorized technical toolkit (highlighting target skills)
│   │   ├── Experience.tsx      # U4RAD career progression timeline (Trainee -> SDE)
│   │   ├── Projects.tsx        # Featured case studies with custom UI mockups
│   │   ├── EngineeringApproach.tsx # 4 engineering methodology pillars
│   │   ├── Education.tsx       # Chandigarh University B.E. Computer Science (7.45 GPA)
│   │   └── Contact.tsx         # Direct contact information & interactive mailto dispatcher
│   └── ui/
│       ├── Button.tsx          # Accessible polymorphic button & anchor component
│       ├── ContactForm.tsx     # Zod-validated contact form with direct mailto fallback
│       ├── ExperienceItem.tsx  # Editorial experience card with multi-role progression
│       ├── Monogram.tsx        # Geometric "AJ" brand monogram
│       ├── ProjectCard.tsx     # Custom SVG/CSS graphic thumbnail project card
│       ├── ProjectModal.tsx    # Accessible modal dialog for deep-dive case studies
│       ├── SectionHeading.tsx  # Consistent typography and eyebrow badge header
│       └── SkillGroup.tsx      # Grouped skill category card
├── data/
│   └── portfolio.ts            # Centralized typed configuration for all portfolio content
├── lib/
│   ├── utils.ts                # Tailwind clsx/twMerge utility
│   └── validation.ts           # Zod schema for contact form
└── public/
    ├── Abhay_Jangir_Resume.pdf # Downloadable resume PDF
    └── favicon.svg             # Monogram asset
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js `v18.x` or `v20.x` or `v22.x`
- npm (installed with Node)

### Installation
```bash
# Clone or navigate to the project directory
cd "d:/Abhay Portfolio"

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
```
This compiles the TypeScript code, validates types, optimizes CSS, generates static pages, and produces an optimized production build in `.next/`.

### Starting the Production Server
```bash
npm run start
```

---

## 📝 Configuration & Customization Checklist

All editable data is centralized in [`data/portfolio.ts`](./data/portfolio.ts).

### 1. Resume PDF
- Replace [`public/Abhay_Jangir_Resume.pdf`](./public/Abhay_Jangir_Resume.pdf) with your latest official PDF resume.
- Keep the filename as `Abhay_Jangir_Resume.pdf` or update `personal.resumeFilename` and `personal.resumeUrl` in [`data/portfolio.ts`](./data/portfolio.ts).

### 2. Social Links (GitHub & LinkedIn)
- Open [`data/portfolio.ts`](./data/portfolio.ts).
- Update the `url` for `socials.github` and `socials.linkedin`.
- Set `isConfigured: true` on each social link you wish to display. Per requirements, unconfigured links remain hidden so recruiters never click on dead placeholders.

### 3. Contact Form Backend (Optional)
- The contact form is currently configured with a zero-credential, highly reliable `mailto:` fallback.
- It validates the input fields (Name, Email, Subject, Message) using Zod, prepares an encoded inquiry, and opens the user's default email client addressed to `abhayjangir65@gmail.com`.
- If you wish to connect a serverless email service (such as Resend, SendGrid, or AWS SES), you can add an API route at `app/api/contact/route.ts` and dispatch from `ContactForm.tsx`.

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Abhay Jangir portfolio"
   git remote add origin https://github.com/<your-username>/abhay-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** and select your `abhay-portfolio` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**. Vercel will build and assign a production URL.
6. (Optional) Add your custom domain under **Project Settings > Domains**.

