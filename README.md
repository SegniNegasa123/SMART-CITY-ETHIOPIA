<div align="center">

# 🏙️ Addis Ababa Smart City System (AASCS)
### *የአዲስ አበባ ስማርት ሲቲ ዲጂታል መድረክ*

**"The Digital Heart of Africa's Capital — Building Tomorrow's Addis Today"**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-aascs.segnin.org-00C7B1?style=for-the-badge&logoColor=white)](https://aascs.segnin.org)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0_Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM_7.8-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js_v5-purple?style=for-the-badge&logoColor=white)](https://authjs.dev/)
[![License](https://img.shields.io/badge/License-MIT-F5A623?style=for-the-badge&logoColor=white)](LICENSE)

<br/>

[🌟 Key Highlights](#-key-highlights) •
[🏛️ Executive Summary](#-executive-summary) •
[📐 System Architecture](#-system-architecture) •
[✨ Feature Modules](#-feature-modules) •
[🏙️ Sub-City Municipal Grid](#️-sub-city-municipal-grid) •
[🛠️ Tech Stack](#️-technology-stack) •
[⚡ Quick Start](#-quick-start-guide) •
[🔐 Security & Enterprise Compliance](#-security--enterprise-compliance) •
[🎨 Design System](#-afro-futurist-design-system) •
[📡 REST API v1](#-rest-api-v1-specification) •
[🗺️ Smart City 2030 Roadmap](#️-smart-city-2030-roadmap)

---

</div>

## 🌟 Key Highlights

- 🌍 **Unified Citizen E-Services**: 24+ municipal services digitized across 5 critical urban sectors with end-to-end status tracking.
- ⚡ **Real-Time City Telemetry**: Live dashboard for Air Quality Index (AQI), municipal bus fleet telemetry, traffic density, and municipal workload.
- 🗺️ **Interactive Sub-City Geospatial Map**: High-performance SVG & Mapbox integration covering all 11 sub-cities of Addis Ababa.
- 🇪🇹 **Bilingual & Culturally Anchored**: Full dual-language engine in **English** and **Amharic (አማርኛ)** with bespoke Ethiopic typography (`Noto Serif Ethiopic`).
- 🎨 **Afro-Futurist Institutional Aesthetics**: Tailored dark-mode UI blending deep navy substrates with electric teal (`#00C7B1`), Ethiopian gold (`#F5A623`), and emerald green (`#2ECC71`).
- 🛡️ **Enterprise Security & National ID**: Multi-factor authentication supporting Ethiopian National ID (Fayda / EID), OAuth 2.0 (Google/Microsoft), and SMS OTP.
- 📊 **Government Command Center**: Granular Role-Based Access Control (RBAC) with live KPIs, officer dispatching, and tamper-proof audit trails.

---

## 🏛️ Executive Summary

The **Addis Ababa Smart City System (AASCS)** is the flagship next-generation digital governance platform designed for the **City Government of Addis Ababa**. Serving a population of over **5.6+ million citizens**, government bureaus, international institutions (African Union, UNECA, World Bank, UN-Habitat), and international investors, AASCS streamlines civic operations into a resilient, transparent, and cloud-native ecosystem.

AASCS bridges the gap between citizens and municipal bureaucracy by replacing fragmented paperwork with transparent digital workflows, real-time civic issue reporting, automated service tracking (`AASCS-YYYY-CODE-XXXXXX`), and data-driven administrative decision-making.

---

## 📐 System Architecture

### 🏗️ High-Level System Topology

```mermaid
flowchart TB
    subgraph ClientLayer["🖥️ Client Presentation Layer"]
        PublicWeb["🌐 Public Portal & Transparency Hub"]
        CitizenPortal["👤 Authenticated Citizen Portal"]
        AdminDashboard["🛡️ City Admin & Official Command Center"]
        MobilePWA["📱 Responsive Mobile & PWA Clients"]
    end

    subgraph EdgeLayer["⚡ Edge & Routing Layer (Next.js 14)"]
        NextRouter["Next.js App Router (SSR / SSG / ISR)"]
        SecurityMW["Security Headers & CSRF Protection"]
        AuthGuard["NextAuth.js v5 Auth Guard & RBAC Engine"]
        ApiGateway["RESTful API Gateway (/api/v1/*)"]
    end

    subgraph ServiceLayer["⚙️ Core Application & Domain Services"]
        ServiceEngine["E-Services Workflow Engine"]
        CitizenService["Citizen Profile & EID Verification"]
        TelemetryService["Live City Telemetry (AQI / Fleet / Traffic)"]
        GeoService["Sub-City GIS & Geo-Tagging Service"]
        NotificationEngine["Alerts, Email (Resend) & SMS (Twilio)"]
        AuditEngine["Tamper-Proof Audit Logging"]
    end

    subgraph DataLayer["💾 Persistence & Infrastructure"]
        PostgresDB[(PostgreSQL Database)]
        PrismaORM["Prisma ORM v7.8 Client"]
        RedisCache[("Redis Cache / Session Store")]
        S3Storage[("AWS S3 Document Vault")]
    end

    ClientLayer --> NextRouter
    NextRouter --> SecurityMW
    SecurityMW --> AuthGuard
    AuthGuard --> ApiGateway
    ApiGateway --> ServiceLayer
    ServiceEngine --> PrismaORM
    CitizenService --> PrismaORM
    TelemetryService --> RedisCache
    GeoService --> PrismaORM
    AuditEngine --> PrismaORM
    NotificationEngine --> ServiceLayer
    PrismaORM --> PostgresDB
    ServiceEngine --> S3Storage
```

### 🔄 Citizen Application Lifecycle State Machine

```mermaid
stateDiagram-v2
    [*] --> DRAFT: Citizen Initiates Service Application
    DRAFT --> SUBMITTED: Uploads Required Documents & Pays Fee
    SUBMITTED --> UNDER_REVIEW: Automated Verification & Department Dispatch
    UNDER_REVIEW --> PENDING_INFO: Additional Documents Requested
    PENDING_INFO --> UNDER_REVIEW: Citizen Re-submits Information
    UNDER_REVIEW --> IN_INSPECTION: Field / Physical Inspection (If Required)
    IN_INSPECTION --> UNDER_REVIEW: Inspection Report Uploaded
    UNDER_REVIEW --> APPROVED: Municipal Officer Final Approval
    UNDER_REVIEW --> REJECTED: Application Rejected with Reason
    APPROVED --> ISSUED: Digital Certificate / Permit Issued (QR Verified)
    ISSUED --> [*]
    REJECTED --> [*]
```

---

## ✨ Feature Modules

### 🌐 1. Public Portal & Open City Intelligence
| Feature | Technical Capability | Impact |
|:---|:---|:---|
| **Live City Dashboard** | Real-time sensor polling for AQI, fleet dispatch rates, traffic density, and municipal resolution speeds | Transparent, real-time public telemetry |
| **Interactive City Map** | Vector-rendered 11 sub-city boundaries with spatial filter toggles (Hospitals, Fire Stations, Police, Sub-City Hubs) | Intuitive civic infrastructure exploration |
| **Smart Projects 2030** | Milestone tracking, capital budget disclosures, and real-time completion percentages for mega projects | Fosters civic trust and international investor engagement |
| **Transparency & Open Data** | Downloadable municipal datasets, annual budgets, open procurement tenders, and FOI submission forms | High municipal integrity & anti-corruption compliance |
| **News & Official Press** | Bilingual CMS articles with category filtering, press statements, and speech transcripts | Official communication hub for the City Administration |

### 👤 2. Citizen Experience Portal
- **Unified Citizen Dashboard**: Comprehensive hub displaying active applications, scheduled appointments, and pending payments.
- **Universal Application Tracker**: Search and inspect applications using standard reference format: `AASCS-YYYY-CODE-XXXXXX`.
- **Geo-Tagged Incident & Grievance Reporting**: Submit reports (water leaks, road damage, electrical hazards, sanitation) with GPS coordinates and photo evidence.
- **Digital Document Vault**: Securely store and reuse authenticated birth certificates, Kebele IDs, tax clearances, and property deeds.

### 🛡️ 3. Government & Administrative Command Center
- **Granular RBAC Architecture**:
  - `SUPER_ADMIN`: System-wide configuration, tenant settings, maintenance mode, security audits.
  - `ADMIN`: Sub-city level administration, user management, metric overrides.
  - `OFFICIAL`: Review, inspect, approve, or reject assigned municipal applications.
  - `AUDITOR`: Read-only access to all municipal operations, audit trails, and financial transactions.
  - `VIEWER`: Read-only reporting access for municipal research and analytics.
- **Workflow Automation**: Automated routing of applications to respective sub-city offices based on citizen residency.
- **Immutable Audit Logging**: Every administrative action (approval, rejection, fee adjustment, status change) is permanently logged with timestamps and actor metadata.

---

## 🏙️ Sub-City Municipal Grid

AASCS provides integrated administrative coverage across all **11 Sub-Cities (ክፍለ ከተሞች)** of Addis Ababa:

| Sub-City (ክፍለ ከተማ) | Geographic Code | Key Facilities & Focus | Municipal Hub Status |
|:---|:---:|:---|:---:|
| **Bole (ቦሌ)** | `AA-BO` | Diplomatic Zone, Bole Int. Airport, Commercial Hubs | 🟢 Operational |
| **Kirkos (ቂርቆስ)** | `AA-KI` | African Union HQ, UNECA, Financial District, Meskel Sq | 🟢 Operational |
| **Arada (አራዳ)** | `AA-AR` | City Hall, Cultural Centers, National Museum, Piassa | 🟢 Operational |
| **Addis Ketema (አዲስ ከተማ)** | `AA-AK` | Merkato Commercial Center, Logistics & Transit Hubs | 🟢 Operational |
| **Yeka (የካ)** | `AA-YE` | Residential Expansions, Entoto Park, Eco-Tourism | 🟢 Operational |
| **Nifas Silk-Lafto (ንፋስ ስልክ ላፍቶ)** | `AA-NL` | Industrial Zones, Manufacturing, Southern Corridors | 🟢 Operational |
| **Kolfe Keranio (ኮልፌ ቀራኒዮ)** | `AA-KK` | Western Commercial Corridors, SME Incubators | 🟢 Operational |
| **Gullele (ጉለሌ)** | `AA-GU` | Addis Ababa University, Botanical Gardens, Entoto Ridge | 🟢 Operational |
| **Lideta (ልደታ)** | `AA-LI` | Federal High Courts, Urban Renewal Housing, Commerce | 🟢 Operational |
| **Akaky Kaliti (አቃቂ ቃሊቲ)** | `AA-AKK` | Dry Port, Rail Freight Terminal, Industrial Parks | 🟢 Operational |
| **Lemi Kura (ለሚ ኩራ)** | `AA-LK` | New Administrative District, High-Tech Parks, Modern Estates | 🟢 Operational |

---

## 💼 24+ Municipal E-Services Portfolio

```
AASCS E-Services Hub
├── 🏛️ Civil Registration & Vital Statistics
│   ├── Birth Certificate Issuance & Authentication
│   ├── Kebele Resident Identification & Renewal
│   ├── Marriage & Civil Status Certificates
│   └── Death Registration & Succession Certification
├── 🏗️ Land, Urban Planning & Housing
│   ├── Building Permit Application & Plan Review
│   ├── Land Title Registration & Deed Transfer
│   ├── Condominium Housing Lottery & Verification
│   └── Commercial Property Zoning Clearance
├── 💰 Revenue, Commerce & Investment
│   ├── Business License Registration & Renewal
│   ├── Municipal Property Tax Assessment & Payment
│   ├── Commercial Advertising & Signage Permits
│   └── Local Investment Incentive Applications
├── 🚊 Urban Mobility & Transportation
│   ├── Public Transport Anbessa / Sheger Card Top-up
│   ├── Commercial Vehicle Operating Permits
│   ├── Parking Zone Subscription Management
│   └── Traffic Violation Fine Payment Gateway
└── 🌿 Utilities, Sanitation & Environment
    ├── Water & Sewerage Connection Requests (AAWSA)
    ├── Waste Management & Commercial Disposal Permits
    ├── Green Space Adoption & Tree Planting Certification
    └── Environmental Impact Assessment (EIA) Filings
```

---

## 🛠️ Technology Stack

```
┌────────────────────────────────────────────────────────────────────────┐
│                          FULL STACK ECOSYSTEM                          │
└────────────────────────────────────────────────────────────────────────┘
  CORE FRAMEWORK      ▶  Next.js 14.2 (App Router, Server Actions, SSR/SSG)
  PRIMARY LANGUAGE    ▶  TypeScript 5.0+ (Strict Type-Safety)
  STYLING & DESIGN    ▶  Tailwind CSS 3.4 + Custom CSS Design Tokens
  ANIMATIONS & UI     ▶  Framer Motion, Radix UI Primitives, Lucide Icons
  DATA VISUALIZATION  ▶  Recharts 3.8 (Dynamic Telemetry & KPI Charts)
  ORM & DATABASE      ▶  Prisma ORM 7.8 + PostgreSQL 16
  AUTHENTICATION      ▶  NextAuth.js v5 (OAuth 2.0, National ID, Credentials)
  VALIDATION & FORMS  ▶  Zod 4.4 + React Hook Form + Hookform Resolvers
  STATE MANAGEMENT    ▶  Zustand 5.0
  CACHE & SESSIONS    ▶  Redis / Upstash
  CLOUD STORAGE       ▶  AWS S3 / Cloudflare R2 Document Vault
  COMMUNICATIONS      ▶  Resend (Email) + Twilio (SMS Notifications)
  DEPLOYMENT & EDGE   ▶  Vercel Edge Network + Cloudflare CDN / WAF
```

---

## ⚡ Quick Start Guide

### 📋 Prerequisites

Make sure you have the following installed on your development machine:
- **Node.js**: `v18.18.0` or later (LTS recommended)
- **Package Manager**: `npm` (v10+), `pnpm` (v8+), or `yarn` (v1.22+)
- **PostgreSQL**: `v15+` instance (local or hosted e.g. Neon, Supabase, AWS RDS)
- **Git**: `v2.40+`

### 📥 1. Clone the Repository

```bash
git clone https://github.com/SegniNegasa123/SMART-CITY-ETHIOPIA.git
cd SMART-CITY-ETHIOPIA
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ⚙️ 3. Configure Environment Variables

Create your local `.env.local` file from the provided `.env.example`:

```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:

```env
# Database Connection (PostgreSQL)
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/aascs_db?schema=public"
REDIS_URL="redis://localhost:6379"

# NextAuth v5 Security
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-32-byte-secret-using-openssl-rand-hex-32"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
MICROSOFT_CLIENT_ID="your-microsoft-client-id"
MICROSOFT_CLIENT_SECRET="your-microsoft-client-secret"

# AWS S3 Storage (Secure Document Vault)
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_REGION="af-south-1"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_BUCKET_NAME="aascs-secure-documents"

# Mapbox Geospatial SDK
NEXT_PUBLIC_MAPBOX_TOKEN="pk.your-mapbox-token-here"

# Notifications (Email & SMS)
RESEND_API_KEY="re_your-resend-api-key"
TWILIO_ACCOUNT_SID="AC_your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"
TWILIO_PHONE_NUMBER="+251900000000"

# Application Metadata
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="Addis Ababa Smart City System"
```

### 🗄️ 4. Initialize Database & Seed

```bash
# Generate Prisma Client bindings
npx prisma generate

# Apply migrations to PostgreSQL
npx prisma migrate dev --name init

# Populate database with realistic Addis Ababa municipal seed data
npm run db:seed
```

### 🚀 5. Run the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🎨 Afro-Futurist Design System

AASCS utilizes a custom **Afro-Futurist Institutional** design token architecture engineered to bridge modern institutional trust with vibrant Ethiopian cultural heritage:

```
┌──────────────────┬───────────┬────────────────────────────────────────┐
│ Token Identifier │ Hex Code  │ Semantic Usage                         │
├──────────────────┼───────────┼────────────────────────────────────────┤
│ --bg-primary     │ #050C15   │ Base canvas, ultra-deep navy space      │
│ --bg-secondary   │ #0A1628   │ Card substrates, surface elevation 1   │
│ --bg-surface     │ #0F1E35   │ Modals, popovers, dropdown containers   │
│ --accent-teal    │ #00C7B1   │ Primary brand, interactive focus, glow │
│ --accent-gold    │ #F5A623   │ Ethiopian gold, featured milestones     │
│ --accent-green   │ #2ECC71   │ Ethiopian emerald, verified statuses   │
│ --text-primary   │ #F0F4FF   │ High-contrast primary headings & body  │
│ --text-secondary │ #8A9BB5   │ Muted metadata, captions, timestamps   │
│ --border-color   │ #1A2D4A   │ Glassmorphic card & table separators   │
└──────────────────┴───────────┴────────────────────────────────────────┘
```

### 🔤 Typography Specification
- **Display Font**: `Unbounded` / `Outfit` — Modern geometric sans-serif for numbers, KPI counters, and heroic headlines.
- **Body Font**: `DM Sans` / `Inter` — High-legibility sans-serif optimized for multi-step municipal forms and dense tables.
- **Ethiopic Font**: `Noto Serif Ethiopic` — Fully hinted typographic engine for crystal-clear Amharic script rendering.

---

## 📡 REST API v1 Specification

All API endpoints follow standard RESTful conventions and return standardized JSON payloads with strict error envelopes:

```json
{
  "success": true,
  "timestamp": "2026-08-15T14:38:00Z",
  "data": { ... },
  "meta": { "page": 1, "total": 120 }
}
```

| Method | Route | Auth Required | Description |
|:---:|:---|:---:|:---|
| `GET` | `/api/v1/dashboard` | Public | Live city-wide telemetry, AQI index, and municipal KPIs (cached 60s) |
| `GET` | `/api/v1/services` | Public | Catalog of all 24+ municipal services with category filters & fee schedules |
| `GET` | `/api/v1/services/:slug` | Public | Comprehensive service requirements, SLA duration, and required document schema |
| `POST` | `/api/v1/applications` | Citizen / Official | Submit a new municipal service application with encrypted payload |
| `GET` | `/api/v1/applications/track/:ref` | Public / Citizen | Query real-time status of application `AASCS-YYYY-CODE-XXXXXX` |
| `POST` | `/api/v1/complaints` | Citizen | Submit a geo-tagged municipal grievance with photo attachment |
| `GET` | `/api/v1/projects` | Public | Query Smart City 2030 flagship projects, milestone timelines & budgets |
| `GET` | `/api/v1/articles` | Public | Paginated press releases, municipal gazettes, and city announcements |
| `GET` | `/api/v1/transparency/tenders` | Public | Open municipal procurement tenders, bid closing dates, and documents |
| `GET` | `/api/v1/auth/me` | Authenticated | Fetch authenticated user session profile, verified EID, and permissions |
| `PATCH` | `/api/v1/admin/applications/:id` | Official / Admin | Update application state (`APPROVED`, `REJECTED`, `IN_INSPECTION`) |

---

## 🗄️ Database Domain Schema

The AASCS relational schema is defined declaratively using **Prisma ORM** across 13 highly normalized models:

```mermaid
erDiagram
    USER ||--o{ APPLICATION : submits
    USER ||--o{ COMPLAINT : reports
    USER ||--o{ APPOINTMENT : books
    USER ||--o{ NOTIFICATION : receives
    USER ||--o{ AUDIT_LOG : triggers

    SERVICE ||--o{ APPLICATION : categorizes
    APPLICATION ||--o{ DOCUMENT : contains
    APPLICATION ||--o{ APPLICATION_STATUS_HISTORY : tracks
    
    PROJECT ||--o{ PROJECT_MILESTONE : contains
    ARTICLE ||--o{ ARTICLE_TAG : tagged_with

    USER {
        string id PK
        string nationalId UK
        string email UK
        string phone
        string nameEn
        string nameAm
        enum role "SUPER_ADMIN | ADMIN | OFFICIAL | VIEWER | CITIZEN"
        string subCity
        datetime createdAt
    }

    SERVICE {
        string id PK
        string slug UK
        string titleEn
        string titleAm
        enum category
        decimal feeETB
        int processingDays
        boolean isActive
    }

    APPLICATION {
        string id PK
        string referenceNumber UK
        string userId FK
        string serviceId FK
        enum status "DRAFT | SUBMITTED | UNDER_REVIEW | APPROVED | REJECTED"
        string subCity
        datetime submittedAt
    }

    COMPLAINT {
        string id PK
        string userId FK
        string category
        float latitude
        float longitude
        string subCity
        enum priority "LOW | MEDIUM | HIGH | URGENT"
        enum status "OPEN | IN_PROGRESS | RESOLVED"
    }

    AUDIT_LOG {
        string id PK
        string actorId FK
        string action
        string entityType
        string entityId
        json diffPayload
        string ipAddress
        datetime timestamp
    }
```

---

## 🔐 Security & Enterprise Compliance

AASCS enforces zero-trust institutional security protocols designed to safeguard citizen privacy and critical municipal infrastructure:

1. **Security Headers (Strict CSP)**:
   Configured in `next.config.ts` with strict frame-busting (`X-Frame-Options: DENY`), MIME-type sniffing prevention (`nosniff`), Referrer Policy (`strict-origin-when-cross-origin`), and XSS filters.
2. **National ID Verification (Fayda Integration)**:
   Cryptographically hashes and validates citizen identity credentials to prevent duplicate account creation and identity theft.
3. **Role-Based Access Control (RBAC)**:
   Enforced at middleware edge runtime and API route handlers to ensure administrative endpoints cannot be accessed by unauthorized actors.
4. **Data Protection & Encryption**:
   - All passwords hashed using `bcrypt` (12 salt rounds).
   - Sensitive uploaded citizen documents are encrypted at rest on AWS S3 with signed ephemeral URLs.
   - Database connections secured via SSL/TLS in transit.
5. **Tamper-Proof Auditing**:
   Every state modification generates an immutable `AuditLog` entry tracking actor ID, action type, IP address, and payload delta.

---

## 🗺️ Smart City 2030 Roadmap

- [x] **Phase 1: Core Portal & Citizen Services (2024–2025)**
  - Public portal launch & Afro-Futurist design identity
  - 24+ core municipal e-services digitization
  - Citizen complaint submission & tracking system
  - 11 Sub-city administrative dashboard & triage system
- [ ] **Phase 2: IoT Telemetry & Mobility Integration (Q3 2025–Q2 2026)**
  - Integration with Addis Ababa Light Rail Transit (AALRT) live scheduling
  - Real-time IoT sensor network deployment for city-wide air quality & flood monitoring
  - Intelligent traffic signal optimization system (ITS)
- [ ] **Phase 3: Digital Currency & Smart Utilities (2026–2027)**
  - Direct integration with National Digital ID (Fayda) biometric login
  - Telebirr & National Payment Gateway (EthSwitch) instant settlements
  - Automated smart water & electric meter reading telemetry
- [ ] **Phase 4: AI Municipal Assistant (2027–2030)**
  - Multilingual AI voice & text agent (Amharic, Afaan Oromoo, Tigrinya, English)
  - Predictive urban infrastructure maintenance and dispatching

---

## 🤝 Contributing Guidelines

We welcome contributions from software engineers, civic technologists, and designers committed to building open-source public digital infrastructure.

1. **Fork the Project**
2. **Create your Feature Branch**:
   ```bash
   git checkout -b feature/InnovativeFeature
   ```
3. **Commit your Changes**:
   ```bash
   git commit -m 'feat: Add innovative sub-city GIS layer'
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/InnovativeFeature
   ```
5. **Open a Pull Request** with a detailed summary and screenshots/screen recordings.

---

## 📄 License & Attribution

Distributed under the **MIT License**. See `LICENSE` for more information.

```
Copyright (c) 2025-2026 Segni Seyoum Negasa (AASCS Team)
Addis Ababa City Administration Digital Transformation Initiative
```

<br/>

<div align="center">

**Developed with ❤️ for Addis Ababa — Africa's Diplomatic Capital**

[⬆ Back to Top](#-addis-ababa-smart-city-system-aascs)

</div>
