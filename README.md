# PMC Engine - Next.js Conversion

This is a Next.js conversion of the PMC Engine HTML prototype, built with TypeScript, Tailwind CSS, and modern React patterns.

## ✅ Completed

### Project Setup
- ✅ Next.js 14 with App Router initialized
- ✅ TypeScript configuration
- ✅ Tailwind CSS with custom PMC theme (colors, fonts, border radius)
- ✅ Font Awesome icons integrated
- ✅ Google Fonts (Space Grotesk, Inter) via next/font
- ✅ Global styles and animations migrated
- ✅ Next.js Image optimization configured for storage.googleapis.com

### Core Components
- ✅ **Sidebar Component** (`components/layout/Sidebar.tsx`)
  - Fully functional navigation with dropdowns
  - Active state highlighting based on current route
  - Smooth animations for expand/collapse
  - All menu items from original HTML

- ✅ **TopHeader Component** (`components/layout/TopHeader.tsx`)
  - Search bar
  - Notification bell with badge
  - User avatar menu
  - Responsive layout

### Pages
- ✅ **Homepage** (`app/page.tsx`)
  - Dashboard layout with stats cards
  - Site grid with mock data
  - All styling and interactions preserved
  - Fully responsive

### Data & Types
- ✅ TypeScript interfaces (`types/index.ts`)
  - Site, Notification, Theme, Domain, User types
- ✅ Mock data (`lib/mockData.ts`)
  - 6 sample sites
  - 8 sample notifications

## 🚧 To Be Implemented

The original HTML prototype has 42 pages. The MVP demonstrates the conversion pattern with the core homepage. To complete the conversion, the following pages need to be created:

### Wizard Flow (6 pages)
- [ ] `/wizard/theme` - Theme Selection (Step 1)
- [ ] `/wizard/domain` - Domain & Hosting (Step 2)
- [ ] `/wizard/customization` - AI/Manual Customization (Step 3)
- [ ] `/wizard/review` - Review & Launch (Step 4)

### Site Manager (11 tabs)
- [ ] `/sites/[id]/overview` - Site overview with stats
- [ ] `/sites/[id]/content` - Content editor
- [ ] `/sites/[id]/files` - File browser
- [ ] `/sites/[id]/database` - Database management
- [ ] `/sites/[id]/domain` - Domain settings
- [ ] `/sites/[id]/security` - Security center
- [ ] `/sites/[id]/backups` - Backups & redeploy
- [ ] `/sites/[id]/integrations` - Integrations tab
- [ ] `/sites/[id]/settings` - Site settings
- [ ] `/sites/[id]/logs` - Activity logs
- [ ] `/sites/[id]/ai-assistant` - AI content assistant

### Standalone Pages
- [ ] `/domains` - Connected domains management
- [ ] `/domains/search` - Domain search & purchase
- [ ] `/hosting` - Hosting & backups overview
- [ ] `/security` - Security center
- [ ] `/billing` - Billing & connects management
- [ ] `/integrations` - All integrations
- [ ] `/integrations/wordpress` - WordPress integration
- [ ] `/files` - Files manager
- [ ] `/database` - Database overview
- [ ] `/settings` - Account settings
- [ ] `/support` - Support center

### Additional Components Needed
- [ ] `NotificationDrawer` - Slide-out panel with tabs
- [ ] `StatsCard` - Reusable metrics card
- [ ] `SiteCard` - Site grid card component
- [ ] `WizardStepper` - Multi-step progress indicator
- [ ] `TabNavigation` - Tab system for Site Manager
- [ ] `Modal` - Modal/overlay component
- [ ] `Button` - Reusable button variants
- [ ] `StatusBadge` - Status indicators

### Features to Implement
- [ ] Notification drawer animation (Framer Motion)
- [ ] Chart components (react-plotly.js) for analytics
- [ ] Form handling for wizard flow
- [ ] API routes for mock data endpoints
- [ ] Search functionality
- [ ] Filter and sort dropdowns
- [ ] Deployment simulation
- [ ] Real-time status updates

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.6.7 or higher

### Installation

```bash
cd pmc-engine-nextjs
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view the app.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pmc-engine-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   └── layout/
│       ├── Sidebar.tsx    # Navigation sidebar
│       └── TopHeader.tsx  # Page header
├── lib/
│   └── mockData.ts        # Mock data for prototype
├── types/
│   └── index.ts           # TypeScript interfaces
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **Custom theme** with PMC brand colors (#EA2724)
- **Google Fonts**: Space Grotesk (headings), Inter (body)
- **Font Awesome** for icons
- **CSS animations** for smooth transitions

### Custom Tailwind Classes
- `pmc-red`, `pmc-red-dark`, `pmc-red-light` - Brand colors
- `font-heading` - Space Grotesk
- `font-body` - Inter
- `rounded-pmc` - 16px border radius

## 🔧 Technical Decisions

### Why App Router?
- Modern Next.js 14+ pattern
- React Server Components for better performance
- Improved layouts and nested routing
- Better loading and error states

### Why TypeScript?
- Type safety prevents bugs
- Better IDE autocomplete
- Self-documenting code
- Easier refactoring

### Why Tailwind CSS?
- Matches original HTML prototype styling
- Fast development with utility classes
- Consistent design system
- Easy to customize

### Component Pattern
All components follow this structure:
- Client components (`'use client'`) for interactivity
- Server components (default) for static content
- TypeScript interfaces for props
- Tailwind for styling

## 📝 Migration Pattern

To convert remaining HTML pages to Next.js:

1. **Create the page file** in `app/[route]/page.tsx`
2. **Extract the main content** from the HTML `<main>` section
3. **Convert HTML to JSX** (className, htmlFor, etc.)
4. **Replace `<a>` with Next.js `<Link>`** for internal navigation
5. **Replace `<img>` with Next.js `<Image>`** for optimization
6. **Extract reusable components** if needed
7. **Add TypeScript types** for props and data
8. **Test the page** renders correctly

### Example HTML to JSX Conversion

```html
<!-- HTML -->
<a href="9-Homepage Dashboard.html" class="bg-red">Click</a>

<!-- JSX -->
<Link href="/" className="bg-pmc-red">Click</Link>
```

## 🐛 Known Issues

- Font Awesome requires Node.js 20+ (currently using 18.17.0 with warnings)
- Some advanced animations may need Framer Motion implementation
- Charts require react-plotly.js integration

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Font Awesome React](https://fontawesome.com/docs/web/use-with/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Next Steps

1. Review the homepage at http://localhost:3000
2. Verify all styling matches the original HTML
3. Create the wizard flow pages (highest priority)
4. Build the Site Manager with tabs
5. Implement the notification drawer
6. Add chart components
7. Create API routes for data fetching
8. Add remaining standalone pages

## ✅ Original Files Preserved

All original HTML files are preserved in:
`/Users/nowshidalamsayem/Downloads/uxpilot-export-1763102066312/`

This Next.js project is in a separate directory and does not modify the originals.
