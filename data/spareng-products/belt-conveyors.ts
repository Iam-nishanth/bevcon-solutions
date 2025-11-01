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
    specifications: {
      conveyor_width: '300-2400mm',
      belt_speed: '0.5-5.0 m/s',
      capacity: 'Up to 6000 tons/hour',
      length: 'Up to 2000m',
      angle_capability: '0-18 degrees (standard), up to 30 degrees (with cleats)',
      material: 'EP/NN fabric belt, Steel cord belt',
      drive_type: 'Electric motor with gear reducer',
    },
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
    description: `Belt Conveyors are the most commonly used conveyors as they are the most versatile conveying equipments. Belt conveyors can be used to transport product in a straight line, horizontal or inclined paths from one spot of operation to another. Bevcon Wayors is specialized in design, manufacturing, erection and commissioning of wide range of conveyors having experience of installing thousands of belt conveyors for various applications.

Belt conveyors are commonly used for conveying items with irregular surfaces and for small items that would fall in between rollers or bags of product that would sag between rollers. Material is conveyed directly on the belt so both regular and irregular shaped objects, large or small, light and heavy, can be transported successfully. Belt conveyors are made of a metal frame consists of two pulleys at either end with an endless loop of conveyor belt with carrying / support idlers below makes belt rotates and moves forward.

One of the pulley is powered by electric motor and moving the belt and the material on the belt forward. The powered pulley is called the drive pulley while the unpowered pulley is called the driven pulley. Conveyors Belt are made of high quality premium belting products which reduces belt wear & tear, resulting in less maintenance.

There are two main industrial classes of belt conveyors; One material handling such as those moving boxes along inside a factory and other bulk material handling such as those used to transport large volumes of resources and other materials such as coal, ore, sand, grain, salt etc.

Today there are different types of conveyor belts that have been created for conveying different kinds of material.`,
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
  brand: 'Bevcon Wayors',
  description: 'Specialized in design, manufacturing, erection and commissioning of wide range of belt conveyors with experience of installing thousands of conveyors for various applications across industries.',
  website: 'https://bevconwayors.in',
  products: beltConveyorProducts
}
