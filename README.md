# React Portfolio App

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. This application showcases projects, skills, and provides contact information in a clean and professional design.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Display projects with filtering by category
- **Skills Section**: Organized skills by technology categories
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── ProjectCard.jsx # Project display component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with hero section
│   ├── Projects.jsx    # Projects listing page
│   ├── Skills.jsx      # Skills and technologies page
│   └── Contact.jsx     # Contact form page
├── data/               # Static data
│   └── projects.js     # Projects, skills, and personal info
├── assets/             # Static assets (images, etc.)
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-portfolio-app
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Configuration

### Personal Information

Update your personal information in `src/data/projects.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "City, Country",
  about: "Your description...",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### Projects

Add or modify projects in the same file:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo-link.com",
    github: "https://github.com/yourusername/project",
    image: "/images/project.png",
    category: "Full Stack"
  }
];
```

### Skills

Update your skills in the same file:

```javascript
export const skills = [
  {
    category: "Frontend",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"]
  }
];
```

## 🎨 Customization

### Colors

The application uses Tailwind CSS with a blue color scheme. You can customize colors by modifying the Tailwind configuration in `tailwind.config.js`.

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations and effects are defined in the CSS file

### Layout

- Header and Footer components are consistent across all pages
- Each page component is self-contained
- Responsive design uses Tailwind's responsive prefixes

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

### Adding New Components

1. Create the component in `src/components/`
2. Import and use it in the appropriate page
3. Follow the existing component patterns

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for the build tool
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## 📞 Contact

For questions or support, please reach out through the contact form on the website or via the provided social links. 