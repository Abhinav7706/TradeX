# 📈 TradeX - Full Stack Trading & Investment Platform

A modern, full-stack replica of **TradeX** — India's largest discount stock brokerage platform. This project includes a public marketing site, a dedicated trading portal (**Kite** clone), a Node.js/Express REST API backend, and a MongoDB database with secure user authentication.

---

## 🚀 Architecture & Overview

The project is organized as a multi-service monorepo:

```
TradeX/
├── backend/       # Express.js REST API & MongoDB models
├── dashboard/     # Trading terminal (Kite clone with live charts & portfolio)
└── fronted/       # Marketing landing page, products, pricing & auth portal
```

---

## ✨ Features

### 1. Public Landing Site (`fronted`)
- **Homepage**: Clean TdadeX layout featuring product ecosystems, trust metrics, pricing callouts, and educational Varsity snippets.
- **Dedicated Pages**: `/about`, `/product`, `/pricing`, `/support`, and 404 handler.
- **Smart Authentication UI**:
  - Toggleable **Sign up** and **Log in** tabs with instant validation and error banners.
  - Dynamic Navbar: Automatically switches between **Sign Up** (for new visitors), **Login** (for returning visitors), and **Dashboard + User Profile** (when authenticated).

### 2. Trading Dashboard (`dashboard` - Kite Clone)
- **Stock Watchlist**: Real-time stock tracker with quick action triggers (Buy, Sell, Analytics) and visual asset distribution via Chart.js Doughnut charts.
- **Buy / Order Window**: Modal window for placing real-time market/limit buy orders into MongoDB.
- **Portfolio & Holdings**: Portfolio viewer with P&L calculation, daily change percentage, and interactive bar charts.
- **Positions & Funds**: Tracks intraday/open positions, margin utilization, available cash, and collateral.
- **User Profile**: Dynamic user initials avatar, greetings, and dropdown session logout.

### 3. Backend REST API (`backend`)
- **JWT & Password Security**: Secure user registration and login using `bcryptjs` password hashing and signed JSON Web Tokens (7-day validity).
- **MongoDB Data Models**:
  - `UserModel`: Secure user accounts with unique usernames and lowercased emails.
  - `HoldingsModel`: Long-term portfolio stocks with LTP, averages, and P&L.
  - `PositionsModel`: Active intraday & delivery positions.
  - `OrdersModel`: Real-time order execution logs.
- **API Endpoints**:
  - `POST /signup` — User registration
  - `POST /login` — User authentication
  - `GET /auth/verify` — JWT token verification
  - `GET /allHoldings` — Fetch all holdings
  - `GET /allPositions` — Fetch all open positions
  - `POST /newOrder` — Place a new stock order

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend (Marketing)** | React 19, React Router DOM 7, Bootstrap 5, Jest & React Testing Library |
| **Dashboard (Kite)** | React 18, React Router DOM 6, Material-UI (MUI), Chart.js, React-Chartjs-2, Axios |
| **Backend API** | Node.js, Express 5, Mongoose, MongoDB, JWT (`jsonwebtoken`), `bcryptjs`, CORS |
| **Testing** | Jest, `@testing-library/react` |

---

## 📦 Getting Started & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or MongoDB Atlas connection string)

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/<your-username>/ZerodhaClone.git
cd ZerodhaClone
```

---

### Step 2: Configure & Start the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   npm install
   ```

2. *(Optional)* Create a `.env` file in `backend/`:
   ```env
   PORT=3002
   MONGO_URL=mongodb://127.0.0.1:27017/zerodha
   JWT_SECRET=your_jwt_secret_key
   ```

3. Start the backend server:
   ```bash
   npm start
   # Server runs on http://localhost:3002
   ```

---

### Step 3: Start the Landing Page (Frontend)

1. In a new terminal window:
   ```bash
   cd fronted
   npm install
   npm start
   # Runs on http://localhost:3000
   ```

---

### Step 4: Start the Dashboard (Trading Terminal)

1. In another terminal window:
   ```bash
   cd dashboard
   npm install
   npm start
   # Runs on http://localhost:3001
   ```

---

## 🧪 Running Tests

To run frontend unit tests:
```bash
cd fronted
npm test
```

To run backend authentication verification:
```bash
cd backend
node test_auth.js
```

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
