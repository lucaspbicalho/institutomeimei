export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: number
  suffix?: string
  label: string
  formatLocale?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  tag: string
}

export interface HelpOption {
  id: string
  title: string
  description: string
  icon: 'heart' | 'hand' | 'gift' | 'users' | 'user-plus' | 'heart-hand'
  cta: string
  href: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  image: string
  imageAlt: string
  href: string
}

// News section removed per site update — type kept for future use

export interface FooterLinkGroup {
  title: string
  links: NavLink[]
}
