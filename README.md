# Alexander Wang — Personal Portfolio

A clean, minimal, responsive personal portfolio built with React, Vite, and Tailwind CSS. It showcases my experience as a Computer Science & Business dual-degree student at the University of Michigan — work experience, projects, technical skills, and leadership.

## Tech Stack

- **Build**: Vite
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions + IntersectionObserver scroll reveals
- **Fonts**: Newsreader, Inter & JetBrains Mono (Google Fonts)
- **Analytics**: Vercel Analytics

## Sections

1. **Hero** — introduction with typewriter effect
2. **About** — background, education, certifications, organizations
3. **Experience** — work and leadership roles
4. **Projects** — featured and additional projects
5. **Skills** — categorized technical skills
6. **Contact** — email and social links

## Getting Started

### Prerequisites

- Node.js v18 or higher

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Production

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Customization

- **Design system**: `tailwind.config.js` (palette, fonts) and `src/index.css` (shared component classes)
- **Content**: `src/components/{About,Experience,Projects,Skills,Contact}.jsx`
- **Fonts**: loaded in `index.html`
- **Resume**: replace `public/Alexander_Wang_Resume.pdf`

## Contact

**Alexander Wang**

- Email: alxswang@umich.edu
- LinkedIn: [linkedin.com/in/alexscwang](https://linkedin.com/in/alexscwang)
- GitHub: [github.com/alexwang9](https://github.com/alexwang9)
