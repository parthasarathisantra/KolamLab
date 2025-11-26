# KolamCraft – Traditional Kolam Generator

## Overview

KolamCraft is a culturally-rich web application dedicated to preserving and celebrating the traditional South Indian art of Kolam through modern technology. The platform allows users to create, explore, and share beautiful Kolam designs using AI-powered generation tools and interactive editors. The application features a heritage-inspired design aesthetic that combines temple architecture elements with contemporary web design principles, creating a warm, elegant, and culturally authentic experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management and caching

**UI Framework:**
- shadcn/ui component library (Radix UI primitives) for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom heritage-inspired color palette (Kolam Maroon, Gold, Ivory, Sand)
- Playfair Display (serif) for headings, Inter/system fonts for body text

**Design System:**
- Cultural authenticity as core principle - every element reflects South Indian Kolam heritage
- Heritage background components with gradient overlays and dot patterns
- Consistent spacing using Tailwind's 4-8-12-16-20-24 unit system
- Responsive grid layouts: single column (mobile), 2-column (tablet), 3-4 column (desktop)

**State Management:**
- LocalStorage for client-side authentication (temporary solution, ready for backend integration)
- React hooks for component-level state
- React Query for API data caching and synchronization
- Custom hooks (useIsMobile, useToast) for reusable logic

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for REST API endpoints
- HTTP server created via Node's `http` module
- Middleware chain: JSON body parsing, URL encoding, request logging

**Current Implementation:**
- In-memory storage (MemStorage class) for development/prototyping
- Basic CRUD interface defined (IStorage) for user management
- Routes registered through centralized `registerRoutes` function
- Static file serving for production builds

**Planned Backend Integration:**
- Prepared API service layer (`client/src/services/api.js`) ready for Flask or Express endpoints
- Firebase service stub (`client/src/services/firebase.js`) with configuration template
- Authentication endpoints planned: `/api/auth/login`, `/api/auth/signup`
- Kolam-specific endpoints: `/api/kolam/generate`, `/api/kolam/save`, `/api/kolam/gallery`

### Data Architecture

**Database Setup (Drizzle ORM):**
- PostgreSQL as primary database (Neon serverless connection)
- Drizzle ORM for type-safe database operations
- Schema defined in `shared/schema.ts` with Zod validation
- Current schema: Users table with UUID primary keys, username/password fields
- Migration system configured via `drizzle.config.ts`

**Data Models:**
- User: id (UUID), username (unique), password (hashed)
- InsertUser schema with Zod validation for input sanitization
- Type inference from Drizzle schema for end-to-end type safety

**Storage Strategy:**
- Session-based authentication architecture (prepared)
- File uploads for Kolam images (multer middleware ready via dependencies)
- Image storage planned for user-generated designs

### Authentication & Authorization

**Current Implementation:**
- Client-side localStorage authentication (temporary)
- AuthGuard component protects authenticated routes
- Automatic redirect to login for unauthenticated users

**Planned Architecture:**
- Session-based authentication with connect-pg-simple for PostgreSQL session store
- Password hashing (bcrypt/argon2 recommended)
- JWT tokens as alternative authentication method (jsonwebtoken dependency installed)
- Role-based access control for future admin features

### Application Routes & Pages

**Public Routes:**
- `/` - Landing page with hero section, Kolam introduction, feature highlights
- `/about-kolam` - Comprehensive guide to Kolam types, history, cultural significance
- `/create-kolam` - Public CTA page directing users to login/signup
- `/login` - Authentication form
- `/signup` - User registration form

**Protected Routes (require authentication):**
- `/dashboard` - Main hub with 4 navigation cards (About, Create, Explore, Profile)
- `/generate` - AI-powered Kolam generation with image upload and grid-based design
- `/editor` - Color editing canvas with fill/erase tools and export functionality
- `/explore` - Gallery of 30+ Kolam designs with search and filtering

**Navigation Strategy:**
- Sticky navbar with cultural branding (Flower2 icon + KolamCraft logo)
- Conditional navigation links based on authentication state
- Mobile-responsive hamburger menu
- Footer with social links, quick navigation, cultural context

## External Dependencies

### Third-Party UI Libraries
- **Radix UI:** Complete suite of accessible, unstyled component primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **Lucide React:** Icon library for consistent iconography
- **class-variance-authority:** Type-safe variant styling for components
- **cmdk:** Command palette component (prepared for future search features)
- **embla-carousel-react:** Carousel/slider component for galleries
- **vaul:** Drawer component for mobile experiences

### Database & Backend
- **@neondatabase/serverless:** Neon PostgreSQL serverless driver optimized for edge environments
- **drizzle-orm:** TypeScript ORM with zero-cost type safety
- **drizzle-zod:** Zod schema integration for runtime validation
- **connect-pg-simple:** PostgreSQL session store for Express sessions

### Development & Build Tools
- **Vite:** Lightning-fast development server and optimized production builds
- **esbuild:** JavaScript bundler for server-side code compilation
- **tsx:** TypeScript execution environment for development scripts
- **@replit/vite-plugin-*:** Replit-specific development tooling (runtime errors, cartographer, dev banner)

### Form Handling & Validation
- **react-hook-form:** Performant form library with validation
- **@hookform/resolvers:** Resolvers for Zod/Yup schema validation
- **zod:** Schema validation library
- **zod-validation-error:** Human-readable error messages from Zod schemas

### Utility Libraries
- **date-fns:** Date manipulation and formatting
- **clsx + tailwind-merge:** Conditional className composition
- **nanoid:** Unique ID generation for cache busting and entities

### Prepared Integrations (Not Yet Active)
- **Stripe:** Payment processing (dependency installed, ready for premium features)
- **Passport/Passport-local:** Authentication middleware
- **Multer:** File upload handling for Kolam images
- **Nodemailer:** Email notifications (welcome emails, password resets)
- **OpenAI/Google Generative AI:** AI-powered Kolam pattern generation
- **WebSocket (ws):** Real-time features (collaborative editing, live updates)
- **XLSX:** Export Kolam designs to spreadsheet formats

### Image & Asset Management
- Static image assets stored in `attached_assets/generated_images/`
- Vite alias `@assets` configured for clean imports
- Hero banner, gallery images (kolam_gallery_1.png through kolam_gallery_9.png)
- Image optimization through Vite build process

### API Integration Points
- Base URL configuration ready in `client/src/services/api.js`
- Generic GET/POST helper functions prepared
- CORS configuration anticipated for Flask/Express backend
- Authentication token injection infrastructure in place