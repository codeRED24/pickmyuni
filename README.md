# EduScholar Project

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

```
backend/    # Express.js backend API
frontend/   # Next.js frontend application
```

---

## Backend Setup (Express.js)

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**

   - Copy or create any required `.env` files or edit `config/secret.js` as needed for your environment (e.g., PORT, MONGODB_URI).
   - Alternatively, you can set environment variables directly in your terminal:

   ```bash
   export PORT=8000
   export MONGODB_URI=<YOUR_MONGODB_URI>
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   - The server will typically run on [http://localhost:3000](http://localhost:3000) (check `server.js` for the exact port).

---

## Frontend Setup (Next.js)

1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   - The app will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Useful Commands

### Backend

- `npm start` — Start the backend server

### Frontend

- `npm run dev` — Start the Next.js development server
- `npm run build` — Build the frontend for production
- `npm start` — Start the production frontend server

---

## Notes

- Ensure both backend and frontend servers are running for full functionality.
- Update API endpoints in the frontend if your backend runs on a different port or host.
- For database setup, check `backend/utils/db.js` and related config files.

---

## Troubleshooting

- If you encounter issues, ensure all dependencies are installed and the correct Node.js version is used.
- Check logs in the terminal for error messages.

---
# pickmyuni
