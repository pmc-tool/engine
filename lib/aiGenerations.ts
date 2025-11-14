import {
  faBolt,
  faFileLines,
  faImage,
  faChartLine,
  faHome,
  faUserGroup,
  faStar,
  faComments,
  faTag,
  faCircleQuestion,
  faEnvelope,
  faNewspaper,
  faRocket,
  faPenFancy,
  faFileAlt,
  faLanguage,
  faMagnifyingGlass,
  faArrowsRotate,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface AIGeneration {
  id: string;
  title: string;
  type: 'page' | 'section' | 'content' | 'headlines';
  typeBadge: string;
  description: string;
  timestamp: string;
  wordCount: number;
  tone: string;
  isApplied: boolean;
}

export interface ContentTemplate {
  icon: IconDefinition;
  title: string;
  description: string;
  isPopular?: boolean;
}

export interface AICapability {
  icon: IconDefinition;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
}

export const aiUsageStats = {
  generationsUsed: 47,
  generationsTotal: 100,
  pagesGenerated: 142,
  imagesCreated: 89,
  qualityScore: 94
};

export const mockGenerations: AIGeneration[] = [
  {
    id: '1',
    title: 'About Us Page',
    type: 'page',
    typeBadge: 'Page',
    description: 'Company history and team introduction for My Portfolio Site',
    timestamp: '2 hours ago',
    wordCount: 847,
    tone: 'Professional',
    isApplied: true
  },
  {
    id: '2',
    title: 'Product Features Section',
    type: 'section',
    typeBadge: 'Section',
    description: 'Feature highlights for E-Commerce Store landing page',
    timestamp: '5 hours ago',
    wordCount: 423,
    tone: 'Creative',
    isApplied: false
  },
  {
    id: '3',
    title: 'Menu Descriptions',
    type: 'content',
    typeBadge: 'Content',
    description: 'Restaurant menu item descriptions for Restaurant Website',
    timestamp: '1 day ago',
    wordCount: 612,
    tone: 'Casual',
    isApplied: true
  },
  {
    id: '4',
    title: 'Hero Section Headlines',
    type: 'headlines',
    typeBadge: 'Headlines',
    description: 'Multiple headline variations for homepage hero',
    timestamp: '2 days ago',
    wordCount: 156,
    tone: 'Professional',
    isApplied: false
  }
];

export const contentTemplates: ContentTemplate[] = [
  {
    icon: faHome,
    title: 'Homepage Hero',
    description: 'Compelling hero section with headline and CTA',
    isPopular: true
  },
  {
    icon: faUserGroup,
    title: 'About Us',
    description: 'Company story and team introduction'
  },
  {
    icon: faStar,
    title: 'Features Section',
    description: 'Product or service features highlights'
  },
  {
    icon: faComments,
    title: 'Testimonials',
    description: 'Customer reviews and social proof'
  },
  {
    icon: faTag,
    title: 'Pricing Table',
    description: 'Plans and pricing comparison'
  },
  {
    icon: faCircleQuestion,
    title: 'FAQ Section',
    description: 'Frequently asked questions'
  },
  {
    icon: faEnvelope,
    title: 'Contact Form',
    description: 'Contact section with form'
  },
  {
    icon: faNewspaper,
    title: 'Blog Post',
    description: 'Article with introduction and body'
  },
  {
    icon: faRocket,
    title: 'Call to Action',
    description: 'Conversion-focused CTA section'
  }
];

export const aiCapabilities: AICapability[] = [
  {
    icon: faPenFancy,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    title: 'Copywriting',
    description: 'Generate compelling headlines, product descriptions, marketing copy, and call-to-action text.',
    features: ['Headlines & Taglines', 'Product Descriptions', 'Marketing Copy']
  },
  {
    icon: faFileAlt,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
    title: 'Long-Form Content',
    description: 'Create full pages, blog posts, articles, and comprehensive documentation with proper structure.',
    features: ['Complete Web Pages', 'Blog Articles', 'Documentation']
  },
  {
    icon: faImage,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'Image Generation',
    description: 'Create custom images, illustrations, and graphics that match your brand and content perfectly.',
    features: ['Hero Images', 'Product Photos', 'Illustrations']
  },
  {
    icon: faLanguage,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
    title: 'Translation',
    description: 'Translate your content into multiple languages while maintaining tone and context.',
    features: ['50+ Languages', 'Context Preservation', 'Cultural Adaptation']
  },
  {
    icon: faMagnifyingGlass,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    title: 'SEO Optimization',
    description: 'Optimize content for search engines with keyword integration and meta descriptions.',
    features: ['Keyword Integration', 'Meta Descriptions', 'Content Structure']
  },
  {
    icon: faArrowsRotate,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    title: 'Content Rewriting',
    description: 'Improve existing content, change tone, or create variations while maintaining the core message.',
    features: ['Tone Adjustment', 'Content Variations', 'Simplification']
  }
];

export const contentTypes = [
  { value: 'page', label: 'Page', icon: faFileLines },
  { value: 'headline', label: 'Headline', icon: faFileLines },
  { value: 'paragraph', label: 'Paragraph', icon: faFileLines },
  { value: 'list', label: 'List', icon: faFileLines }
];

export const toneOptions = ['Professional', 'Casual', 'Creative', 'Technical'];

export const faqItems = [
  {
    question: 'How many AI generations do I get per month?',
    answer: 'Your plan includes 100 AI generations per month. This covers all types of content generation including pages, sections, copy, and images. Unused generations do not roll over to the next month.'
  },
  {
    question: 'Can I edit AI-generated content?',
    answer: 'Yes! All generated content can be edited directly in the preview pane before applying it to your site. You can also regenerate specific sections or adjust the tone and style.'
  },
  {
    question: 'What languages are supported?',
    answer: 'The AI supports content generation and translation in over 50 languages including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, and many more.'
  },
  {
    question: 'Is the content SEO-optimized?',
    answer: 'Yes, all generated content follows SEO best practices including proper heading structure, keyword integration, and meta descriptions. You can also specify keywords you want to target.'
  },
  {
    question: 'Can I save and reuse templates?',
    answer: 'Absolutely! You can save your generation settings as custom templates for future use. This is perfect for maintaining consistency across multiple pages or sites.'
  }
];
