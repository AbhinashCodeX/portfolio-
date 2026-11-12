# ⚡ Abhinash Panigrahi — Modern .NET Developer Portfolio

> A cutting-edge, high-contrast luxury cyber/crimson portfolio built for **Abhinash Panigrahi** (.NET Backend & Full Stack Engineer | MCA Gold Medalist), inspired by the interactive **"Portrait in Dots"** 3D WebGL aesthetic and powered by modern React 19, Three.js, and EmailJS.

---

## 🎯 The Portfolio Idea & Philosophy

This portfolio is engineered with a single goal: **Convert technical recruiters, engineering leaders, and enterprise clients within the first 30 seconds of landing on the page.**

1. **Memorable First Impression**: A 3D WebGL particle dot sculpture that tracks the visitor's cursor, dynamically assembling into a bust portrait and transitioning into a rich studio reveal with 360° tactile feedback.
2. **Technical Credibility First**: Clear emphasis on core enterprise backend proficiencies — **C#**, **ASP.NET Core Web APIs**, **Entity Framework Core**, **MS SQL Server**, and **PostgreSQL**, backed by an **MCA Gold Medal** distinction from Sri Sri University.
3. **Frictionless Recruiter Conversion**: An interactive, instant-delivery Contact System with 1-click email copy, interactive category selectors, and custom-branded email delivery via **EmailJS** with automatic failover to **Web3Forms**.

---

## 📬 End-to-End Contact Flow & Architecture

The Contact system is engineered for zero-friction user experience and 100% reliable lead capture:

```
[ Recruiter / Visitor ]
         │
         ▼
[ Interactive Contact Form ] ──► Validates inputs & selects purpose (e.g. 🎯 Full-Time .NET Role)
         │
         ▼
[ Client-side Payload Prep ] ──► Formats JSON with timestamps & recruiter metadata
         │
         ├───► [ Primary: EmailJS REST Engine ] 
         │            │
         │            ▼
         │     [ Custom Branded HTML Template ] 
         │     (Binds {{name}}, {{email}}, {{company}}, {{inquiry_type}}, {{message}})
         │            │
         │            ▼
         │     [ Gmail API OAuth Delivery ] ────► 📥 [ abhinashpanigrahi9@gmail.com ]
         │                                               │
         │                                               ▼
         │                                         [ 1-Click Reply ] ──► Recruiter's Email
         │
         └───► [ Failover: Web3Forms Endpoint ] (Triggers automatically if EmailJS is unreachable)
```

### 1. Data Binding & Template Mapping

When a visitor submits the contact form, our React code maps the state into an EmailJS template payload:

| Form Field | Template Tag | Description | Example Value |
| :--- | :--- | :--- | :--- |
| **Sender Name** | `{{name}}` | Full name of recruiter / visitor | `"Baisakhi Dash"` |
| **Work Email** | `{{email}}` | Reply-to email address | `"recruiter@deloitte.com"` |
| **Organization** | `{{company}}` | Company / Firm name | `"Deloitte USI"` |
| **Opportunity Type** | `{{inquiry_type}}` | Selected via interactive pill tags | `"Full-Time .NET Backend Engineer Role"` |
| **Subject Line** | `{{subject}}` | Direct inquiry headline | `"Senior .NET Developer Opportunity"` |
| **Message** | `{{message}}` | Complete project / role details | `"We would love to discuss an open role..."` |
| **Timestamp** | `{{time}}` | Submission date and time | `"Nov 12, 2026, 12:30 PM"` |

### 2. Dual-Layer Delivery Safety
- **Primary Service (EmailJS)**: Sends structured, branded HTML notifications directly through your authenticated Gmail Service with 1-click **Reply-To** routing.
- **Failover Service (Web3Forms)**: If any network timeout or third-party service degradation occurs, the client automatically catches the error and silently re-routes the message through Web3Forms. **Zero lost leads, guaranteed.**

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **3D Graphics & Physics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations & Transitions**: [Framer Motion](https://www.framer.com/motion/) + [React Type Animation](https://github.com/maxmarinich/react-type-animation)
- **Icons**: [React Icons (FontAwesome)](https://react-icons.github.io/react-icons/)
- **Lead Capture & APIs**: [@emailjs/browser](https://www.emailjs.com/) + Web3Forms API
- **Styling**: Vanilla Modular CSS3 with custom variables, backdrop blur glassmorphism, and responsive clamp typography.

---

## 🚀 Local Development Setup

To run this portfolio locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Original-Portfolio.git
cd Original-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```
Fill in your keys in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=service_1pmubiv
VITE_EMAILJS_TEMPLATE_ID=template_htn8w07
VITE_EMAILJS_PUBLIC_KEY=Z0w_WScqhK-8giGYo
VITE_WEB3FORMS_ACCESS_KEY=dbb74f14-b13a-4714-a6d8-762e307f1363
```

### 4. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### 5. Build for Production
```bash
npm run build
```
Creates a minified, production-optimized bundle in `dist/`.

---

## 🌐 Deploying Live to the Web

### Recommended: Deploy with Vercel or Netlify (Zero Config)

#### Option A: Vercel (Fastest & Free)
1. Push your code to your GitHub repository.
2. Go to **[vercel.com](https://vercel.com/)** and sign in with GitHub.
3. Click **Add New Project** → Select your repository (`Original-Portfolio`).
4. In the **Environment Variables** section, add your 4 keys from `.env`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_WEB3FORMS_ACCESS_KEY`
5. Click **Deploy**. Your site is live in ~30 seconds with automatic SSL and continuous deployment!

#### Option B: Netlify
1. Go to **[netlify.com](https://www.netlify.com/)** → **Add new site** → **Import an existing project**.
2. Select GitHub and choose your portfolio repository.
3. Add the same 4 Environment Variables under **Site configuration > Environment variables**.
4. Click **Deploy site**.

---

## 🔒 Security Best Practices
- **No Private Secrets in Git**: The `.env` file is strictly ignored via `.gitignore`.
- **Public Key Architecture**: Only the client-side public identifiers are loaded into Vite bundles.
- **CSRF & Spam Protection**: Equipped with hidden honeypot bot-checks and origin-restricted API routing.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---

**Developed with ❤️ by [Abhinash Panigrahi](https://github.com/AbhinashCodeX)**
