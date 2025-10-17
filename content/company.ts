import { ContactInfo, Partner, StatCard, TeamMember } from '@/types';

export const companyInfo = {
  name: 'Bevcon Solutions',
  tagline: 'Industrial Access & Material Flow Solutions',
  description: 'Integrated entrance automation, industrial doors, loading bay equipment, and bulk material handling solutions. Backed by the proven expertise of Bevcon Zentry (industrial doors & loading bay systems) and Spareng Incorporated (material handling equipment spares & services).',
  foundedYear: 2024,
  location: 'Australia',
  parentCompanies: ['Bevcon Zentry', 'Spareng Incorporated'],
  employeeCount: 'Growing Team',
  industries: '15+',
};

export const contactInfo: ContactInfo = {
  phone: '+61-XXX-XXX-XXX',
  email: 'info@bevconsolutions.au',
  address: 'Australia (Address TBD)',
  hours: 'Monday - Friday: 9:00 AM - 5:00 PM AEST',
};

export const stats: StatCard[] = [
  {
    value: '1000',
    label: 'Global Installations',
    icon: 'check-circle',
    suffix: '+',
    description: 'Through our parent companies',
  },
  {
    value: '20',
    label: 'Combined Experience',
    icon: 'calendar',
    suffix: '+',
    description: 'Years of industry expertise',
  },
  {
    value: 'Technical Support',
    label: 'Support Available',
    icon: 'headphones',
  },
  {
    value: '15',
    label: 'Industries Served',
    icon: 'building',
    suffix: '+',
  },
];

export const partners: Partner[] = [
  {
    name: 'Bevcon Zentry',
    logo: '/images/partners/bevcon-zentry-logo.svg',
    tagline: 'Industrial Doors & Loading Bay Solutions',
    description: 'Leading manufacturer and supplier of high speed doors, dock levellers, and industrial loading bay solutions for warehouses and manufacturing facilities. Bevcon Zentry specializes in engineered door systems with advanced safety features, energy efficiency, and reliable performance for demanding industrial environments.',
    specialization: [
      'High Speed Doors',
      'Dock Levelers (Hydraulic & Mechanical)',
      'Dock Shelters & Weather Sealing',
      'Fire Rated Shutters',
      'Expert Installation & Maintenance',
    ],
    website: 'https://www.bevconzentry.in',
  },
  {
    name: 'Spareng Incorporated',
    logo: '/images/partners/Spareng-incorporated-logo.svg',
    tagline: 'Bulk Material Handling Equipment Spares & Components',
    description: 'Leading supplier of Bulk Material Handling Equipment (BMHE) spare parts including conveyor components, crusher spares, and screening equipment for industrial applications. Spareng provides precision-engineered spare parts, repairs & refurbishment, technical consultancy, and after-sales services for mining, processing, and bulk material handling industries.',
    specialization: [
      'Conveyor Parts (Idlers, Rollers, Belts)',
      'Pulleys & Drums for Material Handling',
      'Crusher Spares & Components',
      'Screening Equipment & Safety Systems',
      'Repairs, Refurbishment & Technical Consultancy',
    ],
    website: 'https://spareng-incorporated.vercel.app',
  },
];

export const leadership: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'Chief Executive Officer',
    bio: 'With over 25 years of experience in industrial automation and entrance systems, John leads Bevcon Solutions with a vision for innovation and customer excellence.',
    image: '/images/team/john-doe.jpg',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    position: 'Chief Technology Officer',
    bio: 'Jane oversees our R&D and engineering teams, driving innovation in smart building integration and IoT-enabled industrial solutions.',
    image: '/images/team/jane-smith.jpg',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Raj Kumar',
    position: 'Head of Operations',
    bio: 'Raj manages our nationwide installation and service network, ensuring timely delivery and exceptional customer support across India.',
    image: '/images/team/raj-kumar.jpg',
    linkedin: 'https://linkedin.com/in/rajkumar',
  },
];

export const certifications = [
  'ISO 9001:2015 - Quality Management',
  'ISO 14001:2015 - Environmental Management',
  'ISO 45001:2018 - Occupational Health & Safety',
  'CE Certification for European Standards',
  'BIS Certifications for Indian Standards',
  'Fire Safety Compliance Certifications',
  'Energy Efficiency Ratings',
];

export const valuePropositions = [
  {
    title: 'Complete Integration',
    description: 'Single-source solutions from entrance to material flow. Seamless integration between door systems and conveyors for optimized workflow.',
    icon: 'layers',
  },
  {
    title: 'Engineering Excellence',
    description: 'Backed by 20+ years of combined engineering expertise from our Indian parent companies. Custom solutions designed for your specific requirements.',
    icon: 'cog',
  },
  {
    title: 'Australian & Indian Support',
    description: 'Local Australian presence with access to extensive Indian manufacturing and engineering capabilities. Comprehensive support network.',
    icon: 'map-pin',
  },
];

export const whyChooseUs = [
  {
    title: 'End-to-End Solutions',
    description: 'From design to installation and maintenance',
    icon: 'check-circle',
  },
  {
    title: 'Quality Certified',
    description: 'Backed by ISO certified parent companies',
    icon: 'award',
  },
  {
    title: 'Engineering Expertise',
    description: '20+ years combined experience from Indian operations',
    icon: 'lightbulb',
  },
  {
    title: 'Comprehensive Support',
    description: 'Responsive service with certified technicians',
    icon: 'phone',
  },
  {
    title: 'Proven Technology',
    description: '1000+ installations through our parent companies',
    icon: 'trophy',
  },
];
