# Serbian Auto Parts - Backend

This is the backend service for the Serbian Auto Parts E-Commerce Platform, built with MedusaJS.

## Prerequisites

- Node.js (v16.20.0 or later)
- PostgreSQL (v12 or later)
- Redis (optional, for caching)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd serbian-auto-parts/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env` and update the values as needed.

4. **Set up the database**
   Create a new PostgreSQL database and update the `DATABASE_URL` in `.env`.

5. **Run migrations**
   ```bash
   npx medusa migrations run
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will be available at `http://localhost:9000` by default.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application
- `npm start` - Start the production server
- `npm test` - Run tests
- `npm run seed` - Seed the database with sample data

## Project Structure

- `src/` - Source code
  - `api/` - API routes and controllers
  - `services/` - Business logic services
  - `subscribers/` - Event subscribers
  - `types/` - TypeScript type definitions
  - `index.js` - Application entry point
- `migrations/` - Database migrations
- `data/` - Seed data

## Environment Variables

- `NODE_ENV` - Node environment (development, production, test)
- `PORT` - Port to run the server on (default: 9000)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for JWT authentication
- `COOKIE_SECRET` - Secret for cookie encryption
- `STORE_CORS` - CORS origin for the storefront
- `ADMIN_CORS` - CORS origin for the admin panel

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
