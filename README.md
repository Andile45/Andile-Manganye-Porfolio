# Andile Manganye - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, experience, and certifications as a Full-Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Animations**: Powered by Framer Motion for smooth, engaging animations
- **Sections**:
  - Hero section with introduction
  - About Me with personal information
  - Skills showcase
  - Projects portfolio
  - Work Experience
  - Certificates (viewable/downloadable)
  - Contact information with CV download
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading times and optimized animations

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── Cetificates/          # Certificate PDFs
│   ├── ANDILE MANGANYE CV Final .pdf
│   └── ...
├── src/
│   ├── assets/               # Images and static assets
│   ├── components/           # React components
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── contexts/             # React contexts
│   │   └── ThemeContext.tsx
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   ├── index.css             # Global styles
│   └── App.css               # App-specific styles
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Adding Your Own Content

1. **Update Personal Information**: Edit the components in `src/components/` to add your own information
2. **Add Projects**: Update the `projects` array in `src/components/Projects.tsx`
3. **Add Certificates**: Place PDF files in `public/Cetificates/` and update `src/components/Certificates.tsx`
4. **Update CV**: Replace `public/ANDILE MANGANYE CV Final .pdf` with your own CV
5. **Change Colors**: Modify the color scheme in `tailwind.config.js` and component files

### Theme Customization

The portfolio uses a blue color scheme. To change colors:
- Update Tailwind classes in components (e.g., `bg-blue-600` → `bg-purple-600`)
- Modify the color values in component files

## 📱 Sections Overview

### Hero
- Introduction and profile image
- Technology badges
- Call-to-action buttons

### About
- Personal background
- Education and current role
- Learning mindset statement

### Skills
- Categorized skill sets
- Interactive skill cards

### Projects
- Portfolio of completed projects
- Project details and technologies used

### Experience
- Work experience timeline
- Photos from work/education
- Role descriptions

### Certificates
- Professional certifications
- View and download options

### Contact
- Email, GitHub, LinkedIn links
- CV download button

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3
- Firebase Hosting
- Any web server

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Features in Detail

### Animations
- Scroll-triggered animations using Framer Motion
- Staggered animations for lists
- Hover effects on interactive elements
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized images and assets

### Dark Mode
- System preference detection
- Manual toggle in header
- Smooth theme transitions

## 📧 Contact

- **Email**: manganyeandile@gmail.com
- **GitHub**: [@Andile45](https://github.com/Andile45)
- **LinkedIn**: [andile-manganye](https://linkedin.com/in/andile-manganye-a27591319)

## 📄 License

This project is private and personal portfolio.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Note**: Remember to update all personal information, links, and content to reflect your own details before deploying.
