# Yellow Brick Road - Portfolio

A modern, responsive portfolio & landing page showcasing projects, services, and expertise. Built with React, TypeScript, and Tailwind CSS for performance and maintainability.

## 🚀 Features

- **Modern UI** - Clean, professional design with smooth animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Fast Performance** - Built with Vite for lightning-fast builds and dev server
- **Type Safe** - Full TypeScript support for better code quality
- **Component Library** - Shadcn/ui for polished, accessible components
- **Dark Mode Ready** - Integrated theme support with next-themes
- **SEO Friendly** - Optimized metadata and semantic HTML
- **Interactive** - Smooth scrolling, animations, and transitions

## 🎯 Getting Started

### Prerequisites


- npm

### Installation

```sh
# Clone the repository
git clone https://github.com/yourusername/yellow-brick-road.git
cd yellow-brick-road

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run test` - Run unit tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check code quality with ESLint

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - High-quality components
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling
- **Recharts** - Data visualization
- **Lucide Icons** - Beautiful icon library
- **Vitest** - Lightning-fast unit testing
- **Playwright** - End-to-end testing

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
│   ├── ui/          # Shadcn/ui components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── Features.tsx
│   └── ...
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── test/            # Test files
public/              # Static assets
```

## 🎨 Customization

### Colors & Branding
- Update Tailwind config in `tailwind.config.ts`
- Modify theme colors in `src/index.css`

### Content
- Edit component content in `src/components/`
- Update text in individual component files

### Styling
- All components use Tailwind CSS classes
- Global styles in `src/index.css` and `src/App.css`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the `dist` folder to Vercel
```

### Netlify
```bash
npm run build
# Connect your GitHub repo to Netlify
# Netlify will automatically build and deploy
```

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to your `gh-pages` branch

### Docker
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📝 License

Licensed under the MIT License - feel free to use this project for personal or commercial purposes.