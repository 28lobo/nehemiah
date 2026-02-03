# Gemini Project Configuration: Nehemiah (nh)

## Project Overview

This is a full-stack web application built with the Next.js App Router. It uses Prisma as an ORM for a PostgreSQL database and NextAuth.js for handling authentication. The styling is done with Tailwind CSS v4, and the project is written in TypeScript. Based on the Prisma schema, the application appears to be a blog or a simple content management system with `User` and `Post` models.

## Core Technologies

*   **Framework:** Next.js 16.1.6
*   **Language:** TypeScript
*   **Database ORM:** Prisma
*   **Database:** PostgreSQL
*   **Authentication:** NextAuth.js v5 (beta)
    *   **Providers:** Google, Credentials
    *   **Strategy:** JWT Sessions
    *   **Adapter:** PrismaAdapter
*   **Styling:** Tailwind CSS v4
*   **UI Components:** Likely a custom setup using `clsx`, `tailwind-merge`, and icons from `lucide-react`.

## Getting Started

### Prerequisites

*   Node.js
*   npm (or yarn/pnpm/bun)
*   A running PostgreSQL database instance.

### Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Configure Environment:**
    Create a `.env` file in the project root and add the necessary environment variables, including the `DATABASE_URL` for Prisma and credentials for the NextAuth.js providers.
    ```env
    # .env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    AUTH_GOOGLE_ID="..."
    AUTH_GOOGLE_SECRET="..."
    AUTH_SECRET="..." # A secret for NextAuth.js to sign JWTs
    ```
3.  **Run Database Migrations:**
    Apply the existing database schema to your database.
    ```bash
    npx prisma migrate dev
    ```

### Running the Application

*   **Development:** To run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

*   **Production Build:** To build the application for production:
    ```bash
    npm run build
    ```

*   **Start Production Server:** To start the production server after building:
    ```bash
    npm run start
    ```

## Development Conventions

*   **Linting:** The project uses ESLint for code quality. Run the linter with:
    ```bash
    npm run lint
    ```
*   **Prisma:** The Prisma schema is located at `prisma/schema.prisma`. After modifying the schema, create a new migration:
    ```bash
    npx prisma migrate dev --name <migration-name>
    ```
    The Prisma Client is generated into the `app/generated/prisma` directory.

*   **Authentication:** Authentication logic is defined in `auth.ts` and `auth.config.ts`. The API route for NextAuth.js is located at `app/api/auth/[...nextauth]/route.ts`.
