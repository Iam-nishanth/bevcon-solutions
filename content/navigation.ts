import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  // {
  //   label: 'Solutions',
  //   href: '/solutions',
  //   twoLevelMenu: true,
  //   megaMenu: [
  //     {
  //       title: 'Solutions',
  //       description: 'Explore our range of industrial doors, high-speed doors, docking equipment, material handling, and fume extraction solutions.',
  //       type: 'overview',
  //       href: '/solutions',
  //     },
  //     {
  //       title: 'Products',
  //       type: 'category',
  //       expandable: true,
  //       subItems: [
  //         { label: 'High-Speed Doors', href: '/products/high-speed-doors' },
  //         { label: 'Docking Equipment / Dock Levellers', href: '/products/dock-levelers' },
  //         { label: 'Conveyor Components', href: '/products/conveyor-components' },
  //         { label: 'Fume Extraction & Scrubbing Systems', href: '/products/fume-extraction-scrubbing-systems' },
  //         { label: 'FRP - GRP Equipments', href: '/products/frp-grp-equipments' },
  //       ],
  //     },
  //     {
  //       title: 'Solutions for every industry',
  //       type: 'category',
  //       expandable: true,
  //       subItems: [
  //         { label: 'Pharmaceutical & Life Sciences', href: '/industries/pharmaceutical' },
  //         { label: 'Food Processing & Beverages', href: '/industries/food-beverage' },
  //         { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics' },
  //         { label: 'Manufacturing Plants', href: '/industries/manufacturing' },
  //         { label: 'Cold Storage', href: '/industries/cold-storage' },
  //         { label: 'Automotive Industry', href: '/industries/automotive' },
  //       ],
  //     },
  //     {
  //       title: 'Solutions by topic',
  //       type: 'category',
  //       expandable: true,
  //       subItems: [
  //         { label: 'Entrance Automation', href: '/solutions/entrance-automation' },
  //         { label: 'Docking Solutions', href: '/solutions/docking-solutions' },
  //         { label: 'Material Handling', href: '/solutions/material-handling' },
  //         { label: 'Fume Extraction Systems', href: '/solutions/fume-extraction' },
  //         { label: 'Environmental Control', href: '/solutions/environmental-control' },
  //       ],
  //     },
  //   ],
  // },
  {
    label: 'Products',
    href: '/products',
    megaMenu: [
      {
        title: 'Door Systems',
        type: 'list',
        items: [
          { label: 'High-Speed Doors', href: '/products/high-speed-doors' },
          { label: 'Fire Rated Shutters', href: '/products/fire-rated-shutters' },
          { label: 'Dock Levelers', href: '/products/dock-levelers' },
          { label: 'Environmental Systems', href: '' },
          { label: 'Fume Extraction & Scrubbing Systems', href: '/products/fume-extraction-scrubbing-systems' },
          { label: 'FRP - GRP Equipments', href: '/products/frp-grp-equipments' },
        ],
      },
      {
        title: 'Bulk Material Handling',
        type: 'list',
        items: [
          { label: 'Conveyor Components', href: '/products/conveyor-components' },
          { label: 'Crushing Equipment', href: '/products/crushing-equipment' },
          { label: 'Crusher Spares', href: '/products/crusher-spares' },
          { label: 'Vibrating Screens', href: '/products/vibrating-screens' },
          { label: 'Mechanical Vibro Feeder', href: '/products/mechanical-vibro-feeder' },
          { label: 'Material Handling', href: '/products/material-handling' },
        ],
      },
      {
        title: 'Our Brands',
        type: 'overview',
        description: 'Premium quality products from world-class manufacturers',
        items: [
          { label: 'View All Products', href: '/products' },
          { label: 'Nergeco - High-Speed Doors', href: '/products/high-speed-doors' },
          { label: 'SKB - Fire Rated Shutters', href: '/products/fire-rated-shutters' },
          { label: 'Spareng - Material Handling', href: '/products/material-handling' },
          { label: 'JR Fibreglass - Fume Extraction', href: '/products/fume-extraction-scrubbing-systems' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: [
      {
        title: 'Manufacturing & Production',
        type: 'list',
        items: [
          { label: 'Pharmaceutical & Life Sciences', href: '/industries/pharmaceutical', icon: 'pill' },
          { label: 'Food Processing & Beverages', href: '/industries/food-beverage', icon: 'utensils' },
          { label: 'Automotive & Mobility', href: '/industries/automotive', icon: 'car' },
          { label: 'Heavy Industry (Steel & Metal)', href: '/industries/heavy-industry', icon: 'factory' },
          { label: 'Manufacturing Plants', href: '/industries/manufacturing', icon: 'cog' },
          { label: 'Chemical & Process Industries', href: '/industries/chemical', icon: 'flask' },
        ],
      },
      {
        title: 'Logistics & Storage',
        type: 'list',
        items: [
          { label: 'Cold Storage & Warehousing', href: '/industries/cold-storage', icon: 'snowflake' },
          { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics', icon: 'warehouse' },
          { label: 'Cargo & Freight Hubs', href: '/industries/cargo-freight', icon: 'plane' },
        ],
      },
      {
        title: 'Specialized Sectors',
        type: 'list',
        items: [
          { label: 'Mining Industry', href: '/industries/mining', icon: 'pickaxe' },
        ],
      },
    ],
  },
  // {
  //   label: 'Services',
  //   href: '/services',
  //   megaMenu: [
  //     {
  //       title: 'Core Services',
  //       type: 'list',
  //       items: [
  //         {
  //           label: 'Expert Installation',
  //           href: '/services/installation',
  //           description: 'Professional installation with site assessment and commissioning',
  //         },
  //         {
  //           label: 'Comprehensive Maintenance',
  //           href: '/services/maintenance',
  //           description: 'Preventive maintenance programs and annual contracts',
  //         },
  //         {
  //           label: 'Emergency Support',
  //           href: '/services/emergency-support',
  //           description: 'Rapid response teams with remote diagnostics',
  //         },
  //         {
  //           label: 'Training & Consultation',
  //           href: '/services/training',
  //           description: 'Operator training and safety compliance programs',
  //         },
  //       ],
  //     },
  //     {
  //       title: 'Service Features',
  //       type: 'overview',
  //       description: 'Our commitment to excellence',
  //       items: [
  //         { label: 'Technical Support', href: '/services/support#response-time' },
  //         { label: 'PAN India service network', href: '/services/support#service-network' },
  //         { label: 'Certified technicians', href: '/services/support#technicians' },
  //         { label: 'Genuine spare parts', href: '/services/support#spare-parts' },
  //         { label: 'IoT monitoring enabled', href: '/services/support#iot-monitoring' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'About Us',
  //   href: '/about',
  //   megaMenu: [
  //     {
  //       title: 'Company Info',
  //       type: 'list',
  //       items: [
  //         { label: 'About Our Company', href: '/about' },
  //         { label: 'Our Partners', href: '/about/partners' },
  //         { label: 'Leadership Team', href: '/about/team' },
  //         { label: 'Manufacturing Facilities', href: '/about/facilities' },
  //         { label: 'Quality Certifications', href: '/about/certifications' },
  //         { label: 'Career Opportunities', href: '/careers' },
  //       ],
  //     },
  //     {
  //       title: 'Resources',
  //       type: 'list',
  //       items: [
  //         { label: 'Media & Press Releases', href: '/media' },
  //         { label: 'Case Studies & Projects', href: '/case-studies' },
  //         { label: 'Technical Resources', href: '/resources' },
  //         { label: 'FAQs', href: '/faq' },
  //         { label: 'Contact Us', href: '/contact' },
  //         { label: 'Request a Quote', href: '/quote' },
  //       ],
  //     },
  //   ],
  // },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const topBarLinks = [
  // Empty - minimal top bar
];
