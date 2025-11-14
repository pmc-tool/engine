# Wizard Pages Rewrite Summary

## Overview
This document summarizes the complete rewrite of all 4 wizard pages to match the HTML prototypes exactly.

## Files Created/Modified

### Data Files
1. `/lib/themesData.ts` - ✅ CREATED
   - 12 theme definitions with all metadata
   - 8 feature cards data
   - 3 popular themes data
   - Categories and platforms arrays

### Components Needed (Create these in `/components/wizard/`)
1. `ThemeCard.tsx` - Theme card component with gradient, icon, preview overlay
2. `FeatureCard.tsx` - Feature card for "What's Included" section
3. `PopularThemeCard.tsx` - Popular theme card component
4. `ThemeComparisonTable.tsx` - Comparison table component
5. `FilterBar.tsx` - Search, category, platform filters with view toggle
6. `HostingPlanCard.tsx` - Enhanced hosting plan cards
7. `DomainTabs.tsx` - Purchase/Connect/Subdomain tabs
8. `SSLSelector.tsx` - SSL certificate selection
9. `AdvancedSettings.tsx` - Accordion for advanced settings
10. `ConfigSummary.tsx` - Cost breakdown sidebar
11. `DeploymentModal.tsx` - Terminal logs deployment interface
12. `PaymentSummary.tsx` - Payment card with breakdown

## Page 1: Theme Selection (`/app/wizard/theme/page.tsx`)

### Must Include:
1. **Filter Bar**
   - Search input
   - Category dropdown (All Categories, Business, E-Commerce, Portfolio, Blog, Restaurant, Agency)
   - Platform dropdown (All Platforms, WordPress, HTML/CSS, React, Vue)
   - Grid/List view toggle
   - "12 themes available" count

2. **12 Theme Cards** (not 6!)
   - Gradient background (from-blue-500 to-purple-600 style)
   - Icon overlay (fa-briefcase, fa-store, etc.)
   - Preview button on hover
   - Theme name and description
   - 3 tags (category, platform, responsive)
   - Rating with stars
   - Download count
   - Purchase date
   - Select button (or "Selected" for chosen theme)
   - Selected state with red border and checkmark

3. **What's Included Section**
   - "What's Included with Every Theme" heading
   - 8 feature cards in 4-column grid
   - Each card: icon, title, description
   - Icons: mobile, wand-magic, gauge-high, shield, palette, magnifying-glass, code, headset

4. **Theme Comparison Table**
   - "Compare Themes" heading
   - Table with 4 themes: Corporate Pro, ShopMaster, Creative Portfolio, Restaurant Deluxe
   - Rows: Pages Included, E-Commerce Ready, Blog Functionality, Contact Forms, Booking System, Multi-language
   - Check/X marks for features

5. **Most Popular This Month**
   - 3 cards in gradient backgrounds (blue, purple, green)
   - #1, #2, #3 badges
   - Fire icon
   - Theme name, description, rating, downloads

6. **Need More Themes Section**
   - Dark gradient background (stone-800 to stone-900)
   - "Browse thousands of premium themes" text
   - "Browse Marketplace" and "View by Category" buttons

7. **Need Help Choosing Section**
   - 2 cards side by side
   - AI Theme Recommender card (blue)
   - Talk to an Expert card (purple)

8. **Action Buttons**
   - Back button (disabled on step 1)
   - "Save & Exit" button
   - "Next: Hosting & Domain" button with arrow

## Page 2: Hosting & Domain (`/app/wizard/hosting/page.tsx`)

### Must Include:
1. **Environment Selection**
   - 2 cards: Production (selected) and Staging
   - Production: Globe icon, features list, selected state
   - Staging: Flask icon, "Pro Plan Required" badge

2. **Hosting Plans (3 cards)**
   - Starter (Free): Basic features
   - Professional ($12/mo): RECOMMENDED badge, selected state
   - Enterprise ($49/mo): Premium badge
   - Each with feature checkmarks and pricing

3. **Pro Tip Box**
   - Blue info box about plan upgrades and traffic spikes

4. **Domain Configuration**
   - 3 tabs: Purchase New Domain | Connect Existing Domain | Use Subdomain
   - Domain search input with "Search" button
   - 4 domain results:
     - myportfolio.com (Available, green, $12.99/year)
     - myportfolio.net (Available, blue, $14.99/year)
     - myportfolio.io (Available, purple, $29.99/year)
     - myportfolio.org (Not Available, grayed out)
   - Premium domains info box (purple)

5. **SSL Certificate Section**
   - 2 cards side by side
   - Auto SSL (Free) - Let's Encrypt, selected with checkmark
   - Premium SSL ($49/year) - Organization validation
   - Green success box: "SSL will be automatically configured"

6. **Advanced Settings Accordion**
   - 5 collapsible sections:
     - CDN Configuration
     - Database Settings
     - Environment Variables
     - Security Headers
     - Performance Optimization
   - "Expand All" button at top

7. **Configuration Summary Sidebar (Sticky)**
   - Theme info with edit button
   - Environment badge (Production)
   - Hosting Plan (Professional with badge)
   - Domain (myportfolio.com, $12.99/year)
   - SSL Certificate (Auto SSL, Free)
   - Monthly Cost breakdown
   - Total: $13.08/mo
   - "First Month 50% Off" promo box
   - Guarantees: Cancel anytime, 30-day money-back, Free migrations
   - "Need Help?" purple card with chat button

8. **Action Buttons**
   - "Back to Theme" button
   - "Save as Draft" button
   - "Continue to Content Setup" button

## Page 3: Customization (`/app/wizard/customization/page.tsx`)

### Must Include:
1. **AI Assist vs Manual Toggle**
   - Tab-style toggle at top
   - "AI Assist (uses Connects)" - active
   - "Manual setup"
   - "Connects: 30 available" badge
   - "Buy Connects" link

2. **AI Assist Mode Form**
   - Business/Project Name input (required)
   - Industry input
   - One-line Description textarea (140 char limit with counter)
   - Target Audience pills (6 options): Local customers, B2B, B2C, Students, NGOs, Global
   - Tone of Voice dropdown: Professional, Friendly, Playful, Bold
   - Website Content Language dropdown

3. **Optional Branding Section**
   - Primary Brand Color picker with hex input
   - 3 upload areas: Dark Logo, Light Logo, Favicon
   - Dashed border upload boxes

4. **Generate with AI CTA**
   - Red gradient background (pmc-red to red-700)
   - "Ready to Generate Your Site?" heading
   - "Generate with AI" button (~3-5 Connects)
   - "Skip AI and use placeholder content" link

5. **Manual Setup Mode** (when toggled)
   - Site Name input (required)
   - Website Content Language dropdown
   - Same branding section
   - Simplified form

6. **Action Buttons**
   - "Back" button
   - "Next - Review & Launch" button

## Page 4: Review & Launch (`/app/wizard/review/page.tsx`)

### Must Include:
1. **Site Overview Card**
   - Red gradient header with icon
   - Site name: "Restaurant Delight"
   - Domain: "restaurantdelight.com"
   - "Production" badge
   - 4 stat boxes: Theme, Hosting Plan, Content Method, Platform

2. **Theme Configuration Card**
   - Theme Name, Version, License, Purchase Date
   - Edit button
   - Blue info box: "Theme Features Included"

3. **Hosting & Domain Card**
   - Domain Configuration section (Domain Name, Type, SSL Status, DNS Status)
   - Hosting Plan Details (Plan Type, Environment, Storage, Bandwidth, PHP/MySQL versions)
   - Server Location with icon

4. **Content Configuration Card**
   - Purple AI badge
   - Pages Generated: 8 pages, 24 menu items, 32 images, SEO Metadata
   - Generated Pages list (Home, About Us, Menu, Reservations, Gallery...)
   - "View all 8 pages" expandable

5. **Additional Settings Card**
   - 4 settings with toggle badges:
     - Auto Backups (Enabled/green)
     - CDN (Enabled/blue)
     - Performance Optimization (Enabled/purple)
     - Email Notifications (Enabled/orange)

6. **Pre-Deployment Checklist**
   - 5 items all checked (green checkmarks)
   - Theme Configuration Complete
   - Domain & SSL Verified
   - Database Initialized
   - Content Ready for Deployment
   - Security Measures Active

7. **Estimated Deployment Time Card**
   - Blue gradient background
   - "3-5 minutes" large text
   - Breakdown: Server provisioning ~1 min, File transfer ~2 min, Configuration ~1 min

8. **Deployment Summary Sidebar (Sticky)**
   - Site Name, Domain, Environment, Theme, Platform, Content Method, Server Location
   - Readiness Status: 100% progress bar
   - "Launch Site Now" button (red)
   - "Preview Configuration" button
   - "Need Help?" purple support card
   - "Deployment Tips" card with 4 checkmarks

9. **Deployment Modal** (When Launch is clicked)
   - Modal header: "Deploying Your Site" with domain and status badge
   - 4 progress steps: Server Setup, File Transfer, Configuration, Go Live
   - Overall progress bar (47%)
   - Terminal logs section (black background, green text):
     - Multiple log lines: [INFO], [SUCCESS], [ERROR] colors
     - Real deployment steps
     - Animated loading indicator
   - Side panel: Deployment Progress with 6 checkable steps
   - Export and Pause buttons

10. **Success Modal** (After deployment)
    - Large green checkmark
    - "Site Deployed Successfully!" heading
    - 3 stat boxes: Deployment Time, Files Deployed, Success Rate
    - "Visit Your Live Site" button (red)
    - "Go to Site Manager" button
    - "Return to Dashboard" link

11. **Action Buttons**
    - "Back to Content Setup" button
    - "Save as Draft" button
    - "Launch Site" button (red, large, with rocket icon)

## Styling Notes

All pages must use:
- Tailwind CSS with custom colors: pmc-red (#E63946)
- Font families: Space Grotesk for headings, Inter for body
- Border radius: rounded-card (16px)
- Shadows: shadow-saas, shadow-saas-lg
- Consistent spacing and responsive design
- FontAwesome icons
- Gradient backgrounds where specified
- White cards with stone-200 borders
- Stone-50 background for main content

## Components to Keep

Keep using these existing components:
- `Sidebar` (from layout)
- `TopHeader` (from layout)
- `MobileMenu` (from layout)
- `WizardStepper` (from ui)

## Testing Checklist

- [ ] All 4 pages load without errors
- [ ] Navigation between pages works
- [ ] All 12 themes display correctly
- [ ] Filter bar filters themes
- [ ] Hosting plan selection works
- [ ] Domain search displays results
- [ ] SSL selection toggles
- [ ] Advanced settings accordion expands
- [ ] Customization form validates
- [ ] Review page shows all selections
- [ ] Deployment modal animates
- [ ] Success modal appears after "deployment"
- [ ] Mobile responsive on all pages
- [ ] All icons display correctly
- [ ] All gradients render properly
