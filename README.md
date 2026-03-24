# Emjay Brewery Backend

Production-ready ERP backend for a juice manufacturing company.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

## Modules
- **Auth**: Admin and Staff roles.
- **Bottles**: Purchase tracking and empty bottle inventory.
- **Production**: Convert empty bottles to filled juice stock.
- **Products**: Manage juice types and pricing.
- **Orders**: B2B/B2C sales system.
- **Dashboard**: Real-time stats and charts data.

## Setup
1. `cd backend`
2. `npm install`
3. Update `.env` with your MongoDB URI.
4. `node server.js`

## API Endpoints
- POST `/api/auth/register` - Create a user
- POST `/api/auth/login` - Authenticate user
- GET `/api/bottles/stock` - Get empty bottle stock status
- POST `/api/bottles/purchase` - Add bottle purchase (Admin only)
- POST `/api/production` - Start a production run (Staff/Admin)
- GET `/api/dashboard/stats` - Admin dashboard metrics
- ... and more
