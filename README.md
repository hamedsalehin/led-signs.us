# Nano Signs Project

This is a clean, refined version of the Nano Signs project. All unnecessary scripts, unused components, and redundant documentation have been removed.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables in `.env` (included in this zip).

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `app/`: Next.js App Router pages and routes.
- `components/`: React components (UI and specialized).
- `lib/`: Utility functions and data.
- `prisma/`: Database schema and configuration.
- `public/`: Static assets (images, fonts).
- `styles/`: Global CSS and themes.

## Cleaned Items

- Removed unused experimental components (`hscled`, `light` variants).
- Removed redundant deployment and utility scripts.
- Removed AI-generated tracking logs and outdated roadmaps.
- Optimized lock files (kept `package-lock.json`).
