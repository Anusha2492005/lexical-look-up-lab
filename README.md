# 📚 Dictionary Web App

A modern, responsive dictionary application built with React and TypeScript that provides instant word definitions, pronunciations, and usage examples.

![Dictionary App Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Dictionary+App+Screenshot)

## ✨ Features

- **Instant Search**: Get definitions for any English word in real-time
- **Comprehensive Results**: View definitions, pronunciations, parts of speech, and example usage
- **Audio Pronunciation**: Listen to correct word pronunciations (when available)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Error Handling**: Helpful messages when words aren't found

## 🚀 Live Demo

[View Live Demo](https://your-app-url.lovable.app)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality UI components
- **TanStack Query** - Data fetching and caching
- **Vite** - Fast build tool and dev server
- **Dictionary API** - Free dictionary API for word definitions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dictionary-app.git
cd dictionary-app


🏗️ Project Structure
src/
├── components/          # Reusable UI components
│   ├── SearchBar.tsx   # Search input component
│   ├── WordResult.tsx  # Word definition display
│   ├── LoadingSpinner.tsx # Loading state component
│   └── ui/             # Shadcn/ui components
├── pages/              # Page components
│   └── Index.tsx       # Main dictionary page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles
🔧 Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run preview - Preview production build
npm run lint - Run ESLint
