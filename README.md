# Synkturt - Text-to-Speech Application

<div align="center">
  <img width="1200" height="475" alt="Synkturt Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  
  A modern, beautifully designed Text-to-Speech (TTS) web application UI built with React, TypeScript, and Tailwind CSS.

  **[Live Demo](#)** · **[Documentation](#getting-started)** · **[Report Bug](#issues)** · **[Request Feature](#contributing)**
</div>

---

## 📌 About Synkturt

Synkturt is a frontend showcase of a modern Text-to-Speech application. It empowers creators, learners, and professionals by providing a user-friendly interface for transforming text into natural-sounding speech. Whether you need narration for videos, accessible audio versions of articles, or quick voiceovers, Synkturt delivers a polished, intuitive experience directly in your browser.

> **Note:** This is a frontend-only showcase. Backend API integration and actual TTS functionality would need to be implemented.

---

## ✨ Key Features

- **🎤 Realistic AI Voices** - Multiple natural-sounding voices in various languages and accents
- **📝 Interactive Transcripts** - Click on text to jump to specific sections in the audio
- **🎛️ Customizable Audio Player** - Fully styled player that matches your brand
- **💾 Downloadable MP3s** - Export audio in MP3 format for offline use
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Built with Tailwind CSS for a polished, professional look
- **♿ Accessibility** - Semantic HTML and keyboard navigation support
- **⚡ Fast & Lightweight** - Built with Vite for quick development and optimal performance

---

## 📋 Pages Included

| Page | Purpose |
|------|---------|
| **Home** | Landing page with hero section and feature showcase |
| **Login** | User authentication page |
| **Register** | New user sign-up with password strength indicator |
| **Forgot Password** | Password recovery flow |
| **Reset Password** | Set a new password |
| **Dashboard** | Main TTS interface and text input area |
| **Settings** | User preferences and configuration |
| **Billing** | Subscription and pricing information |
| **Feature Details** | Detailed information about specific features |
| **Privacy & Terms** | Legal pages |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vibetix/Synkturt-Text-To-Speech.git
   cd Synkturt-Text-To-Speech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📂 Project Structure

```
synkturt/
├── src/
│   ├── components/          # Reusable React components
│   │   └── Navbar.tsx       # Navigation bar component
│   ├── pages/               # Page components (routes)
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Settings.tsx
│   │   ├── Billing.tsx
│   │   └── ... (other pages)
│   ├── contexts/            # React Context providers (for future use)
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and Tailwind utilities
│   └── vite-env.d.ts        # Vite environment declarations
├── public/                  # Static assets
│   ├── hero-bg.jpg.jpg      # Hero section background
│   └── auth-bg.png          # Authentication pages background
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── LICENSE                  # MIT License
└── README.md                # This file
```

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **CSS Framework:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Animation:** Motion
- **Utilities:** clsx, tailwind-merge

---

## 🎨 Design Highlights

- **Clean & Modern UI** - Minimalist design with focus on user experience
- **Consistent Branding** - Brand colors and typography throughout
- **Smooth Interactions** - Hover states, transitions, and micro-interactions
- **Professional Polish** - Rounded corners, shadows, and proper spacing
- **Dark/Light Ready** - Design foundation supports theme switching

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Update `.env` file locations in `vite.config.ts` as needed.

### Tailwind CSS

Customize the design system in `tailwind.config.js`:
- Colors
- Typography
- Spacing
- Custom utilities

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove build artifacts |
| `npm run lint` | Run TypeScript type checking |

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Other Platforms

The `dist/` folder contains all static files needed for deployment to:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Firebase Hosting
- Any static hosting service

---

## 🎯 Future Enhancements

- [ ] Integrate with actual TTS API (Google Cloud, Azure, or AWS)
- [ ] User authentication backend
- [ ] Text file upload functionality
- [ ] Audio playback controls
- [ ] User dashboard with history
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Unit and integration tests
- [ ] Performance optimizations

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines
- Follow the existing code style
- Use TypeScript for type safety
- Add comments for complex logic
- Test your changes before submitting

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)

---

## 📧 Support & Contact

If you have questions or need support:

- **Issues:** [GitHub Issues](https://github.com/vibetix/Synkturt-Text-To-Speech/issues)
- **Email:** support@synkturt.com
- **Website:** [synkturt.com](#)

---

## ⭐ Star History

If you find this project useful, please consider giving it a star! It helps other developers discover it.

---

<div align="center">
  Made with ❤️ by the Synkturt Team
</div>
- **Dashboard**: Interactive TTS editor with transcript viewer
- **Login**: Email/password login with social auth placeholders
- **Register**: Account creation with password strength meter
- **Settings**: User profile management page
- **Billing**: Pricing and subscription plans
- **Terms**: Terms of Service
- **Privacy**: Privacy Policy

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/synkturt.git
cd synkturt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Remove dist directory

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Motion** - Animation library

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.tsx           # Navigation component
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Dashboard.tsx       # Main TTS interface (demo)
│   ├── Login.tsx           # Login form
│   ├── Register.tsx        # Registration form
│   ├── Settings.tsx        # User settings
│   ├── Billing.tsx         # Pricing page
│   ├── ForgotPassword.tsx  # Password recovery
│   ├── ResetPassword.tsx   # Password reset
│   ├── Terms.tsx           # Terms of service
│   ├── Privacy.tsx         # Privacy policy
│   ├── FeatureDetail.tsx   # Feature details
│   └── NotFound.tsx        # 404 page
├── App.tsx                 # Main app component
├── main.tsx                # React entry point
└── index.css              # Global styles
```

## 🎨 Design System

The application uses a clean, modern design system:

- **Colors**: Grayscale with accent colors (blue for highlights)
- **Typography**: Clean sans-serif font stack
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable UI patterns with Tailwind CSS
- **Interactions**: Smooth transitions and hover states

## ⚙️ Configuration Files

- `vite.config.ts` - Vite configuration with React and Tailwind plugins
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `.env.example` - Environment variable template

## 📝 Notes

This is a **frontend-only showcase**. The following features show demo messages instead of making actual API calls:
- Text-to-speech generation (shows alert)
- Audio download (shows alert)
- User authentication (shows alert)
- Form submissions (shows alert)

To integrate this with a backend API, you would need to:
1. Replace the alert messages with actual API calls
2. Add state management for user data
3. Implement proper error handling
4. Add authentication flow with token management

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Full Project**: The backend implementation is available in a separate repository

## 📄 License

This project is open source and available under the MIT License.

## 🙋 Support

For questions or feedback about the design, please create an issue on GitHub.

