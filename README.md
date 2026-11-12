# ⚡ Abhinash Panigrahi — Modern Interactive Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailored For](https://img.shields.io/badge/.NET_Backend-Full_Stack-512BD4?style=flat-square&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

An immersive, high-performance portfolio engineered for **Abhinash Panigrahi** (.NET Backend & Full Stack Engineer | MCA Gold Medalist). Built with **React 19**, **Three.js / React Three Fiber**, and modern styling, this portfolio pairs an interactive 3D WebGL particle aesthetic with deep technical showcases and an enterprise-grade, resilient contact system.

---

## 🎯 Portfolio Highlights

- **3D WebGL Particle Bust Sculpture**: Interactive Three.js particle dot portrait with smooth cursor tracking, reactive physics, and tactile 360° orbit inspection.
- **Backend & Engineering Focus**: Highlighting core proficiencies in **C#**, **ASP.NET Core Web APIs**, **Entity Framework Core**, **SQL Server**, **PostgreSQL**, and distributed architecture patterns.
- **Cyber / Crimson Design Language**: High-contrast dark luxury aesthetic featuring backdrop blur glassmorphism, responsive clamp typography, and fluid Framer Motion animations.
- **Enterprise-Ready Contact Flow**: Zero-friction communication with categorized inquiries, 1-click clipboard actions, and automated failover message delivery.
- **Responsive & Performance Optimized**: Mobile-first architecture, asset compression, and clean modular component design.

---

## 📬 End-to-End Contact Flow & Architecture

The contact system is engineered to guarantee message delivery with zero lost inquiries, featuring automated client-side validation and dual-layer service routing.

### Architecture Flowchart

```
[ Recruiter / Visitor ]
         │
         ▼
[ Interactive Contact Form ]
  ├── 1. Live Validation (Name, Email, Inquiry Type, Message)
  ├── 2. Inquiry Category Tagging (Full-Time Role, Freelance, Architecture, General)
  └── 3. Payload Assembly (ISO Timestamp, Client Metadata)
         │
         ▼
[ Primary Dispatch: EmailJS API ]
  ├── Formats structured HTML email template
  ├── Routes via authenticated secure mail service
  └── On Success: Instant UI Feedback & Form Reset
         │
         ├──► [ Success ] ──► Delivered to Inbox (Direct 1-Click Reply Routing)
         │
         └──► [ Error / Network Timeout ]
                     │
                     ▼ (Automatic Failover)
       [ Fallback Dispatch: Web3Forms API ]
         ├── Transparent fallback execution
         └── On Success: Delivers message without visitor disruption
```

### 1. Interactive Inquiry Categories
Visitors can select their specific discussion purpose with a single click, pre-configuring subject headers and routing metadata:
- 🎯 **Full-Time .NET Backend Engineer Role**
- 💼 **Contract / Freelance Project**
- ⚡ **Technical Consulting & Architecture**
- 💬 **General Inquiry / Discussion**

### 2. Template Data Mapping

When a submission is triggered, form state is securely mapped into the template payload:

| Parameter Key | Purpose | Example / Format |
| :--- | :--- | :--- |
| `{{name}}` | Sender's full name | `"Alex Smith"` |
| `{{email}}` | Sender's work / personal email | `"alex.smith@company.com"` |
| `{{company}}` | Organization / Firm name | `"Tech Enterprise Corp"` |
| `{{inquiry_type}}` | Selected engagement category | `"Full-Time .NET Role"` |
| `{{subject}}` | Inquiry headline | `"Senior .NET Developer Role"` |
| `{{message}}` | Complete project or role description | `"We are interested in discussing an open role..."` |
| `{{time}}` | Client submission timestamp | `"Nov 12, 2026, 09:30 PM"` |

### 3. Dual-Layer Delivery Resilience
- **Primary Delivery (EmailJS)**: Sends templated, branded notification emails directly to your designated inbox with pre-configured `reply_to` headers.
- **Automatic Fallback (Web3Forms)**: If the primary service experiences rate-limiting, downtime, or client network issues, the request silently switches to Web3Forms API.
- **Direct Mail Fallback**: If all network requests fail, the UI surfaces a direct email link and 1-click copy button as a final safety net.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **3D & Graphics** | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + [React Type Animation](https://github.com/maxmarinich/react-type-animation) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Messaging Services** | [@emailjs/browser](https://www.emailjs.com/) + Web3Forms API |
| **Styling** | Modular CSS3, CSS Variables, Glassmorphism, Responsive Clamp |
| **Code Quality** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) |

---

## 📁 Project Structure

```text
portfolio-/
├── public/                 # Static public assets & 3D models
├── src/
│   ├── assets/             # Brand logos, icons, and textures
│   ├── components/         # Modular React components
│   │   ├── About/          # Background, education & distinction
│   │   ├── Contact/        # Resilient contact form & channel links
│   │   ├── Experience/     # Work experience timeline
│   │   ├── Hero/           # 3D interactive particle sculpture & CTA
│   │   ├── Navbar/         # Responsive navigation & quick links
│   │   ├── Projects/       # Architecture & project showcase
│   │   └── Skills/         # Categorized technical skill matrix
│   ├── styles/             # Global themes & CSS variables
│   ├── App.jsx             # Main application orchestrator
│   └── main.jsx            # React root entry point
├── .env.example            # Environment variables blueprint (no secrets)
├── index.html              # HTML shell & SEO meta configuration
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite build pipeline configuration
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** (or `yarn` / `pnpm`)

### 2. Clone the Repository
```bash
git clone https://github.com/AbhinashCodeX/portfolio-.git
cd portfolio-
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a local `.env` file from the provided `.env.example`:
```bash
cp .env.example .env
```

Open `.env` and configure your form service credentials:
```env
# EmailJS Service Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Web3Forms Fallback Configuration
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

> [!NOTE]
> All variable names start with `VITE_` to be accessible within Vite's client bundle. Never commit private secret keys or credentials to version control.

### 5. Launch the Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### 6. Build for Production
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory.

---

## 🔒 Security & Privacy Best Practices

- **Zero Secret Exposure**: The `.env` file is excluded from Git tracking via `.gitignore`.
- **Public Key Architecture**: Only public client keys are referenced in client bundles. Sensitive server-side keys are never used in frontend code.
- **Input Sanitization**: Form inputs are trimmed, sanitized, and type-checked before payload serialization.
- **Failover Protection**: Contact transmission exceptions are handled gracefully without surfacing unhandled errors or sensitive stack traces to users.

---

## 🌐 Deployment

This project is optimized for static hosting platforms:

### Deploy with Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select the `portfolio-` repository.
4. Under **Environment Variables**, define your production values for:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_WEB3FORMS_ACCESS_KEY`
5. Click **Deploy**.

### Deploy with Netlify
1. Log in to [Netlify](https://www.netlify.com/) and choose **Import an existing project**.
2. Select your repository and set the build command to `npm run build` with publish directory `dist`.
3. Add the 4 environment variables under **Site Configuration > Environment Variables**.
4. Click **Deploy Site**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Crafted with care by <strong>Abhinash Panigrahi</strong>
</p>
