<div align="center">

<img src="https://img.shields.io/badge/AASCS-Smart%20City-00C7B1?style=for-the-badge&logoColor=white" alt="AASCS Badge"/>

# 🏙️ Addis Ababa Smart City System (AASCS)

### *Building Tomorrow's Addis — Today*
**"The Digital Heart of Africa's Capital"**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

### 🌍 **[🌍 View Live Demo →](https://aascs.segnin.org)**

---

</div>

## 📋 Overview

The **Addis Ababa Smart City System (AASCS)** is the official digital platform of the Addis Ababa City Administration — a production-grade, full-stack web application serving citizens, government officials, investors, and international organizations including the African Union, World Bank, and UN-Habitat.

Built with an **Afro-Futurist** design identity, deep navy palette, Ethiopian cultural motifs, and full **Amharic language support** — this platform represents Africa's capital city's commitment to digital transformation.

---

## ✨ Features

### 🌐 Public Portal
| Feature | Description |
|---------|-------------|
| **Live City Dashboard** | Real-time AQI, bus fleet, traffic, and complaint stats |
| **Interactive City Map** | SVG map of all 11 sub-cities with layer toggles |
| **E-Services Hub** | 24+ online city services with multi-step application forms |
| **Smart City Projects** | 10 flagship projects with progress tracking and milestones |
| **News & Press** | Full article CMS with categories and tags |
| **Transparency Portal** | Open data, budgets, tenders, FOI requests |
| **About & FAQ** | Smart City 2030 roadmap, Mayor's message, 12-question FAQ |

### 👤 Citizen Portal
| Feature | Description |
|---------|-------------|
| **Citizen Dashboard** | Personalized overview of applications and notifications |
| **Application Tracker** | Real-time status with reference numbers (AASCS-YYYY-CODE-XXXXXX) |
| **Complaint System** | Submit and track city complaints with location pinning |
| **Profile Management** | National ID, phone, sub-city, language preferences |

### 🔐 Authentication
- Ethiopian National ID (EID-XXXXXXXX format)
- Email/Password with bcrypt hashing
- Google + Microsoft OAuth
- SMS OTP via Ethiopian phone numbers

### 🛠️ Admin Panel
- **Role-based access**: SUPER_ADMIN, ADMIN, OFFICIAL, VIEWER, AUDITOR
- **Application management**: Bulk approve/reject, officer assignment
- **Live KPI dashboard** with charts and activity feed
- **User management** with role assignment
- **Settings** including maintenance mode toggle
- **Audit logging** for all admin actions

---

## 🎨 Design System

**Aesthetic Direction**: *Afro-Futurist Institutional* — Ethiopian cultural identity meets 21st-century smart city technology.

```css
--color-bg-primary:     #050C15  /* Deep navy black */
--color-accent-primary: #00C7B1  /* Electric teal   */
--color-accent-gold:    #F5A623  /* Ethiopian gold  */
--color-accent-green:   #2ECC71  /* Ethiopian green */
```

**Fonts**: Unbounded (display) · DM Sans (body) · Noto Serif Ethiopic (Amharic)

**Components**: Glassmorphism cards · Gradient borders · Animated counters · Live stat widgets · Multi-step forms · Responsive data tables

---

## 🗂️ Project Structure

```
aascs/
├── app/
│   ├── (public)/          # Public pages (home, services, projects, news...)
│   ├── (auth)/            # Login, register, forgot-password
│   ├── portal/            # Citizen portal (dashboard, applications, complaints)
│   ├── admin/             # Admin panel with sidebar layout
│   └── api/v1/            # REST API routes
├── components/
│   ├── shared/            # Navbar, Footer, Hero, Pillars, LiveDashboard...
│   ├── ui/                # Base UI primitives
│   └── forms/             # Form components
├── prisma/
│   ├── schema.prisma      # Full database schema (13 models)
│   └── seed.ts            # Realistic seed data
└── public/                # Static assets
```

---

## 🗄️ Database Schema

| Model | Description |
|-------|-------------|
| `User` | Citizens, officials, admins — with Amharic name support |
| `Service` | 24 city services with categories, fees, processing time |
| `Application` | Applications with reference numbers (AASCS-YYYY-CODE-XXXXXX) |
| `Document` | Uploaded files for applications |
| `ApplicationStatusHistory` | Full audit trail of status changes |
| `Complaint` | Geo-tagged citizen complaints with priority/status |
| `Project` | Smart city projects with milestones and progress |
| `Article` | Bilingual news articles with CMS metadata |
| `Appointment` | Scheduled meetings at city departments |
| `Notification` | Real-time citizen notifications |
| `Announcement` | Sitewide alert banners |
| `AuditLog` | Admin action audit trail |

---

## 🚀 API Routes

```
GET  /api/v1/dashboard          # Live city KPIs (cached 60s)
GET  /api/v1/services           # List + filter city services
GET  /api/v1/projects           # Smart city projects
GET  /api/v1/articles           # News articles (paginated)
POST /api/v1/applications       # Submit application
POST /api/v1/complaints         # Submit complaint
GET  /api/v1/auth/me            # Current user session
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, SSR + SSG) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS + custom CSS variables |
| **Animations** | Framer Motion, CSS keyframes |
| **ORM** | Prisma |
| **Database** | PostgreSQL |
| **Auth** | NextAuth.js v5 |
| **Icons** | Lucide React |
| **Hosting** | Vercel |

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/aascs-smart-city.git
cd aascs-smart-city

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your DATABASE_URL, NEXTAUTH_SECRET, etc.

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed with realistic data
npx ts-node prisma/seed.ts

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, pillars, live stats, projects, news |
| `/dashboard` | Live city dashboard with real-time data |
| `/services` | 24+ online city services hub |
| `/services/[slug]` | Individual service with multi-step application |
| `/projects` | Smart city projects with filters |
| `/projects/[slug]` | Project detail with timeline and budget |
| `/news` | City news and announcements |
| `/news/[slug]` | Full article page |
| `/map` | Interactive Addis Ababa city map |
| `/about` | Smart City 2030 vision, FAQ, partnerships |
| `/contact` | Contact form + department directory |
| `/transparency` | Open data, tenders, FOI requests |
| `/auth/login` | Citizen sign-in |
| `/auth/register` | New citizen registration |
| `/portal` | Citizen dashboard (authenticated) |
| `/admin/dashboard` | Admin KPI overview (admin only) |

---

## 🌐 Internationalization

Full **English** and **Amharic (አማርኛ)** support:
- Navigation labels, page titles, form labels
- Amharic visible on every major page
- Language toggle persisted per session
- Noto Serif Ethiopic font loaded for all Amharic text

---

## 🏛️ About

This platform serves:
- **5.6M+ Addis Ababa residents** accessing city services
- **Government officials** across all 11 sub-cities
- **International organizations**: African Union, World Bank, UNDP, UN-Habitat
- **Investors & development partners** monitoring project progress
- **Researchers & journalists** accessing open city data

---

<div align="center">

**© 2025 Addis Ababa City Administration · ሁሉም መብቶች የተጠበቁ ናቸው**

*Built with ❤️ for Africa's Diplomatic Capital*

</div>
