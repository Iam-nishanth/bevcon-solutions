// Core Types for Bevcon Solutions Website

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuSection[];
}

export interface MegaMenuSection {
  title: string;
  description?: string;
  items?: MegaMenuItem[];
  featured?: FeaturedCard[];
  type?: 'overview' | 'list' | 'featured' | 'grid';
}

export interface MegaMenuItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface FeaturedCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Specification[];
  applications: string[];
  benefits: string[];
  images: ProductImage[];
  brochureUrl?: string;
  relatedProducts?: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  isMain?: boolean;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
}

export type ProductCategory = 
  | 'automatic-doors'
  | 'industrial-doors'
  | 'loading-bay'
  | 'material-handling';

export interface Industry {
  id: string;
  slug: string;
  name: string;
  icon: string;
  heroImage: string;
  description: string;
  challenges: string[];
  solutions: IndustrySolution[];
  products: string[]; // Product IDs
  caseStudies: CaseStudy[];
  metaTitle: string;
  metaDescription: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  products: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  products: string[];
  images: string[];
  testimonial?: Testimonial;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  process?: ServiceProcess[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface StatCard {
  value: string;
  label: string;
  icon: string;
  suffix?: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Partner {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  specialization: string[];
  website: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
