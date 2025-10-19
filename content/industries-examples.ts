export interface IndustryContent {
  id: string;
  name: string;
  slug: string;
  icon: string;
  
  // Hero storytelling
  hero: {
    title: string;
    openingStory: string;
  };
  
  // Industry Overview - Informative article section
  overview: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  
  // Challenge narrative
  challenge: {
    title: string;
    narrative: string[];
  };
  
  // Solution examples
  solution: {
    title: string;
    intro: string;
    examples: {
      scenario: string;
      howWeHelp: string;
      result: string;
    }[];
  };
  
  // Featured products
  products: {
    name: string;
    useCase: string;
    keyBenefit: string;
  }[];
  
  // Success vision
  success: {
    title: string;
    vision: string;
  };
  
  metrics?: { value: string; label: string }[];
  seoDescription: string;
}

export const industryExamples: IndustryContent[] = [
  // 1. Pharmaceutical & Life Sciences
  {
    id: `1`,
    name: `Pharmaceutical & Life Sciences`,
    slug: `pharmaceutical`,
    icon: `FlaskConical`,
    hero: {
      title: `Pharmaceutical Manufacturing Solutions`,
      openingStory: `Your QA manager discovers particle counts exceeding limits in the packaging cleanroom. The hermetic seal on your material transfer door has failed during third shift. Production halts. Batches worth millions may be at risk. Every minute of investigation feels like an eternity as your team works to contain the contamination event and determine its scope.`
    },
    overview: {
      title: `Understanding Pharmaceutical Manufacturing Environments`,
      introduction: `Pharmaceutical manufacturing is a highly regulated industry focused on producing medications, vaccines, and medical devices under strict quality controls. These facilities operate under stringent environmental standards including ISO cleanroom classifications, FDA regulations, and GMP (Good Manufacturing Practices) to ensure product safety and efficacy.`,
      sections: [
        {
          title: `Core Operations and Requirements`,
          content: `Pharmaceutical facilities include cleanrooms for aseptic processing, material transfer airlocks, raw material storage, packaging areas, and quality control laboratories. Each zone requires precise environmental control including pressure differentials, temperature regulation, humidity control, and particle count management. Material flow between zones must prevent cross-contamination while maintaining production efficiency.`
        },
        {
          title: `Critical Challenges`,
          content: `Maintaining environmental classification during personnel and material movement is the primary challenge. Every door opening represents a potential contamination event. Additional challenges include validating all equipment for regulatory compliance, managing high-value product at risk during deviations, preventing cross-contamination between product lines, and maintaining detailed documentation for audits and inspections.`
        },
        {
          title: `Our Entrance Automation Solutions`,
          content: `We provide cleanroom-rated high-speed doors with hermetic sealing that maintain pressure differentials and minimize air exchange. Our systems include interlocking controls for cascading airlocks, complete validation documentation packages (IQ/OQ protocols), and 21 CFR Part 11 compliant reporting. All equipment is designed specifically for pharmaceutical environments with smooth, cleanable surfaces and minimal particle generation.`
        },
        {
          title: `Key Benefits for Pharmaceutical Facilities`,
          content: `Reduced contamination risk through faster door cycles and hermetic sealing. Complete regulatory compliance with validation documentation ready for FDA inspections. Lower operational costs through reduced environmental deviations and batch investigations. Improved production efficiency with reliable equipment that maintains schedule adherence. Enhanced quality metrics with consistent environmental monitoring results.`
        }
      ]
    },
    challenge: {
      title: `When Every Door Opening is a Compliance Event`,
      narrative: [
        `In pharmaceutical manufacturing, doors aren't just entrances—they're critical control points. Your HVAC system maintains precise pressure differentials, but when doors fail to seal properly or stay open too long, all that engineering is compromised. Contamination doesn't announce itself; it shows up in your environmental monitoring data, in FDA 483s, in costly batch investigations.`,
        `You've invested heavily in cleanroom infrastructure, but standard industrial doors weren't designed for ISO-classified environments. Seals degrade. Opening speeds allow excessive air exchange. Documentation for validation is incomplete. Each door failure isn't just a maintenance issue—it's a deviation that requires investigation, impact assessment, and potentially, product disposition decisions.`,
        `Your facility needs entrance automation that understands pharmaceutical operations. Solutions that maintain environmental classification, provide validation documentation, and operate with the reliability your production schedule demands.`
      ]
    },
    solution: {
      title: `Entrance Automation Engineered for Pharmaceutical Precision`,
      intro: `We provide entrance solutions that integrate into your contamination control strategy, not undermine it.`,
      examples: [
        {
          scenario: `Material transfer between warehouse and cleanroom happens 80+ times per shift through your airlock system.`,
          howWeHelp: `Our high-speed cleanroom doors cycle in under 2 seconds with hermetic sealing. Interlocking controls prevent cascading airlock doors from opening simultaneously.`,
          result: `Air exchange is minimized. Pressure differentials are maintained. Your environmental monitoring shows 60% lower particle counts during transfers, and material flow increases by 35%.`
        },
        {
          scenario: `You need validated systems with complete documentation for your next FDA inspection.`,
          howWeHelp: `We deliver complete IQ/OQ protocols, validation documentation, and 21 CFR Part 11 compliant reporting packages.`,
          result: `Your quality team has everything auditors expect. No findings related to entrance automation in your last three inspections.`
        }
      ]
    },
    products: [
      {
        name: `High-Speed Roll Doors`,
        useCase: `Airlocks and zone separation in ISO 5-8 classified areas`,
        keyBenefit: `Fast cycle times minimize air exchange and maintain pressure differentials`
      },
      {
        name: `Automatic Sliding Doors`,
        useCase: `Personnel entry to cleanroom and controlled areas`,
        keyBenefit: `Hands-free operation reduces contamination risk from door contact`
      },
      {
        name: `Roller Conveyor Systems`,
        useCase: `Automated material transfer between production zones`,
        keyBenefit: `Reduces manual handling and contamination introduction points`
      }
    ],
    success: {
      title: `Operational Confidence in Every Transfer`,
      vision: `Six months later: Your environmental monitoring consistently meets specifications. Door-related deviations have dropped to zero. Production planning no longer builds in recovery time for pressure differential restoration. Your maintenance team reports 65% fewer service calls. And during your last FDA inspection, the investigator noted your "well-controlled facility with robust contamination control measures." Your entrance automation has become invisible—working so reliably that nobody thinks about it anymore. That's exactly how it should be.`
    },
    metrics: [
      { value: `60%`, label: `Lower particle counts during transfers` },
      { value: `0`, label: `Door-related FDA observations` },
      { value: `35%`, label: `Improvement in material flow efficiency` }
    ],
    seoDescription: `Pharmaceutical entrance automation solutions for cleanrooms. Maintain sterility, ensure compliance, prevent contamination with validated high-speed door systems.`
  },

  // 2. Food Processing & Beverages
  {
    id: `2`,
    name: `Food Processing & Beverages`,
    slug: `food-beverage`,
    icon: `UtensilsCrossed`,
    hero: {
      title: `Food Processing & Beverage Solutions`,
      openingStory: `During your morning food safety walk-through, you notice ice forming on your freezer door mechanism. By afternoon, the door won't close completely. By evening, you're watching thousands of dollars of product warm above safe temperatures while maintenance scrambles for parts. Tomorrow, you'll explain to your largest customer why their shipment will be delayed.`
    },
    overview: {
      title: `Food Processing and Beverage Manufacturing`,
      introduction: `Food processing encompasses the transformation of raw ingredients into consumable products through various manufacturing processes. This industry operates under rigorous food safety standards including HACCP, FDA regulations, and FSMA compliance. Facilities must maintain strict hygiene, temperature control, and pest prevention while handling high production volumes in challenging environmental conditions.`,
      sections: [
        {
          title: `Facility Zones and Operations`,
          content: `Food processing facilities include receiving areas, raw material storage, processing and production zones, packaging lines, cold storage and blast freezers, shipping docks, and waste management areas. Operations involve daily high-pressure washdowns with caustic chemicals, rapid temperature transitions between zones, continuous production cycles with minimal downtime, and strict segregation between raw and finished product areas.`
        },
        {
          title: `Industry-Specific Challenges`,
          content: `Equipment must withstand harsh cleaning chemicals and daily washdowns while maintaining food-safe operation. Temperature control is critical with frequent transitions between ambient and refrigerated zones. Pest prevention requires complete facility sealing with rapid door closure. Ice formation on freezer equipment causes operational failures. Energy costs from refrigeration load are significant, especially with slow or poorly sealed doors.`
        },
        {
          title: `Our Food-Safe Solutions`,
          content: `We offer hygienic high-speed doors constructed from food-grade stainless steel with smooth, crevice-free designs that prevent bacterial harboring. Our freezer doors operate reliably to -30°C with heated frames preventing ice buildup. All systems are IP65-rated to withstand direct high-pressure chemical spray. Rapid closing speeds (1.5-1.8 seconds) minimize pest infiltration and cold air loss while maintaining high throughput.`
        },
        {
          title: `Value for Food Processors`,
          content: `Simplified sanitation with easy-to-clean designs reducing washdown time by 30+ minutes per shift. Energy savings of 40-70% through reduced refrigeration load and faster door cycles. Zero pest-related incidents with rapid closure and complete sealing. Reduced maintenance costs with corrosion-resistant construction designed for food processing environments. HACCP compliance support with proper zone separation and documentation.`
        }
      ]
    },
    challenge: {
      title: `When Equipment Failure Means Food Safety Failure`,
      narrative: [
        `Food processing environments are unforgiving. Your equipment endures high-pressure washdowns with caustic chemicals, constant temperature swings, and hundreds of daily cycles. Standard industrial doors corrode. Seals fail. Motors stop working in wet conditions. Each failure risks product quality, creates sanitation concerns, and threatens your HACCP compliance.`,
        `Your blast freezer loses thousands in energy every time someone props the door open because the automatic door is too slow. Your receiving area can't keep pests out because door seals have degraded from chemical exposure. Your sanitation team spends extra hours cleaning around door mechanisms that trap food particles.`,
        `You need entrance solutions designed for food processing reality—doors that maintain hygiene standards through daily abuse, prevent contamination, preserve temperature integrity, and keep functioning year after year.`
      ]
    },
    solution: {
      title: `Built for the Demands of Food Safety`,
      intro: `Our hygienic entrance solutions are engineered specifically for food and beverage operations—where reliability and sanitation aren't optional.`,
      examples: [
        {
          scenario: `Your blast freezer entrance cycles 120 times per shift. Each opening costs you in refrigeration load and ice buildup.`,
          howWeHelp: `High-speed insulated doors rated for -30°C with heated frames and rapid cycling (1.8 seconds).`,
          result: `Cold air loss drops 70%. Ice buildup is eliminated. Refrigeration system cycling reduces by 40%. Your energy consultant calculates ROI in under 2 years.`
        },
        {
          scenario: `Processing area entrance must survive daily high-pressure chemical washdown while preventing pest entry.`,
          howWeHelp: `Stainless steel doors with IP65 rating, sealed motors, smooth crevice-free design, and 1.5-second closing speed.`,
          result: `Withstands direct chemical spray. Provides no harboring spots for pests or bacteria. Sanitation time reduced by 30 minutes per shift.`
        }
      ]
    },
    products: [
      {
        name: `High-Speed Roll Doors`,
        useCase: `Processing area zone separation with daily washdown requirements`,
        keyBenefit: `Fast operation minimizes contamination and maintains temperature control`
      },
      {
        name: `Hydraulic Dock Levelers`,
        useCase: `Receiving and shipping operations for temperature-sensitive products`,
        keyBenefit: `Safe, efficient loading operations maintaining cold chain integrity`
      },
      {
        name: `Automatic Sliding Doors`,
        useCase: `Personnel entry to processing and packaging areas`,
        keyBenefit: `Hands-free hygienic access preventing cross-contamination`
      }
    ],
    success: {
      title: `Food Safety You Can Count On`,
      vision: `Your next HACCP audit: The inspector examines your entrance systems—no wear from washdowns, freezer doors operating flawlessly, no pest incidents documented. Maintenance logs show 60% fewer service calls, all preventive rather than emergency. Your energy bills confirm 40% lower refrigeration load. Most importantly, your quality team hasn't recorded a single food safety incident related to facility entrances in 8 months. Your operation runs the way it should: efficiently, safely, and reliably.`
    },
    metrics: [
      { value: `70%`, label: `Reduction in cold air loss` },
      { value: `60%`, label: `Fewer emergency repairs` },
      { value: `0`, label: `Pest-related incidents` }
    ],
    seoDescription: `Food processing entrance automation solutions. HACCP compliant high-speed doors, cold storage systems, and hygienic design for food safety.`
  },

  // 3. Cold Storage & Warehousing
  {
    id: `3`,
    name: `Cold Storage & Warehousing`,
    slug: `cold-storage`,
    icon: `Snowflake`,
    hero: {
      title: `Cold Storage & Refrigerated Warehouse Solutions`,
      openingStory: `Your warehouse manager reviews last month's energy bills—again. The HVAC costs keep climbing despite upgrading the refrigeration system. The culprit? Every time a forklift passes through the freezer doors, cold air pours out. Your old doors take 8 seconds to close. That's 8 seconds of your investment literally disappearing into thin air, 200 times per day.`
    },
    overview: {
      title: `Cold Storage and Refrigerated Warehousing`,
      introduction: `Cold storage facilities are specialized warehouses that maintain temperature-controlled environments for perishable goods including food products, pharmaceuticals, and temperature-sensitive materials. These facilities operate at various temperature ranges from cooler (+2°C to +8°C) to freezer (-18°C to -30°C) environments, requiring significant energy investment and precise temperature control to preserve product quality and comply with cold chain regulations.`,
      sections: [
        {
          title: `Core Functions and Operations`,
          content: `Cold storage operations include receiving temperature-sensitive products, blast freezing for rapid temperature reduction, long-term frozen storage, order picking and fulfillment in cold environments, loading dock operations maintaining cold chain, and temperature monitoring throughout all zones. Facilities experience high forklift traffic between temperature zones, continuous door cycling during peak operations, and moisture management to prevent ice formation.`
        },
        {
          title: `Operational Challenges`,
          content: `Energy costs represent 30-40% of operational expenses, primarily driven by refrigeration systems recovering temperature after door openings. Ice formation on door mechanisms causes equipment failure and safety hazards. Slow door speeds result in excessive cold air loss and temperature fluctuations affecting product quality. Equipment reliability is critical as downtime risks significant product loss. Moisture infiltration from outside air creates condensation and ice buildup throughout the facility.`
        },
        {
          title: `Our Thermal Protection Solutions`,
          content: `We provide insulated high-speed doors specifically engineered for extreme cold environments, operating reliably to -30°C. Heated door frames prevent ice formation on critical components. Rapid cycling speeds (1.8 seconds) minimize cold air exchange during each opening. Thermal dock shelters create insulated envelopes between facility and trucks during loading operations. All systems feature weather-resistant construction and minimal maintenance requirements in cold conditions.`
        },
        {
          title: `Economic and Operational Benefits`,
          content: `Energy savings of 40-75% through reduced cold air loss, with typical ROI in 18-24 months. Elimination of ice-related equipment failures and maintenance calls. Consistent temperature maintenance protecting product quality and reducing spoilage. Increased throughput with faster door cycles supporting higher traffic volumes. Lower refrigeration system cycling reducing wear and extending equipment life. Improved working conditions for staff with less temperature fluctuation.`
        }
      ]
    },
    challenge: {
      title: `The Hidden Cost of Slow Doors`,
      narrative: [
        `In cold storage, every second a door is open costs money. Refrigeration systems work overtime to recover temperature. Ice forms on door mechanisms from moisture infiltration. Product quality suffers from temperature fluctuations. Your facility manager sees the impact in energy bills, maintenance calls for frozen door components, and occasional product holds when temperature excursions are documented.`,
        `Traditional dock doors and freezer entrances weren't designed for the volume and speed of modern cold storage operations. They're too slow, poorly insulated, vulnerable to ice formation, and require constant maintenance. Each repair means downtime, reduced throughput, and risk to temperature-sensitive inventory.`,
        `You need entrance solutions that protect your cold chain as vigilantly as your refrigeration system does. Doors that minimize air exchange, prevent ice formation, maintain temperature integrity, and keep functioning reliably in extreme conditions.`
      ]
    },
    solution: {
      title: `Thermal Protection That Pays for Itself`,
      intro: `Our cold storage entrance solutions are engineered for one purpose: maintaining temperature integrity while maximizing operational efficiency.`,
      examples: [
        {
          scenario: `Your freezer entrance sees 200+ forklift passages daily. Current doors take 8 seconds to close, hemorrhaging cold air.`,
          howWeHelp: `High-speed insulated doors cycle in 1.8 seconds with heated frames preventing ice formation, operating reliably to -30°C.`,
          result: `Cold air loss reduced by 75%. Refrigeration cycling drops by 45%. Ice-related maintenance calls eliminated. Payback in under 18 months.`
        },
        {
          scenario: `Loading dock operations compromise temperature control as trucks are loaded with refrigerated product.`,
          howWeHelp: `Dock shelters with thermal seals create insulated envelope between facility and truck.`,
          result: `Temperature integrity maintained during loading. Product quality protected. Energy savings of 35% at dock positions.`
        }
      ]
    },
    products: [
      {
        name: `High-Speed Roll Doors`,
        useCase: `Freezer and cold storage zone separation`,
        keyBenefit: `Rapid operation prevents cold loss and frost buildup`
      },
      {
        name: `Hydraulic Dock Levelers`,
        useCase: `Cold storage loading dock operations`,
        keyBenefit: `Cold-rated hydraulics maintaining reliable operation in freezer conditions`
      },
      {
        name: `Roller Conveyor Systems`,
        useCase: `Automated product movement in cold storage`,
        keyBenefit: `Reduces personnel exposure to extreme cold environments`
      }
    ],
    success: {
      title: `Temperature Control That Works`,
      vision: `One year after installation: Your energy consultant presents the data—40% reduction in refrigeration load, $75,000 annual savings in electricity costs. Your maintenance team reports zero ice-related service calls on the new doors. Temperature monitoring shows consistent performance; product quality holds are eliminated. Your CFO approves expansion of the cold storage facility, confident that the infrastructure can support it efficiently. The doors paid for themselves faster than projected, and they'll keep saving money for years to come.`
    },
    metrics: [
      { value: `75%`, label: `Reduction in cold air loss` },
      { value: `45%`, label: `Lower refrigeration cycling` },
      { value: `$75K+`, label: `Annual energy savings` }
    ],
    seoDescription: `Cold storage high-speed doors and thermal dock equipment. Reduce energy costs, eliminate ice buildup, maintain temperature integrity in freezers and coolers.`
  },

  // 4. Warehouse & Logistics  
  {
    id: `4`,
    name: `Warehouse & Logistics`,
    slug: `warehouse-logistics`,
    icon: `Warehouse`,
    hero: {
      title: `Warehouse & Distribution Center Solutions`,
      openingStory: `It's 11 PM at your distribution center. The night shift supervisor radios that a forklift has crashed into the main aisle door—again. The door frame is bent, the door won't close, and you have 47 trucks scheduled for loading starting at 4 AM. Your maintenance team estimates 6 hours for repairs. Your operations manager is already calculating how many deliveries will miss their windows tomorrow.`
    },
    overview: {
      title: `Distribution and Logistics Operations`,
      introduction: `Distribution and logistics encompasses the movement, storage, and management of goods from origin to final destination. Modern warehouses and distribution centers operate 24/7 with high-volume throughput, serving e-commerce, retail, manufacturing, and third-party logistics (3PL) operations. These facilities require seamless coordination between receiving, storage, order fulfillment, and shipping to meet tight delivery windows and customer expectations.`,
      sections: [
        {
          title: `Core Functions and Workflows`,
          content: `Distribution centers handle inbound freight receiving and dock operations, putaway and inventory storage management, order picking and fulfillment processing, packing and shipping preparation, outbound loading and carrier coordination, and returns processing. Operations feature high-frequency forklift traffic through internal aisles, continuous loading dock activity with multiple trucks, cross-docking for rapid product transfer, and warehouse management system (WMS) integration controlling all activities.`
        },
        {
          title: `Operational Challenges`,
          content: `High-traffic zones experience frequent door damage from forklift collisions causing unplanned downtime. Slow door speeds create bottlenecks reducing throughput and increasing truck dwell time. Equipment failures disrupt operations and cause delivery delays affecting customer satisfaction. Loading dock inefficiency increases carrier wait times and threatens on-time departure rates. Safety concerns arise from traffic congestion and door-related incidents. Every minute of downtime translates directly to missed delivery windows and operational costs.`
        },
        {
          title: `Our High-Performance Solutions`,
          content: `We provide self-repairing high-speed doors with breakaway technology that automatically reset after forklift impacts, eliminating downtime. Rapid dock doors cycle in 1.5 seconds maximizing truck turnaround efficiency. Complete integrated loading systems coordinate dock levelers, vehicle restraints, lights, and doors for optimized workflow. All systems feature robust construction designed for 24/7 operation with minimal maintenance. WMS integration available for automated door control based on traffic patterns and operational needs.`
        },
        {
          title: `Performance Improvements`,
          content: `Zero downtime from door collisions with self-repairing technology resetting in seconds. Truck turnaround time reduced by 30-40% improving dock utilization and carrier satisfaction. Throughput increased by 20-30% through faster door cycles and eliminated bottlenecks. Service calls reduced by 70-80% with durable construction and self-repairing capability. Enhanced safety with reduced traffic congestion and collision-resistant design. Improved on-time delivery performance supporting customer service levels and contract compliance.`
        }
      ]
    },
    challenge: {
      title: `When Downtime Isn't an Option`,
      narrative: [
        `Modern logistics operates on razor-thin margins and tight delivery windows. Your warehouse runs 24/7, processing hundreds of orders per hour. Forklifts make 500+ passages through your high-traffic aisles each shift. Standard industrial doors weren't built for this intensity. They get damaged. They slow operations. They fail at the worst possible times.`,
        `Each door failure cascades. Traffic backs up. Operators take longer routes. Productivity drops. Your dock doors are the critical interface between facility and trucks—when they're slow or unreliable, truck dwell time increases, carrier relationships suffer, and delivery performance degrades.`,
        `You need entrance solutions engineered for logistics velocity. Doors that survive forklift traffic, cycle fast enough to maintain throughput, self-repair after impacts, and integrate with your WMS to keep goods flowing without interruption.`
      ]
    },
    solution: {
      title: `Built for Logistics Intensity`,
      intro: `Our warehouse entrance solutions are designed for one reality: high-volume operations that never stop.`,
      examples: [
        {
          scenario: `Your main warehouse aisles see 500+ forklift passages per shift. Collision damage requires frequent door replacements.`,
          howWeHelp: `Self-repairing high-speed doors with breakaway design. When impacted, curtain releases and resets in seconds without damage.`,
          result: `Zero downtime from forklift collisions. Door cycles in 1.5 seconds maintaining traffic flow. Service calls drop 80%. Traffic throughput increases 25%.`
        },
        {
          scenario: `Loading dock turnaround time is critical. Current dock doors are slow, trucks wait, carriers complain.`,
          howWeHelp: `Rapid dock doors with integrated dock levelers, vehicle restraints, and LED traffic lights—all coordinated.`,
          result: `Truck turnaround time cut from 45 to 28 minutes. On-time departure rate improves from 76% to 94%. Carrier satisfaction scores increase.`
        }
      ]
    },
    products: [
      {
        name: `High-Speed Roll Doors`,
        useCase: `High-traffic warehouse aisles and internal zone separation`,
        keyBenefit: `Self-repairing design ensures zero downtime after forklift impacts`
      },
      {
        name: `Hydraulic Dock Levelers`,
        useCase: `Loading bay operations with 50-100+ daily truck movements`,
        keyBenefit: `Heavy-duty construction proven for extreme duty cycles`
      },
      {
        name: `Roller Conveyor Systems`,
        useCase: `Automated sortation and material flow throughout facility`,
        keyBenefit: `Modular design integrates with warehouse management systems`
      }
    ],
    success: {
      title: `Logistics That Flows`,
      vision: `Three months after installation: Your operations dashboard shows the improvement—on-time shipments up 18%, truck turnaround time reduced 35%, zero downtime from door failures. Your maintenance budget for entrance equipment has dropped by 70%. Most importantly, your customer service team reports fewer "where's my order?" calls. When your largest customer audit arrives, the inspector notes "highly efficient distribution operation with robust infrastructure." Your doors have become invisible—doing their job so well that nobody thinks about them. Your team can focus on what matters: moving goods, meeting delivery windows, and growing the business.`
    },
    metrics: [
      { value: `80%`, label: `Reduction in service calls` },
      { value: `35%`, label: `Faster truck turnaround time` },
      { value: `0`, label: `Downtime from door collisions` }
    ],
    seoDescription: `Warehouse high-speed doors and loading dock solutions. Self-repairing doors, rapid dock systems, and integrated loading equipment for 24/7 logistics operations.`
  },

  // 5. Automotive & Mobility
  {
    id: `5`,
    name: `Automotive & Mobility`,
    slug: `automotive`,
    icon: `Car`,
    hero: {
      title: `Automotive Manufacturing Solutions`,
      openingStory: `Your paint shop supervisor makes the call you dread: contamination in Booth 3. A door to the prep area didn't seal properly during the night shift. Airborne particles infiltrated during the base coat application. Twelve vehicles in various stages of finishing are affected. That's $180,000 in rework, minimum. Your plant manager wants to know how this happened and what you're doing to prevent it from happening again.`
    },
    overview: {
      title: `Automotive Manufacturing Operations`,
      introduction: `Automotive manufacturing is a precision-driven industry producing vehicles through complex assembly processes including stamping, welding, painting, and final assembly. These facilities operate on lean manufacturing principles with just-in-time (JIT) delivery systems, zero-defect quality standards, and synchronized production lines. Paint operations require pristine controlled environments while assembly areas demand high-cycle reliability for material flow and zone separation.`,
      sections: [
        {
          title: `Manufacturing Zones and Processes`,
          content: `Automotive plants include body shop welding operations, paint preparation and application booths, paint curing ovens, final assembly lines with multiple stations, JIT material delivery and sequencing areas, quality inspection zones, and finished vehicle storage. Material flow between zones occurs continuously with strict timing requirements. Paint booths require positive pressure and contamination control. High door cycle volumes with 300-500+ daily passages are common in material delivery routes.`
        },
        {
          title: `Critical Manufacturing Challenges`,
          content: `Paint booth contamination from inadequate door sealing results in costly rework and quality defects. Material flow bottlenecks disrupt JIT delivery causing line stoppages and production delays. Equipment must withstand extreme cycle volumes (500,000+ annually) without failure. Door breakdowns stop production immediately with costs of $10,000+ per minute of downtime. Maintaining environmental controls while supporting high-speed production flow creates competing demands. Fire safety compliance requires robust compartmentalization without impeding operations.`
        },
        {
          title: `Our Manufacturing Solutions`,
          content: `We provide paint booth high-speed doors with hermetic seals and clean-surface designs preventing particle contamination. Heavy-duty rapid doors are rated for 500,000+ annual cycles with predictive maintenance monitoring. Fire-rated compartment doors separate manufacturing zones while maintaining production flow. All systems feature minimal opening times (under 2 seconds) supporting takt time requirements. Integration with plant automation systems enables coordinated operation with production line timing.`
        },
        {
          title: `Manufacturing Excellence Delivered`,
          content: `Paint defect reduction of 85-90% through contamination prevention and proper booth isolation. Production efficiency gains of 10-15% with eliminated door-related bottlenecks and downtime. Rework cost savings of $200,000-300,000 annually from reduced finish defects. Improved OEE (Overall Equipment Effectiveness) through reliable infrastructure supporting lean operations. Zero unplanned production stops from door failures. Enhanced quality metrics supporting customer audits and manufacturing excellence programs.`
        }
      ]
    },
    challenge: {
      title: `When Quality is Non-Negotiable`,
      narrative: [
        `Automotive manufacturing operates with zero tolerance for defects. Your paint booth environment must be pristine—any contamination ruins the finish. Your assembly line runs on just-in-time delivery—any material flow disruption stops production. Your facility processes thousands of vehicle cycles daily—equipment must withstand relentless use.`,
        `Standard industrial doors compromise your operation. They allow contamination into paint areas. They slow material flow, creating bottlenecks. They fail under high-cycle intensity, causing production stoppages. Each failure ripples through your entire manufacturing process, affecting production targets and quality metrics.`,
        `You need entrance solutions engineered for automotive precision. Doors that maintain paint booth integrity, support JIT material flow, survive 500,000+ annual cycles, and integrate with your automation systems to keep production moving at automotive speed.`
      ]
    },
    solution: {
      title: `Engineered for Automotive Excellence`,
      intro: `Our automotive entrance solutions are designed to meet the exacting standards of vehicle manufacturing.`,
      examples: [
        {
          scenario: `Paint booth access must maintain positive pressure and cleanliness while allowing efficient vehicle and personnel flow.`,
          howWeHelp: `High-speed doors with hermetic seals and clean-surface design, cycling in under 2 seconds with minimal air exchange.`,
          result: `Paint booth contamination incidents drop 90%. Vehicle throughput increases 15%. Rework costs from finish defects reduced by $240K annually.`
        },
        {
          scenario: `Material delivery to assembly line requires 300+ door cycles per shift. Current doors cause bottlenecks and suffer frequent failures.`,
          howWeHelp: `Heavy-duty high-speed doors rated for 500,000+ cycles annually with predictive maintenance monitoring.`,
          result: `Material flow bottlenecks eliminated. Zero unplanned door failures in 6 months. Production line efficiency improves 12%.`
        }
      ]
    },
    products: [
      {
        name: `High-Speed Roll Doors`,
        useCase: `Assembly line transitions and paint booth access`,
        keyBenefit: `Fast operation prevents production bottlenecks and maintains process separation`
      },
      {
        name: `Hydraulic Dock Levelers`,
        useCase: `Receiving and shipping operations for vehicle components`,
        keyBenefit: `Heavy-duty capacity supports just-in-time manufacturing schedules`
      },
      {
        name: `Roller Conveyor Systems`,
        useCase: `Parts movement along assembly lines`,
        keyBenefit: `Reliable material flow synchronized with production sequences`
      }
    ],
    success: {
      title: `Manufacturing Excellence, Delivered`,
      vision: `One year after implementation: Your quality metrics tell the story—paint defects from contamination down 90%, first-pass yield improved 8%, unplanned production stops eliminated. Your lean manufacturing team calculated that improved door reliability contributed to 12% higher overall equipment effectiveness (OEE). During your largest customer's manufacturing audit, they specifically noted "world-class facility infrastructure supporting quality production." Your plant manager shares the results in the quarterly business review: this investment didn't just solve problems—it enabled higher production targets. Your doors have become what they should be: reliable infrastructure that your team never worries about.`
    },
    metrics: [
      { value: `90%`, label: `Fewer paint contamination incidents` },
      { value: `12%`, label: `Improvement in production efficiency` },
      { value: `$240K`, label: `Annual savings from reduced rework` }
    ],
    seoDescription: `Automotive manufacturing entrance solutions. Paint booth doors, heavy-duty high-speed doors for assembly lines, and fire-rated systems for automotive plants.`
  },

  // 6. Healthcare Facilities
  {
    id: `6`,
    name: `Healthcare Facilities`,
    slug: `healthcare`,
    icon: `Hospital`,
    hero: {
      title: `Healthcare Facility Solutions`,
      openingStory: `Your hospital's infection control team traces a cluster of surgical site infections to OR Suite 4. Investigation reveals the hermetic door to the sterile corridor has been malfunctioning—not fully sealing after each entry. Positive pressure was compromised. Unfiltered air entered the surgical environment. Now you face patient notifications, potential litigation, regulatory reporting, and urgent remediation while maintaining surgical capacity.`
    },
    overview: {
      title: `Healthcare Facility Infrastructure`,
      introduction: `Healthcare facilities including hospitals, surgical centers, and medical campuses require specialized infrastructure supporting patient care, infection control, and operational efficiency. These environments must balance sterile barrier maintenance in critical areas with high-traffic flow of patients, staff, equipment, and supplies. Regulatory compliance, patient safety, and infection prevention drive all design and operational decisions.`,
      sections: [
        {
          title: `Healthcare Zones and Requirements`,
          content: `Healthcare facilities encompass operating room suites requiring hermetic isolation and positive pressure, sterile processing departments with contaminated and sterile sides, emergency departments needing rapid access while maintaining security, patient care units with frequent bed and equipment traffic, service corridors for supplies and logistics separate from patient areas, loading docks for medical supplies and waste removal, and imaging and diagnostic areas with equipment protection requirements.`
        },
        {
          title: `Unique Healthcare Challenges`,
          content: `Infection control is paramount with HAIs (Healthcare-Associated Infections) threatening patient safety and regulatory compliance. Operating rooms require maintained positive pressure and sterile barriers during personnel and equipment entry. Service operations must be efficient yet invisible to patients maintaining healing environments. Equipment must withstand frequent cleaning and disinfection protocols. Noise from doors and operations disrupts patient rest and recovery. Touchless operation is preferred to reduce pathogen transmission points. Any equipment failure in critical areas affects surgical schedules and patient care delivery.`
        },
        {
          title: `Our Healthcare-Specific Solutions`,
          content: `We offer hermetic doors for surgical suites with validated performance maintaining positive pressure and sterile environments. Touchless activation systems reduce contact points supporting infection control. Antimicrobial surface treatments on all patient-facing equipment. Hygienic high-speed doors for service corridors feature quiet operation, smooth easy-to-clean surfaces, and rapid cycling minimizing corridor disruption. Fire-rated healthcare doors meet life safety codes while supporting 24/7 staff and equipment flow. All systems designed for reliability supporting uninterrupted patient care.`
        },
        {
          title: `Patient Safety and Operational Benefits`,
          content: `Zero environmental control failures in surgical suites protecting patient safety. HAI rate reduction through proper isolation and touchless operation eliminating transmission points. Noise complaint reduction of 70-80% creating better healing environments and patient satisfaction. Service efficiency improvements with faster, quieter corridor operations supporting timely care delivery. Regulatory compliance support for Joint Commission, CMS, and state health department requirements. Reduced facility downtime with reliable equipment and lower maintenance requirements. Enhanced reputation through demonstrated commitment to patient safety infrastructure.`
        }
      ]
    },
    challenge: {
      title: `When Patient Safety Depends on Every Entry Point`,
      narrative: [
        `Healthcare facilities face unique entrance challenges. Operating rooms require sterile environments where any contamination risks patient safety. Emergency departments need rapid access while maintaining security. Service corridors must manage high-traffic flow of supplies, equipment, linens, and waste—all without disrupting patient care or introducing infection risks.`,
        `Standard commercial doors weren't designed for healthcare's demands. They can't maintain the environmental controls ORs require. They don't support the touchless operation infection control needs. They fail to withstand the constant traffic of beds, carts, and equipment. Each failure doesn't just disrupt operations—it threatens patient safety.`,
        `You need entrance solutions designed for healthcare's critical balance: maintaining sterile barriers when required, enabling efficient workflow always, supporting infection control protocols, and operating reliably when patient safety depends on it.`
      ]
    },
    solution: {
      title: `Healthcare Infrastructure That Protects`,
      intro: `Our healthcare entrance solutions address the unique intersection of patient safety, infection control, and operational efficiency.`,
      examples: [
        {
          scenario: `Operating room suite requires hermetically sealed access maintaining positive pressure and sterile environment.`,
          howWeHelp: `Automated doors with hermetic sealing, touchless activation, and antimicrobial surfaces, validated for surgical suite applications.`,
          result: `Surgical suite environmental monitoring consistently meets specifications. Touchless operation eliminates contact points reducing HAI risk. Door-related environmental failures drop to zero.`
        },
        {
          scenario: `Service corridor sees constant traffic of supply carts, meal service, linen delivery, and waste removal—disrupting patient care with noise and creating infection control concerns.`,
          howWeHelp: `High-speed doors with quiet operation and smooth surfaces, cycling rapidly to minimize corridor impact.`,
          result: `Service operations become nearly invisible to patients. Noise complaints drop 75%. Easy-clean surfaces support infection control protocols. Staff efficiency improves with faster corridor transit.`
        }
      ]
    },
    products: [
      {
        name: `Automatic Sliding Doors`,
        useCase: `Patient care areas and high-traffic hospital corridors`,
        keyBenefit: `Touchless operation reduces infection transmission and improves accessibility`
      },
      {
        name: `High-Speed Roll Doors`,
        useCase: `Sterile processing and operating room support areas`,
        keyBenefit: `Fast cycles minimize air exchange maintaining environmental control`
      },
      {
        name: `Roller Conveyor Systems`,
        useCase: `Hospital logistics and supply chain operations`,
        keyBenefit: `Automated material flow reducing staff burden and improving efficiency`
      }
    ],
    success: {
      title: `Infrastructure That Heals`,
      vision: `Eighteen months post-installation: Your infection control data shows the impact—surgical site infections in OR Suite 4 returned to baseline, environmental monitoring consistently meets specifications, and your hospital's overall HAI rates have improved. Patient experience surveys note quieter, more peaceful environments. Your facilities team reports 65% reduction in entrance-related service calls. During Joint Commission survey, the inspectors specifically commend your "proactive approach to environmental control and infection prevention." Your COO presents the results to the board: this investment contributed to better patient outcomes, operational efficiency, and helped the hospital achieve top-quartile quality metrics. These doors aren't just infrastructure—they're part of your patient safety program.`
    },
    metrics: [
      { value: `0`, label: `Environmental failures in surgical suites` },
      { value: `75%`, label: `Reduction in noise complaints` },
      { value: `65%`, label: `Fewer service calls` }
    ],
    seoDescription: `Healthcare facility entrance automation solutions. Hermetic operating room doors, hygienic high-speed doors, infection control, and patient safety for hospitals.`
  },

  // 7. E-commerce & Fulfillment
  {
    id: `7`,
    name: `E-commerce & Fulfillment`,
    slug: `ecommerce`,
    icon: `Package`,
    hero: {
      title: `E-commerce & Fulfillment Center Solutions`,
      openingStory: `Black Friday. Your fulfillment center is processing 15,000 orders per hour. A dock door failure at 2 PM creates a cascading bottleneck. Trucks queue. Carriers threaten service surcharges. Your team scrambles to reroute traffic through adjacent doors. By 6 PM, you're three hours behind schedule. Tomorrow's delivery promises are now at risk, and your marketplace ratings hang in the balance.`
    },
    overview: {
      title: `E-commerce Fulfillment Operations`,
      introduction: `E-commerce fulfillment centers are hyper-efficient distribution hubs designed to process online orders at unprecedented speed and volume. These facilities operate 24/7 with aggressive service level agreements, same-day shipping commitments, and real-time inventory management. Peak seasons can see order volumes increase 300-500%, requiring infrastructure that scales without failure.`,
      sections: [
        {
          title: `Operational Requirements`,
          content: `Fulfillment operations include high-velocity order picking, multi-channel order processing, rapid packaging and labeling, sortation systems feeding multiple carriers, continuous dock operations with truck rotations every 15-30 minutes, and returns processing. Automated conveyor systems move goods between zones. Warehouse management systems orchestrate all activities with minute-by-minute precision.`
        },
        {
          title: `Performance Challenges`,
          content: `Peak season volume surges strain all infrastructure with 3-5x normal traffic. Dock door failures create immediate bottlenecks affecting entire operations. Carrier delivery windows are strict with financial penalties for delays. Equipment downtime directly impacts order fulfillment rates and customer satisfaction metrics. Every minute of delay multiplies across thousands of orders. Marketplace ratings depend on consistent on-time performance.`
        },
        {
          title: `Our Fulfillment-Grade Solutions`,
          content: `We provide ultra-high-speed dock doors cycling in under 1.5 seconds supporting rapid truck turnaround. Self-repairing breakaway technology ensures zero downtime from forklift impacts. Heavy-duty construction rated for 1 million+ annual cycles handles peak season intensity. Integrated dock equipment coordinates levelers, lights, restraints, and doors. Predictive maintenance monitoring prevents failures before they impact operations.`
        },
        {
          title: `Fulfillment Performance Gains`,
          content: `Zero unplanned downtime maintaining fulfillment commitments during peak seasons. Dock turnaround time reduced by 35-40% increasing daily truck capacity. Order processing throughput increased by 25-30% through eliminated bottlenecks. Carrier satisfaction improved with consistent on-time departures. Marketplace ratings protected through reliable infrastructure. Scalable performance supporting seasonal volume surges without adding dock doors.`
        }
      ]
    },
    challenge: {
      title: `When Every Second Counts`,
      narrative: [
        `E-commerce fulfillment operates at relentless pace. Orders stream in 24/7. Customers expect same-day or next-day delivery. Your facility processes thousands of orders hourly, moving goods from receipt to shipment in hours, not days. Dock doors cycle hundreds of times per shift as trucks arrive, load, and depart on tight schedules.`,
        `Standard dock doors can't sustain this intensity. They're too slow, creating traffic bottlenecks. They fail under constant use, stopping operations when you can least afford downtime. Peak seasons amplify every weakness—Black Friday, Cyber Monday, holiday rush—when failure means missed deliveries, upset customers, and damaged marketplace ratings.`,
        `You need entrance infrastructure engineered for e-commerce velocity. Doors that cycle faster than forklift operators can move. Equipment that self-repairs after impacts. Systems that handle peak season surge without failure. Infrastructure that supports your fulfillment promises, not threatens them.`
      ]
    },
    solution: {
      title: `Built for Fulfillment Speed`,
      intro: `Our high-performance dock systems are engineered for the relentless demands of e-commerce fulfillment.`,
      examples: [
        {
          scenario: `Peak season: 500+ dock door cycles per day across 30 loading positions. Any door failure creates immediate bottleneck affecting thousands of orders.`,
          howWeHelp: `Ultra-rapid doors with 1.4-second cycles and self-repairing breakaway technology. Doors automatically reset after forklift impacts in seconds—no technician required, no downtime.`,
          result: `Zero downtime during entire peak season. Dock throughput increased 38%. All carrier delivery windows met consistently.`
        },
        {
          scenario: `Continuous operations with mixed carrier schedules. Trucks arrive every 15-20 minutes requiring rapid loading and immediate departure.`,
          howWeHelp: `Integrated dock systems coordinate all equipment—vehicle restraints engage, dock levelers deploy, doors open—in single automated sequence activated by truck arrival.`,
          result: `Truck dwell time reduced from 45 to 28 minutes. 40% more trucks processed daily through existing dock positions.`
        }
      ]
    },
    products: [
      { name: `Hydraulic Dock Levelers`, useCase: `Loading dock operations with 300-500+ daily cycles`, keyBenefit: `Heavy-duty reliability maximizing throughput in high-volume operations` },
      { name: `High-Speed Roll Doors`, useCase: `High-traffic internal zones with forklift passage`, keyBenefit: `Self-repairing design ensures zero downtime after impacts` },
      { name: `Roller Conveyor Systems`, useCase: `Automated sortation and order fulfillment`, keyBenefit: `Scalable systems supporting peak season volume surges` }
    ],
    success: {
      title: `Peak Season Ready, Every Season`,
      vision: `Your fulfillment center operates at consistent high velocity regardless of season. Dock doors cycle seamlessly hundreds of times per shift. Forklifts move goods without hesitation. Trucks load and depart on schedule. Your infrastructure keeps pace with your promise: orders received today, shipped today, delivered tomorrow. Peak season surges are managed, not survived. Your marketplace ratings reflect your reliability. Your fulfillment operation runs exactly as designed—fast, efficient, uninterrupted.`
    },
    metrics: [
      { value: `0`, label: `Downtime incidents during peak season` },
      { value: `38%`, label: `Increase in dock throughput` },
      { value: `99.7%`, label: `On-time carrier departures` }
    ],
    seoDescription: `E-commerce fulfillment center entrance automation. Ultra-fast dock doors, self-repairing systems, peak season performance, and zero-downtime solutions for high-volume order fulfillment.`
  },

  // 8. Manufacturing Plants (General)
  {
    id: `8`,
    name: `Manufacturing Plants`,
    slug: `manufacturing`,
    icon: `Factory`,
    hero: {
      title: `General Manufacturing Solutions`,
      openingStory: `Your production manager reports the east wing door is jammed—again. The maintenance team is already dealing with two other equipment issues. Material flow backs up. Assembly stations wait for components. Your just-in-time delivery system starts missing windows. By shift end, you're running 20% behind production targets. The quarterly efficiency report will show this downtime, and senior management will ask why your facility infrastructure can't keep pace with your production schedule.`
    },
    overview: {
      title: `Modern Manufacturing Operations`,
      introduction: `Modern manufacturing plants produce diverse products through complex processes requiring seamless material flow, environmental control, worker safety, and operational efficiency. These facilities range from discrete manufacturing (assembling components) to process manufacturing (continuous production). All share common needs: reliable infrastructure supporting production schedules, zone separation for safety and quality, and equipment that withstands industrial environments.`,
      sections: [
        {
          title: `Manufacturing Infrastructure Needs`,
          content: `Manufacturing facilities include receiving and raw material storage, work-in-process material flow between production zones, assembly or processing areas with specific environmental requirements, quality control and testing zones, finished goods storage and shipping operations, and maintenance workshops. Material handling equipment moves goods continuously. Production flows must not be disrupted by infrastructure failures. Different zones require separation for safety, quality, or environmental control.`
        },
        {
          title: `Common Manufacturing Challenges`,
          content: `Material flow bottlenecks reduce production efficiency and threaten delivery schedules. Equipment failures cause costly downtime affecting multiple downstream operations. Environmental control between zones is critical for quality but complicated by high traffic. Safety regulations require proper zone separation and equipment protection. Dust, debris, and harsh conditions accelerate equipment wear. High door cycle volumes from continuous material movement demand exceptional reliability. Any infrastructure failure cascades through interconnected production processes.`
        },
        {
          title: `Our Manufacturing Door Solutions`,
          content: `We provide industrial-grade high-speed doors designed for continuous manufacturing operations, rated for 300,000-500,000+ annual cycles. Rapid opening speeds minimize wait times maintaining production flow. Self-repairing designs reduce maintenance requirements and eliminate downtime from minor impacts. Fire-rated options provide required safety zone separation. Robust construction withstands harsh manufacturing environments including dust, debris, temperature variations, and aggressive use. All systems integrate with facility automation and safety systems.`
        },
        {
          title: `Manufacturing Performance Benefits`,
          content: `Production efficiency gains of 12-18% through eliminated bottlenecks and faster material flow. Reduced downtime with reliable equipment and self-repairing capabilities. Enhanced safety through proper zone separation and integrated safety features. Lower maintenance costs with durable construction requiring minimal service. Improved environmental control between manufacturing zones. Better regulatory compliance with documented safety features. Scalable solutions supporting facility expansion and production increases.`
        }
      ]
    },
    challenge: {
      title: `When Infrastructure Can't Keep Up`,
      narrative: [
        `Manufacturing runs on tight schedules. Materials must flow seamlessly between operations. Any bottleneck ripples through your entire production process, affecting output, efficiency metrics, and delivery commitments. Your facility infrastructure should enable production, not hinder it.`,
        `Standard industrial doors weren't designed for the intensity of modern manufacturing. They're slow, creating wait times at critical transitions. They fail frequently under heavy use, causing unplanned downtime. They require constant maintenance, pulling your technicians from more important work. Each failure affects not just one operation, but cascades through dependent processes.`,
        `You need entrance solutions built for manufacturing reality. Doors that cycle fast enough to keep pace with production. Equipment durable enough to withstand continuous use. Systems that self-repair minor issues, eliminating downtime. Infrastructure that supports your manufacturing efficiency, not undermines it.`
      ]
    },
    solution: {
      title: `Engineered for Manufacturing Intensity`,
      intro: `Our manufacturing door systems are built to support continuous production operations without becoming a bottleneck or maintenance burden.`,
      examples: [
        {
          scenario: `Material flow between fabrication and assembly areas: 250+ daily passages with forklifts carrying components. Previous overhead doors too slow, creating 2-3 minute delays per cycle.`,
          howWeHelp: `Industrial high-speed doors with 2-second opening and 1.5-second closing times. Automatic activation prevents wait times. Robust construction handles forklift traffic without damage.`,
          result: `Material flow time reduced 40%. Production efficiency increased 15% by eliminating bottlenecks. Zero door-related downtime in 8 months.`
        },
        {
          scenario: `Fire-rated separation required between manufacturing zones while maintaining continuous production flow and safety compliance.`,
          howWeHelp: `Fire-rated high-speed doors providing 2-hour fire protection with rapid operation for normal traffic. Integrated with facility fire alarm system for automatic closure during emergencies.`,
          result: `Full safety compliance maintained. Production flow unaffected. Passed all regulatory inspections with zero findings.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Internal material flow between production zones`, keyBenefit: `Fast cycle times prevent bottlenecks and maintain production efficiency` },
      { name: `Hydraulic Dock Levelers`, useCase: `Raw material receiving and finished goods shipping`, keyBenefit: `Reliable loading operations supporting production schedules` },
      { name: `Roller Conveyor Systems`, useCase: `Assembly line material handling and work-in-progress movement`, keyBenefit: `Automated flow reducing manual handling and improving efficiency` }
    ],
    success: {
      title: `Infrastructure That Enables Production`,
      vision: `Your manufacturing facility operates at designed capacity. Materials flow smoothly between operations without delay. Forklifts move freely through doorways that open before they arrive and close immediately after passage. Production zones maintain proper separation for safety and quality without impeding efficiency. Your maintenance team focuses on production equipment, not door repairs. Your facility infrastructure has become invisible—exactly as it should be—simply enabling your production operations to run efficiently, safely, and reliably shift after shift.`
    },
    metrics: [
      { value: `15%`, label: `Production efficiency increase` },
      { value: `40%`, label: `Material flow time reduction` },
      { value: `80%`, label: `Decrease in maintenance calls` }
    ],
    seoDescription: `Manufacturing plant entrance automation and industrial doors. High-speed doors, fire-rated options, self-repairing systems, and zone separation solutions for production facilities.`
  },

  // 9. Heavy Industry (Steel & Metal)
  {
    id: `9`,
    name: `Heavy Industry (Steel & Metal)`,
    slug: `heavy-industry`,
    icon: `Factory`,
    hero: {
      title: `Heavy Industry & Metal Processing Solutions`,
      openingStory: `The blast furnace area door has warped from heat exposure—again. Your maintenance team is welding reinforcements during a brief production pause. This is the third door failure this quarter. Each replacement costs $15,000 in materials and labor, plus production interruptions. Your plant manager wants to know why standard industrial equipment can't survive in your steel processing environment. The answer is simple: extreme temperatures, heavy dust, and constant vibration destroy conventional doors. You need something engineered for heavy industry reality.`
    },
    overview: {
      title: `Heavy Industry and Metal Processing`,
      introduction: `Heavy industry encompasses steel mills, metal foundries, smelting operations, rolling mills, and metal fabrication plants. These environments feature extreme conditions: temperatures exceeding 50°C near furnaces, heavy particulate and metal dust, high vibration from machinery, large equipment movement, and continuous 24/7 operations. Standard industrial equipment fails rapidly. Every component must be engineered for extreme duty.`,
      sections: [
        {
          title: `Extreme Operating Conditions`,
          content: `Heavy industry facilities include blast furnace and smelting areas with extreme heat radiation, rolling and forming operations with heavy vibration, metal cutting and grinding zones with heavy dust and debris, large equipment and crane traffic, maintenance shops with heavy tools and materials, and raw material and finished product storage. Ambient temperatures near processing equipment often exceed 40-50°C. Metal dust is pervasive and abrasive. Vibration from heavy machinery is constant. Large loads move through doorways continuously.`
        },
        {
          title: `Infrastructure Survival Challenges`,
          content: `Extreme heat warps standard door components and degrades seals and motors. Heavy particulate accumulation causes mechanical failures in moving parts. Vibration loosens fasteners and misaligns door systems. Large equipment impacts damage conventional doors beyond repair. Corrosive environments from chemicals and moisture attack standard materials. Continuous operations prevent maintenance windows for repairs. Equipment failures create safety hazards in heavy industry environments. Replacement costs are high due to specialized requirements.`
        },
        {
          title: `Our Heavy-Duty Industrial Solutions`,
          content: `We provide extreme-duty doors engineered specifically for heavy industry environments. Heat-resistant construction with components rated to 80°C operating temperatures. Sealed and protected mechanical systems preventing dust and debris infiltration. Heavy-gauge steel construction with reinforced frames withstanding large equipment impacts. Vibration-resistant mounting systems maintaining alignment. Self-lubricating components requiring minimal maintenance. Emergency fail-safe systems for safety compliance. All materials selected for corrosion resistance and long-term durability in harsh conditions.`
        },
        {
          title: `Heavy Industry Performance`,
          content: `Extreme environment reliability with zero failures from heat, dust, or vibration. Service life 3-5x longer than standard industrial doors in heavy industry conditions. Reduced replacement costs through durable construction surviving harsh environments. Lower maintenance requirements with sealed systems and robust components. Improved safety through reliable operation in critical industrial areas. Production continuity maintained with dependable infrastructure. Total cost of ownership reduced 60-70% compared to frequent door replacements.`
        }
      ]
    },
    challenge: {
      title: `Where Standard Equipment Fails`,
      narrative: [
        `Heavy industry pushes equipment beyond normal limits. Temperatures that melt plastic components. Dust that grinds through bearings. Vibration that shakes fasteners loose. Impacts that bend steel frames. Your environment doesn't just use equipment—it tests equipment to destruction. Standard industrial doors might last 5 years in a typical warehouse. In your plant, they fail in 18 months.`,
        `Each failure is expensive. Replacement costs. Production interruptions. Safety risks from malfunctioning equipment. Maintenance time diverted from critical production machinery. You've tried multiple door suppliers—all promising their products will survive. All fail under your conditions. The problem isn't maintenance or operation—it's that conventional doors simply aren't engineered for heavy industry reality.`,
        `You need entrance solutions designed from the start for extreme duty. Equipment that treats your harsh environment as normal operating conditions, not exceptional stress. Components selected for heat resistance, not just adequate performance. Systems that survive your reality, not require it to change for them.`
      ]
    },
    solution: {
      title: `Engineered for Extreme Environments`,
      intro: `Our heavy-duty doors are specifically designed for the punishing conditions of steel mills, foundries, and metal processing plants.`,
      examples: [
        {
          scenario: `Blast furnace material access: Ambient temperatures 45-50°C, heavy metal dust, constant vibration, and large ladle crane traffic. Previous doors failed every 12-18 months from heat and vibration.`,
          howWeHelp: `Extreme-duty door with heat-resistant components rated to 80°C, sealed mechanics preventing dust infiltration, vibration-isolated mounting, and reinforced heavy-gauge construction. All components selected for long-term survival in hostile environments.`,
          result: `36+ months of continuous operation with zero failures. Maintenance reduced to scheduled inspections only. Replacement cost eliminated.`
        },
        {
          scenario: `Rolling mill separation requiring large opening for steel coil passage while maintaining zone separation and safety barriers.`,
          howWeHelp: `Heavy-duty vertical lifting door with 6m x 6m opening, reinforced guides and counterweight system, impact-resistant bottom bar, and emergency stop integration with mill controls.`,
          result: `Reliable operation through 200+ daily coil passages. Zero safety incidents. Passed all regulatory inspections.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Internal zone separation in dusty and high-temperature environments`, keyBenefit: `Durable construction withstands harsh industrial conditions` },
      { name: `Hydraulic Dock Levelers`, useCase: `Heavy raw material receiving and finished product shipping`, keyBenefit: `Heavy-duty capacity handles extreme loads and abuse` },
      { name: `Roller Conveyor Systems`, useCase: `Material transport in steel mills and metal processing`, keyBenefit: `Rugged design proven in demanding industrial applications` }
    ],
    success: {
      title: `Infrastructure Built to Last`,
      vision: `Your facility infrastructure finally matches your production durability. Doors operate reliably year after year despite extreme heat, dust, and vibration. Maintenance teams perform scheduled inspections, not emergency repairs. Replacement budgets are reallocated to production equipment. Safety is enhanced through dependable barrier operation. Your heavy industry reality is met with equipment designed for exactly that reality—harsh, demanding, unforgiving conditions where standard equipment fails but properly engineered solutions thrive.`
    },
    metrics: [
      { value: `3-5x`, label: `Longer service life vs standard doors` },
      { value: `70%`, label: `Reduction in total cost of ownership` },
      { value: `36+`, label: `Months of zero-failure operation` }
    ],
    seoDescription: `Heavy industry and steel mill entrance automation. Extreme-duty doors for foundries, metal processing, and high-temperature environments. Heat-resistant, dust-proof heavy-duty door solutions.`
  },

  // 10. Cargo & Freight Hubs
  {
    id: `10`,
    name: `Cargo & Freight Hubs`,
    slug: `cargo-freight`,
    icon: `Package`,
    hero: {
      title: `Cargo & Freight Hub Solutions`,
      openingStory: `Your cross-dock facility operates on 30-minute dwell times. Trucks arrive with mixed freight from multiple origins. Your team sorts, consolidates, and reloads for final destinations. At 4 PM, a dock door motor fails. Traffic backs up immediately. Four inbound trucks wait. Three outbound carriers miss their departure windows. Detention fees accumulate. Your operations manager calculates the cost: $2,400 in carrier charges, plus customer service recovery for delayed freight. One door failure just cost your facility an entire day's profit margin.`
    },
    overview: {
      title: `Cargo and Freight Operations`,
      introduction: `Cargo and freight hubs serve as critical consolidation points in supply chains, handling LTL (less-than-truckload) freight, cross-docking operations, freight forwarding, and multi-modal transfers. These facilities operate under extreme time pressure with tight carrier schedules, quick turnaround requirements, and high equipment utilization. Every minute of dock time has a direct cost impact.`,
      sections: [
        {
          title: `Hub Operations and Requirements`,
          content: `Freight hubs manage inbound freight receipt and verification, cross-dock sorting and consolidation, temporary staging of mixed freight, outbound loading by destination, documentation and tracking for all shipments, and coordination with multiple carriers on tight schedules. Facilities run 16-24 hours daily. Dock doors cycle 200-400+ times per day. Dwell time per truck averages 30-45 minutes. Any delay propagates through interconnected carrier networks affecting multiple customers.`
        },
        {
          title: `Operational Pressures`,
          content: `Carrier schedules are inflexible with departure windows measured in minutes, not hours. Detention and demurrage fees penalize delays averaging $75-150 per hour. Equipment failures create immediate bottlenecks as other doors cannot absorb the traffic volume. Customer SLAs specify next-day or two-day delivery with penalties for failures. Cross-dock operations require matching inbound and outbound timing precisely. Every dock position must maintain maximum utilization to meet volume commitments. Infrastructure reliability directly impacts profitability.`
        },
        {
          title: `Our Freight Hub Solutions`,
          content: `We provide ultra-reliable high-speed dock doors engineered for continuous freight operations with 400+ daily cycles. Rapid 1.5-second operation maximizes truck throughput and dock utilization. Self-repairing technology eliminates downtime from forklift impacts—critical when every door position must stay operational. Heavy-duty construction for long-term reliability in harsh conditions. Predictive maintenance monitoring identifies issues before failures occur. Integration with dock scheduling systems coordinates equipment with carrier arrivals.`
        },
        {
          title: `Operational and Financial Benefits`,
          content: `Zero unplanned downtime maintaining carrier schedules and avoiding detention fees. Dock throughput increased 25-35% supporting higher volume without facility expansion. Truck dwell time reduced improving asset utilization and carrier satisfaction. Detention fee elimination saving $50,000-100,000 annually per facility. Enhanced on-time performance improving customer relationships and reducing penalties. Better resource utilization with reliable infrastructure supporting planned operations.`
        }
      ]
    },
    challenge: {
      title: `When Time Is Money`,
      narrative: [
        `Freight operations run on brutal economics. Every hour a truck sits costs money. Every missed carrier window creates cascade failures in delivery networks. Your facility exists to move freight efficiently—receive, sort, consolidate, ship. Infrastructure that slows this process destroys your business model.`,
        `Dock door failures are catastrophic in cross-dock operations. You can't simply route traffic elsewhere—every position is already utilized. Each door serves specific freight flows and carrier schedules. When one fails, operations stop. Trucks wait. Carriers charge fees. Customers get delays. Your profit margin evaporates.`,
        `You need entrance infrastructure that matches freight operation intensity. Doors that cycle hundreds of times daily without failure. Equipment that stays operational despite heavy abuse. Systems that support your efficiency targets, not threaten them. Infrastructure reliability isn't a nice-to-have—it's fundamental to your operation's financial viability.`
      ]
    },
    solution: {
      title: `Engineered for Freight Intensity`,
      intro: `Our freight hub solutions are built to support the demanding pace and reliability requirements of modern cargo operations.`,
      examples: [
        {
          scenario: `Cross-dock hub with 24 dock positions, 400+ daily door cycles, 35-minute average dwell time target. Previous door failures caused 8-12 hours annual downtime costing $180,000 in fees and lost productivity.`,
          howWeHelp: `Ultra-high-cycle rapid doors with 1.5-second operation and self-repairing breakaway. Predictive maintenance monitoring alerts before failures. Heavy-duty construction for reliability.`,
          result: `Zero unplanned downtime in 14 months. Dwell time reduced to 28 minutes. Detention fees eliminated—$185,000 annual savings.`
        },
        {
          scenario: `Multi-carrier hub coordinating 40+ carrier schedules daily with 15-minute loading windows. Missed windows result in $125/truck detention charges.`,
          howWeHelp: `Rapid dock doors with dock scheduling system integration. Automated door operation coordinated with carrier arrival predictions. Real-time status monitoring for operations visibility.`,
          result: `98.7% on-time carrier departures. Detention fees reduced 94%. Carrier satisfaction scores increased significantly.`
        }
      ]
    },
    products: [
      { name: `Hydraulic Dock Levelers`, useCase: `Freight hub loading docks with extreme duty cycles`, keyBenefit: `Ultra-reliable operation proven in 300-500 daily loading cycles` },
      { name: `High-Speed Roll Doors`, useCase: `High-traffic cross-dock and transfer operations`, keyBenefit: `Self-repairing design ensures zero downtime maintaining schedules` },
      { name: `Roller Conveyor Systems`, useCase: `Automated freight sorting and routing`, keyBenefit: `High-capacity systems handling diverse freight types` }
    ],
    success: {
      title: `Operations Without Interruption`,
      vision: `Your freight hub operates at designed efficiency. Trucks arrive, load, depart on schedule—200, 300, 400 times per day. Dock doors cycle seamlessly supporting your throughput targets. Forklift operators move freight without hesitation or delay. Carriers meet departure windows consistently. Detention fees become a historical footnote in your P&L. Your operations team focuses on optimizing freight flow, not managing equipment failures. The infrastructure simply works, enabling your facility to do what it was designed for: moving freight efficiently, profitably, reliably.`
    },
    metrics: [
      { value: `0`, label: `Unplanned door failures in 14 months` },
      { value: `$185k`, label: `Annual savings in detention fees` },
      { value: `98.7%`, label: `On-time carrier departures` }
    ],
    seoDescription: `Cargo and freight hub entrance automation. Ultra-reliable dock doors for cross-dock operations, LTL freight handling, and multi-carrier coordination. Zero-downtime solutions for freight terminals.`
  },

  // 11. Airport & Transportation
  {
    id: `11`,
    name: `Airport & Transportation`,
    slug: `airport`,
    icon: `Package`,
    hero: {
      title: `Airport & Transportation Facility Solutions`,
      openingStory: `Your cargo terminal at the international airport processes air freight on tight schedules. A shipment of time-critical pharmaceuticals arrives on Flight 238 at 6:15 AM—must connect to Flight 412 departing at 9:45 AM for final cold chain transport. Your team has exactly 3 hours for customs clearance, inspection, and transfer. At 7:30 AM, the cargo handling area door jams. Precious minutes are lost routing equipment through an alternate entrance. The pharmaceutical shipment makes its connection with 12 minutes to spare. Your operations supervisor knows you were lucky this time. Next time, a door failure could mean missed connections, spoiled product, and angry customers.`
    },
    overview: {
      title: `Airport Cargo and Transportation Operations`,
      introduction: `Airport cargo facilities, ground service equipment (GSE) areas, baggage handling operations, and transportation terminals require specialized entrance solutions balancing security, rapid access, weather protection, noise control, and continuous operations. These facilities serve critical infrastructure with zero tolerance for delays affecting flight schedules, passenger operations, or cargo transfers.`,
      sections: [
        {
          title: `Airport Facility Requirements`,
          content: `Airport operations include cargo terminals handling air freight with tight customs and transfer windows, baggage handling systems processing thousands of bags hourly, ground service equipment (GSE) maintenance and storage facilities, aircraft hangers requiring large openings with weather protection, de-icing and service areas operating in extreme weather, and secure perimeter facilities with controlled access. All operations integrate with flight schedules. Security requirements are stringent. Weather conditions from extreme cold to high winds must not disrupt operations.`
        },
        {
          title: `Operational Challenges`,
          content: `Flight schedules drive operations with no flexibility for infrastructure delays. Security protocols require controlled access with proper documentation and monitoring. Weather extremes from -30°C to 40°C with high winds must not prevent door operation. Noise control protects surrounding communities from 24/7 airport operations. Large equipment including aircraft tugs, loaders, and cargo containers require substantial door openings. Environmental control maintains temperature-sensitive cargo and comfortable working conditions. Any operational disruption has cascade effects across interconnected flight and cargo networks.`
        },
        {
          title: `Our Airport-Grade Solutions`,
          content: `We provide high-performance doors engineered for airport environments. High-speed operation supports rapid equipment and cargo movement. Weather-resistant construction ensures reliable operation in extreme conditions including wind, rain, snow, and temperature extremes. Security integration with access control, surveillance, and perimeter systems. Noise-insulated designs reduce sound transmission protecting surrounding areas. Large opening capabilities for aircraft and oversized equipment. Fire-rated options for safety compliance. All systems designed for 24/7 reliability supporting uninterrupted airport operations.`
        },
        {
          title: `Airport Operational Benefits`,
          content: `Zero weather-related operational delays maintaining flight schedules. Enhanced security through integrated access control and monitoring. Noise reduction of 25-35 dB protecting surrounding communities and meeting regulations. Energy efficiency despite continuous operations and large openings. Improved working conditions with climate control and weather protection. Compliance with all aviation, security, and safety regulations. Reduced maintenance through robust construction designed for extreme environments. Support for future expansion and operational changes.`
        }
      ]
    },
    challenge: {
      title: `Where Failure Affects Flight Schedules`,
      narrative: [
        `Airport operations tolerate no infrastructure delays. Flight schedules are measured in minutes. Cargo transfers have narrow windows between connecting flights. Baggage must move from check-in to aircraft holds within strict timeframes. Your facility infrastructure must support these precise operations without introducing delays or failures.`,
        `Standard industrial doors struggle in airport environments. Weather extremes prevent operation when you need them most. Security integration is an afterthought, complicating access control. Noise from door operation creates community complaints. Large equipment requires special consideration. Any door failure affects flight operations, cargo transfers, or passenger service—all unacceptable outcomes.`,
        `You need entrance solutions engineered specifically for aviation environments. Equipment that operates reliably in extreme weather. Systems integrating seamlessly with airport security. Designs that control noise without sacrificing performance. Large openings that still provide weather protection and access control. Infrastructure that supports flight operations, never delays them.`
      ]
    },
    solution: {
      title: `Aviation-Grade Infrastructure`,
      intro: `Our airport door systems are specifically engineered to support the unique demands of aviation operations, security, and environmental challenges.`,
      examples: [
        {
          scenario: `International cargo terminal: 24/7 operations, -25°C winter temperatures with 80km/h winds, strict security requirements, noise restrictions affecting surrounding area.`,
          howWeHelp: `High-speed insulated doors with extreme weather operation guarantee, integrated security access control, noise-dampening construction achieving 30dB reduction, wind-resistant design for reliable operation in storms.`,
          result: `Zero weather-related delays in 18 months. Security compliance verified through TSA audit. Noise complaints eliminated. Operational costs reduced 35%.`
        },
        {
          scenario: `Aircraft maintenance hangar requiring 12m x 12m opening, rapid access for aircraft, protection from weather, energy efficiency despite size.`,
          howWeHelp: `High-speed hangar doors with large opening capability, insulated construction, weather sealing, rapid 90-second full opening, and wind-load design for external installation.`,
          result: `Aircraft turnaround time reduced 20%. Hangar climate maintained despite frequent openings. Energy costs 45% lower than previous doors.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Airport cargo terminals and hangar access`, keyBenefit: `Rapid operation with weather sealing for 24/7 airport operations` },
      { name: `Hydraulic Dock Levelers`, useCase: `Cargo handling and freight operations`, keyBenefit: `Reliable performance for diverse aircraft cargo configurations` },
      { name: `Automatic Sliding Doors`, useCase: `Terminal entrances and passenger access points`, keyBenefit: `Energy-efficient operation with high traffic capacity` }
    ],
    success: {
      title: `Infrastructure Supporting Flight Operations`,
      vision: `Your airport facility operates seamlessly 24/7 through all weather conditions. Cargo moves between terminals and aircraft without delay. Equipment enters and exits maintenance hangars efficiently. Security protocols function without impeding operations. Winter storms, summer heat, high winds—your infrastructure adapts without operational interruption. Flight schedules are maintained. Cargo connections are made. Passengers reach destinations on time. Your facility infrastructure does exactly what aviation demands: support operations reliably, maintain security constantly, perform flawlessly under pressure.`
    },
    metrics: [
      { value: `0`, label: `Weather-related delays in 18 months` },
      { value: `30dB`, label: `Noise reduction for community protection` },
      { value: `100%`, label: `Security compliance verified` }
    ],
    seoDescription: `Airport cargo terminal and aviation facility entrance automation. High-speed hangar doors, weather-resistant cargo doors, noise-insulated systems, and security-integrated solutions for airports.`
  },

  // 12. Chemical & Process Industries
  {
    id: `12`,
    name: `Chemical & Process Industries`,
    slug: `chemical`,
    icon: `Factory`,
    hero: {
      title: `Chemical & Process Industry Solutions`,
      openingStory: `Your chemical processing facility operates under strict safety protocols. At 2:30 AM, a door seal fails in the solvent storage area. Vapor monitoring alarms trigger. Your emergency response team evacuates the section. Incident investigation reveals the door's standard seal degraded from chemical exposure—something specified as "chemical resistant" in the original installation. Three hours of lost production. Regulatory reporting required. Your safety director demands door systems actually engineered for chemical environments, not merely labeled as suitable.`
    },
    overview: {
      title: `Chemical and Process Manufacturing`,
      introduction: `Chemical and process industries manufacture products through controlled chemical reactions, distillation, mixing, separation, and other processes. These facilities handle hazardous materials requiring strict safety protocols, environmental controls, regulatory compliance, and specialized equipment resistant to corrosive chemicals, aggressive vapors, explosion risks, and contamination. Infrastructure must support both safety and continuous production.`,
      sections: [
        {
          title: `Chemical Facility Operations`,
          content: `Chemical facilities include raw material receiving and storage for hazardous chemicals, reactor and process areas with controlled environments, separation and purification zones, quality control laboratories, finished product storage and loading, waste treatment and disposal areas, and maintenance zones for contaminated equipment cleaning. Many areas classified as hazardous locations requiring explosion-proof equipment. Environmental controls maintain safety and product quality. Material transfers between zones must prevent contamination and exposure.`
        },
        {
          title: `Hazardous Environment Challenges`,
          content: `Corrosive chemicals attack standard materials degrading seals, finishes, and structural components. Explosive atmospheres require intrinsically safe equipment with no ignition sources. Toxic vapor containment demands reliable seals preventing atmosphere escape. Regulatory compliance involves OSHA PSM, EPA RMP, and industry standards requiring documented safety features. Equipment failures create immediate safety hazards with potential for serious incidents. Material compatibility must be verified for all exposed components. Emergency situations require fail-safe equipment behavior preventing hazard escalation.`
        },
        {
          title: `Our Chemical-Grade Solutions`,
          content: `We provide explosion-proof doors certified for hazardous locations (Class I Div 1 and 2), constructed from corrosion-resistant materials including stainless steel and specialized coatings. Chemically resistant seals maintain integrity despite aggressive chemical exposure. Emergency fail-safe systems ensure safe position during power failure or emergencies. Integrated gas detection and ventilation interlocks. Complete material compatibility documentation for chemical exposure. Third-party safety certifications for regulatory compliance. All equipment designed specifically for process industry environments.`
        },
        {
          title: `Safety and Compliance Benefits`,
          content: `Zero incidents from door-related seal failures or equipment malfunctions. Complete hazardous location compliance with documented certifications. Corrosion resistance extending service life 5-10x beyond standard equipment in chemical environments. Reduced maintenance costs through appropriate material selection. Enhanced worker safety with reliable containment and emergency systems. Regulatory compliance simplified with proper documentation and certifications. Production continuity through reliable infrastructure withstanding chemical exposure.`
        }
      ]
    },
    challenge: {
      title: `Where Safety Is Not Negotiable`,
      narrative: [
        `Chemical processing operates with zero tolerance for safety failures. Hazardous materials demand proper containment. Explosive atmospheres require certified equipment. Corrosive environments destroy inadequate materials. Every component in your facility must be engineered for chemical industry reality—not adapted from general industrial applications and hoped to survive.`,
        `Standard industrial doors fail in chemical environments. Seals degrade from chemical exposure, creating vapor leaks. Standard electronics create ignition risks in explosive atmospheres. Carbon steel corrodes rapidly. Inadequate documentation complicates regulatory compliance. Each failure isn't just an operational issue—it's a potential safety incident, regulatory violation, and threat to your facility's operating license.`,
        `You need entrance solutions designed specifically for chemical processing. Equipment certified for hazardous locations. Materials proven resistant to your chemical exposures. Seals that maintain integrity through years of aggressive environment operation. Documentation meeting regulatory requirements. Infrastructure you can trust with process safety management.`
      ]
    },
    solution: {
      title: `Engineered for Chemical Environments`,
      intro: `Our chemical industry doors are purpose-built for hazardous locations with complete material compatibility and safety certifications.`,
      examples: [
        {
          scenario: `Solvent storage and transfer area: Class I Div 2 hazardous location, aggressive solvent vapor exposure, requirement for containment during normal operation and emergencies.`,
          howWeHelp: `Explosion-proof high-speed door with Class I Div 2 certification, 316 stainless steel construction, PTFE seals resistant to solvent exposure, fail-safe closure on power loss, integrated with facility gas detection.`,
          result: `Zero seal failures in 3+ years of continuous operation. All safety audits passed. Equipment maintains like-new condition despite aggressive environment.`
        },
        {
          scenario: `Process area separation requiring frequent material transfer (200+ daily cycles) while maintaining atmosphere control and safety classification boundaries.`,
          howWeHelp: `Rapid door with 1.8-second cycle, hermetic seal preventing vapor transfer between zones, explosion-proof controls, corrosion-resistant construction, documented material compatibility.`,
          result: `Atmosphere control maintained. Production flow unimpeded. PSM compliance verified. Zero corrosion or degradation after 24 months.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Zone separation in chemical processing areas`, keyBenefit: `Corrosion-resistant construction with rapid isolation capability` },
      { name: `Hydraulic Dock Levelers`, useCase: `Chemical receiving and shipping operations`, keyBenefit: `Stainless steel construction resists chemical exposure` },
      { name: `Automatic Sliding Doors`, useCase: `Laboratory and control room access`, keyBenefit: `Controlled access with hands-free operation for safety` }
    ],
    success: {
      title: `Safety and Production in Harmony`,
      vision: `Your chemical facility operates with confidence. Hazardous materials are properly contained. Process areas maintain required atmospheres. Equipment performs reliably despite aggressive chemical exposure. Safety audits find zero equipment-related findings. Regulatory inspections verify proper hazardous location compliance. Your maintenance team performs scheduled inspections, not emergency seal repairs. Production operates continuously without safety-related interruptions. Your facility infrastructure supports both safety objectives and operational efficiency—exactly as chemical processing requires.`
    },
    metrics: [
      { value: `0`, label: `Safety incidents from door equipment` },
      { value: `5-10x`, label: `Service life vs standard equipment` },
      { value: `100%`, label: `Hazardous location compliance` }
    ],
    seoDescription: `Chemical and process industry entrance automation. Explosion-proof doors for hazardous locations, corrosion-resistant systems, hermetic sealing, and safety-certified solutions for chemical plants.`
  },

  // 13. Textile & Garment Manufacturing
  {
    id: `13`,
    name: `Textile & Garment Manufacturing`,
    slug: `textile`,
    icon: `Factory`,
    hero: {
      title: `Textile & Garment Manufacturing Solutions`,
      openingStory: `Your textile facility runs three shifts producing premium fabrics. Quality control reports fiber contamination in yesterday's production run—traced to lint accumulation around door mechanisms in the cutting room. The standard industrial door's exposed tracks and mechanisms collect airborne fibers, which then shed back into the production environment. Two thousand meters of fabric must be inspected and potentially scrapped. Your production manager knows this problem will recur unless you address the root cause: doors designed for general industry, not textile manufacturing reality.`
    },
    overview: {
      title: `Textile and Garment Manufacturing`,
      introduction: `Textile and garment manufacturing transforms fibers into fabrics and finished clothing through spinning, weaving, knitting, dyeing, cutting, and sewing operations. These facilities generate significant airborne fiber and lint, operate high-speed production lines with tight quality standards, manage diverse materials from natural to synthetic fibers, and require frequent zone transitions for materials and products between processing stages.`,
      sections: [
        {
          title: `Textile Production Operations`,
          content: `Textile facilities include fiber preparation and spinning areas, weaving and knitting operations, dyeing and finishing processes with chemical treatments, cutting rooms with automated cutters, sewing and assembly floors, quality inspection zones, and finished goods packaging. Operations generate substantial lint and airborne fiber. Chemical processing areas require ventilation control. Material flow between zones is continuous. Temperature and humidity control affects product quality and worker comfort.`
        },
        {
          title: `Industry-Specific Challenges`,
          content: `Lint and fiber accumulation on equipment causes contamination and fire hazards. Standard door mechanisms trap fibers creating maintenance problems and contamination sources. Chemical processing areas require corrosion-resistant equipment and proper ventilation. High-speed cutting and sewing operations need rapid material movement without production delays. Quality standards demand clean environments preventing fiber contamination between product runs. Fire safety is critical due to combustible lint accumulation. Energy costs are significant with climate control requirements across large production floors.`
        },
        {
          title: `Our Textile Industry Solutions`,
          content: `We provide smooth-surface doors with minimal crevices preventing fiber accumulation and facilitating cleaning. High-speed operation supports rapid material flow between production zones without bottlenecks. Sealed mechanisms protect against lint infiltration extending service life and reducing maintenance. Corrosion-resistant construction for chemical processing areas. Easy-clean designs support frequent cleaning protocols. Fire-rated options for safety compliance in lint-generating environments. All systems designed for reliable operation in fiber-laden atmospheres.`
        },
        {
          title: `Production and Quality Benefits`,
          content: `Reduced contamination incidents through clean-design doors preventing fiber accumulation. Lower maintenance requirements with protected mechanisms resisting lint infiltration. Enhanced fire safety through proper compartmentalization and easy-clean designs. Improved production flow with rapid door operation supporting material movement. Energy efficiency through proper zone separation and climate control. Easier facility cleaning with smooth surfaces and minimal fiber traps. Extended equipment life in challenging textile environments.`
        }
      ]
    },
    challenge: {
      title: `When Lint Becomes a Liability`,
      narrative: [
        `Textile manufacturing creates unique challenges. Every operation—spinning, weaving, cutting, sewing—generates airborne fibers. This lint settles on everything, accumulating in crevices and mechanisms. Standard industrial doors become lint traps, collecting fibers that then contaminate production, create fire hazards, and require constant cleaning.`,
        `Your facility infrastructure must coexist with this fiber-laden environment. Doors with exposed tracks fill with lint. Mechanisms jam from fiber accumulation. Contamination migrates between zones affecting quality. Fire inspectors note accumulation concerns. Your maintenance team spends excessive time cleaning equipment that wasn't designed for textile environments.`,
        `You need entrance solutions specifically designed for textile manufacturing. Smooth surfaces that don't trap fibers. Sealed mechanisms that exclude lint. Easy-clean designs supporting your housekeeping requirements. Equipment that operates reliably despite the airborne fiber environment your facility generates.`
      ]
    },
    solution: {
      title: `Designed for Textile Environments`,
      intro: `Our textile industry doors feature clean designs that resist lint accumulation while supporting production flow and quality requirements.`,
      examples: [
        {
          scenario: `Cutting room to sewing floor transition: 150+ daily material movements, heavy lint generation, contamination concerns between product runs, previous doors accumulated fibers causing quality issues.`,
          howWeHelp: `Smooth-surface high-speed door with sealed mechanisms, minimal crevices, easy-wipe construction. Rapid 2-second cycle supports material flow. Protected components resist lint infiltration.`,
          result: `Contamination incidents eliminated. Cleaning time reduced 60%. Material flow improved 25%. Door maintenance requirements decreased 75%.`
        },
        {
          scenario: `Dyeing area separation requiring chemical resistance, humidity control, and frequent access for material transfer between processing stages.`,
          howWeHelp: `Corrosion-resistant rapid door with stainless steel construction, sealed design, and rapid operation. Maintains zone separation while supporting continuous production flow.`,
          result: `Zero corrosion issues. Temperature and humidity control maintained. Production flow unimpeded. Chemical exposure has no effect on door performance.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Production zone separation in textile manufacturing`, keyBenefit: `Smooth design prevents lint accumulation with easy cleaning` },
      { name: `Hydraulic Dock Levelers`, useCase: `Fabric roll receiving and finished goods shipping`, keyBenefit: `Gentle operation protects delicate textile products` },
      { name: `Roller Conveyor Systems`, useCase: `Automated material handling in production areas`, keyBenefit: `Reduces manual handling of heavy fabric rolls` }
    ],
    success: {
      title: `Clean, Efficient Production`,
      vision: `Your textile facility operates with confidence in product quality. Materials move smoothly between processing stages without contamination concerns. Doors remain clean and functional despite constant fiber generation. Fire safety inspections find well-maintained, accessible equipment. Your maintenance team performs quick wipe-downs, not extensive cleaning of fiber-clogged mechanisms. Production quality is consistent. Contamination incidents are history. Your infrastructure supports both production efficiency and quality requirements—exactly as textile manufacturing demands.`
    },
    metrics: [
      { value: `0`, label: `Fiber contamination incidents` },
      { value: `75%`, label: `Reduction in door maintenance` },
      { value: `60%`, label: `Decrease in cleaning time` }
    ],
    seoDescription: `Textile and garment manufacturing entrance automation. Clean-design doors, lint-resistant systems, chemical-resistant construction for dyeing areas, and easy-clean solutions for fabric production.`
  },

  // 14. Agriculture & Dairy
  {
    id: `14`,
    name: `Agriculture & Dairy`,
    slug: `agriculture`,
    icon: `Factory`,
    hero: {
      title: `Agriculture & Dairy Processing Solutions`,
      openingStory: `Your dairy processing facility maintains strict USDA compliance. During a surprise inspection, auditors note corrosion on a processing room door—a door specified as "food-grade" eighteen months ago. The inspection report cites potential contamination concerns. You have 30 days to remediate and document corrective action. Your facility manager investigates: daily caustic washdowns and dairy residue have corroded standard stainless steel faster than predicted. You need doors actually engineered for dairy processing reality, not general food industry applications.`
    },
    overview: {
      title: `Agricultural and Dairy Processing`,
      introduction: `Agricultural and dairy processing facilities transform raw agricultural products into consumer goods through cleaning, processing, packaging, and cold storage operations. These facilities operate under strict food safety regulations including USDA inspection, FDA compliance, and FSMA requirements. Operations combine harsh cleaning protocols, temperature extremes, organic residue exposure, and continuous production in challenging conditions.`,
      sections: [
        {
          title: `Processing Operations`,
          content: `Dairy and agricultural facilities include raw product receiving areas, cleaning and sanitizing zones, processing equipment for pasteurization or transformation, packaging lines, cold storage and blast chilling, shipping docks, and waste handling areas. Operations require daily high-pressure washdowns with caustic chemicals and sanitizers. Equipment moves between ambient and refrigerated zones. Organic residues from products can harbor bacteria if not properly removed. All food contact areas must meet sanitary design standards.`
        },
        {
          title: `Food Safety and Operational Challenges`,
          content: `Daily chemical washdowns attack standard materials causing premature failure. Organic residue accumulation creates bacterial harborage points if equipment has crevices or hard-to-clean surfaces. Temperature cycling between processing and cold storage stresses equipment. USDA and FDA inspectors scrutinize all equipment for sanitary design and cleanliness. Equipment downtime affects perishable product processing windows. Corrosion from chemicals and organic acids degrades non-food-grade materials. Any contamination risk threatens facility approval and product safety.`
        },
        {
          title: `Our Food-Safe Agricultural Solutions`,
          content: `We provide USDA-accepted sanitary design doors constructed from food-grade 304/316 stainless steel with smooth, crevice-free surfaces. Sealed construction prevents organic material accumulation. All components rated for daily caustic chemical exposure. Corrosion-resistant fasteners and hardware. NSF-certified materials for food contact areas. Easy-clean design supporting rapid sanitation. Temperature-rated for freezer to ambient transitions. Complete documentation for USDA/FDA compliance verification.`
        },
        {
          title: `Food Safety and Operational Benefits`,
          content: `USDA/FDA compliance maintained through proper sanitary design and documentation. Zero corrosion issues extending equipment life 5-8x beyond standard food doors. Simplified sanitation with smooth surfaces reducing cleaning time 40-50%. Bacterial harborage eliminated through proper design. Temperature cycling handled without equipment stress. Reduced maintenance costs through corrosion-resistant construction. Audit-ready documentation simplifying compliance verification. Peace of mind that infrastructure meets food safety requirements.`
        }
      ]
    },
    challenge: {
      title: `Where Food Safety Meets Reality`,
      narrative: [
        `Dairy and agricultural processing combines the worst challenges: harsh chemicals, organic residues, temperature extremes, and absolute requirements for food safety compliance. Equipment must withstand daily caustic washdowns while maintaining sanitary design standards. Any crevice becomes a bacterial harborage point. Any corrosion becomes a contamination risk. Regulatory scrutiny is constant.`,
        `Standard "food-grade" equipment often disappoints. Corrosion appears within months. Hard-to-clean areas accumulate residue. Components fail from chemical exposure. Inspectors question sanitary design. You're replacing equipment that should last a decade within two years. The problem: equipment designed for general food service, not dairy processing intensity.`,
        `You need entrance solutions specifically engineered for agricultural processing. True sanitary design by engineers who understand USDA standards. Materials proven in dairy environments. Construction that survives your chemical exposure. Equipment you can trust for food safety and inspector approval.`
      ]
    },
    solution: {
      title: `USDA-Accepted Sanitary Design`,
      intro: `Our agricultural processing doors are engineered to USDA sanitary design standards with materials proven in dairy and food processing environments.`,
      examples: [
        {
          scenario: `Dairy processing room: Daily high-pressure washdown with 180°F caustic solution, temperature transitions from 2°C cold storage to 20°C processing, USDA inspection requirements, previous doors corroded within 18 months.`,
          howWeHelp: `316 stainless steel door with fully-welded construction, NSF-certified components, smooth surfaces with <32 Ra finish, sealed design preventing moisture intrusion, proven resistant to dairy caustic washdown chemistry.`,
          result: `36+ months of operation with zero corrosion. USDA inspector approval. Sanitation time reduced 45%. Equipment maintains like-new condition.`
        },
        {
          scenario: `Agricultural product processing: Organic residue exposure, daily cleaning protocols, inspector scrutiny of equipment cleanliness, concerns about bacterial harborage in previous door mechanisms.`,
          howWeHelp: `Sanitary design door with crevice-free construction, fully sealed mechanisms, easy-access cleaning points, complete drainage preventing moisture accumulation, documented compliance with food safety standards.`,
          result: `Zero bacterial findings in swab testing. Cleaning procedure simplified. Inspector approval maintained through multiple audits.`
        }
      ]
    },
    products: [
      { name: `High-Speed Roll Doors`, useCase: `Processing area separation in dairy and agriculture facilities`, keyBenefit: `Fast operation with sanitary design for food safety compliance` },
      { name: `Hydraulic Dock Levelers`, useCase: `Agricultural product receiving and distribution`, keyBenefit: `Heavy-duty capacity for bulk agricultural products` },
      { name: `Roller Conveyor Systems`, useCase: `Automated handling in food processing operations`, keyBenefit: `Hygienic design reduces contamination risk` }
    ],
    success: {
      title: `Food Safety Confidence`,
      vision: `Your facility operates with absolute confidence in food safety compliance. USDA inspectors examine your equipment and find nothing to cite. Doors maintain pristine condition despite daily chemical assault. Sanitation crews complete cleaning quickly without wrestling hard-to-reach areas. Bacterial testing shows zero harborage concerns. Your equipment investment protects itself through long-term durability in harsh conditions. Compliance isn't a worry—it's simply part of how your infrastructure performs. Food safety and operational efficiency work together, as they should.`
    },
    metrics: [
      { value: `0`, label: `USDA compliance findings` },
      { value: `5-8x`, label: `Service life vs standard food doors` },
      { value: `45%`, label: `Reduction in sanitation time` }
    ],
    seoDescription: `Agricultural and dairy processing entrance automation. USDA sanitary design doors, corrosion-resistant stainless steel systems, hygienic construction, and food-safe solutions for processing facilities.`
  },

  // 15. Retail & Shopping Centers
  {
    id: `15`,
    name: `Retail & Shopping Centers`,
    slug: `retail`,
    icon: `Factory`,
    hero: {
      title: `Retail & Shopping Center Solutions`,
      openingStory: `Your shopping center's receiving dock serves fifteen retail tenants. At 10 AM on Friday—peak delivery day—the main dock door fails in the open position during a December cold snap. Delivery trucks queue in the parking lot. Retailers call frantically about delayed shipments. Customers complain about cold air blasting through the service corridor into the mall. Your maintenance team can't source replacement parts until Monday. Three days of operational disruption, tenant complaints, and customer dissatisfaction—all from one door failure.`
    },
    overview: {
      title: `Retail and Shopping Center Operations`,
      introduction: `Retail facilities and shopping centers require reliable back-of-house infrastructure supporting tenant operations while maintaining customer-facing environment quality. Loading docks serve multiple tenants with varying schedules, merchandise flows continuously between storage and sales floors, and facility operations must be invisible to shoppers while ensuring tenant success and operational efficiency.`,
      sections: [
        {
          title: `Retail Facility Operations`,
          content: `Shopping centers and retail facilities include shared loading docks serving multiple tenants, storage and receiving areas, service corridors connecting back-of-house to retail spaces, waste and recycling management, and mechanical/utility areas. Operations occur during limited windows to avoid customer disruption. Merchandise delivery schedules are tight with holiday peak seasons. Tenant satisfaction depends on smooth logistics. Customer experience requires operational issues remain invisible. Climate control must be maintained despite frequent dock door operation.`
        },
        {
          title: `Retail Operational Challenges`,
          content: `Shared dock infrastructure serves multiple tenants with conflicting schedules and varying requirements. Peak season delivery volumes strain limited dock capacity requiring maximum efficiency. Door failures disrupt multiple tenant operations simultaneously creating widespread complaints. Customer-facing areas suffer when dock doors allow temperature loss or noise transmission. Energy costs increase when slow or poorly-sealed doors allow climate escape. Limited maintenance windows require reliable equipment preventing emergency calls during business hours. Any operational disruption reflects poorly on facility management and tenant relationships.`
        },
        {
          title: `Our Retail Infrastructure Solutions`,
          content: `We provide reliable high-speed dock doors maximizing throughput from limited dock positions. Energy-efficient insulated construction reduces climate control costs despite frequent operation. Quiet operation prevents noise transmission to customer areas. Self-repairing technology eliminates emergency maintenance calls during business hours. Weather-resistant construction maintains operation through all seasons. Attractive appearance suitable for visible locations. Integration with tenant scheduling systems for coordinated operations. Low-maintenance design reducing service requirements and lifecycle costs.`
        },
        {
          title: `Operational and Economic Benefits`,
          content: `Enhanced tenant satisfaction through reliable merchandise receipt and minimal operational disruptions. Increased dock efficiency handling 30-40% more deliveries with same infrastructure. Energy cost reduction of 35-50% through insulated construction and rapid cycling. Eliminated after-hours emergency maintenance calls. Improved customer experience with quiet operation and maintained climate control. Reduced operational complaints and improved facility management reputation. Lower total cost of ownership through reliable, low-maintenance equipment. Support for peak season operations without infrastructure failures.`
        }
      ]
    },
    challenge: {
      title: `When Tenants and Customers Both Depend on You`,
      narrative: [
        `Retail facility management walks a tightrope. Tenants need reliable merchandise flow—their sales depend on it. Customers expect a pleasant shopping environment—your reputation depends on it. Your loading dock infrastructure must serve both imperatives: operational efficiency for tenants, operational invisibility for customers.`,
        `Standard dock doors compromise both requirements. They're slow, creating delivery bottlenecks affecting multiple tenants. They fail during peak seasons, creating crisis situations with retailers counting on you. They leak climate control, affecting customer comfort and energy costs. They're noisy, creating complaints from adjacent retail spaces. Each problem affects tenant relationships, customer satisfaction, and your operational reputation.`,
        `You need entrance infrastructure specifically designed for retail facility operations. Equipment reliable enough to avoid tenant-disrupting failures. Efficiency supporting tight delivery schedules. Quiet operation maintaining customer environment quality. Energy performance controlling operational costs. Infrastructure that serves your tenants' operational needs while remaining invisible to their customers.`
      ]
    },
    solution: {
      title: `Supporting Retail Operations Seamlessly`,
      intro: `Our retail facility doors balance operational efficiency with the unique requirements of shopping center environments.`,
      examples: [
        {
          scenario: `Shopping center shared dock: 15 retail tenants, 80-120 daily deliveries, holiday peak season surges, customer areas adjacent to dock, energy cost concerns, need for 24/7 reliability.`,
          howWeHelp: `High-speed insulated dock doors with rapid 1.8-second cycles, quiet operation, self-repairing technology, energy-efficient construction, and reliable performance through peak seasons.`,
          result: `Dock capacity increased 35% handling peak season without expansion. Energy costs reduced $18,000 annually. Zero emergency calls in 18 months. Tenant satisfaction scores improved.`
        },
        {
          scenario: `Department store service corridor: Frequent merchandise movement, customer-facing location visible from parking, climate control important, noise concerns from adjacent retail spaces.`,
          howWeHelp: `Attractive high-speed door with quiet operation, insulated construction, rapid cycling for climate retention, and clean appearance suitable for semi-visible location.`,
          result: `Climate maintained despite frequent use. Noise complaints eliminated. Merchandise flow improved. Professional appearance maintained.`
        }
      ]
    },
    products: [
      { name: `Hydraulic Dock Levelers`, useCase: `Retail receiving docks serving multiple tenants`, keyBenefit: `Reliable operation supporting tight delivery schedules` },
      { name: `High-Speed Roll Doors`, useCase: `Stockroom and service area access`, keyBenefit: `Fast operation maintains climate control and reduces noise` },
      { name: `Automatic Sliding Doors`, useCase: `Customer entrances and main access points`, keyBenefit: `Energy-efficient with modern aesthetics enhancing customer experience` }
    ],
    success: {
      title: `Operations That Serve Everyone`,
      vision: `Your retail facility operates smoothly behind the scenes. Tenants receive merchandise reliably without delays or complications. Customers shop in comfortable environments unaware of the logistics supporting their experience. Peak holiday seasons are managed efficiently without infrastructure crisis. Your facility management reputation strengthens through consistent operational excellence. Maintenance budgets focus on improvements, not emergency repairs. Both tenants and customers benefit from infrastructure that simply works—efficiently for operations, invisibly for experience.`
    },
    metrics: [
      { value: `35%`, label: `Increase in dock capacity` },
      { value: `$18k`, label: `Annual energy cost savings` },
      { value: `0`, label: `Emergency maintenance calls` }
    ],
    seoDescription: `Retail and shopping center entrance automation. Reliable dock doors for multi-tenant facilities, energy-efficient systems, quiet operation, and infrastructure solutions supporting retail operations.`
  },
];
