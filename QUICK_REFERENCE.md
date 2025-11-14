# Quick Reference - Wizard Pages Rewrite

## What Has Been Done ✅

### 1. Data Layer
- **File:** `/lib/themesData.ts`
- **Contents:**
  - 12 complete theme definitions
  - 8 feature cards data
  - 3 popular themes data
  - Categories and platforms arrays
  - TypeScript interfaces

### 2. Documentation
- **WIZARD_REWRITE_SUMMARY.md** - Complete specifications for all 4 pages
- **WIZARD_IMPLEMENTATION_GUIDE.md** - Step-by-step implementation guide
- **This file** - Quick reference

### 3. Example Components
- `/components/wizard/ThemeCard.tsx` - Fully functional theme card with:
  - Gradient background
  - Icon overlay
  - Hover preview button
  - Rating stars
  - Tags
  - Select button
  - Selected state

- `/components/wizard/FilterBar.tsx` - Complete filter bar with:
  - Search input
  - Category dropdown
  - Platform dropdown
  - Grid/List view toggle
  - Result count

## What Needs To Be Done 🔨

### Phase 1: Complete Theme Page Components
Create in `/components/wizard/`:
1. `FeatureCard.tsx` - Simple card for 8 features
2. `PopularThemeCard.tsx` - Card with rank badge and gradient
3. `ThemeComparisonTable.tsx` - Table component

Then update `/app/wizard/theme/page.tsx` to include:
- Filter bar (use FilterBar component)
- 12 theme cards (use ThemeCard component)
- What's Included section (8 FeatureCard components)
- Comparison table
- Popular themes section (3 PopularThemeCard components)
- Need Help section
- Action buttons

### Phase 2: Complete Hosting Page
Create in `/components/wizard/`:
4. `EnvironmentCard.tsx` - Production/Staging selection
5. `HostingPlanCard.tsx` - Enhanced plan card
6. `DomainSearchTabs.tsx` - Tab component for domain configuration
7. `DomainResult.tsx` - Individual domain search result
8. `SSLCertificateCard.tsx` - SSL selection card
9. `AdvancedSettingsAccordion.tsx` - Collapsible sections
10. `ConfigSummarySidebar.tsx` - Sticky sidebar with cost breakdown

Then update `/app/wizard/hosting/page.tsx`

### Phase 3: Complete Customization Page
Enhance `/app/wizard/customization/page.tsx` with:
- AI/Manual toggle (already exists, keep it)
- Enhanced business info form
- Target audience pills
- Tone of voice selection
- Brand color picker
- Logo upload sections
- AI generation CTA with gradient

### Phase 4: Complete Review Page
Create in `/components/wizard/`:
11. `SiteOverviewCard.tsx` - Site summary with stats
12. `ConfigurationCard.tsx` - Reusable config card
13. `PreDeploymentChecklist.tsx` - Checklist component
14. `DeploymentModal.tsx` - Modal with terminal logs
15. `SuccessModal.tsx` - Success screen

Then rewrite `/app/wizard/review/page.tsx`

## File Locations 📁

### HTML Prototypes (Reference)
```
/Users/nowshidalamsayem/Downloads/pmcengine final/
├── 2-New Site Wizard - Step 1: Them.html (Theme page)
├── 3-New Site Wizard - Step 2: Host.html (Hosting page)
├── 4-AI / Manual Customization.html (Customization page)
└── 5-New Site Wizard - Step 4: Revi.html (Review page)
```

### Next.js Project
```
/Users/nowshidalamsayem/Downloads/pmc-engine-nextjs/
├── lib/
│   └── themesData.ts ✅ DONE
├── components/
│   └── wizard/
│       ├── ThemeCard.tsx ✅ DONE
│       ├── FilterBar.tsx ✅ DONE
│       └── [10 more to create] ⏳ TODO
└── app/
    └── wizard/
        ├── theme/page.tsx ⏳ REWRITE NEEDED
        ├── hosting/page.tsx ⏳ REWRITE NEEDED
        ├── customization/page.tsx ⏳ REWRITE NEEDED
        └── review/page.tsx ⏳ REWRITE NEEDED
```

## Key Design Patterns 🎨

### Component Props Pattern
```typescript
interface ComponentProps {
  // Data
  data: DataType;

  // State
  isSelected?: boolean;
  isOpen?: boolean;

  // Callbacks
  onSelect?: (id: string) => void;
  onChange?: (value: string) => void;

  // Styling
  className?: string;
}
```

### Card Styling Pattern
```jsx
<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all">
  {/* Content */}
</div>
```

### Gradient Pattern
```jsx
<div className="bg-gradient-to-br from-blue-500 to-purple-600">
  {/* Content */}
</div>
```

### Selected State Pattern
```jsx
className={`border-2 ${
  isSelected ? 'border-pmc-red' : 'border-gray-200'
}`}
```

## Color Reference 🎨

```typescript
Primary Red: #E63946 (pmc-red)
Dark: #1A1A2E (pmc-dark)
Gray: #16213E (pmc-gray)
Success: #10B981 (green-600)
Warning: #F59E0B (amber-500)
Info: #3B82F6 (blue-500)
```

## Icon Usage 💡

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcon } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faIcon} className="text-pmc-red" />

// Or use className with fa- prefix
<i className="fas fa-check text-green-600"></i>
```

## State Management Pattern 📊

Each wizard page should have:
```typescript
const [selectedTheme, setSelectedTheme] = useState('');
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('All Categories');
const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
// etc.
```

## Testing Commands 🧪

```bash
# Start dev server
cd /Users/nowshidalamsayem/Downloads/pmc-engine-nextjs
npm run dev

# Test wizard pages
open http://localhost:3000/wizard/theme
open http://localhost:3000/wizard/hosting
open http://localhost:3000/wizard/customization
open http://localhost:3000/wizard/review
```

## Next Steps 🚀

1. **Read** `WIZARD_REWRITE_SUMMARY.md` for complete specifications
2. **Follow** `WIZARD_IMPLEMENTATION_GUIDE.md` for step-by-step instructions
3. **Reference** ThemeCard.tsx and FilterBar.tsx for component patterns
4. **Use** `/lib/themesData.ts` for data
5. **Copy** HTML structure from prototype files
6. **Test** each page as you build it

## Success Criteria ✅

Your implementation is complete when:
- [ ] All 4 wizard pages render without errors
- [ ] All 12 themes display correctly
- [ ] Filters work and filter themes
- [ ] Hosting plan selection works
- [ ] Domain search shows results
- [ ] Customization form validates
- [ ] Review page shows all selections
- [ ] Deployment modal animates
- [ ] All pages are mobile responsive
- [ ] Navigation between pages works smoothly

## Need Help? 💬

1. Check the detailed specs in `WIZARD_REWRITE_SUMMARY.md`
2. Follow the guide in `WIZARD_IMPLEMENTATION_GUIDE.md`
3. Look at example components for patterns
4. Reference HTML prototypes for exact structure
5. Check `/lib/themesData.ts` for data structure

Good luck with your implementation! 🎉
