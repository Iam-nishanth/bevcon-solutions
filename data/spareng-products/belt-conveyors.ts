import { BrandData, Product } from './product-types'

export const beltConveyorProducts: Product[] = [
  {
    id: 'bc-001',
    title: 'Belt Conveyors',
    model: 'BC-STD-001',
    sku: 'SP-BC-001',
    slug: 'standard-belt-conveyor',
    category: ['Belt Conveyors'],
    subcategory: 'Conveyor Systems',
    showDetails: true,
    // specifications: {
    //   conveyor_width: '300-2400mm',
    //   belt_speed: '0.5-5.0 m/s',
    //   capacity: 'Up to 6000 tons/hour',
    //   length: 'Up to 2000m',
    //   angle_capability: '0-18 degrees (standard), up to 30 degrees (with cleats)',
    //   material: 'EP/NN fabric belt, Steel cord belt',
    //   drive_type: 'Electric motor with gear reducer',
    // },
    features: [
      'Simple Structure',
      'Handle wide range of materials',
      'Large conveying capacity',
      'Long conveying distance',
      'Strong adaptability to conveyor line',
      'Convenient to load and unload materials',
      'High reliability',
      'Low operating cost',
      'Low power consumption and high efficiency',
      'Low maintenance cost',
    ],
    applications: [
      'Metallurgy',
      'Food processing',
      'Agriculture',
      'Pharmaceutical',
      'Chemical industry',
      'Ceramic manufacturing',
      'Glass industry',
      'Recycling facilities',
      'Coffee processing',
      'Sugar mills',
      'Rice mills',
      'Bean processing',
      'Pet food manufacturing',
      'Flakes production',
      'Seeds handling',
      'Tea processing',
    ],
    description: `Belt conveyors are among the most widely used material handling systems across Australia due to their versatility, reliability, and cost effectiveness. They provide efficient transport of materials in straight, horizontal, or inclined paths, connecting different stages of production or processing seamlessly.

At Bevcon Solutions, we specialise in the design, manufacture, installation, and commissioning of a wide range of conveyor systems. With decades of experience and thousands of successful installations worldwide, our engineering expertise extends to Australia's demanding industrial sectors — from mining and quarrying to food processing, logistics, and manufacturing.

Each system consists of a robust metal frame with pulleys at either end and an endless loop of high quality belting supported by carrying idlers. One pulley, known as the drive pulley, is powered by an electric motor, which moves the belt and its load forward, while the driven pulley maintains tension and alignment. Using premium belting materials ensures minimal wear, reduced maintenance, and extended belt life — crucial for Australia's harsh operating conditions and remote project sites.

Across Australia, industries operate under challenging environmental and regulatory conditions. Bevcon Solutions' conveyor systems are designed to meet Australian Standards (AS 1755, AS 4024) for safety, performance, and durability, ensuring dependable operation in even the toughest terrains and climates.

Whatever your conveying needs, Bevcon Solutions delivers reliable, efficient, and customised conveyor solutions for Australian industry.`,
    compatibleEquipment: [
      'Idlers (Carrying, Return, Impact)',
      'Drive and Tail Pulleys',
      'Belt Cleaners and Scrapers',
      'Take-up Systems',
      'Loading and Transfer Chutes',
    ],
    tags: ['belt conveyor', 'material handling', 'bulk transport', 'versatile', 'industrial'],
    image: [
      '/images/belt-conveyor/Belt-conveyor-project-1.jpeg',
      '/images/belt-conveyor/Belt-conveyor-project-2.jpeg',
      '/images/belt-conveyor/Belt-Conveyor-1.jpg',
      '/images/belt-conveyor/Belt-Conveyor-2.jpg',
    ],
    partNumber: 'SP-BC-001',
    // brand: 'Bevcon Wayors',
  },
]

export const beltConveyorData: BrandData = {
  brand: 'Bevcon Solutions',
  description: 'Specialized in design, manufacturing, erection and commissioning of wide range of belt conveyors with proven experience across diverse industrial applications.',
  website: 'https://bevconwayors.in',
  products: beltConveyorProducts
}
