import { ContactInfo, Partner, StatCard, TeamMember } from '@/types';

export const companyInfo = {
  name: 'Bevcon Solutions',
  tagline: 'Integrated Industrial Solutions - Access Systems, Bulk Material Handling & Fume Extraction Systems',
  taglineHtml: 'Integrated Industrial Solutions - Access Systems, Bulk Material Handling & <br /> Fume Extraction Systems',
  description: 'Integrated entrance automation, industrial doors, docking equipment, bulk material handling, and fume extraction solutions. Backed by the proven expertise of Bevcon Zentry (industrial doors & docking systems), Spareng Incorporated (material handling equipment spares & services), and JR Fibreglass Industries (fume extraction & FRP/GRP fabrication).',
  foundedYear: 2025,
  location: 'Australia',
  associateCompanies: ['Bevcon Zentry', 'Spareng Incorporated', 'JR Fibreglass Industries'],
  employeeCount: 'Growing Team',
  industries: '20+',
};

export const contactInfo: ContactInfo = {
  phone: '+61420562184',
  email: 'info@bevconsolutions.au',
  address: 'Australia (Address TBD)',
  hours: 'Monday - Friday: 9:00 AM - 5:00 PM AEST',
};

export const stats: StatCard[] = [
  {
    value: '100',
    label: 'End to End Solutions',
    icon: 'check-circle',
    suffix: '%',
    description: 'From design to installation and maintenance',
  },
  {
    value: 'ISO',
    label: 'Quality Certified',
    icon: 'award',
    suffix: '',
    description: 'Backed by ISO certified associate companies',
  },
  {
    value: '20',
    label: 'Engineering Expertise',
    icon: 'lightbulb',
    suffix: '+ Years',
    description: 'Combined experience from operations',
  },
  {
    value: '1000',
    label: 'Proven Technology',
    icon: 'trophy',
    suffix: '+',
    description: 'Installations through our associate companies',
  },
];

export const partners: Partner[] = [
  {
    name: 'Bevcon Zentry',
    logo: '/images/partners/bevcon-zentry-logo.svg',
    tagline: 'Industrial Doors & Docking Equipment',
    description: 'Leading manufacturer and supplier of high speed doors, dock levellers, and industrial docking equipment for warehouses and manufacturing facilities. Bevcon Zentry specializes in engineered door systems with advanced safety features, energy efficiency, and reliable performance for demanding industrial environments.',
    specialization: [
      'High Speed Doors',
      'Dock Levelers (Hydraulic & Mechanical)',
      'Docking Equipment & Weather Sealing',
      'Fire Rated Shutters',
      'Expert Installation & Maintenance',
    ],
    website: 'https://www.bevconzentry.in',
  },
  {
    name: 'Spareng Incorporated',
    logo: '/images/partners/Spareng-incorporated-logo.svg',
    tagline: 'Bulk Material Handling Equipment Spares & Components',
    description: 'Spareng delivers Precision Engineered Components, Equipment Refurbishment, and Expert Technical Support tailored to the Bulk Material Handling Industry, ensuring superior quality, performance, and reliability across all operations.',
    specialization: [
      'Conveyor Components',
      'Crusher Equipment',
      'Screening Equipment',
      'Feeding Equipment',
      'Refurbishment & Technical Consultancy',
    ],
    website: 'https://spareng-incorporated.vercel.app',
  },
  {
    name: 'JR Fibreglass Industries',
    logo: '/jrf logo.jpg',
    tagline: 'Fume Extraction & FRP/GRP Equipment Manufacturing',
    description: 'Established in 1975, JR Fibreglass Industries is a pioneering manufacturer of fume extraction equipment and FRP/GRP fabrication with 50 years of expertise. They hold multiple world records including the largest emergency chlorine scrubber (9500 kg/hr) and biggest FRP scrubber in India (6m diameter). Only Indian company with CE certification for FRP fans.',
    specialization: [
      'Gas Scrubbing & Fume Extraction Systems (3844+ systems manufactured)',
      'High Pressure & Ultra High Volume FRP Fans (CE Certified)',
      'FRP/GRP Fabrication & Storage Tanks',
      'Emergency Chlorine & Chemical Scrubbing Systems',
      'World Record Products & Rare Capabilities',
    ],
    website: 'https://www.jrfibreglass.com',
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
  'CE Certification for European Standards (JR Fibreglass - Only Indian FRP Fan Manufacturer)',
  'BIS Certifications for Indian Standards',
  'Fire Safety Compliance Certifications',
  'Energy Efficiency Ratings',
  'IS-4894 & BS-848 Performance Testing Standards (JR Fibreglass)',
  'ISO-1940 Dynamic Balancing Standards (JR Fibreglass)',
];

export const valuePropositions = [
  {
    title: 'Complete Integration',
    description: 'Single-source solutions from entrance to material flow. Seamless integration between door systems and conveyors for optimized workflow.',
    icon: 'layers',
  },
  {
    title: 'Engineering Excellence',
    description: 'Backed by 20+ years of combined engineering expertise from our Indian associate companies. Custom solutions designed for your specific requirements.',
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
    description: 'Backed by ISO certified associate companies',
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
    description: '1000+ installations through our associate companies',
    icon: 'trophy',
  },
];
