import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Solutions',
    href: '/solutions',
    megaMenu: [
      {
        title: 'Our Solutions',
        description: 'Comprehensive entrance automation, door systems, and material handling solutions for modern industrial facilities.',
        type: 'overview',
        items: [
          { label: 'View All Solutions', href: '/solutions' },
          { label: 'Solutions by Industry', href: '/industries' },
          { label: 'Custom Engineering', href: '/custom-engineering' },
        ],
      },
      {
        title: 'Solution Categories',
        type: 'list',
        items: [
          { label: 'Industrial Door Systems', href: '/solutions/industrial-doors', icon: 'door-open' },
          { label: 'High-Speed Door Solutions', href: '/solutions/high-speed-doors', icon: 'zap' },
          { label: 'Loading Bay Equipment', href: '/solutions/loading-bay', icon: 'package' },
          { label: 'Dock Equipment Solutions', href: '/solutions/dock-equipment', icon: 'shield' },
          { label: 'Material Handling & Conveyors', href: '/solutions/material-handling', icon: 'repeat' },
          { label: 'BMHE Spare Parts & Services', href: '/solutions/mhe-spare-parts', icon: 'lightbulb' },
          { label: 'Temperature Control Systems', href: '/solutions/temperature-control', icon: 'thermometer' },
          { label: 'Fire Safety & Compliance', href: '/solutions/fire-safety', icon: 'flame' },
        ],
      },
      {
        title: 'Featured Solutions',
        type: 'featured',
        featured: [
          {
            title: 'Complete Warehouse Automation',
            description: 'Integrated entrance and material flow solutions',
            image: '/images/solutions/warehouse-automation.jpg',
            href: '/solutions/warehouse-automation',
          },
          {
            title: 'Pharmaceutical Facility Solutions',
            description: 'Clean room compliant systems with strict controls',
            image: '/images/solutions/pharmaceutical.jpg',
            href: '/solutions/pharmaceutical',
          },
        ],
      },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    megaMenu: [
      {
        title: 'Door Systems',
        type: 'list',
        items: [
          { label: 'High-Speed Doors', href: '/products/high-speed-doors' },
          { label: 'Industrial Doors', href: '/products/industrial-doors' },
          { label: 'Hygiene Doors', href: '/products/hygiene-doors' },
          { label: 'Flexible Doors', href: '/products/flexible-doors' },
          { label: 'Dock Levelers', href: '/products/dock-levelers' },
        ],
      },
      {
        title: 'Bulk Material Handling',
        type: 'list',
        items: [
          { label: 'Conveyor Components', href: '/products/conveyor-components' },
          { label: 'Crushers', href: '/products/crushers' },
          { label: 'Screens', href: '/products/screens' },
          { label: 'Feeders', href: '/products/feeders' },
          { label: 'Conveyors', href: '/products/conveyors' },
          { label: 'Handling Systems', href: '/products/handling-systems' },
        ],
      },
      {
        title: 'Our Brands',
        type: 'overview',
        description: 'Premium quality products from world-class manufacturers',
        items: [
          { label: 'View All Products', href: '/products' },
          { label: 'Nergeco - High-Speed Doors', href: '/products' },
          { label: 'SKB - Industrial Doors', href: '/products' },
          { label: 'Spareng - BMHE Components', href: '/products' },
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
        ],
      },
      {
        title: 'Logistics & Storage',
        type: 'list',
        items: [
          { label: 'Cold Storage & Warehousing', href: '/industries/cold-storage', icon: 'snowflake' },
          { label: 'Warehouse & Logistics', href: '/industries/warehouse-logistics', icon: 'warehouse' },
          { label: 'E-commerce & Fulfillment', href: '/industries/ecommerce', icon: 'shopping-cart' },
          { label: 'Cargo & Freight Hubs', href: '/industries/cargo-freight', icon: 'plane' },
          { label: 'Airport & Transportation', href: '/industries/airport', icon: 'plane-landing' },
        ],
      },
      {
        title: 'Specialized Sectors',
        type: 'list',
        items: [
          { label: 'Chemical & Process Industries', href: '/industries/chemical', icon: 'flask' },
          { label: 'Textile & Garment Manufacturing', href: '/industries/textile', icon: 'shirt' },
          { label: 'Agriculture & Dairy', href: '/industries/agriculture', icon: 'wheat' },
          { label: 'Retail & Shopping Centers', href: '/industries/retail', icon: 'store' },
          { label: 'Healthcare Facilities', href: '/industries/healthcare', icon: 'hospital' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    megaMenu: [
      {
        title: 'Core Services',
        type: 'list',
        items: [
          {
            label: 'Expert Installation',
            href: '/services/installation',
            description: 'Professional installation with site assessment and commissioning',
          },
          {
            label: 'Comprehensive Maintenance',
            href: '/services/maintenance',
            description: 'Preventive maintenance programs and annual contracts',
          },
          {
            label: 'Emergency Support',
            href: '/services/emergency-support',
            description: 'Rapid response teams with remote diagnostics',
          },
          {
            label: 'Training & Consultation',
            href: '/services/training',
            description: 'Operator training and safety compliance programs',
          },
        ],
      },
      {
        title: 'Service Features',
        type: 'overview',
        description: 'Our commitment to excellence',
        items: [
          { label: 'Technical Support', href: '/services/support#response-time' },
          { label: 'PAN India service network', href: '/services/support#service-network' },
          { label: 'Certified technicians', href: '/services/support#technicians' },
          { label: 'Genuine spare parts', href: '/services/support#spare-parts' },
          { label: 'IoT monitoring enabled', href: '/services/support#iot-monitoring' },
        ],
      },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    megaMenu: [
      {
        title: 'Company Info',
        type: 'list',
        items: [
          { label: 'About Our Company', href: '/about' },
          { label: 'Our Partners', href: '/about/partners' },
          { label: 'Leadership Team', href: '/about/team' },
          { label: 'Manufacturing Facilities', href: '/about/facilities' },
          { label: 'Quality Certifications', href: '/about/certifications' },
          { label: 'Career Opportunities', href: '/careers' },
        ],
      },
      {
        title: 'Resources',
        type: 'list',
        items: [
          { label: 'Media & Press Releases', href: '/media' },
          { label: 'Case Studies & Projects', href: '/case-studies' },
          { label: 'Technical Resources', href: '/resources' },
          { label: 'FAQs', href: '/faq' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Request a Quote', href: '/quote' },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const topBarLinks = [
  // Empty - minimal top bar
];
