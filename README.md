 <div align="center">
  <img src="public/assets/images/1.png" alt="Investiq Screenshot" width="800"/>
</div>

   <div align="center">
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000"/>
    <img src="https://img.shields.io/badge/-Better%20Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=000000"/>
    <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=000000"/>
    <br/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-CodeRabbit-black?style=for-the-badge&logoColor=white&logo=coderabbit&color=9146FF"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
</div>

# InvestIQ
  
  
  ## **1. Overview**

**Investiq** is a modern investment tracking and portfolio management application built with **Next.js, TypeScript, React, and Node.js**. It enables users to track multiple investments, manage watchlists, and access real-time market data via **Finnhub** and **TradingView**.

Investiq also integrates **Inngest** for serverless workflows and **Nodemailer** for email notifications.

**Key Features:**

- User authentication (Sign-in / Sign-up)
    
- Portfolio and watchlist management
    
- Real-time stock, crypto, and market data
    
- Analytics dashboards and charts
    
- Email notifications and alerts
    
- Modular, component-driven architecture
    
- Serverless workflow automation with Inngest
    

---

## **2. Project Structure**
```Investiq/
├── app/                   # Next.js routes
│   ├── api/inngest/       # Inngest serverless functions
│   ├── (auth)/            # Authentication routes & layouts
│   │   ├── layout.tsx
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── globals.css        # Global CSS
│   └── (root)/            # Root layouts and pages
│       ├── layout.tsx
│       └── page.tsx
├── components/            # React components
│   ├── forms/             # Input fields & form components
│   ├── ui/                # Reusable UI primitives (buttons, dropdowns, dialogs)
│   └── userDropdown.tsx   # User dropdown menu
├── database/              # Database configuration and models
│   ├── models/watchlist.model.ts
│   └── mongoose.ts
├── hooks/                 # Custom React hooks
│   └── useTradingViewWidget.tsx
├── lib/                   # Business logic & API integrations
│   ├── actions/           # CRUD and API actions
│   ├── better-auth/       # Authentication utilities
│   ├── constants.ts
│   ├── inngest/           # Serverless client & workflows
│   └── nodemailer/        # Email templates & sending logic
├── middleware/            # Custom middlewares
├── public/                # Static assets
├── scripts/               # Utility scripts for DB testing
├── types/                 # TypeScript global types
├── .env                   # Environment variables
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
 
```
 
---

## **3. Installation & Setup**

### **Requirements**

- Node.js >= 18
    
- npm >= 9
    
- MongoDB (or another supported DB)
    
- Optional: Inngest account & API key
    

### **Steps**

1. Clone the repository:
    

`git clone https://github.com/yourusername/investiq.git cd investiq`

2. Install dependencies:
    

`npm install`

3. Configure environment variables:
    

Copy `.env.example` to `.env` and fill in your credentials (see Section 4).

4. Run the development server:
    

`npm run dev`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
    

---

## **4. Environment Variables**
```
`# Node Environment NODE_ENV=development NEXT_PUBLIC_BASE_URL=http://localhost:3000    # Base URL of your app  # Database MONGODB_URI=mongodb://localhost:27017/investiq  # Better Auth (authentication library) BETTER_AUTH_SECRET=your_auth_secret BETTER_AUTH_URL=http://localhost:3000       # Base URL used by Better Auth  # Gemini API (optional, for crypto or trading) GEMINI_API_KEY=your_gemini_api_key  # Nodemailer (email notifications) NODEMAILER_EMAIL=your_email@example.com NODEMAILER_PASSWORD=your_email_password  # Finnhub (market data API) NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key  # Inngest (serverless workflow client) INNGEST_API_KEY=your_inngest_api_key INNGEST_API_URL=https://api.inngest.com     # optional, defaults to Inngest API````
```
 
**Notes:**

- Keep `.env` secure and **never commit** to GitHub.
    
- `NEXT_PUBLIC_` variables are exposed to the frontend; sensitive keys should remain server-side.
    
- `INNGEST_API_KEY` is required for workflows in `app/api/inngest` and `lib/inngest`.
    

---

## **5. Usage**

### **Authentication**

- Routes: `(auth)/sign-in` and `(auth)/sign-up`
    
- Auth logic: `lib/better-auth/auth.ts`
    

### **Portfolio & Watchlist**

- Model: `database/models/watchlist.model.ts`
    
- Actions: `lib/actions/watchlist.actions.ts`
    
- Users can add, remove, and monitor investments.
    

### **Market Data**

- API integration: `lib/actions/finnhub.actions.ts`
    
- Charts: `components/TradingView.tsx`
    
- Users can view real-time prices and historical trends.
    

### **Forms**

- Reusable components in `components/forms/`:
    
    - `InputField.tsx`
        
    - `SelectField.tsx`
        
    - `CountrySelectField.tsx`
        
    - `FooterLink.tsx`
        

### **UI Components**

- All primitives in `components/ui/`
    
- Examples: Button, Dropdown, Dialog, Popover, Avatar, Command
    

### **Email Notifications**

- Nodemailer setup: `lib/nodemailer/index.ts`
    
- Email templates: `lib/nodemailer/templates.ts`
    

### **Inngest Workflows**

- Client: `lib/inngest/client.ts`
    
- Define workflows: `lib/inngest/functions.ts`
    
- Trigger workflows:
    

`import { inngest } from "@/lib/inngest/client";  await inngest.send("workflow.name", { data: {...} });`

---

## **6. Scripts**

- `scripts/test-db.mjs` / `scripts/test-db.ts` → Test DB connectivity
    

---

## **7. Contributing**

1. Fork the repo
    
2. Create a branch:
    

`git checkout -b feature/your-feature`

3. Make changes and commit:
    

`git commit -m "Add your feature description"`

4. Push and create a Pull Request
    

**Coding standards:**

- Use TypeScript
    
- Follow component structure in `components/`
    
- Run linter:
    

`npm run lint`

---

## **8. FAQ**

**Q:** Can I track crypto and stocks?  
**A:** Yes, Investiq supports stocks, crypto, and mutual funds.

**Q:** How secure is my data?  
**A:** Credentials and sensitive info are stored securely. `.env` keys remain private.

**Q:** Can I add new serverless workflows?  
**A:** Yes. Add workflow files in `app/api/inngest` and define actions in `lib/inngest/functions.ts`.

---

## **9. License**

MIT License © 2025 Investiq
