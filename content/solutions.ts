import { LucideIcon } from "lucide-react";

export interface Solution {
	id: string;
	slug: string;
	name: string;
	tagline: string;
	icon: string;
	shortDescription: string;
	fullDescription: string;
	keyBenefits: string[];
	features: string[];
	applications: string[];
	industryTrends: {
		title: string;
		description: string;
	}[];
	relatedProducts: string[];
	caseStudyHighlight?: {
		title: string;
		description: string;
		results: string[];
	};
	metaTitle: string;
	metaDescription: string;
}

export const solutions: Solution[] = [
	{
		id: "industrial-doors",
		slug: "industrial-doors",
		name: "Industrial Door Systems",
		tagline: "Robust Doors for Demanding Environments",
		icon: "door-open",
		shortDescription: "Heavy-duty industrial doors including sectional doors, rolling shutters, and specialized access solutions",
		fullDescription:
			"Our industrial door systems are built for demanding environments, providing reliable access control, environmental separation, and operational efficiency. From sectional overhead doors to heavy-duty rolling shutters, we supply and install complete door solutions for warehouses, manufacturing facilities, and industrial complexes.",
		keyBenefits: [
			"Durable construction for heavy industrial use",
			"Improved facility security and access control",
			"Energy efficiency through proper sealing",
			"Reduced maintenance with quality components",
			"Custom sizing for any opening requirement",
		],
		features: [
			"Sectional overhead doors",
			"Rolling steel shutters",
			"Insulated panel options",
			"Manual and motorized operation",
			"Safety edge sensors",
			"Emergency release mechanisms",
			"Weather sealing and insulation",
			"Customizable dimensions and finishes",
		],
		applications: [
			"Manufacturing facilities",
			"Warehouses and distribution centers",
			"Industrial complexes",
			"Service and maintenance bays",
			"Storage facilities",
			"Commercial and retail back-of-house",
		],
		industryTrends: [
			{
				title: "Insulation Performance Standards",
				description:
					"New energy codes are requiring better insulated industrial doors, driving demand for thermal-efficient sectional and panel doors with higher R-values.",
			},
			{
				title: "Heavy-Duty Manufacturing Growth",
				description:
					"Expansion of manufacturing facilities in Australia is increasing demand for robust industrial door systems capable of handling heavy traffic and harsh conditions.",
			},
			{
				title: "Automated Door Systems",
				description:
					"Integration of automated controls and safety sensors in industrial doors is becoming standard to improve workplace safety and operational efficiency.",
			},
		],
		relatedProducts: ["high-speed-roll-doors", "sectional-doors", "rolling-shutters"],
		caseStudyHighlight: {
			title: "Manufacturing Facility Door Upgrade",
			description: "Installed 15 sectional overhead doors in a 80,000 sq ft manufacturing facility",
			results: ["30% reduction in heating/cooling costs", "Improved workflow with faster access", "Zero maintenance issues in first year"],
		},
		metaTitle: "Industrial Door Systems | Sectional & Rolling Doors | Bevcon Solutions",
		metaDescription:
			"Heavy-duty industrial doors including sectional overhead doors, rolling shutters, and insulated panels for warehouses and manufacturing facilities.",
	},
	{
		id: "high-speed-doors",
		slug: "high-speed-doors",
		name: "High-Speed Door Solutions",
		tagline: "Rapid Access, Maximum Efficiency",
		icon: "zap",
		shortDescription: "Industrial high-speed doors designed for high-traffic environments requiring rapid opening cycles",
		fullDescription:
			"Our high-speed door solutions are engineered for demanding industrial environments where time is critical. With opening speeds up to 2.5 m/s and self-repairing designs, these doors minimize downtime while maximizing productivity, energy efficiency, and environmental control.",
		keyBenefits: [
			"Reduced cycle times increasing throughput by up to 30%",
			"Energy savings through minimal opening duration",
			"Enhanced temperature and humidity control",
			"Improved workplace safety with advanced sensors",
			"Lower maintenance costs with self-repairing technology",
		],
		features: [
			"Opening speeds up to 2.5 m/s",
			"Self-repairing fabric or panel design",
			"Wind-resistant construction (Class 4-5)",
			"Crash-resistant bottom bar",
			"Integrated safety light curtains",
			"Variable frequency drive (VFD) control",
			"Remote monitoring capability",
			"Insulated options for temperature control",
		],
		applications: [
			"Manufacturing and production facilities",
			"Food processing and cold storage",
			"Pharmaceutical cleanrooms",
			"Logistics and distribution centers",
			"Automotive plants",
			"Chemical processing facilities",
		],
		industryTrends: [
			{
				title: "Smart Sensor Integration",
				description:
					"High-speed doors are now equipped with sensors providing real-time performance data, enabling predictive maintenance and reducing unplanned downtime by up to 50%.",
			},
			{
				title: "Energy Efficiency Mandates",
				description:
					"Stricter building energy codes are driving adoption of high-speed doors in temperature-controlled environments, with ROI typically achieved within 12-18 months through energy savings.",
			},
			{
				title: "Enhanced Hygiene Standards",
				description:
					"Food safety and pharmaceutical regulations increasingly require touchless, high-speed access solutions that minimize contamination risks while maintaining environmental separation.",
			},
		],
		relatedProducts: ["high-speed-roll-doors", "high-speed-fold-doors"],
		caseStudyHighlight: {
			title: "Cold Storage Facility Upgrade",
			description: "Replaced conventional doors with high-speed solutions in a 100,000 sq ft cold storage facility",
			results: ["35% reduction in energy consumption", "200% increase in door operation cycles", "Payback period of 14 months"],
		},
		metaTitle: "High-Speed Industrial Doors | Fast Access Solutions | Bevcon Solutions",
		metaDescription:
			"High-performance industrial high-speed doors with opening speeds up to 2.5 m/s. Self-repairing, energy-efficient solutions for demanding environments.",
	},
	{
		id: "loading-bay",
		slug: "loading-bay",
		name: "Loading Bay Equipment",
		tagline: "Efficient, Safe Loading Operations",
		icon: "package",
		shortDescription: "Complete loading bay solutions including dock levelers, shelters, and seals for seamless material transfer",
		fullDescription:
			"Our comprehensive loading bay equipment ensures safe, efficient loading and unloading operations while maintaining environmental control. From hydraulic dock levelers to inflatable dock shelters, we provide integrated solutions that improve productivity and worker safety.",
		keyBenefits: [
			"Faster loading/unloading reducing turnaround time",
			"Enhanced worker safety with stabilized platforms",
			"Energy savings through proper sealing",
			"Protection from weather and contamination",
			"Reduced product damage during transfer",
		],
		features: [
			"Hydraulic and mechanical dock levelers",
			"Adjustable lip systems (14-16 inches)",
			"Inflatable and retractable dock shelters",
			"Foam and brush dock seals",
			"Vehicle restraint systems",
			"LED dock lighting",
			"Weather sealing technology",
			"Capacity range: 6,000-30,000 kg",
		],
		applications: [
			"Distribution and fulfillment centers",
			"Manufacturing receiving docks",
			"Cold storage facilities",
			"Food processing plants",
			"Retail distribution",
			"Cross-docking operations",
		],
		industryTrends: [
			{
				title: "E-commerce Growth Impact",
				description:
					"Explosive e-commerce growth demands faster loading bay throughput, driving investment in advanced dock equipment that can handle 2-3x higher daily cycles.",
			},
			{
				title: "Safety Regulation Compliance",
				description:
					"New OSHA guidelines and workplace safety standards require vehicle restraint systems and improved dock leveler safety features, becoming mandatory in many jurisdictions.",
			},
			{
				title: "Cold Chain Logistics Expansion",
				description:
					"Growth in pharmaceutical and fresh food distribution is increasing demand for insulated dock shelters and climate-controlled loading bay solutions.",
			},
		],
		relatedProducts: ["dock-levelers", "dock-shelters"],
		caseStudyHighlight: {
			title: "E-commerce Fulfillment Center",
			description: "Equipped 24-bay fulfillment center with complete loading bay solutions",
			results: ["45% faster loading/unloading times", "Zero dock-related safety incidents", "60% reduction in heating/cooling loss"],
		},
		metaTitle: "Loading Bay Equipment | Dock Levelers & Shelters | Bevcon Solutions",
		metaDescription:
			"Complete loading bay solutions including hydraulic dock levelers, inflatable shelters, and vehicle restraints for efficient, safe material transfer operations.",
	},
	{
		id: "material-handling",
		slug: "material-handling",
		name: "Material Handling & Conveyors",
		tagline: "Automated Material Flow Solutions",
		icon: "repeat",
		shortDescription: "Conveyor systems and material handling equipment for optimized workflow automation",
		fullDescription:
			"Our material handling solutions streamline your operations with custom-designed conveyor systems, automated sorting, and integrated material flow management. From simple roller conveyors to complex automated systems, we engineer solutions that maximize efficiency and minimize manual handling.",
		keyBenefits: [
			"Increased throughput with automated material flow",
			"Reduced labor costs and physical strain",
			"Improved accuracy and reduced errors",
			"Space optimization with vertical solutions",
			"Real-time inventory tracking integration",
		],
		features: [
			"Belt, roller, and chain conveyors",
			"Automated sorting systems",
			"Gravity and powered options",
			"Accumulation and merging systems",
			"Variable speed controls",
			"Integration with WMS/ERP systems",
			"Modular and expandable design",
			"Spare parts and maintenance support (via Spareng)",
		],
		applications: [
			"Warehousing and distribution",
			"Manufacturing assembly lines",
			"Package sorting facilities",
			"Airport baggage handling",
			"Automotive production",
			"Mining and bulk material handling",
		],
		industryTrends: [
			{
				title: "Warehouse Automation Surge",
				description:
					"Labor shortages and rising wages are accelerating warehouse automation adoption, with the global market expected to reach $30B by 2026.",
			},
			{
				title: "AI-Powered Optimization",
				description:
					"Machine learning algorithms now optimize conveyor speeds, routing, and maintenance schedules in real-time, improving efficiency by 20-30%.",
			},
			{
				title: "Sustainable Material Handling",
				description:
					"Energy-efficient motors, regenerative braking, and smart power management are becoming standard as companies pursue carbon reduction goals.",
			},
		],
		relatedProducts: ["belt-conveyors", "roller-conveyors"],
		caseStudyHighlight: {
			title: "Automotive Parts Distribution",
			description: "Implemented automated conveyor system for automotive parts distributor",
			results: ["300% increase in sorting capacity", "85% reduction in manual handling", "ROI achieved in 2.5 years"],
		},
		metaTitle: "Bulk Material Handling Equipment & Conveyors | Automation | Bevcon Solutions",
		metaDescription:
			"Custom conveyor systems and automated bulk material handling solutions for warehouses, manufacturing, and distribution. Expert integration with WMS/ERP systems.",
	},
	{
		id: "dock-equipment",
		slug: "dock-equipment",
		name: "Dock Equipment Solutions",
		tagline: "Complete Loading Bay Systems",
		icon: "shield",
		shortDescription: "Comprehensive dock levelers, shelters, and sealing solutions for efficient loading operations",
		fullDescription:
			"Our dock equipment solutions ensure safe, efficient loading and unloading operations while maintaining environmental control and worker safety. From hydraulic dock levelers to inflatable dock shelters, we provide complete integration for your loading bay needs.",
		keyBenefits: [
			"Faster loading/unloading operations",
			"Enhanced worker safety with stable platforms",
			"Energy savings through proper environmental sealing",
			"Protection from weather and contamination",
			"Reduced product damage during transfer",
		],
		features: [
			"Hydraulic and mechanical dock levelers",
			"Inflatable and retractable dock shelters",
			"Foam and brush dock seals",
			"Adjustable lip systems (14-16 inches)",
			"Capacity range: 6,000-30,000 kg",
			"Weather-resistant construction",
			"Easy maintenance and service access",
			"Custom sizing for all vehicle types",
		],
		applications: [
			"Distribution and fulfillment centers",
			"Manufacturing receiving docks",
			"Cold storage facilities",
			"Warehouse loading bays",
			"Retail distribution centers",
			"Cross-docking operations",
		],
		industryTrends: [
			{
				title: "E-commerce Logistics Boom",
				description:
					"Explosive growth in e-commerce is driving investment in loading bay efficiency, with facilities requiring 2-3x higher daily loading cycles and faster turnaround times.",
			},
			{
				title: "Cold Chain Requirements",
				description:
					"Expansion of pharmaceutical and fresh food distribution is increasing demand for insulated dock shelters and climate-controlled loading bay solutions to maintain product integrity.",
			},
			{
				title: "Safety Compliance Standards",
				description:
					"New workplace safety regulations require proper dock equipment and vehicle restraint systems, making professional loading bay solutions essential for compliance.",
			},
		],
		relatedProducts: ["dock-levelers", "dock-shelters", "dock-seals"],
		metaTitle: "Dock Equipment Solutions | Dock Levelers & Shelters | Bevcon Solutions",
		metaDescription:
			"Complete loading bay equipment including hydraulic dock levelers, inflatable shelters, and dock seals for safe, efficient loading operations.",
	},
	{
		id: "mhe-spare-parts",
		slug: "mhe-spare-parts",
		name: "BMHE Spare Parts & Services",
		tagline: "Quality Spares, Reliable Service",
		icon: "lightbulb",
		shortDescription: "Comprehensive bulk material handling equipment spare parts, repairs, and technical services",
		fullDescription:
			"Through our partnership with Spareng Incorporated, we provide premium quality spare parts for bulk material handling equipment including conveyor components, crusher spares, pulleys, and screening equipment. Our    service ensures minimal downtime with rapid parts delivery, expert repairs, and technical consultancy.",
		keyBenefits: [
			"Minimized equipment downtime with fast parts delivery",
			"Premium quality precision-engineered components",
			"Expert technical support and consultancy",
			"Competitive pricing with bulk order options",
			"Comprehensive repairs and refurbishment services",
		],
		features: [
			"Conveyor parts (idlers, rollers, belts, brackets)",
			"Pulleys and drums (head, tail, snub, magnetic)",
			"Crusher spares and high-wear components",
			"Screening equipment and vibrating screen parts",
			"Safety systems (switches, sensors)",
			"Magnetic separators and drum magnets",
			"Expert installation and commissioning",
		],
		applications: [
			"Mining and mineral processing",
			"Bulk material handling facilities",
			"Manufacturing plants",
			"Cement and aggregate industries",
			"Port and cargo handling",
			"Recycling and waste processing",
		],
		industryTrends: [
			{
				title: "Predictive Maintenance Adoption",
				description:
					"Industrial facilities are investing in spare parts inventory management and predictive maintenance to reduce unplanned downtime, with average downtime costs exceeding $260,000 per hour in manufacturing.",
			},
			{
				title: "Quality Over Price Focus",
				description:
					"Companies are prioritizing premium quality spare parts over cheaper alternatives, recognizing that equipment failures cost 5-10x more than proper maintenance and quality components.",
			},
			{
				title: "Local Support Demand",
				description:
					"Growing demand for local technical expertise and rapid parts delivery is driving partnerships with specialized spare parts suppliers who understand regional equipment needs.",
			},
		],
		relatedProducts: ["conveyor-belts", "idlers", "pulleys", "crusher-parts"],
		metaTitle: "BMHE Spare Parts & Services | Conveyor Components | Bevcon Solutions",
		metaDescription:
			"Premium bulk material handling equipment spare parts including conveyor components, crusher spares, pulleys, and screening equipment. Service and technical support.",
	},
	{
		id: "temperature-control",
		slug: "temperature-control",
		name: "Temperature Control Systems",
		tagline: "Precision Climate Management",
		icon: "thermometer",
		shortDescription: "Specialized doors and systems for cold storage, freezers, and temperature-sensitive environments",
		fullDescription:
			"Our temperature control solutions maintain precise climate conditions in cold storage, freezers, and temperature-sensitive production areas. High-speed insulated doors, air curtains, and environmental sealing minimize energy loss while ensuring product integrity.",
		keyBenefits: [
			"Reduced energy costs through superior insulation",
			"Maintained product quality and compliance",
			"Faster access without temperature loss",
			"Lower refrigeration equipment wear",
			"Improved food safety and shelf life",
		],
		features: [
			"Insulated high-speed doors (R-value up to 8)",
			"Freezer-rated doors (-40°C capability)",
			"Air curtain systems",
			"Strip curtains and barriers",
			"Heated door frames (prevent icing)",
			"Emergency quick-release mechanisms",
			"Hygienic, cleanable surfaces",
			"Temperature monitoring integration",
		],
		applications: [
			"Cold storage warehouses",
			"Blast freezers",
			"Food processing facilities",
			"Pharmaceutical storage",
			"Laboratory cold rooms",
			"Supermarket back-of-house",
		],
		industryTrends: [
			{
				title: "Cold Chain Logistics Growth",
				description:
					"Global cold storage market growing at 9% CAGR driven by vaccine distribution, online grocery, and fresh food delivery services.",
			},
			{
				title: "Energy Efficiency Regulations",
				description:
					"New refrigeration efficiency standards require advanced door systems and environmental control, making high-speed insulated doors essential.",
			},
			{
				title: "Food Safety Modernization",
				description:
					"FDA FSMA and similar regulations worldwide mandate better temperature control documentation and systems, increasing demand for monitored solutions.",
			},
		],
		relatedProducts: ["insulated-doors", "freezer-doors"],
		caseStudyHighlight: {
			title: "Cold Storage Facility Modernization",
			description: "Upgraded 200,000 sq ft cold storage with high-speed insulated doors",
			results: [
				"42% reduction in refrigeration energy costs",
				"Improved temperature consistency (+/- 0.5°C)",
				"Extended product shelf life by 20%",
			],
		},
		metaTitle: "Temperature Control Systems | Cold Storage Doors | Bevcon Solutions",
		metaDescription:
			"Specialized temperature control solutions for cold storage and freezers. Insulated high-speed doors and climate management systems.",
	},
	{
		id: "fire-safety",
		slug: "fire-safety",
		name: "Fire Safety & Compliance",
		tagline: "Code-Compliant Fire Protection",
		icon: "flame",
		shortDescription: "Fire-rated doors and systems meeting international safety standards and building codes",
		fullDescription:
			"Our fire safety solutions provide critical protection with fire-rated doors, smoke control systems, and emergency egress solutions. All products meet or exceed international fire safety standards including AS1905, NFPA, and EU regulations.",
		keyBenefits: [
			"Full compliance with fire safety codes",
			"Protection of life and property",
			"Insurance premium reductions",
			"Peace of mind with certified systems",
			"Integration with fire alarm systems",
		],
		features: [
			"Fire ratings: 30, 60, 90, 120 minutes",
			"Automatic closing on fire alarm",
			"Smoke seal gaskets",
			"Emergency release mechanisms",
			"Self-closing hardware",
			"Fire-rated glazing options",
			"Certified by accredited labs",
			"Regular inspection and maintenance",
		],
		applications: [
			"Commercial building fire compartments",
			"Industrial facility fire zones",
			"Parking structures",
			"High-rise buildings",
			"Healthcare fire barriers",
			"Multi-family residential",
		],
		industryTrends: [
			{
				title: "Enhanced Fire Code Requirements",
				description:
					"Building codes increasingly require active fire protection systems, with fire-rated doors becoming mandatory in more applications and facility types.",
			},
			{
				title: "Smart Fire Safety Systems",
				description:
					"Integration of fire doors with building automation systems enables real-time monitoring, automatic testing, and compliance reporting.",
			},
			{
				title: "Compartmentation Strategy",
				description:
					"Modern fire safety design emphasizes containment over evacuation, requiring more sophisticated fire-rated door systems and controls.",
			},
		],
		relatedProducts: ["fire-rated-doors", "fire-shutters"],
		metaTitle: "Fire Safety Doors & Systems | Fire-Rated Solutions | Bevcon Solutions",
		metaDescription:
			"Fire-rated doors and fire safety systems meeting international standards. Certified fire protection solutions with 30-120 minute ratings.",
	},
];

// Solution categories for easy filtering
export const solutionCategories = [
	{
		name: "Door Systems",
		solutions: ["industrial-doors", "high-speed-doors", "fire-safety"],
	},
	{
		name: "Loading Bay Equipment",
		solutions: ["loading-bay", "dock-equipment"],
	},
	{
		name: "Bulk Material Handling",
		solutions: ["material-handling", "mhe-spare-parts"],
	},
	{
		name: "Environmental Control",
		solutions: ["temperature-control"],
	},
];
