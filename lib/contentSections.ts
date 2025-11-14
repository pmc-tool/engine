export interface ContentSection {
  id: string;
  title: string;
  description: string;
  isSaved: boolean;
  hasUnsavedChanges: boolean;
  fields: {
    headline?: string;
    subheadline?: string;
    bodyText?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    heroImage?: string;
    imagePosition?: string;
    imageFit?: string;
    overlayOpacity?: string;
    sectionHeight?: string;
    contentAlignment?: string;
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    metaTitle?: string;
    metaDescription?: string;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    enableParallax?: boolean;
    enableAnimations?: boolean;
    customCssClass?: string;
  };
}

export const mockSections: ContentSection[] = [
  {
    id: 'hero',
    title: 'Hero',
    description: 'Main headline, subtext, CTA',
    isSaved: false,
    hasUnsavedChanges: true,
    fields: {
      headline: 'Transform Your Business with Cutting-Edge Technology Solutions',
      subheadline: 'Empowering businesses worldwide with innovative software solutions that drive growth and efficiency',
      bodyText: 'We specialize in creating custom software solutions that help businesses streamline operations, increase productivity, and achieve their digital transformation goals. Our team of expert developers and designers work closely with you to build scalable, secure, and user-friendly applications tailored to your unique needs.',
      primaryCtaText: 'Get Started Free',
      primaryCtaLink: '/signup',
      secondaryCtaText: 'Watch Demo',
      secondaryCtaLink: '/demo',
      heroImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1810f59673-c805ddfb14900a813f82.png',
      imagePosition: 'Center',
      imageFit: 'Cover',
      overlayOpacity: 'None (0%)',
      sectionHeight: 'Full Screen (100vh)',
      contentAlignment: 'Center',
      backgroundColor: '#ffffff',
      textColor: '#1f2937',
      buttonColor: '#2563eb',
      metaTitle: 'TechFlow Solutions - Transform Your Business with Technology',
      metaDescription: 'Empowering businesses worldwide with innovative software solutions. Custom development, cloud services, and digital transformation expertise.',
      showOnMobile: true,
      showOnTablet: true,
      enableParallax: false,
      enableAnimations: false,
      customCssClass: ''
    }
  },
  {
    id: 'about',
    title: 'About',
    description: 'Company story, mission',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'About TechFlow Solutions',
      subheadline: 'Building the future of technology',
      bodyText: 'Founded in 2015, TechFlow Solutions has been at the forefront of digital innovation...',
      backgroundColor: '#f9fafb',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'services',
    title: 'Services',
    description: 'Service cards, descriptions',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Our Services',
      subheadline: 'Comprehensive technology solutions',
      backgroundColor: '#ffffff',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Key features grid',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Powerful Features',
      subheadline: 'Everything you need to succeed',
      backgroundColor: '#f9fafb',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    description: 'Customer reviews',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'What Our Clients Say',
      backgroundColor: '#ffffff',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'team',
    title: 'Team',
    description: 'Team member profiles',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Meet Our Team',
      subheadline: 'Experts dedicated to your success',
      backgroundColor: '#f9fafb',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description: 'Pricing plans, tiers',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Simple, Transparent Pricing',
      subheadline: 'Choose the plan that fits your needs',
      backgroundColor: '#ffffff',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Common questions',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Frequently Asked Questions',
      backgroundColor: '#f9fafb',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Contact form, info',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      headline: 'Get In Touch',
      subheadline: 'We\'d love to hear from you',
      backgroundColor: '#ffffff',
      textColor: '#111827',
      showOnMobile: true,
      showOnTablet: true
    }
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Links, copyright, socials',
    isSaved: true,
    hasUnsavedChanges: false,
    fields: {
      backgroundColor: '#1f2937',
      textColor: '#f9fafb',
      showOnMobile: true,
      showOnTablet: true
    }
  }
];
