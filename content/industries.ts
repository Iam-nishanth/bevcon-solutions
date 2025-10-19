import { Industry } from './industries-types';

export const industries: Industry[] = [
  {
    id: '1',
    name: 'Pharmaceutical & Life Sciences',
    slug: 'pharmaceutical-life-sciences',
    icon: 'FlaskConical',
    shortDescription: 'Sterile, contamination-free access solutions for cleanroom environments',
    heroTitle: 'Pharmaceutical & Life Sciences Solutions',
    heroDescription: 'Precision-engineered entrance automation and material handling systems ensuring contamination-free environments, regulatory compliance, and seamless workflow in pharmaceutical manufacturing and life sciences facilities.',
    image: '/images/industries/pharmaceutical.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Maintaining strict cleanroom classifications (ISO 5-8)',
        'Preventing cross-contamination between zones',
        'Meeting FDA, GMP, EU Annex 1 requirements',
        'Managing personnel flow in aseptic areas',
        'Ensuring hermetic sealing and pressure control',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Specialized entrance automation and material handling for pharmaceutical environments.',
      items: [
        {
          title: 'Cleanroom High-Speed Doors',
          description: 'Hermetically sealed doors minimizing air exchange and contamination risk between cleanroom zones.',
          products: ['High-Speed Doors', 'Fire Rated Shutters'],
        },
        {
          title: 'Sterile Transfer Systems',
          description: 'Automated material transfer maintaining sterility throughout production.',
          products: ['Conveyor Components', 'Material Handling Solutions'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Regulatory Compliance',
          description: 'Meet FDA 21 CFR Part 11, EU GMP Annex 1, ISO 14644 standards.',
        },
        {
          title: 'Contamination Control',
          description: 'Hermetically sealed, smooth-surface designs minimize particle generation.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Material Handling Solutions'],
  },
  {
    id: '2',
    name: 'Food Processing & Beverages',
    slug: 'food-processing-beverages',
    icon: 'UtensilsCrossed',
    shortDescription: 'Hygienic solutions meeting HACCP and food safety standards',
    heroTitle: 'Food Processing & Beverages Solutions',
    heroDescription: 'Food-safe entrance solutions and material handling equipment designed for HACCP compliance, preventing contamination, and withstanding rigorous washdown procedures.',
    image: '/images/industries/food-processing.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Meeting HACCP, FSMA food safety regulations',
        'Preventing pest infiltration and contamination',
        'Maintaining cold chain temperature control',
        'Withstanding high-pressure washdowns',
        'Managing hygiene in wet processing areas',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Purpose-built for demanding hygiene requirements of food processing.',
      items: [
        {
          title: 'Hygienic High-Speed Doors',
          description: 'Stainless steel or food-grade PVC with smooth, crevice-free design.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Cold Storage Doors',
          description: 'Insulated rapid doors minimizing cold air loss and ice buildup.',
          products: ['High-Speed Doors', 'Loading Bay Equipment'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Food Safety Compliance',
          description: 'Meet HACCP, FDA, FSMA requirements with hygienic design.',
        },
        {
          title: 'Energy Efficiency',
          description: 'Reduce HVAC costs in temperature-controlled zones.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Loading Bay Equipment'],
  },
  {
    id: '3',
    name: 'Cold Storage & Warehousing',
    slug: 'cold-storage-warehousing',
    icon: 'Snowflake',
    shortDescription: 'Insulated solutions maintaining cold chain integrity',
    heroTitle: 'Cold Storage & Warehousing Solutions',
    heroDescription: 'Insulated high-speed doors and loading bay solutions minimizing temperature loss, reducing energy costs, and maintaining product quality in freezer, cooler, and ambient environments.',
    image: '/images/industries/cold-storage.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Preventing temperature fluctuations and cold loss',
        'Managing ice buildup on mechanisms',
        'Reducing refrigeration energy costs',
        'Operating in extreme temperatures (-30°C to +5°C)',
        'Maintaining rapid access without losing insulation',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Thermal protection solutions for temperature integrity and efficiency.',
      items: [
        {
          title: 'Freezer High-Speed Doors',
          description: 'Insulated rapid doors with heated frames, operating to -30°C.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Dock Shelters & Seals',
          description: 'Thermal loading bay equipment creating insulated truck seals.',
          products: ['Loading Bay Equipment', 'Dock Shelters'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Energy Cost Reduction',
          description: 'Reduce energy costs up to 30% with rapid closure and insulation.',
        },
        {
          title: 'Frost-Free Operation',
          description: 'Heated frames prevent ice buildup ensuring reliable operation.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Loading Bay Equipment'],
  },
  {
    id: '4',
    name: 'Warehouse & Logistics',
    slug: 'warehouse-logistics',
    icon: 'Warehouse',
    shortDescription: 'High-performance solutions for distribution center efficiency',
    heroTitle: 'Warehouse & Logistics Solutions',
    heroDescription: 'Comprehensive entrance automation and loading bay solutions optimizing throughput, enhancing safety, and supporting the demanding pace of modern logistics.',
    image: '/images/industries/warehouse.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Managing high-volume forklift traffic',
        'Optimizing loading dock turnaround time',
        'Ensuring worker safety in high-activity zones',
        'Controlling climate in multi-temp facilities',
        'Supporting 24/7 operations',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Comprehensive solutions maximizing throughput and safety.',
      items: [
        {
          title: 'Rapid Roll Doors',
          description: 'Ultra-fast doors (up to 2.5 m/s) with self-repairing design.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Complete Loading Bay Systems',
          description: 'Integrated dock levelers, shelters, seals for optimized efficiency.',
          products: ['Loading Bay Equipment', 'Dock Levelers', 'Dock Shelters'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Increased Throughput',
          description: 'Rapid speed reduces dwell time and maximizes capacity.',
        },
        {
          title: 'Enhanced Safety',
          description: 'Advanced sensors and soft edges protect workers and equipment.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Loading Bay Equipment'],
  },
  {
    id: '5',
    name: 'Manufacturing Plants',
    slug: 'manufacturing-plants',
    icon: 'Factory',
    shortDescription: 'Industrial-grade solutions for manufacturing excellence',
    heroTitle: 'Manufacturing Plants Solutions',
    heroDescription: 'Factory doors and material handling equipment built to withstand rigorous manufacturing operations, supporting lean processes and worker safety.',
    image: '/images/industries/manufacturing.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Managing material flow in production',
        'Separating clean and dirty areas',
        'Controlling dust, fumes, and noise',
        'Ensuring fire safety and emergency egress',
        'Withstanding heavy 24/7 use',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Robust industrial solutions for demanding manufacturing.',
      items: [
        {
          title: 'Industrial High-Speed Doors',
          description: 'Heavy-duty doors for frequent use and environment control.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Fire-Rated Barriers',
          description: 'Certified fire shutters compartmentalizing facilities.',
          products: ['Fire Rated Shutters'],
        },
        {
          title: 'Production Line Conveyors',
          description: 'Reliable material handling for production workflow.',
          products: ['Conveyor Components', 'Material Handling Solutions'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Operational Efficiency',
          description: 'Automated systems reduce cycle times and support lean manufacturing.',
        },
        {
          title: 'Fire Safety Compliance',
          description: 'Certified fire-rated doors meet codes and insurance requirements.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Fire Rated Shutters'],
  },
  {
    id: '6',
    name: 'Automotive & Mobility',
    slug: 'automotive-mobility',
    icon: 'Car',
    shortDescription: 'Robust solutions for automotive manufacturing operations',
    heroTitle: 'Automotive & Mobility Solutions',
    heroDescription: 'Industrial doors and material handling supporting lean manufacturing, just-in-time delivery, and rigorous automotive production demands.',
    image: '/images/industries/automotive.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Managing high-frequency assembly line traffic',
        'Protecting paint booths from contamination',
        'Supporting just-in-time material delivery',
        'Withstanding harsh manufacturing environments',
        'Ensuring worker safety around automation',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Heavy-duty entrance and material handling for automotive manufacturing.',
      items: [
        {
          title: 'Heavy-Duty High-Speed Doors',
          description: 'Robust doors designed for 500,000+ cycles per year.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Paint Booth Doors',
          description: 'Specialized doors maintaining booth pressure and preventing overspray.',
          products: ['Fire Rated Shutters', 'High-Speed Doors'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Lean Manufacturing Support',
          description: 'Support just-in-time processes and minimize production delays.',
        },
        {
          title: 'Quality Protection',
          description: 'Controlled environments protect sensitive painting processes.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Fire Rated Shutters'],
  },
  {
    id: '7',
    name: 'E-commerce & Fulfillment',
    slug: 'ecommerce-fulfillment',
    icon: 'Package',
    shortDescription: 'High-speed solutions for rapid order fulfillment',
    heroTitle: 'E-commerce & Fulfillment Solutions',
    heroDescription: 'Rapid access solutions and material handling supporting fast-paced e-commerce demands, enabling same-day delivery and peak season scalability.',
    image: '/images/industries/ecommerce.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Managing peak season volume surges',
        'Optimizing order picking speed',
        'Supporting same-day delivery',
        'Maximizing automation integration',
        'Ensuring 24/7 reliability',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'High-performance solutions for e-commerce velocity.',
      items: [
        {
          title: 'Ultra-Fast Roll Doors',
          description: 'Doors operating up to 2.5 m/s for high-frequency traffic.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Sortation Conveyors',
          description: 'High-speed conveyor systems integrated with WMS.',
          products: ['Conveyor Components', 'Material Handling Solutions'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Order Velocity',
          description: 'Maximize picks per hour and support tight delivery windows.',
        },
        {
          title: 'Automation Integration',
          description: 'Seamless integration with WMS, WCS, and robotics.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Conveyor Components'],
  },
  {
    id: '8',
    name: 'Healthcare Facilities',
    slug: 'healthcare-facilities',
    icon: 'Hospital',
    shortDescription: 'Hygienic, accessible solutions for medical environments',
    heroTitle: 'Healthcare Facilities Solutions',
    heroDescription: 'Entrance solutions prioritizing infection control, accessibility, and emergency egress while maintaining welcoming environments for patients and staff.',
    image: '/images/industries/healthcare.jpg',
    challenges: {
      title: 'Industry Challenges',
      items: [
        'Maintaining sterile environments and infection control',
        'Ensuring ADA accessibility',
        'Managing emergency egress and fire safety',
        'Controlling noise in patient care areas',
        'Meeting healthcare facility codes',
      ],
    },
    solutions: {
      title: 'Our Solutions',
      description: 'Healthcare-specific entrance solutions balancing hygiene and accessibility.',
      items: [
        {
          title: 'Hygienic Entrance Systems',
          description: 'Touchless, automated doors with antimicrobial coatings.',
          products: ['High-Speed Doors'],
        },
        {
          title: 'Operating Room Doors',
          description: 'Hermetically sealed doors maintaining sterile conditions.',
          products: ['High-Speed Doors', 'Fire Rated Shutters'],
        },
      ],
    },
    benefits: {
      title: 'Benefits',
      items: [
        {
          title: 'Infection Prevention',
          description: 'Touchless operation and antimicrobial materials reduce pathogen transmission.',
        },
        {
          title: 'Code Compliance',
          description: 'Meet healthcare requirements for fire safety and accessibility.',
        },
      ],
    },
    keyProducts: ['High-Speed Doors', 'Fire Rated Shutters'],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(industry => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map(industry => industry.slug);
}
