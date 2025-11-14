# Wizard Pages Complete Implementation Guide

## 🎯 Project Goal
Rewrite all 4 wizard pages to EXACTLY match the HTML prototypes.

## 📋 What's Been Done
1. ✅ Created `/lib/themesData.ts` with 12 themes
2. ✅ Created `WIZARD_REWRITE_SUMMARY.md` with complete specifications
3. ✅ Analyzed all HTML prototype files

## 🚀 Quick Start Instructions

### Option 1: AI-Assisted Implementation (Recommended)
Use Claude Code or similar to implement step-by-step:

1. **Start with Theme Page Components:**
   ```bash
   # Ask AI: "Create ThemeCard component based on WIZARD_REWRITE_SUMMARY.md"
   # Then: "Create FilterBar component"
   # Then: "Rewrite /app/wizard/theme/page.tsx with all sections from summary"
   ```

2. **Move to Hosting Page:**
   ```bash
   # "Create HostingPlanCard component"
   # "Create DomainSearchTabs component"
   # "Rewrite /app/wizard/hosting/page.tsx"
   ```

3. **Continue with Customization Page:**
   ```bash
   # "Enhance /app/wizard/customization/page.tsx with AI/Manual toggle"
   # "Add branding upload sections"
   ```

4. **Finish with Review Page:**
   ```bash
   # "Create DeploymentModal component"
   # "Rewrite /app/wizard/review/page.tsx with deployment flow"
   ```

### Option 2: Manual Implementation

Follow the detailed steps in `WIZARD_REWRITE_SUMMARY.md` for each page.

## 📁 Key Files

- `/lib/themesData.ts` - Theme data (already created)
- `/app/wizard/theme/page.tsx` - Theme selection page (needs rewrite)
- `/app/wizard/hosting/page.tsx` - Hosting configuration (needs rewrite)
- `/app/wizard/customization/page.tsx` - Content customization (needs rewrite)
- `/app/wizard/review/page.tsx` - Review and launch (needs rewrite)

## 📚 Reference HTML Files

Location: `/Users/nowshidalamsayem/Downloads/pmcengine final/`

- **Step 1 (Theme):** `2-New Site Wizard - Step 1: Them.html`
- **Step 2 (Hosting):** `3-New Site Wizard - Step 2: Host.html`
- **Step 3 (Customization):** `4-AI / Manual Customization.html`
- **Step 4 (Review):** `5-New Site Wizard - Step 4: Revi.html`

## 🔧 Components Needed

Create these in `/components/wizard/`:

### Priority 1 (Theme Page)
1. `ThemeCard.tsx` - Gradient card with icon and preview
2. `FilterBar.tsx` - Search, category, platform filters
3. `FeatureCard.tsx` - 8 feature cards component
4. `PopularThemeCard.tsx` - Popular themes section

### Priority 2 (Hosting Page)
5. `HostingPlanCard.tsx` - Enhanced plan cards
6. `DomainSearchTabs.tsx` - Domain configuration tabs
7. `SSLCertificateCard.tsx` - SSL selection
8. `AdvancedSettingsAccordion.tsx` - Collapsible settings
9. `ConfigSummarySidebar.tsx` - Cost breakdown sidebar

### Priority 3 (Review Page)
10. `DeploymentModal.tsx` - Deployment flow with terminal
11. `PaymentSummaryCard.tsx` - Payment breakdown

## 🎨 Design System

### Colors
```typescript
pmc-red: #E63946
pmc-dark: #1A1A2E
pmc-gray: #16213E
```

### Gradients
```typescript
// Theme cards
from-blue-500 to-purple-600
from-green-500 to-teal-600
from-purple-500 to-pink-600

// CTA buttons
from-pmc-red to-red-700
```

### Borders & Shadows
```typescript
// Cards
border border-gray-200 rounded-xl shadow-sm

// Selected state
border-2 border-pmc-red
```

## ✅ Testing Checklist

After implementation, verify:
- [ ] Theme page shows all 12 themes
- [ ] Filter bar filters correctly
- [ ] Hosting plan selection works
- [ ] Domain search displays results
- [ ] SSL certificate toggle works
- [ ] Advanced settings accordion expands
- [ ] Customization form validates
- [ ] Review page shows all selections
- [ ] Deployment modal animates
- [ ] All pages are mobile responsive
- [ ] Navigation between pages works

## 📞 Getting Help

1. Check `WIZARD_REWRITE_SUMMARY.md` for detailed specs
2. Check `/lib/themesData.ts` for data structure
3. Look at HTML prototypes for exact structure
4. Existing components show usage patterns

## 🎬 Start Developing

```bash
cd /Users/nowshidalamsayem/Downloads/pmc-engine-nextjs
npm run dev
# Open http://localhost:3000/wizard/theme
```

## 💡 Implementation Strategy

The files are large, so implement in phases:

**Phase 1:** Theme Page (Day 1-2)
- Create components
- Implement all sections
- Test thoroughly

**Phase 2:** Hosting Page (Day 2-3)
- Add new components
- Enhance existing page
- Add sidebar

**Phase 3:** Customization (Day 3-4)
- Enhance form
- Add branding section
- Add AI toggle

**Phase 4:** Review & Launch (Day 4-5)
- Create all cards
- Add deployment flow
- Add success modal

## 🚨 Critical Requirements

- Include ALL sections from HTML prototypes
- Use 12 themes (not 6)
- Maintain mobile responsiveness
- Keep existing layout components
- Follow exact HTML structure

This is your roadmap to success! Follow it step-by-step for production-ready wizard pages.
