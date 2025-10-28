export interface CaseStudy {
  id: string;
  topicSlug: string;
  title: string;
  company: string;
  industry: string;
  location?: string;
  challenge: string;
  solution: string;
  results: string[];
  keyMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  quote?: {
    text: string;
    author: string;
    position: string;
  };
  imageUrl?: string;
}

export interface SolutionTopic {
  id: string;
  slug: string;
  name: string;
  description: string;
  overview: string;
  keyBenefits: string[];
  caseStudies: CaseStudy[];
  relatedSolutions: string[];
  metaTitle: string;
  metaDescription: string;
}

export const solutionTopics: SolutionTopic[] = [
  {
    id: "entrance-automation",
    slug: "entrance-automation",
    name: "Entrance Automation",
    description: "Intelligent entrance systems for seamless access control and workflow optimization",
    overview: "Our entrance automation solutions combine high-speed doors, access control systems, and intelligent sensors to create seamless, efficient entry points that enhance productivity while maintaining security and environmental control.",
    keyBenefits: [
      "Faster throughput and reduced waiting times",
      "Enhanced security with automated access control",
      "Energy savings through optimized opening cycles",
      "Improved safety with sensor-based operation",
      "Real-time monitoring and data analytics"
    ],
    caseStudies: [
      {
        id: "pharma-cleanroom-automation",
        topicSlug: "entrance-automation",
        title: "Pharmaceutical Cleanroom Access Optimization",
        company: "BioPharm Laboratories",
        industry: "Pharmaceutical & Life Sciences",
        location: "Hyderabad, India",
        challenge: "A leading pharmaceutical laboratory struggled with inefficient access control in their cleanroom facilities. Manual door operations created bottlenecks during shift changes, compromising sterility and reducing productivity by 25%.",
        solution: "Implemented automated high-speed doors with biometric access control and air shower integration. The system includes real-time air quality monitoring and automatic sealing sequences to maintain cleanroom integrity.",
        results: [
          "40% reduction in cleanroom contamination incidents",
          "60% faster personnel throughput during shift changes",
          "Complete elimination of manual door operations",
          "Improved compliance with GMP standards"
        ],
        keyMetrics: [
          {
            label: "Throughput Increase",
            value: "60%",
            description: "Faster personnel movement through access points"
          },
          {
            label: "Contamination Reduction",
            value: "40%",
            description: "Fewer cleanroom contamination incidents"
          },
          {
            label: "Energy Savings",
            value: "25%",
            description: "Reduced HVAC load from optimized sealing"
          }
        ],
        technologies: ["High-Speed Cleanroom Doors", "Biometric Access Control", "Air Quality Sensors", "Automated Sealing Systems"],
        quote: {
          text: "The automated entrance system has transformed our cleanroom operations. We've achieved perfect balance between sterility, efficiency, and worker safety.",
          author: "Dr. Priya Sharma",
          position: "Quality Control Director"
        }
      },
      {
        id: "warehouse-distribution-center",
        topicSlug: "entrance-automation",
        title: "E-commerce Distribution Center Automation",
        company: "FastTrack Logistics",
        industry: "E-commerce & Logistics",
        location: "Mumbai, India",
        challenge: "A major e-commerce fulfillment center faced significant delays in loading bay operations due to manual dock door management and security protocols, resulting in 3-hour delays during peak hours.",
        solution: "Deployed intelligent entrance automation with RFID vehicle recognition, automated dock levelers, and integrated traffic management systems. The solution includes predictive maintenance scheduling and real-time performance monitoring.",
        results: [
          "75% reduction in loading bay wait times",
          "50% increase in daily order fulfillment capacity",
          "Zero security breaches in 18 months of operation",
          "30% reduction in operational costs"
        ],
        keyMetrics: [
          {
            label: "Wait Time Reduction",
            value: "75%",
            description: "Faster vehicle processing at loading bays"
          },
          {
            label: "Capacity Increase",
            value: "50%",
            description: "Higher daily throughput achieved"
          },
          {
            label: "Cost Savings",
            value: "30%",
            description: "Overall operational cost reduction"
          }
        ],
        technologies: ["RFID Vehicle Recognition", "Automated Dock Levelers", "Traffic Management System", "Predictive Maintenance"],
        quote: {
          text: "The automated entrance system has revolutionized our fulfillment operations. We've eliminated bottlenecks and increased our capacity significantly.",
          author: "Rajesh Kumar",
          position: "Operations Director"
        }
      }
    ],
    relatedSolutions: ["energy-efficiency", "entrance-automation"],
    metaTitle: "Entrance Automation Solutions | Intelligent Access Control | Bevcon Solutions",
    metaDescription: "Automated entrance systems combining high-speed doors, access control, and sensors for efficient, secure facility access and workflow optimization."
  },
  {
    id: "loading-bay",
    slug: "loading-bay",
    name: "Docking Solutions",
    description: "Complete docking equipment for efficient, safe material transfer operations",
    overview: "Our comprehensive docking equipment solutions integrate dock levelers, shelters, seals, and automation systems to create efficient, weather-tight loading operations that maximize productivity and ensure worker safety.",
    keyBenefits: [
      "Faster loading/unloading cycles",
      "Weather protection and energy efficiency",
      "Enhanced worker safety and ergonomics",
      "Reduced product damage during transfer",
      "Real-time performance monitoring"
    ],
    caseStudies: [
      {
        id: "cold-storage-fulfillment",
        topicSlug: "loading-bay",
        title: "Cold Storage Fulfillment Center Upgrade",
        company: "FreshChain Logistics",
        industry: "Cold Storage & Food Distribution",
        location: "Delhi, India",
        challenge: "A temperature-controlled distribution center experienced significant product loss due to inefficient loading operations and poor environmental sealing, with energy costs exceeding budget by 35%.",
        solution: "Installed automated loading bay systems with insulated dock levelers, high-speed doors, and climate-controlled shelters. The system includes real-time temperature monitoring and automated environmental controls.",
        results: [
          "65% reduction in product temperature excursions",
          "40% decrease in energy consumption for climate control",
          "80% faster loading/unloading operations",
          "Significant reduction in product spoilage"
        ],
        keyMetrics: [
          {
            label: "Energy Savings",
            value: "40%",
            description: "Reduced climate control energy costs"
          },
          {
            label: "Operation Speed",
            value: "80%",
            description: "Faster loading/unloading cycles"
          },
          {
            label: "Product Quality",
            value: "65%",
            description: "Reduction in temperature excursions"
          }
        ],
        technologies: ["Insulated Dock Levelers", "High-Speed Loading Doors", "Climate-Controlled Shelters", "Temperature Monitoring"],
        quote: {
          text: "The loading bay upgrade has transformed our cold chain operations. We're now maintaining product quality while significantly reducing our energy costs.",
          author: "Amit Patel",
          position: "Facility Manager"
        }
      },
      {
        id: "manufacturing-plant-optimization",
        topicSlug: "loading-bay",
        title: "Manufacturing Plant Loading Efficiency",
        company: "AutoTech Manufacturing",
        industry: "Automotive Manufacturing",
        location: "Pune, India",
        challenge: "An automotive parts manufacturer struggled with inefficient loading operations that created bottlenecks in their just-in-time production system, affecting delivery schedules and increasing costs.",
        solution: "Implemented integrated loading bay automation with hydraulic dock levelers, vehicle restraint systems, and automated traffic control. The solution includes real-time scheduling and performance analytics.",
        results: [
          "50% reduction in loading bay downtime",
          "35% improvement in on-time deliveries",
          "Zero workplace accidents related to loading operations",
          "25% increase in overall plant efficiency"
        ],
        keyMetrics: [
          {
            label: "Downtime Reduction",
            value: "50%",
            description: "Less time spent on loading operations"
          },
          {
            label: "Delivery Improvement",
            value: "35%",
            description: "Better on-time delivery performance"
          },
          {
            label: "Efficiency Gain",
            value: "25%",
            description: "Overall plant productivity increase"
          }
        ],
        technologies: ["Hydraulic Dock Levelers", "Vehicle Restraint Systems", "Traffic Control Automation", "Performance Analytics"],
        quote: {
          text: "The automated loading bay system has eliminated our production bottlenecks. We're now meeting delivery schedules consistently and operating much more efficiently.",
          author: "Suresh Reddy",
          position: "Production Manager"
        }
      }
    ],
    relatedSolutions: ["loading-bay", "dock-equipment"],
    metaTitle: "Docking Solutions | Dock Levelers & Automation | Bevcon Solutions",
    metaDescription: "Complete docking equipment with dock levelers, shelters, seals, and automation for efficient, safe material transfer operations."
  },
  {
    id: "material-handling",
    slug: "material-handling",
    name: "Material Handling",
    description: "Automated material flow solutions for optimized warehouse and production operations",
    overview: "Our material handling solutions combine conveyor systems, automated guided vehicles, and intelligent controls to create seamless material flow from receiving to shipping, maximizing efficiency and minimizing manual labor.",
    keyBenefits: [
      "Increased throughput and productivity",
      "Reduced labor costs and physical strain",
      "Improved inventory accuracy and tracking",
      "Space optimization with vertical solutions",
      "Real-time visibility and control"
    ],
    caseStudies: [
      {
        id: "ecommerce-fulfillment-automation",
        topicSlug: "material-handling",
        title: "E-commerce Fulfillment Center Automation",
        company: "ShopFast India",
        industry: "E-commerce Fulfillment",
        location: "Bangalore, India",
        challenge: "A rapidly growing e-commerce fulfillment center struggled to handle increasing order volumes with manual picking and sorting processes, leading to delays and high labor costs.",
        solution: "Deployed automated conveyor systems with sortation technology, automated storage and retrieval systems (AS/RS), and warehouse management software integration. The solution includes real-time inventory tracking and predictive analytics.",
        results: [
          "300% increase in order processing capacity",
          "75% reduction in labor costs",
          "99.9% order accuracy improvement",
          "60% reduction in facility space requirements"
        ],
        keyMetrics: [
          {
            label: "Capacity Increase",
            value: "300%",
            description: "Higher order processing throughput"
          },
          {
            label: "Cost Reduction",
            value: "75%",
            description: "Lower labor costs achieved"
          },
          {
            label: "Accuracy Rate",
            value: "99.9%",
            description: "Near-perfect order fulfillment"
          }
        ],
        technologies: ["Automated Conveyor Systems", "Sortation Technology", "AS/RS Systems", "Warehouse Management Software"],
        quote: {
          text: "The automated material handling system has transformed our fulfillment operations. We're processing three times more orders with fewer people and better accuracy.",
          author: "Meera Joshi",
          position: "Operations Director"
        }
      },
      {
        id: "food-processing-efficiency",
        topicSlug: "material-handling",
        title: "Food Processing Line Optimization",
        company: "PureFoods India",
        industry: "Food Processing",
        location: "Chennai, India",
        challenge: "A food processing facility faced contamination risks and inefficiencies from manual material handling in their production lines, affecting product quality and production costs.",
        solution: "Implemented automated conveyor systems with hygienic design, integrated weighing stations, and automated packaging lines. The system includes real-time quality monitoring and compliance tracking.",
        results: [
          "85% reduction in contamination incidents",
          "40% increase in production throughput",
          "30% reduction in labor costs",
          "Improved compliance with food safety standards"
        ],
        keyMetrics: [
          {
            label: "Contamination Reduction",
            value: "85%",
            description: "Fewer product contamination incidents"
          },
          {
            label: "Throughput Increase",
            value: "40%",
            description: "Higher production capacity"
          },
          {
            label: "Cost Savings",
            value: "30%",
            description: "Reduced operational costs"
          }
        ],
        technologies: ["Hygienic Conveyor Systems", "Automated Weighing", "Packaging Line Integration", "Quality Monitoring"],
        quote: {
          text: "The automated material handling system has significantly improved our food safety and production efficiency. We're now meeting higher quality standards while reducing costs.",
          author: "Dr. Karthik Raman",
          position: "Quality Assurance Manager"
        }
      }
    ],
    relatedSolutions: ["material-handling", "mhe-spare-parts"],
    metaTitle: "Material Handling Solutions | Automated Systems | Bevcon Solutions",
    metaDescription: "Automated material handling solutions with conveyor systems, sortation technology, and intelligent controls for optimized warehouse and production operations."
  },
  {
    id: "safety-compliance",
    slug: "safety-compliance",
    name: "Safety & Compliance",
    description: "Comprehensive safety solutions ensuring workplace protection and regulatory compliance",
    overview: "Our safety and compliance solutions integrate advanced sensors, automated controls, and monitoring systems to create safer work environments while ensuring full compliance with international safety standards and regulations.",
    keyBenefits: [
      "Enhanced worker safety and protection",
      "Full regulatory compliance and certification",
      "Reduced workplace accidents and incidents",
      "Real-time monitoring and reporting",
      "Lower insurance premiums and costs"
    ],
    caseStudies: [
      {
        id: "chemical-plant-safety-upgrade",
        topicSlug: "safety-compliance",
        title: "Chemical Processing Safety Modernization",
        company: "ChemTech Industries",
        industry: "Chemical Processing",
        location: "Vadodara, India",
        challenge: "A chemical processing facility needed to upgrade their safety systems to meet new regulatory requirements and reduce the risk of hazardous material exposure incidents.",
        solution: "Implemented comprehensive safety systems including automated emergency doors, gas detection sensors, emergency ventilation controls, and integrated safety monitoring. The solution includes real-time alerting and compliance reporting.",
        results: [
          "100% compliance with safety regulations achieved",
          "80% reduction in safety incidents",
          "Immediate emergency response capabilities",
          "Significant reduction in insurance premiums"
        ],
        keyMetrics: [
          {
            label: "Compliance Rate",
            value: "100%",
            description: "Full regulatory compliance achieved"
          },
          {
            label: "Incident Reduction",
            value: "80%",
            description: "Fewer workplace safety incidents"
          },
          {
            label: "Response Time",
            value: "<5 sec",
            description: "Immediate emergency response"
          }
        ],
        technologies: ["Automated Emergency Doors", "Gas Detection Sensors", "Emergency Ventilation", "Safety Monitoring Systems"],
        quote: {
          text: "The safety upgrade has given us complete confidence in our operations. We're fully compliant and our workers are much safer.",
          author: "Vikram Singh",
          position: "Safety Director"
        }
      },
      {
        id: "manufacturing-safety-automation",
        topicSlug: "safety-compliance",
        title: "Manufacturing Safety Automation",
        company: "Precision Engineering Ltd",
        industry: "Manufacturing",
        location: "Ahmedabad, India",
        challenge: "A manufacturing facility experienced frequent safety incidents related to manual door operations and inadequate access controls in high-risk production areas.",
        solution: "Deployed automated safety doors with presence detection, automated access controls, and integrated safety interlocks. The system includes real-time monitoring and automated emergency protocols.",
        results: [
          "Zero safety incidents in 24 months",
          "50% improvement in emergency evacuation times",
          "Enhanced access control and monitoring",
          "Reduced workers' compensation claims"
        ],
        keyMetrics: [
          {
            label: "Safety Record",
            value: "Zero",
            description: "Incidents in 24 months of operation"
          },
          {
            label: "Evacuation Time",
            value: "50%",
            description: "Faster emergency evacuation"
          },
          {
            label: "Access Control",
            value: "100%",
            description: "Complete monitoring coverage"
          }
        ],
        technologies: ["Automated Safety Doors", "Presence Detection Sensors", "Access Control Systems", "Emergency Protocols"],
        quote: {
          text: "The safety automation system has created a much safer work environment. Our incident rate has dropped to zero and our workers feel much more secure.",
          author: "Rajesh Gupta",
          position: "Operations Manager"
        }
      }
    ],
    relatedSolutions: ["safety-compliance", "entrance-automation"],
    metaTitle: "Safety & Compliance Solutions | Workplace Protection | Bevcon Solutions",
    metaDescription: "Comprehensive safety solutions with automated controls, sensors, and monitoring systems ensuring workplace protection and regulatory compliance."
  },
  {
    id: "energy-efficiency",
    slug: "energy-efficiency",
    name: "Energy Efficiency",
    description: "Sustainable solutions reducing energy consumption and carbon footprint",
    overview: "Our energy efficiency solutions combine high-performance insulation, intelligent controls, and automated systems to minimize energy consumption while maintaining optimal operational performance and comfort.",
    keyBenefits: [
      "Significant reduction in energy costs",
      "Lower carbon footprint and sustainability",
      "Improved building performance ratings",
      "Enhanced comfort and productivity",
      "Return on investment within 12-24 months"
    ],
    caseStudies: [
      {
        id: "cold-storage-energy-optimization",
        topicSlug: "energy-efficiency",
        title: "Cold Storage Energy Optimization",
        company: "Arctic Foods India",
        industry: "Cold Storage & Food Processing",
        location: "Hyderabad, India",
        challenge: "A large cold storage facility struggled with high energy costs due to inefficient door systems and poor environmental sealing, consuming excessive electricity for refrigeration.",
        solution: "Installed high-speed insulated doors, automated environmental controls, and energy monitoring systems. The solution includes predictive maintenance and real-time energy optimization.",
        results: [
          "45% reduction in energy consumption",
          "60% decrease in refrigeration costs",
          "Improved temperature consistency",
          "ROI achieved in 18 months"
        ],
        keyMetrics: [
          {
            label: "Energy Savings",
            value: "45%",
            description: "Overall energy consumption reduction"
          },
          {
            label: "Cost Reduction",
            value: "60%",
            description: "Lower refrigeration operational costs"
          },
          {
            label: "ROI Timeline",
            value: "18 months",
            description: "Time to achieve return on investment"
          }
        ],
        technologies: ["High-Speed Insulated Doors", "Energy Monitoring Systems", "Automated Controls", "Predictive Maintenance"],
        quote: {
          text: "The energy efficiency upgrade has transformed our cost structure. We're saving significantly on energy while maintaining perfect temperature control.",
          author: "Anjali Sharma",
          position: "Energy Manager"
        }
      },
      {
        id: "industrial-facility-retrofit",
        topicSlug: "energy-efficiency",
        title: "Industrial Facility Energy Retrofit",
        company: "SteelWorks India",
        industry: "Manufacturing",
        location: "Mumbai, India",
        challenge: "A manufacturing facility faced escalating energy costs from outdated door systems and poor building envelope performance, impacting their competitiveness in the market.",
        solution: "Conducted comprehensive energy audit and implemented high-performance door systems, automated controls, and building envelope improvements. The solution includes real-time energy monitoring and optimization.",
        results: [
          "35% reduction in total energy consumption",
          "40% decrease in heating/cooling costs",
          "Improved indoor air quality and comfort",
          "Enhanced facility performance ratings"
        ],
        keyMetrics: [
          {
            label: "Energy Reduction",
            value: "35%",
            description: "Total facility energy savings"
          },
          {
            label: "HVAC Savings",
            value: "40%",
            description: "Heating and cooling cost reduction"
          },
          {
            label: "Comfort Improvement",
            value: "25%",
            description: "Better indoor environmental quality"
          }
        ],
        technologies: ["High-Performance Doors", "Building Automation", "Energy Monitoring", "Environmental Controls"],
        quote: {
          text: "The energy retrofit has made our facility much more efficient and comfortable. The ROI has exceeded our expectations and our employees are happier too.",
          author: "Deepak Kumar",
          position: "Facilities Director"
        }
      }
    ],
    relatedSolutions: ["energy-efficiency", "temperature-control"],
    metaTitle: "Energy Efficiency Solutions | Sustainable Building Systems | Bevcon Solutions",
    metaDescription: "Energy-efficient solutions combining high-performance insulation, intelligent controls, and automated systems to reduce energy consumption and carbon footprint."
  },
  {
    id: "temperature-control",
    slug: "temperature-control",
    name: "Temperature Control",
    description: "Precision climate management for temperature-sensitive operations",
    overview: "Our temperature control solutions maintain precise environmental conditions in cold storage, cleanrooms, and specialty facilities through advanced insulation, automated controls, and monitoring systems.",
    keyBenefits: [
      "Precise temperature and humidity control",
      "Reduced energy consumption for climate control",
      "Extended product shelf life and quality",
      "Improved operational efficiency",
      "Regulatory compliance and documentation"
    ],
    caseStudies: [
      {
        id: "pharmaceutical-cold-chain",
        topicSlug: "temperature-control",
        title: "Pharmaceutical Cold Chain Management",
        company: "MediCold India",
        industry: "Pharmaceutical Distribution",
        location: "Gurgaon, India",
        challenge: "A pharmaceutical distribution center needed to maintain strict temperature controls for vaccine and medication storage while improving operational efficiency and reducing energy costs.",
        solution: "Implemented specialized cold storage doors, automated climate controls, and real-time temperature monitoring systems. The solution includes automated documentation and compliance reporting.",
        results: [
          "99.9% temperature compliance achieved",
          "30% reduction in energy consumption",
          "100% automated compliance documentation",
          "Extended product shelf life verification"
        ],
        keyMetrics: [
          {
            label: "Compliance Rate",
            value: "99.9%",
            description: "Temperature control compliance"
          },
          {
            label: "Energy Savings",
            value: "30%",
            description: "Reduced climate control costs"
          },
          {
            label: "Documentation",
            value: "100%",
            description: "Automated compliance records"
          }
        ],
        technologies: ["Specialized Cold Storage Doors", "Climate Control Automation", "Temperature Monitoring", "Compliance Documentation"],
        quote: {
          text: "The temperature control system has ensured perfect compliance with regulatory requirements while significantly reducing our energy costs.",
          author: "Dr. Sunita Verma",
          position: "Compliance Director"
        }
      },
      {
        id: "food-processing-climate-control",
        topicSlug: "temperature-control",
        title: "Food Processing Climate Optimization",
        company: "FreshProcess India",
        industry: "Food Processing",
        location: "Chennai, India",
        challenge: "A food processing facility struggled with temperature fluctuations affecting product quality and shelf life, while facing high energy costs for climate control systems.",
        solution: "Deployed high-speed insulated doors, automated climate zoning, and real-time environmental monitoring. The solution includes predictive maintenance and quality assurance integration.",
        results: [
          "50% reduction in temperature variations",
          "35% decrease in refrigeration energy costs",
          "25% extension in product shelf life",
          "Improved food safety compliance"
        ],
        keyMetrics: [
          {
            label: "Temperature Stability",
            value: "50%",
            description: "Reduction in temperature fluctuations"
          },
          {
            label: "Energy Efficiency",
            value: "35%",
            description: "Lower refrigeration costs"
          },
          {
            label: "Shelf Life Extension",
            value: "25%",
            description: "Longer product shelf life achieved"
          }
        ],
        technologies: ["High-Speed Insulated Doors", "Climate Zoning Systems", "Environmental Monitoring", "Quality Assurance Integration"],
        quote: {
          text: "The climate control optimization has improved our product quality and extended shelf life while reducing our energy costs significantly.",
          author: "Ravi Krishnan",
          position: "Production Director"
        }
      }
    ],
    relatedSolutions: ["temperature-control", "energy-efficiency"],
    metaTitle: "Temperature Control Solutions | Climate Management | Bevcon Solutions",
    metaDescription: "Precision temperature control solutions for cold storage, cleanrooms, and specialty facilities with advanced insulation and automated climate management."
  },
  {
    id: "fume-extraction",
    slug: "fume-extraction",
    name: "Fume Extraction Systems",
    description: "Advanced gas scrubbing and fume extraction solutions for industrial air pollution control",
    overview: "Our comprehensive fume extraction systems provide world-class air pollution control through state-of-the-art gas scrubbing technology. With over 3844 scrubbing systems manufactured by JR Fibreglass Industries, we deliver proven solutions achieving 99.9% removal efficiency for the most demanding industrial applications.",
    keyBenefits: [
      "99.9% fume removal efficiency with advanced scrubbing technology",
      "Complete compliance with environmental regulations",
      "Protection of worker health and community safety",
      "Custom-designed systems for specific pollutants",
      "Proven performance in world-record installations"
    ],
    caseStudies: [
      {
        id: "gnfc-emergency-chlorine-scrubber",
        topicSlug: "fume-extraction",
        title: "World's Largest Emergency Chlorine Scrubber",
        company: "GNFC Bharuch",
        industry: "Chemical & Petrochemical",
        location: "Bharuch, India",
        challenge: "A major chlor-alkali facility required the world's most advanced emergency chlorine scrubbing system capable of handling catastrophic releases up to 9500 kg/hr while ensuring complete community protection and regulatory compliance.",
        solution: "Designed and installed the world's largest emergency chlorine scrubber with 9500 kg/hr capacity, featuring redundant scrubber trains, 100 m³ caustic circulation tank, and automatic emergency activation systems with continuous monitoring.",
        results: [
          "World record 9500 kg/hr emergency capacity achieved",
          "100% emergency response capability established",
          "Zero community impact incidents since installation",
          "Complete regulatory compliance and safety assurance"
        ],
        keyMetrics: [
          {
            label: "Emergency Capacity",
            value: "9500 kg/hr",
            description: "World's largest chlorine emergency treatment"
          },
          {
            label: "Response Time",
            value: "<30 sec",
            description: "Automatic emergency activation"
          },
          {
            label: "Safety Record",
            value: "Zero",
            description: "Community impact incidents"
          }
        ],
        technologies: ["Emergency Chlorine Scrubber", "Redundant Safety Systems", "Automatic Activation", "Community Protection"],
        quote: {
          text: "The emergency scrubber system gives us complete confidence in our safety protocols. It's the most advanced system of its kind in the world.",
          author: "Safety Director",
          position: "GNFC Bharuch"
        }
      },
      {
        id: "sterlite-fire-retardant-scrubber",
        topicSlug: "fume-extraction",
        title: "Fire-Retardant Scrubber for Semiconductor Gases",
        company: "Sterlite Technologies",
        industry: "Semiconductor Manufacturing",
        location: "India",
        challenge: "A semiconductor facility needed specialized fume extraction for reactive SiCl₄ (silicon tetrachloride) gases with enhanced fire safety requirements and 36,000 m³/hr capacity while maintaining ultra-clean manufacturing standards.",
        solution: "Implemented fire-retardant FRP scrubber system specifically designed for SiCl₄ service with specialized resin formulation, fire-retardant construction, and integrated safety monitoring for reactive chemical fume control.",
        results: [
          "99%+ removal efficiency for SiCl₄ fumes achieved",
          "Enhanced fire safety with retardant construction",
          "Maintained semiconductor-grade cleanliness standards",
          "Zero safety incidents with reactive gas handling"
        ],
        keyMetrics: [
          {
            label: "Removal Efficiency",
            value: "99%+",
            description: "SiCl₄ fume removal performance"
          },
          {
            label: "Capacity",
            value: "36,000 m³/hr",
            description: "Gas handling volume"
          },
          {
            label: "Safety Enhancement",
            value: "100%",
            description: "Fire-retardant construction"
          }
        ],
        technologies: ["Fire-Retardant FRP Construction", "SiCl₄ Specialized Design", "Reactive Gas Handling", "Safety Monitoring"],
        quote: {
          text: "The fire-retardant scrubber system has provided exceptional safety and performance for our reactive gas processes. It's exactly what we needed for our semiconductor operations.",
          author: "Process Engineer",
          position: "Sterlite Technologies"
        }
      }
    ],
    relatedSolutions: ["environmental-control", "emergency-gas-treatment"],
    metaTitle: "Fume Extraction Systems | Advanced Gas Scrubbing | Bevcon Solutions",
    metaDescription: "World-class fume extraction and gas scrubbing systems with 99.9% efficiency. Proven solutions for industrial air pollution control and environmental compliance."
  },
  {
    id: "environmental-control",
    slug: "environmental-control",
    name: "Environmental Control Systems",
    description: "Comprehensive pollution control and environmental compliance solutions",
    overview: "Our integrated environmental control systems provide complete pollution management through advanced fume extraction, emission control, and monitoring technologies. Backed by JR Fibreglass Industries' 50 years of expertise and world-record installations, we ensure environmental compliance while protecting communities and workers.",
    keyBenefits: [
      "Complete environmental compliance assurance",
      "Integrated multi-pollutant treatment capabilities",
      "Real-time monitoring and automated reporting",
      "Reduced regulatory risk and liability",
      "Enhanced corporate sustainability metrics"
    ],
    caseStudies: [
      {
        id: "indian-rayon-mega-installation",
        topicSlug: "environmental-control",
        title: "Mega-Scale Environmental Control Installation",
        company: "Indian Rayon Corporation",
        industry: "Chemical Processing",
        location: "India",
        challenge: "A major chemical facility required comprehensive environmental control with ultra-high volume gas handling (90,000-120,000 m³/hr) and complete integrated fan and ducting systems for multiple process streams.",
        solution: "Installed integrated FRP fan and ducting systems with 90,000 m³/hr capacity, complete environmental monitoring, and automated control systems ensuring comprehensive pollution management across all facility operations.",
        results: [
          "Ultra-high volume capacity (90,000+ m³/hr) achieved",
          "Complete environmental compliance maintained",
          "Integrated system optimization and efficiency",
          "Significant reduction in environmental impact"
        ],
        keyMetrics: [
          {
            label: "Gas Volume",
            value: "90,000+ m³/hr",
            description: "Ultra-high volume handling capacity"
          },
          {
            label: "System Integration",
            value: "100%",
            description: "Complete fan and duct integration"
          },
          {
            label: "Compliance Rate",
            value: "100%",
            description: "Environmental regulatory compliance"
          }
        ],
        technologies: ["Ultra High Volume FRP Fans", "Integrated Ducting Systems", "Environmental Monitoring", "Automated Controls"],
        quote: {
          text: "The integrated environmental control system has provided us with unmatched capacity and reliability. It's the most comprehensive system we've ever implemented.",
          author: "Environmental Manager",
          position: "Indian Rayon Corporation"
        }
      }
    ],
    relatedSolutions: ["fume-extraction", "emergency-gas-treatment"],
    metaTitle: "Environmental Control Systems | Comprehensive Pollution Management | Bevcon Solutions",
    metaDescription: "Integrated environmental control systems for complete pollution management, regulatory compliance, and community protection with advanced monitoring and automation."
  },
  {
    id: "emergency-gas-treatment",
    slug: "emergency-gas-treatment",
    name: "Emergency Gas Treatment Systems",
    description: "Critical safety systems for catastrophic gas release scenarios and emergency response",
    overview: "Our emergency gas treatment systems provide critical protection against catastrophic gas releases and emergency scenarios. Featuring world-record emergency response capabilities including the largest emergency chlorine scrubber (9500 kg/hr), these systems ensure rapid response and community protection during critical incidents.",
    keyBenefits: [
      "Rapid emergency response and activation",
      "World-record emergency treatment capacities",
      "Complete community and worker protection",
      "Automated emergency protocols and monitoring",
      "Compliance with emergency preparedness regulations"
    ],
    caseStudies: [
      {
        id: "iran-export-mega-scrubber",
        topicSlug: "emergency-gas-treatment",
        title: "World's Largest FRP Scrubber Export Installation",
        company: "Major Petrochemical Facility",
        industry: "Petrochemical",
        location: "Iran",
        challenge: "An international petrochemical facility required the world's largest FRP scrubber system capable of handling 325,000 m³/hr gas flow with 6m diameter construction for SO₂ emission control and emergency response.",
        solution: "Designed and exported the biggest FRP scrubber ever made in India - 6000 mm diameter by 22 meters length - with 325,000 m³/hr capacity, demonstrating mega-project capabilities and international export quality.",
        results: [
          "World record FRP scrubber dimensions achieved (6m x 22m)",
          "Unprecedented 325,000 m³/hr gas handling capacity",
          "Successful international export and installation",
          "Proven mega-project fabrication capabilities"
        ],
        keyMetrics: [
          {
            label: "Scrubber Size",
            value: "6m x 22m",
            description: "World's largest FRP scrubber dimensions"
          },
          {
            label: "Gas Capacity",
            value: "325,000 m³/hr",
            description: "Unprecedented gas handling volume"
          },
          {
            label: "Export Quality",
            value: "International",
            description: "Export-grade manufacturing standards"
          }
        ],
        technologies: ["Mega FRP Scrubber", "SO₂ Treatment", "Export Quality Manufacturing", "On-Site Fabrication"],
        quote: {
          text: "The mega scrubber installation has exceeded all expectations. It represents the pinnacle of FRP scrubber technology and demonstrates world-class manufacturing capabilities.",
          author: "Project Director",
          position: "International Installation"
        }
      }
    ],
    relatedSolutions: ["fume-extraction", "environmental-control"],
    metaTitle: "Emergency Gas Treatment Systems | Critical Safety Solutions | Bevcon Solutions",
    metaDescription: "World-record emergency gas treatment systems for catastrophic release protection. Advanced emergency response capabilities with automated protocols and monitoring."
  }
];

// Helper function to get a topic by slug
export function getSolutionTopicBySlug(slug: string): SolutionTopic | undefined {
  return solutionTopics.find(topic => topic.slug === slug);
}

// Helper function to get all case studies for a topic
export function getCaseStudiesByTopic(topicSlug: string): CaseStudy[] {
  const topic = getSolutionTopicBySlug(topicSlug);
  return topic ? topic.caseStudies : [];
}
