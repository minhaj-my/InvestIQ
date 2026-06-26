 <div align="center">
    <img src="public/assets/icons/logo1.png" width="300"/>
  </div>
   <div align="center">
  <img src="public/assets/images/1.png" alt="Investiq Screenshot" width="400"/>
</div>

  <div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,mongodb,tailwind,ts" />
  </div>
# InvestIQ

# **Investiq** is a modern investment tracking application built with **Next.js, TypeScript, React, and Node.js**. It enables users to track multiple investments, manage watchlists, and access real-time market data via **Finnhub** API and **TradingView** Widgets.

# Features:**

- User authentication  
- Real-time stock, crypto, and market data
- Analytics dashboards and charts
- Modular, component-driven architecture
- **3. Installation & Setup**

### **Requirements**

- Node.js >= 18
  
- npm >= 9
  
- MongoDB (or another supported DB)
  
- Optional: Inngest account & API key
  

### **Steps**

1. Clone the repository:
   

`git clone https://github.com/yourusername/investiq.git cd investiq`

2. Install dependencies:
   

`bun install`

3. Configure environment variables:
   

4.  Run the development server:
   

`bun run dev`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
   

---

## **4. Environment Variables**
```
NODE_ENV=development
NEXT_PUBLIC_BASE_URL= 
# FINNHUB
FINNHUB_API_KEY= 
FINNHUB_BASE_URL= 
# MONGODB
MONGODB_URI=  

# BETTER AUTH
BETTER_AUTH_SECRET= 
BETTER_AUTH_URL= 
#AUTH
GOOGLE_CLIENT_ID= 
GOOGLE_CLIENT_SECRET= 

GITHUB_CLIENT_ID= 
GITHUB_CLIENT_SECRET=

```

### ** Notes**

###   -  Model: `database/models/watchlist.model.ts`

- Actions: `lib/actions/watchlist.actions.ts`

- API integration: `lib/actions/finnhub.actions.ts`
  
- Charts: `components/TradingView.tsx`
  
- Users can view real-time prices and historical trends.
  

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

---

##  **9. License**

MIT License © 2025 Investiq
