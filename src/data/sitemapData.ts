export interface SitemapLink {
  label: string;
  path: string;
  desc?: string;
  badge?: string;
}

export interface SitemapCategory {
  id: string;
  code: string; // 'A', 'B', 'C', etc.
  categoryNumber: number; // 1, 2, 3, etc.
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  links: SitemapLink[];
}

export const MAIN_PAGES: SitemapLink[] = [
  {
    label: 'Home Page',
    path: '/',
    desc: 'Official homepage of Santa Towing featuring 24/7 towing services, haulage, repairs, rentals, and emergency dispatch in Ghana.'
  },
  {
    label: 'Website Search',
    path: '/search',
    desc: 'Search our full inventory of vehicles, auto parts, emergency towing services, and nationwide coverage areas.'
  },
  {
    label: 'Book a Service Online',
    path: '/booking',
    desc: 'Schedule a tow truck, book heavy machinery haulage, vehicle maintenance, or auto body repairs online.'
  },
  {
    label: 'Contact & 24/7 Dispatch Center',
    path: '/contact',
    desc: 'Emergency hotline numbers, WhatsApp direct chat, workshop addresses, and customer support channels.'
  },
  {
    label: 'Careers & Join Our Team',
    path: '/careers',
    desc: 'Job openings for certified recovery drivers, heavy haulage operators, automotive mechanics, and dispatchers.'
  },
  {
    label: 'Media & Recovery Gallery',
    path: '/gallery',
    desc: 'Visual showcase of real-world roadside recoveries, heavy-duty towing operations, and auto body restorations.'
  },
  {
    label: 'Frequently Asked Questions (FAQs)',
    path: '/faqs',
    desc: 'Common questions and detailed answers regarding response times, towing costs, transit insurance, and booking.'
  },
  {
    label: 'Website Sitemap',
    path: '/sitemap',
    desc: 'Interactive visual directory and complete index of every public page, service corridor, and resource on the site.'
  }
];

export const TOWING_SERVICES: SitemapLink[] = [
  {
    label: '24/7 Emergency Towing Hub',
    path: '/towing',
    desc: 'Rapid-response emergency towing for light cars, SUVs, commercial vans, and heavy-duty trucks across Ghana.'
  },
  {
    label: 'Accident Recovery & Ditch Extraction',
    path: '/towing',
    desc: 'Specialized winch-outs, roll-over uprighting, and off-road damage-free extraction by certified recovery teams.'
  },
  {
    label: 'Flatbed Vehicle Transport',
    path: '/towing',
    desc: 'Zero-damage flatbed transport ideal for luxury sedans, electric vehicles, classic cars, and low-clearance sports cars.'
  },
  {
    label: 'Heavy-Duty Commercial Towing',
    path: '/towing',
    desc: 'Heavy-duty wreckers equipped for articulated trucks, commercial buses, loaded tankers, and tipper trucks.'
  },
  {
    label: 'Online Emergency Dispatch',
    path: '/booking',
    desc: 'Instant digital dispatch request with GPS location routing for rapid response roadside assistance.'
  }
];

export const HAULAGE_SERVICES: SitemapLink[] = [
  {
    label: 'Haulage & Heavy Transport Hub',
    path: '/haulage',
    desc: 'Nationwide freight transportation, heavy construction machinery haulage, and oversized cargo logistics in Ghana.'
  },
  {
    label: 'Heavy Construction Machinery Transport',
    path: '/haulage',
    desc: 'Lowbed and flatbed transport for excavators, bulldozers, road rollers, wheel loaders, and graders.'
  },
  {
    label: 'Tema Harbour Cargo Logistics',
    path: '/haulage',
    desc: 'Container transport, port clearing logistics, and intercity haulage from Tema Port to Kumasi, Takoradi, and beyond.'
  },
  {
    label: 'Forklift & Industrial Equipment Haulage',
    path: '/haulage',
    desc: 'Secure transport for industrial plant generators, diesel compressors, forklifts, and factory equipment.'
  },
  {
    label: 'Request a Haulage Quote',
    path: '/haulage',
    desc: 'Get a customized haulage price estimate tailored to your cargo dimensions, tonnage, and destination corridor.'
  }
];

export const AUTO_SERVICES: SitemapLink[] = [
  {
    label: 'All Services Overview Directory',
    path: '/services',
    desc: 'Comprehensive directory of Santa Towing automotive services, garage repairs, body works, and fleet management.'
  },
  {
    label: 'Auto Repairs & Diagnostics',
    path: '/repairs',
    desc: 'Engine diagnostics, transmission overhauls, brake servicing, suspension repair, and computerized troubleshooting.'
  },
  {
    label: 'Body Works & Spray Painting',
    path: '/body-works',
    desc: 'Precision collision repair, dent removal, chassis straightening, and high-gloss oven-baked spray painting.'
  },
  {
    label: 'Commercial Fleet Maintenance',
    path: '/fleet',
    desc: 'Fleet service contracts, scheduled maintenance programs, and dedicated emergency towing SLAs for businesses.'
  }
];

export const VEHICLE_SALES: SitemapLink[] = [
  {
    label: 'Vehicle Sales Inventory Hub',
    path: '/sales',
    desc: 'Explore quality inspected new, foreign-used, and Ghanaian pre-owned vehicles with verified maintenance history.'
  },
  {
    label: '2024 Mercedes-Benz E-Class',
    path: '/sales/1',
    desc: 'Executive luxury sedan with advanced driver assistance, ambient interior, and factory warranty.'
  },
  {
    label: '2024 Range Rover Sport',
    path: '/sales/2',
    desc: 'High-performance luxury SUV combining off-road prowess with bespoke interior luxury.'
  },
  {
    label: '2020 Toyota Camry SE',
    path: '/sales/3',
    desc: 'Reliable and fuel-efficient foreign-used midsize sedan with low mileage.'
  },
  {
    label: '2018 Hyundai Elantra',
    path: '/sales/4',
    desc: 'Affordable compact sedan with excellent fuel economy and modern safety features.'
  },
  {
    label: '2019 Honda CR-V EX',
    path: '/sales/5',
    desc: 'Spacious crossover SUV featuring Honda Sensing safety suite and all-wheel drive.'
  },
  {
    label: '2017 Kia Rio',
    path: '/sales/6',
    desc: 'Economical city hatchback with clean maintenance records and low running costs.'
  },
  {
    label: '2024 Toyota Hilux Invincible',
    path: '/sales/7',
    desc: 'Rugged 4x4 double cabin pickup truck engineered for heavy payloads and off-road work.'
  },
  {
    label: '2021 Lexus RX 350',
    path: '/sales/8',
    desc: 'Premium luxury crossover SUV featuring smooth V6 power and executive comfort.'
  }
];

export const CAR_RENTALS: SitemapLink[] = [
  {
    label: 'Car Rental Fleet Overview',
    path: '/rental',
    desc: 'Flexible daily, weekly, and monthly vehicle rentals for business trips, personal travel, and corporate events.'
  },
  {
    label: 'Economy & Compact Rentals',
    path: '/rental',
    desc: 'Fuel-efficient and budget-friendly hatchbacks and sedans for easy city driving in Accra.'
  },
  {
    label: 'Executive & Midsize Sedans',
    path: '/rental',
    desc: 'Comfortable sedans suited for corporate executives, airport transfers, and business meetings.'
  },
  {
    label: 'SUV & 4x4 Off-Road Rentals',
    path: '/rental',
    desc: 'High-riding, powerful SUVs built for intercity Ghanaian highways and regional travel.'
  },
  {
    label: 'Commercial Pickup Truck Rentals',
    path: '/rental',
    desc: 'Heavy-duty Toyota Hilux and commercial pickups ready for rugged utility and field assignments.'
  },
  {
    label: 'Luxury & VIP Chauffeured Vehicles',
    path: '/rental',
    desc: 'Chauffeured Mercedes-Benz and VIP vehicles for special events, dignitaries, and weddings.'
  },
  {
    label: 'Passenger & Commercial Vans',
    path: '/rental',
    desc: 'Spacious 12-15 seater Hyundai H1 passenger vans for group tours, sports teams, and staff transport.'
  }
];

export const AUTO_PARTS: SitemapLink[] = [
  {
    label: 'Auto Parts & Batteries Store',
    path: '/parts',
    desc: 'Genuine OEM auto parts, high-capacity car batteries, lubricants, brake components, and accessories.'
  },
  {
    label: 'Premium Heavy Duty Battery 70Ah',
    path: '/parts/1',
    desc: 'High-cranking maintenance-free automotive battery designed for tropical climates.'
  },
  {
    label: 'Synthetic Motor Oil 5W-30 (5L)',
    path: '/parts/2',
    desc: 'Full synthetic multi-grade engine oil providing ultimate wear and thermal protection.'
  },
  {
    label: 'Ceramic Brake Pads (Front)',
    path: '/parts/3',
    desc: 'Premium low-dust, noise-free ceramic brake pads for confident stopping power.'
  },
  {
    label: 'All-Season Tire 205/55R16',
    path: '/parts/4',
    desc: 'Durable road-gripping tires designed for wet and dry Ghanaian road conditions.'
  },
  {
    label: 'Engine Air Filter (OEM Spec)',
    path: '/parts/5',
    desc: 'High-filtration efficiency air filter to protect engine internals from dust and dirt.'
  },
  {
    label: 'LED Headlight Bulbs H7 (Pair)',
    path: '/parts/6',
    desc: '6000K crisp white beam LED headlight replacement bulbs with extended lifespan.'
  }
];

export const BLOG_POSTS_LINKS: SitemapLink[] = [
  {
    label: 'Blog & Automotive Knowledge Hub',
    path: '/blog',
    desc: 'Expert automotive advice, roadside breakdown guides, towing tips, and Ghanaian transport industry updates.'
  },
  {
    label: 'What to Do If Your Car Breaks Down on a Busy Highway',
    path: '/blog/1',
    desc: 'Critical safety steps to protect yourself and passengers while awaiting emergency towing on highway shoulders.'
  },
  {
    label: '5 Essential Summer Vehicle Care Tips',
    path: '/blog/2',
    desc: 'Proven vehicle maintenance checks to prevent engine overheating, tire blowouts, and battery failure.'
  },
  {
    label: 'How to Prevent Battery Drain in Older Vehicles',
    path: '/blog/3',
    desc: 'Identifying parasitic electrical drains and simple habits to prolong automotive battery longevity.'
  },
  {
    label: 'Understanding Flatbed vs. Wheel-Lift Towing',
    path: '/blog/4',
    desc: 'A comprehensive comparison of towing methods and when flatbed recovery is mandatory for your vehicle.'
  },
  {
    label: 'Santa Towing Expands Service Fleet in Greater Accra',
    path: '/blog/5',
    desc: 'Announcement of new heavy-duty recovery units added to enhance response times across Accra and Tema.'
  },
  {
    label: 'Essential Items for Your Roadside Emergency Kit',
    path: '/blog/6',
    desc: 'The 10 essential tools, safety triangles, jumper cables, and supplies every driver should carry.'
  }
];

export const LEGAL_POLICIES: SitemapLink[] = [
  {
    label: 'Privacy Policy',
    path: '/privacy-policy',
    desc: 'Information regarding data privacy, personal information collection, location tracking, and user data rights.'
  },
  {
    label: 'Terms & Conditions',
    path: '/terms-conditions',
    desc: 'General governing terms for utilizing Santa Towing web applications, vehicle services, and consultations.'
  },
  {
    label: 'Towing Service Terms',
    path: '/towing-service-terms',
    desc: 'Operational dispatch terms, customer responsibilities, vehicle access rules, and service execution guidelines.'
  },
  {
    label: 'Cancellation & Refund Policy',
    path: '/cancellation-refund-policy',
    desc: 'Policies governing dispatch cancellations, scheduled booking changes, and fee refund eligibility.'
  },
  {
    label: 'Pricing & Payment Policy',
    path: '/pricing-payment-policy',
    desc: 'Transparent pricing structures, payment channels (Mobile Money, cards, cash), surcharges, and deposit requirements.'
  },
  {
    label: 'Website Disclaimer',
    path: '/disclaimer',
    desc: 'Important legal notices regarding estimated response times, technical advice, and third-party content.'
  },
  {
    label: 'Cookie Policy',
    path: '/cookie-policy',
    desc: 'Overview of cookies, session analytics, and user preferences stored to optimize site navigation.'
  },
  {
    label: 'Service Area Policy',
    path: '/service-area-policy',
    desc: 'Geographical coverage zones, remote area dispatch conditions, and long-distance travel policies.'
  },
  {
    label: 'Emergency Service Policy',
    path: '/emergency-service-policy',
    desc: '24/7 priority triage guidelines, roadside safety protocols, and emergency crew dispatch rules.'
  },
  {
    label: 'Complaints & Dispute Policy',
    path: '/complaints-policy',
    desc: 'Formal grievance reporting procedures, dispute investigation timelines, and customer resolution standards.'
  },
  {
    label: 'Vehicle Damage & Liability Policy',
    path: '/vehicle-damage-liability-policy',
    desc: 'Pre-tow condition inspection protocol, carrier liability limits, and damage claim handling.'
  },
  {
    label: 'Accessibility Statement',
    path: '/accessibility-statement',
    desc: 'Our digital commitment to ensuring accessibility and usability for individuals of all abilities.'
  }
];

export const GREATER_ACCRA_AREAS: SitemapLink[] = [
  { label: 'Service Areas Directory Index', path: '/service-areas', desc: 'Complete directory of all 35+ neighborhood coverage zones and intercity towing corridors.' },
  { label: 'Accra Central Towing & Recovery', path: '/service-areas/accra', desc: 'Fast emergency roadside assistance and flatbed towing in Accra central business district.' },
  { label: 'Tema & Harbour Corridor Towing', path: '/service-areas/tema', desc: 'Industrial area, harbour gate, and residential towing and heavy haulage in Tema.' },
  { label: 'East Legon Towing Services', path: '/service-areas/east-legon', desc: 'Premium flatbed towing and emergency vehicle jumpstarts in East Legon and surrounding estates.' },
  { label: 'Spintex Road Towing & Assistance', path: '/service-areas/spintex', desc: 'Rapid response roadside towing along Spintex commercial highway and junction points.' },
  { label: 'Airport Residential Area Towing', path: '/service-areas/airport-residential', desc: 'Executive roadside assistance and luxury car transport in Airport Residential Area.' },
  { label: 'Dzorwulu Towing & Recovery', path: '/service-areas/dzorwulu', desc: 'Prompt vehicle recovery and battery assistance across Dzorwulu and Roman Ridge.' },
  { label: 'Madina Towing & Roadside Care', path: '/service-areas/madina', desc: '24/7 tow truck dispatch and recovery services in Madina and Zongo Junction.' },
  { label: 'Adenta Towing & Transport', path: '/service-areas/adenta', desc: 'Emergency towing, accident recovery, and flatbed transport covering Adenta and Barrier.' },
  { label: 'Osu Towing & Emergency Assistance', path: '/service-areas/osu', desc: 'Quick vehicle recovery and roadside assistance in Osu, Oxford Street, and Ringway.' },
  { label: 'Labadi Towing Services', path: '/service-areas/labadi', desc: 'Tow truck dispatch and flatbed recovery in Labadi, Trade Fair, and Beach Road.' },
  { label: 'La Towing & Recovery', path: '/service-areas/la', desc: 'Roadside help, battery service, and towing in La Dade-Kotopon.' },
  { label: 'Dansoman Towing & Roadside Aid', path: '/service-areas/dansoman', desc: 'Complete towing and vehicle recovery services in Dansoman and Sahara.' },
  { label: 'Kaneshie Towing & Recovery', path: '/service-areas/kaneshie', desc: 'Emergency tow assistance near Kaneshie Market, First Light, and Industrial Area.' },
  { label: 'Achimota Towing Services', path: '/service-areas/achimota', desc: 'Rapid roadside response near Achimota Overhead, Forest Reserve, and New Achimota.' },
  { label: 'Tesano Towing & Transport', path: '/service-areas/tesano', desc: 'Flatbed recovery and towing along the Tesano and Apenkwa highway stretch.' },
  { label: 'Abeka Towing & Roadside Aid', path: '/service-areas/abeka', desc: '24/7 tow truck dispatch in Abeka, Lapaz, and surrounding neighborhoods.' },
  { label: 'Kwashieman Towing Services', path: '/service-areas/kwashieman', desc: 'Emergency towing and winch-out support in Kwashieman and George Walker Bush Highway.' },
  { label: 'Ashaiman Towing & Heavy Haulage', path: '/service-areas/ashaiman', desc: 'Commercial vehicle recovery, flatbed towing, and equipment transport in Ashaiman.' },
  { label: 'Teshie Towing & Roadside Aid', path: '/service-areas/teshie', desc: 'Fast tow truck dispatch and flat tire changes in Teshie and Camp.' },
  { label: 'Nungua Towing Services', path: '/service-areas/nungua', desc: 'Reliable towing, accident recovery, and roadside assistance in Nungua and Barrier.' },
  { label: 'Weija-Gbawe Towing & Recovery', path: '/service-areas/weija-gbawe', desc: 'Roadside assistance and towing across Weija Dam, SCC, and Gbawe.' },
  { label: 'Kasoa Corridor Towing Services', path: '/service-areas/kasoa', desc: '24/7 towing on the busy Accra-Kasoa Highway and surrounding growth centers.' },
  { label: 'Prampram Towing & Transport', path: '/service-areas/prampram', desc: 'Coastal towing, flatbed recovery, and roadside care in Prampram and New Dawhenya.' },
  { label: 'Kpone Industrial Towing', path: '/service-areas/kpone', desc: 'Heavy vehicle recovery and plant transport in Kpone Industrial Zone.' },
  { label: 'Dawhenya Towing Services', path: '/service-areas/dawhenya', desc: 'Fast towing support on the Accra-Aflao Highway corridor at Dawhenya.' },
  { label: 'Amasaman Towing & Transport', path: '/service-areas/amasaman', desc: 'Towing assistance along the Accra-Kumasi highway gateway at Amasaman.' },
  { label: 'Ayawaso Towing Services', path: '/service-areas/ayawaso', desc: 'Comprehensive towing and auto assistance in Ayawaso district.' },
  { label: 'Burma Camp Towing Assistance', path: '/service-areas/burma-camp', desc: 'Reliable vehicle transport and recovery in Burma Camp and Cantonments periphery.' },
  { label: 'Circle (Kwame Nkrumah) Towing', path: '/service-areas/circle', desc: 'Fast central hub towing and recovery at Kwame Nkrumah Interchange.' },
  { label: 'Dodowa Towing & Roadside Support', path: '/service-areas/dodowa', desc: 'Towing services across Dodowa, Shai Hills, and Eastern corridor routes.' },
  { label: 'Korle Klottey Towing Services', path: '/service-areas/korle-klottey', desc: 'Rapid response towing in Ridge, Ministries, and Korle Klottey municipal zone.' },
  { label: 'Lakeside Estate Towing Support', path: '/service-areas/lakeside', desc: 'Residential community towing and breakdown assistance in Lakeside Estate.' },
  { label: 'Nima Towing & Recovery', path: '/service-areas/nima', desc: 'Prompt roadside assistance and towing across Nima and Mamobi.' },
  { label: 'Ningo Prampram Towing Support', path: '/service-areas/ningo-prampram', desc: 'Coastal and highway vehicle towing across Ningo-Prampram District.' },
  { label: 'Pokuase Interchange Towing', path: '/service-areas/pokuase', desc: 'Strategic four-tier interchange emergency towing and highway recovery in Pokuase.' }
];

export const INTERCITY_CORRIDORS: SitemapLink[] = [
  // Western / Central Corridor
  { label: 'Accra to Sekondi Towing & Transport', path: '/service-areas/accra-to-sekondi', desc: 'Direct flatbed and heavy recovery along the Accra-Sekondi coastal highway corridor.' },
  { label: 'Sekondi to Accra Towing & Transport', path: '/service-areas/sekondi-to-accra', desc: 'Intercity vehicle return transport and breakdown assistance from Sekondi to Accra.' },
  { label: 'Accra to Takoradi Heavy Towing', path: '/service-areas/accra-to-takoradi', desc: 'Heavy transport, port equipment haulage, and long-distance towing from Accra to Takoradi.' },
  { label: 'Takoradi to Accra Towing Corridor', path: '/service-areas/takoradi-to-accra', desc: 'Commercial vehicle and passenger car recovery from Takoradi to Greater Accra.' },
  { label: 'Accra to Tarkwa Mining Transport', path: '/service-areas/accra-to-tarkwa', desc: 'Specialized mining machinery transport and vehicle towing from Accra to Tarkwa.' },
  { label: 'Tarkwa to Accra Towing Corridor', path: '/service-areas/tarkwa-to-accra', desc: 'Return towing and industrial equipment transport from Tarkwa mining hub to Accra.' },
  { label: 'Accra to Cape Coast Towing Corridor', path: '/service-areas/accra-to-cape-coast', desc: 'Emergency highway recovery and scheduled vehicle transit between Accra and Cape Coast.' },
  { label: 'Cape Coast to Accra Towing Corridor', path: '/service-areas/cape-coast-to-accra', desc: 'Reliable vehicle transit and accident removal from Cape Coast to Accra.' },
  { label: 'Accra to Elmina Towing Services', path: '/service-areas/accra-to-elmina', desc: 'Coastal highway towing and emergency transport connecting Accra and Elmina.' },
  { label: 'Elmina to Accra Towing Services', path: '/service-areas/elmina-to-accra', desc: 'Vehicle transport and towing assistance from Elmina to Greater Accra.' },
  { label: 'Accra to Winneba Towing Corridor', path: '/service-areas/accra-to-winneba', desc: 'Highway breakdown assistance and flatbed towing between Accra and Winneba.' },
  { label: 'Winneba to Accra Towing Corridor', path: '/service-areas/winneba-to-accra', desc: 'Rapid return tow and roadside help from Winneba Junction to Accra.' },
  { label: 'Accra to Mankessim Towing Corridor', path: '/service-areas/accra-to-mankessim', desc: 'Intercity towing along the Central regional trade transit corridor at Mankessim.' },
  { label: 'Mankessim to Accra Towing Corridor', path: '/service-areas/mankessim-to-accra', desc: 'Vehicle recovery and transport from Mankessim to Greater Accra.' },
  { label: 'Accra to Apam Towing Corridor', path: '/service-areas/accra-to-apam', desc: 'Emergency highway tow truck dispatch between Accra and Apam Junction.' },
  { label: 'Apam to Accra Towing Corridor', path: '/service-areas/apam-to-accra', desc: 'Reliable vehicle towing from Apam to Accra.' },
  { label: 'Accra to Bogoso Towing Corridor', path: '/service-areas/accra-to-bogoso', desc: 'Heavy haulage and vehicle recovery connecting Accra to Bogoso.' },
  { label: 'Bogoso to Accra Towing Corridor', path: '/service-areas/bogoso-to-accra', desc: 'Return transit and mining corridor towing from Bogoso to Accra.' },
  { label: 'Accra to Prestea Towing Corridor', path: '/service-areas/accra-to-prestea', desc: 'Long-distance vehicle transport from Accra to Prestea.' },
  { label: 'Prestea to Accra Towing Corridor', path: '/service-areas/prestea-to-accra', desc: 'Reliable vehicle towing and recovery from Prestea to Accra.' },
  { label: 'Accra to Agona Nkwanta Towing', path: '/service-areas/accra-to-agona-nkwanta', desc: 'Highway transport and flatbed towing from Accra to Agona Nkwanta.' },
  { label: 'Agona Nkwanta to Accra Towing', path: '/service-areas/agona-nkwanta-to-accra', desc: 'Intercity vehicle return transit from Agona Nkwanta to Accra.' },
  { label: 'Accra to Elubo Border Corridor', path: '/service-areas/accra-to-elubo', desc: 'Cross-border corridor towing and heavy cargo transport to Elubo border.' },
  { label: 'Elubo to Accra Border Corridor', path: '/service-areas/elubo-to-accra', desc: 'Vehicle and cargo transport from Elubo border to Greater Accra.' },
  { label: 'Accra to Axim Coastal Corridor', path: '/service-areas/accra-to-axim', desc: 'Long-distance flatbed towing from Accra to Axim.' },
  { label: 'Axim to Accra Coastal Corridor', path: '/service-areas/axim-to-accra', desc: 'Vehicle recovery and transport from Axim to Accra.' },
  { label: 'Accra to Half Assini Towing', path: '/service-areas/accra-to-half-assini', desc: 'Western regional long-range transport to Half Assini.' },
  { label: 'Half Assini to Accra Towing', path: '/service-areas/half-assini-to-accra', desc: 'Vehicle transit from Half Assini to Accra.' },
  { label: 'Accra to Shama Towing Corridor', path: '/service-areas/accra-to-shama', desc: 'Reliable vehicle towing and recovery between Accra and Shama.' },
  { label: 'Shama to Accra Towing Corridor', path: '/service-areas/shama-to-accra', desc: 'Return tow services from Shama to Accra.' },
  { label: 'Accra to Mpohor Towing Corridor', path: '/service-areas/accra-to-mpohor', desc: 'Vehicle transport and breakdown support between Accra and Mpohor.' },
  { label: 'Mpohor to Accra Towing Corridor', path: '/service-areas/mpohor-to-accra', desc: 'Return vehicle transport from Mpohor to Accra.' },
  { label: 'Accra to Wassa Akropong Towing', path: '/service-areas/accra-to-wassa-akropong', desc: 'Industrial and vehicle transport to Wassa Akropong.' },
  { label: 'Wassa Akropong to Accra Towing', path: '/service-areas/wassa-akropong-to-accra', desc: 'Return towing service from Wassa Akropong to Accra.' },
  { label: 'Accra to Daboase Towing Corridor', path: '/service-areas/accra-to-daboase', desc: 'Towing assistance between Accra and Daboase.' },
  { label: 'Daboase to Accra Towing Corridor', path: '/service-areas/daboase-to-accra', desc: 'Vehicle transport from Daboase to Accra.' },
  { label: 'Accra to Enchi Towing Corridor', path: '/service-areas/accra-to-enchi', desc: 'Long-distance haulage and vehicle recovery to Enchi.' },
  { label: 'Enchi to Accra Towing Corridor', path: '/service-areas/enchi-to-accra', desc: 'Return transit from Enchi to Accra.' },
  { label: 'Accra to Bawdie Towing Corridor', path: '/service-areas/accra-to-bawdie', desc: 'Towing support between Accra and Bawdie.' },
  { label: 'Bawdie to Accra Towing Corridor', path: '/service-areas/bawdie-to-accra', desc: 'Return vehicle transport from Bawdie to Accra.' },
  { label: 'Accra to Samreboi Towing Corridor', path: '/service-areas/accra-to-samreboi', desc: 'Timber and equipment transport to Samreboi.' },
  { label: 'Samreboi to Accra Towing Corridor', path: '/service-areas/samreboi-to-accra', desc: 'Return vehicle transport from Samreboi to Accra.' },
  { label: 'Accra to Sefwi Wiawso Towing', path: '/service-areas/accra-to-sefwi-wiawso', desc: 'Western North regional transport to Sefwi Wiawso.' },
  { label: 'Sefwi Wiawso to Accra Towing', path: '/service-areas/sefwi-wiawso-to-accra', desc: 'Return towing service from Sefwi Wiawso to Accra.' },
  { label: 'Accra to Bibiani Towing Corridor', path: '/service-areas/accra-to-bibiani', desc: 'Mining hub haulage and flatbed towing between Accra and Bibiani.' },
  { label: 'Bibiani to Accra Towing Corridor', path: '/service-areas/bibiani-to-accra', desc: 'Return vehicle transport from Bibiani to Accra.' },
  { label: 'Accra to Juaboso Towing Corridor', path: '/service-areas/accra-to-juaboso', desc: 'Long-distance agricultural hub transport to Juaboso.' },
  { label: 'Juaboso to Accra Towing Corridor', path: '/service-areas/juaboso-to-accra', desc: 'Return vehicle transit from Juaboso to Accra.' },
  { label: 'Accra to Bodi Towing Corridor', path: '/service-areas/accra-to-bodi', desc: 'Towing and equipment haulage connecting Accra and Bodi.' },
  { label: 'Bodi to Accra Towing Corridor', path: '/service-areas/bodi-to-accra', desc: 'Return transport from Bodi to Accra.' },
  { label: 'Accra to Asankragwa Towing Corridor', path: '/service-areas/accra-to-asankragwa', desc: 'Transport and towing to Asankragwa.' },
  { label: 'Asankragwa to Accra Towing Corridor', path: '/service-areas/asankragwa-to-accra', desc: 'Return vehicle transit from Asankragwa to Accra.' },
  { label: 'Accra to Dadieso Towing Corridor', path: '/service-areas/accra-to-dadieso', desc: 'Western North transport between Accra and Dadieso.' },
  { label: 'Dadieso to Accra Towing Corridor', path: '/service-areas/dadieso-to-accra', desc: 'Return transit from Dadieso to Accra.' },
  { label: 'Accra to Sefwi Bekwai Towing', path: '/service-areas/accra-to-sefwi-bekwai', desc: 'Vehicle towing between Accra and Sefwi Bekwai.' },
  { label: 'Sefwi Bekwai to Accra Towing', path: '/service-areas/sefwi-bekwai-to-accra', desc: 'Return transport from Sefwi Bekwai to Accra.' },
  { label: 'Accra to Akontombra Towing', path: '/service-areas/accra-to-akontombra', desc: 'Long-distance haulage and towing to Akontombra.' },
  { label: 'Akontombra to Accra Towing', path: '/service-areas/akontombra-to-accra', desc: 'Return transport from Akontombra to Accra.' },

  // Ashanti / Kumasi Corridor
  { label: 'Accra to Kumasi Major Corridor', path: '/service-areas/accra-to-kumasi', desc: 'Ghana premier transit spine: heavy commercial towing, plant transport, and flatbed recovery.' },
  { label: 'Kumasi to Accra Major Corridor', path: '/service-areas/kumasi-to-accra', desc: 'High-frequency vehicle transport and emergency highway assistance from Kumasi to Accra.' },
  { label: 'Accra to Obuasi Mining Towing', path: '/service-areas/accra-to-obuasi', desc: 'Heavy machinery and passenger vehicle towing from Accra to Obuasi mining district.' },
  { label: 'Obuasi to Accra Towing Corridor', path: '/service-areas/obuasi-to-accra', desc: 'Return vehicle recovery and transport from Obuasi to Greater Accra.' },
  { label: 'Accra to Konongo Towing Corridor', path: '/service-areas/accra-to-konongo', desc: 'Highway breakdown recovery and towing between Accra and Konongo.' },
  { label: 'Konongo to Accra Towing Corridor', path: '/service-areas/konongo-to-accra', desc: 'Return tow services from Konongo to Accra.' },
  { label: 'Accra to Ejisu Towing Corridor', path: '/service-areas/accra-to-ejisu', desc: 'Express towing and cargo haulage between Accra and Ejisu.' },
  { label: 'Ejisu to Accra Towing Corridor', path: '/service-areas/ejisu-to-accra', desc: 'Return vehicle transport from Ejisu to Accra.' },
  { label: 'Accra to Mampong Towing Corridor', path: '/service-areas/accra-to-mampong', desc: 'Intercity transport and flatbed towing between Accra and Mampong Ashanti.' },
  { label: 'Mampong to Accra Towing Corridor', path: '/service-areas/mampong-to-accra', desc: 'Return tow assistance from Mampong to Accra.' },
  { label: 'Accra to Offinso Towing Corridor', path: '/service-areas/accra-to-offinso', desc: 'Highway recovery and vehicle transport between Accra and Offinso.' },
  { label: 'Offinso to Accra Towing Corridor', path: '/service-areas/offinso-to-accra', desc: 'Return vehicle transport from Offinso to Accra.' },
  { label: 'Accra to Bekwai Towing Corridor', path: '/service-areas/accra-to-bekwai', desc: 'Vehicle transport and breakdown support between Accra and Bekwai.' },
  { label: 'Bekwai to Accra Towing Corridor', path: '/service-areas/bekwai-to-accra', desc: 'Return tow services from Bekwai to Accra.' },
  { label: 'Accra to Nkawie Towing Corridor', path: '/service-areas/accra-to-nkawie', desc: 'Towing assistance between Accra and Nkawie.' },
  { label: 'Nkawie to Accra Towing Corridor', path: '/service-areas/nkawie-to-accra', desc: 'Return vehicle transport from Nkawie to Accra.' },
  { label: 'Accra to Atonsu Towing Corridor', path: '/service-areas/accra-to-atonsu', desc: 'Vehicle recovery and transport between Accra and Atonsu.' },
  { label: 'Atonsu to Accra Towing Corridor', path: '/service-areas/atonsu-to-accra', desc: 'Return transport from Atonsu to Accra.' },
  { label: 'Accra to Abuakwa Towing Corridor', path: '/service-areas/accra-to-abuakwa', desc: 'Towing support between Accra and Abuakwa.' },
  { label: 'Abuakwa to Accra Towing Corridor', path: '/service-areas/abuakwa-to-accra', desc: 'Return transport from Abuakwa to Accra.' },
  { label: 'Accra to Fomena Towing Corridor', path: '/service-areas/accra-to-fomena', desc: 'Vehicle towing and recovery between Accra and Fomena.' },
  { label: 'Fomena to Accra Towing Corridor', path: '/service-areas/fomena-to-accra', desc: 'Return transport from Fomena to Accra.' },
  { label: 'Accra to Agona Ashanti Towing', path: '/service-areas/accra-to-agona', desc: 'Highway breakdown assistance between Accra and Agona Ashanti.' },
  { label: 'Agona Ashanti to Accra Towing', path: '/service-areas/agona-to-accra', desc: 'Return vehicle transit from Agona Ashanti to Accra.' },
  { label: 'Accra to Juaben Towing Corridor', path: '/service-areas/accra-to-juaben', desc: 'Transport and towing between Accra and Juaben.' },
  { label: 'Juaben to Accra Towing Corridor', path: '/service-areas/juaben-to-accra', desc: 'Return transport from Juaben to Accra.' },
  { label: 'Accra to Asante Akim Towing', path: '/service-areas/accra-to-asante-akim', desc: 'Highway towing between Accra and Asante Akim.' },
  { label: 'Asante Akim to Accra Towing', path: '/service-areas/asante-akim-to-accra', desc: 'Return vehicle transit from Asante Akim to Accra.' },
  { label: 'Accra to Tepa Towing Corridor', path: '/service-areas/accra-to-tepa', desc: 'Long-distance agricultural corridor transport to Tepa.' },
  { label: 'Tepa to Accra Towing Corridor', path: '/service-areas/tepa-to-accra', desc: 'Return vehicle transport from Tepa to Accra.' },

  // Eastern Region
  { label: 'Accra to Koforidua Towing Corridor', path: '/service-areas/accra-to-koforidua', desc: 'Fast flatbed transport and emergency towing between Accra and Eastern regional capital Koforidua.' },
  { label: 'Koforidua to Accra Towing Corridor', path: '/service-areas/koforidua-to-accra', desc: 'Prompt vehicle recovery and transport from Koforidua to Greater Accra.' },
  { label: 'Accra to Nkawkaw Highway Towing', path: '/service-areas/accra-to-nkawkaw', desc: 'Kwahu escarpment highway recovery, heavy towing, and vehicle transport to Nkawkaw.' },
  { label: 'Nkawkaw to Accra Highway Towing', path: '/service-areas/nkawkaw-to-accra', desc: 'Return towing service and accident clearing from Nkawkaw to Accra.' },
  { label: 'Accra to Suhum Towing Corridor', path: '/service-areas/accra-to-suhum', desc: '24/7 highway tow truck response connecting Accra and Suhum junction.' },
  { label: 'Suhum to Accra Towing Corridor', path: '/service-areas/suhum-to-accra', desc: 'Return tow services from Suhum to Accra.' },
  { label: 'Accra to Nsawam Towing Corridor', path: '/service-areas/accra-to-nsawam', desc: 'Immediate roadside rescue and flatbed towing along the Accra-Nsawam expressway.' },
  { label: 'Nsawam to Accra Towing Corridor', path: '/service-areas/nsawam-to-accra', desc: 'Return vehicle transport and roadside assistance from Nsawam to Accra.' },
  { label: 'Accra to Aburi Escarpment Towing', path: '/service-areas/accra-to-aburi', desc: 'Safe mountain tow truck and winch recovery along the steep Aburi Ridge.' },
  { label: 'Aburi to Accra Escarpment Towing', path: '/service-areas/aburi-to-accra', desc: 'Downhill vehicle transport and flatbed towing from Aburi to Accra.' },
  { label: 'Accra to Akropong Towing Corridor', path: '/service-areas/accra-to-akropong', desc: 'Akuapem ridge vehicle recovery and towing from Accra to Akropong.' },
  { label: 'Akropong to Accra Towing Corridor', path: '/service-areas/akropong-to-accra', desc: 'Return transport from Akropong to Accra.' },
  { label: 'Accra to Somanya Towing Corridor', path: '/service-areas/accra-to-somanya', desc: 'Krobo district towing and vehicle transit between Accra and Somanya.' },
  { label: 'Somanya to Accra Towing Corridor', path: '/service-areas/somanya-to-accra', desc: 'Return towing services from Somanya to Accra.' },
  { label: 'Accra to Odumase Krobo Towing', path: '/service-areas/accra-to-odumase-krobo', desc: 'Vehicle transport and breakdown support between Accra and Odumase Krobo.' },
  { label: 'Odumase Krobo to Accra Towing', path: '/service-areas/odumase-krobo-to-accra', desc: 'Return vehicle transport from Odumase Krobo to Accra.' },
  { label: 'Accra to Asamankese Towing Corridor', path: '/service-areas/accra-to-asamankese', desc: 'Intercity transport and flatbed towing between Accra and Asamankese.' },
  { label: 'Asamankese to Accra Towing Corridor', path: '/service-areas/asamankese-to-accra', desc: 'Return towing assistance from Asamankese to Accra.' },
  { label: 'Accra to Akyem Oda Towing Corridor', path: '/service-areas/accra-to-akyem-oda', desc: 'Commercial and passenger vehicle transport from Accra to Akyem Oda.' },
  { label: 'Akyem Oda to Accra Towing Corridor', path: '/service-areas/akyem-oda-to-accra', desc: 'Return vehicle recovery and transport from Akyem Oda to Accra.' },
  { label: 'Accra to Akwatia Diamond Towing', path: '/service-areas/accra-to-akwatia', desc: 'Mining and vehicle transport between Accra and Akwatia.' },
  { label: 'Akwatia to Accra Towing Corridor', path: '/service-areas/akwatia-to-accra', desc: 'Return transport from Akwatia to Accra.' },
  { label: 'Accra to Begoro Towing Corridor', path: '/service-areas/accra-to-begoro', desc: 'Fanteakwa district towing and transport to Begoro.' },
  { label: 'Begoro to Accra Towing Corridor', path: '/service-areas/begoro-to-accra', desc: 'Return transport from Begoro to Accra.' },
  { label: 'Accra to Donkorkrom Afram Plains', path: '/service-areas/accra-to-donkorkrom', desc: 'Afram Plains long-haul equipment transport and towing to Donkorkrom.' },
  { label: 'Donkorkrom to Accra Afram Plains', path: '/service-areas/donkorkrom-to-accra', desc: 'Return transport from Donkorkrom to Accra.' },

  // Bono / Ahafo / Bono East
  { label: 'Accra to Sunyani Major Corridor', path: '/service-areas/accra-to-sunyani', desc: 'Major transit line connecting Accra to Bono Regional capital Sunyani.' },
  { label: 'Sunyani to Accra Major Corridor', path: '/service-areas/sunyani-to-accra', desc: 'Return vehicle transit and long-distance transport from Sunyani to Accra.' },
  { label: 'Accra to Techiman Central Transit', path: '/service-areas/accra-to-techiman', desc: 'Strategic transit hub towing, market freight transport, and recovery at Techiman.' },
  { label: 'Techiman to Accra Central Transit', path: '/service-areas/techiman-to-accra', desc: 'Return vehicle recovery and heavy haulage from Techiman to Accra.' },
  { label: 'Accra to Berekum Towing Corridor', path: '/service-areas/accra-to-berekum', desc: 'Long-distance vehicle transport and towing to Berekum.' },
  { label: 'Berekum to Accra Towing Corridor', path: '/service-areas/berekum-to-accra', desc: 'Return vehicle transit from Berekum to Accra.' },
  { label: 'Accra to Dormaa Ahenkro Towing', path: '/service-areas/accra-to-dormaa-ahenkro', desc: 'Border corridor vehicle transport to Dormaa Ahenkro.' },
  { label: 'Dormaa Ahenkro to Accra Towing', path: '/service-areas/dormaa-ahenkro-to-accra', desc: 'Return transport from Dormaa Ahenkro to Accra.' },
  { label: 'Accra to Wenchi Towing Corridor', path: '/service-areas/accra-to-wenchi', desc: 'Intercity transport and flatbed recovery to Wenchi.' },
  { label: 'Wenchi to Accra Towing Corridor', path: '/service-areas/wenchi-to-accra', desc: 'Return towing services from Wenchi to Accra.' },
  { label: 'Accra to Nkoranza Towing Corridor', path: '/service-areas/accra-to-nkoranza', desc: 'Towing assistance between Accra and Nkoranza.' },
  { label: 'Nkoranza to Accra Towing Corridor', path: '/service-areas/nkoranza-to-accra', desc: 'Return transport from Nkoranza to Accra.' },
  { label: 'Accra to Kintampo Highway Towing', path: '/service-areas/accra-to-kintampo', desc: 'Key central spine highway recovery and heavy towing around Kintampo.' },
  { label: 'Kintampo to Accra Highway Towing', path: '/service-areas/kintampo-to-accra', desc: 'Return vehicle transport from Kintampo to Accra.' },
  { label: 'Accra to Goaso Towing Corridor', path: '/service-areas/accra-to-goaso', desc: 'Ahafo regional capital transport and towing to Goaso.' },
  { label: 'Goaso to Accra Towing Corridor', path: '/service-areas/goaso-to-accra', desc: 'Return transport from Goaso to Accra.' },
  { label: 'Accra to Kenyasi Mining Corridor', path: '/service-areas/accra-to-kenyasi', desc: 'Mining heavy equipment transport and recovery to Kenyasi.' },
  { label: 'Kenyasi to Accra Mining Corridor', path: '/service-areas/kenyasi-to-accra', desc: 'Return equipment transport from Kenyasi to Accra.' },
  { label: 'Accra to Bechem Towing Corridor', path: '/service-areas/accra-to-bechem', desc: 'Vehicle towing between Accra and Bechem.' },
  { label: 'Bechem to Accra Towing Corridor', path: '/service-areas/bechem-to-accra', desc: 'Return transport from Bechem to Accra.' },
  { label: 'Accra to Duayaw Nkwanta Towing', path: '/service-areas/accra-to-duayaw-nkwanta', desc: 'Highway towing between Accra and Duayaw Nkwanta.' },
  { label: 'Duayaw Nkwanta to Accra Towing', path: '/service-areas/duayaw-nkwanta-to-accra', desc: 'Return transport from Duayaw Nkwanta to Accra.' },
  { label: 'Accra to Hwidiem Towing Corridor', path: '/service-areas/accra-to-hwidiem', desc: 'Vehicle transport between Accra and Hwidiem.' },
  { label: 'Hwidiem to Accra Towing Corridor', path: '/service-areas/hwidiem-to-accra', desc: 'Return transport from Hwidiem to Accra.' },
  { label: 'Accra to Mim Towing Corridor', path: '/service-areas/accra-to-mim', desc: 'Timber and vehicle transport between Accra and Mim.' },
  { label: 'Mim to Accra Towing Corridor', path: '/service-areas/mim-to-accra', desc: 'Return transport from Mim to Accra.' },
  { label: 'Accra to Atebubu Towing Corridor', path: '/service-areas/accra-to-atebubu', desc: 'Bono East transport and towing to Atebubu.' },
  { label: 'Atebubu to Accra Towing Corridor', path: '/service-areas/atebubu-to-accra', desc: 'Return transport from Atebubu to Accra.' },
  { label: 'Accra to Yeji Ferry Corridor', path: '/service-areas/accra-to-yeji', desc: 'Volta Lake transit corridor towing and equipment transport to Yeji.' },
  { label: 'Yeji to Accra Ferry Corridor', path: '/service-areas/yeji-to-accra', desc: 'Return transport from Yeji to Accra.' },
  { label: 'Accra to Kwame Danso Towing', path: '/service-areas/accra-to-kwame-danso', desc: 'Agricultural transport to Kwame Danso.' },
  { label: 'Kwame Danso to Accra Towing', path: '/service-areas/kwame-danso-to-accra', desc: 'Return transport from Kwame Danso to Accra.' },
  { label: 'Accra to Prang Towing Corridor', path: '/service-areas/accra-to-prang', desc: 'Intercity vehicle transit to Prang.' },
  { label: 'Prang to Accra Towing Corridor', path: '/service-areas/prang-to-accra', desc: 'Return transport from Prang to Accra.' },

  // Northern, Savanna, North East & Upper Regions
  { label: 'Accra to Tamale Major Hub', path: '/service-areas/accra-to-tamale', desc: 'Northern Ghana main trade line: heavy commercial towing, equipment haulage, and flatbed transport.' },
  { label: 'Tamale to Accra Major Hub', path: '/service-areas/tamale-to-accra', desc: 'Direct return transit and recovery from Northern regional capital Tamale to Accra.' },
  { label: 'Accra to Bolgatanga Major Line', path: '/service-areas/accra-to-bolgatanga', desc: 'Upper East regional line: long-distance heavy vehicle recovery and freight haulage.' },
  { label: 'Bolgatanga to Accra Major Line', path: '/service-areas/bolgatanga-to-accra', desc: 'Return transport from Bolgatanga to Accra.' },
  { label: 'Accra to Wa Major Corridor', path: '/service-areas/accra-to-wa', desc: 'Upper West regional capital line: heavy machinery and passenger vehicle towing.' },
  { label: 'Wa to Accra Major Corridor', path: '/service-areas/wa-to-accra', desc: 'Return transport from Wa to Accra.' },
  { label: 'Accra to Yendi Towing Corridor', path: '/service-areas/accra-to-yendi', desc: 'Eastern corridor vehicle transport and towing to Yendi.' },
  { label: 'Yendi to Accra Towing Corridor', path: '/service-areas/yendi-to-accra', desc: 'Return vehicle transport from Yendi to Accra.' },
  { label: 'Accra to Savelugu Towing Corridor', path: '/service-areas/accra-to-savelugu', desc: 'Northern highway transport connecting Accra and Savelugu.' },
  { label: 'Savelugu to Accra Towing Corridor', path: '/service-areas/savelugu-to-accra', desc: 'Return transport from Savelugu to Accra.' },
  { label: 'Accra to Tolon Towing Corridor', path: '/service-areas/accra-to-tolon', desc: 'Vehicle transport between Accra and Tolon.' },
  { label: 'Tolon to Accra Towing Corridor', path: '/service-areas/tolon-to-accra', desc: 'Return transport from Tolon to Accra.' },
  { label: 'Gushegu to Accra Towing Corridor', path: '/service-areas/gushegu-to-accra', desc: 'Direct transport from Gushegu to Greater Accra.' },
  { label: 'Accra to Karaga Towing Corridor', path: '/service-areas/accra-to-karaga', desc: 'Intercity transport to Karaga.' },
  { label: 'Karaga to Accra Towing Corridor', path: '/service-areas/karaga-to-accra', desc: 'Return transport from Karaga to Accra.' },
  { label: 'Accra to Damongo Savannah Corridor', path: '/service-areas/accra-to-damongo', desc: 'Savannah regional capital transport and towing to Damongo.' },
  { label: 'Damongo to Accra Savannah Corridor', path: '/service-areas/damongo-to-accra', desc: 'Return transport from Damongo to Accra.' },
  { label: 'Accra to Salaga Towing Corridor', path: '/service-areas/accra-to-salaga', desc: 'Savannah transit transport to Salaga.' },
  { label: 'Salaga to Accra Towing Corridor', path: '/service-areas/salaga-to-accra', desc: 'Return transport from Salaga to Accra.' },
  { label: 'Accra to Buipe River Port Hub', path: '/service-areas/accra-to-buipe', desc: 'Inland port freight and industrial equipment towing to Buipe.' },
  { label: 'Buipe to Accra River Port Hub', path: '/service-areas/buipe-to-accra', desc: 'Return transport from Buipe to Accra.' },
  { label: 'Accra to Bole Towing Corridor', path: '/service-areas/accra-to-bole', desc: 'Western Savannah corridor transport and towing to Bole.' },
  { label: 'Accra to Daboya Towing Corridor', path: '/service-areas/accra-to-daboya', desc: 'Transport and towing to Daboya.' },
  { label: 'Daboya to Accra Towing Corridor', path: '/service-areas/daboya-to-accra', desc: 'Return transport from Daboya to Accra.' },
  { label: 'Accra to Nalerigu Regional Hub', path: '/service-areas/accra-to-nalerigu', desc: 'North East regional capital transport to Nalerigu.' },
  { label: 'Nalerigu to Accra Regional Hub', path: '/service-areas/nalerigu-to-accra', desc: 'Return transport from Nalerigu to Accra.' },
  { label: 'Accra to Gambaga Towing Corridor', path: '/service-areas/accra-to-gambaga', desc: 'Long-haul transport to Gambaga.' },
  { label: 'Gambaga to Accra Towing Corridor', path: '/service-areas/gambaga-to-accra', desc: 'Return transport from Gambaga to Accra.' },
  { label: 'Accra to Walewale Highway Corridor', path: '/service-areas/accra-to-walewale', desc: 'Central Northern highway transport to Walewale.' },
  { label: 'Walewale to Accra Highway Corridor', path: '/service-areas/walewale-to-accra', desc: 'Return transport from Walewale to Accra.' },
  { label: 'Accra to Navrongo Towing Corridor', path: '/service-areas/accra-to-navrongo', desc: 'Upper East transport and vehicle recovery to Navrongo.' },
  { label: 'Navrongo to Accra Towing Corridor', path: '/service-areas/navrongo-to-accra', desc: 'Return transport from Navrongo to Accra.' },
  { label: 'Accra to Bawku Border Corridor', path: '/service-areas/accra-to-bawku', desc: 'Long-distance heavy towing and freight transit to Bawku.' },
  { label: 'Bawku to Accra Border Corridor', path: '/service-areas/bawku-to-accra', desc: 'Return transport from Bawku to Accra.' },
  { label: 'Accra to Paga Border Post', path: '/service-areas/accra-to-paga', desc: 'Burkina Faso international border route transport to Paga.' },
  { label: 'Paga to Accra Border Post', path: '/service-areas/paga-to-accra', desc: 'Return transport from Paga border to Accra.' },
  { label: 'Accra to Zebilla Towing Corridor', path: '/service-areas/accra-to-zebilla', desc: 'Upper East transit transport to Zebilla.' },
  { label: 'Zebilla to Accra Towing Corridor', path: '/service-areas/zebilla-to-accra', desc: 'Return transport from Zebilla to Accra.' },
  { label: 'Accra to Sandema Towing Corridor', path: '/service-areas/accra-to-sandema', desc: 'Builsa district transport to Sandema.' },
  { label: 'Sandema to Accra Towing Corridor', path: '/service-areas/sandema-to-accra', desc: 'Return transport from Sandema to Accra.' },
  { label: 'Accra to Fumbisi Towing Corridor', path: '/service-areas/accra-to-fumbisi', desc: 'Agricultural valley transport to Fumbisi.' },
  { label: 'Fumbisi to Accra Towing Corridor', path: '/service-areas/fumbisi-to-accra', desc: 'Return transport from Fumbisi to Accra.' },
  { label: 'Accra to Tumu Towing Corridor', path: '/service-areas/accra-to-tumu', desc: 'Upper West agricultural corridor transport to Tumu.' },
  { label: 'Tumu to Accra Towing Corridor', path: '/service-areas/tumu-to-accra', desc: 'Return transport from Tumu to Accra.' },
  { label: 'Accra to Lawra Towing Corridor', path: '/service-areas/accra-to-lawra', desc: 'Black Volta border transit to Lawra.' },
  { label: 'Lawra to Accra Towing Corridor', path: '/service-areas/lawra-to-accra', desc: 'Return transport from Lawra to Accra.' },
  { label: 'Accra to Jirapa Towing Corridor', path: '/service-areas/accra-to-jirapa', desc: 'Upper West vehicle transport to Jirapa.' },
  { label: 'Jirapa to Accra Towing Corridor', path: '/service-areas/jirapa-to-accra', desc: 'Return transport from Jirapa to Accra.' },
  { label: 'Accra to Nandom Towing Corridor', path: '/service-areas/accra-to-nandom', desc: 'Northern border corridor transport to Nandom.' },
  { label: 'Nandom to Accra Towing Corridor', path: '/service-areas/nandom-to-accra', desc: 'Return transport from Nandom to Accra.' },
  { label: 'Accra to Hamile Border Post', path: '/service-areas/accra-to-hamile', desc: 'Northwestern frontier international transit to Hamile.' },
  { label: 'Hamile to Accra Border Post', path: '/service-areas/hamile-to-accra', desc: 'Return transport from Hamile to Accra.' },

  // Volta & Oti Regions
  { label: 'Accra to Ho Volta Regional Hub', path: '/service-areas/accra-to-ho', desc: 'Volta regional capital express vehicle towing and flatbed transport to Ho.' },
  { label: 'Ho to Accra Volta Regional Hub', path: '/service-areas/ho-to-accra', desc: 'Return vehicle recovery and transit from Ho to Greater Accra.' },
  { label: 'Accra to Hohoe Mountain Corridor', path: '/service-areas/accra-to-hohoe', desc: 'Scenic mountain highway transport and flatbed towing to Hohoe.' },
  { label: 'Hohoe to Accra Mountain Corridor', path: '/service-areas/hohoe-to-accra', desc: 'Return vehicle transport from Hohoe to Accra.' },
  { label: 'Accra to Aflao Border Corridor', path: '/service-areas/accra-to-aflao', desc: 'Major Togo border corridor commercial towing and freight haulage to Aflao.' },
  { label: 'Aflao to Accra Border Corridor', path: '/service-areas/aflao-to-accra', desc: 'International border trade route recovery from Aflao to Accra.' },
  { label: 'Accra to Keta Coastal Corridor', path: '/service-areas/accra-to-keta', desc: 'Coastal lagoon highway towing and flatbed recovery to Keta.' },
  { label: 'Keta to Accra Coastal Corridor', path: '/service-areas/keta-to-accra', desc: 'Return vehicle transport from Keta to Accra.' },
  { label: 'Accra to Sogakope Lower Volta', path: '/service-areas/accra-to-sogakope', desc: 'Lower Volta bridge crossing highway assistance and towing to Sogakope.' },
  { label: 'Sogakope to Accra Lower Volta', path: '/service-areas/sogakope-to-accra', desc: 'Return vehicle recovery and transport from Sogakope to Accra.' },
  { label: 'Accra to Dambai Oti Regional Hub', path: '/service-areas/accra-to-dambai', desc: 'Oti regional capital transport and ferry crossing logistics to Dambai.' },
  { label: 'Dambai to Accra Oti Regional Hub', path: '/service-areas/dambai-to-accra', desc: 'Return vehicle transit from Dambai to Accra.' },
  { label: 'Accra to Nkwanta Towing Corridor', path: '/service-areas/accra-to-nkwanta', desc: 'Eastern corridor long-distance transport to Nkwanta.' },
  { label: 'Nkwanta to Accra Towing Corridor', path: '/service-areas/nkwanta-to-accra', desc: 'Return transport from Nkwanta to Accra.' },
  { label: 'Accra to Nkwanta South Towing', path: '/service-areas/accra-to-nkwanta-south', desc: 'Vehicle towing and recovery between Accra and Nkwanta South.' },
  { label: 'Nkwanta South to Accra Towing', path: '/service-areas/nkwanta-south-to-accra', desc: 'Return transport from Nkwanta South to Accra.' },
  { label: 'Accra to Jasikan Towing Corridor', path: '/service-areas/accra-to-jasikan', desc: 'Oti highway vehicle transit and towing to Jasikan.' },
  { label: 'Jasikan to Accra Towing Corridor', path: '/service-areas/jasikan-to-accra', desc: 'Return transport from Jasikan to Accra.' },
  { label: 'Accra to Kadjebi Towing Corridor', path: '/service-areas/accra-to-kadjebi', desc: 'Eastern frontier transport and towing to Kadjebi.' },
  { label: 'Kadjebi to Accra Towing Corridor', path: '/service-areas/kadjebi-to-accra', desc: 'Return transport from Kadjebi to Accra.' },
  { label: 'Accra to Kete Krachi Lakeside', path: '/service-areas/accra-to-kete-krachi', desc: 'Volta Lake lakeside transport and towing to Kete Krachi.' },
  { label: 'Kete Krachi to Accra Lakeside', path: '/service-areas/kete-krachi-to-accra', desc: 'Return transport from Kete Krachi to Accra.' },
  { label: 'Accra to Assin Fosu Towing', path: '/service-areas/accra-to-assin-fosu', desc: 'Central-Ashanti intercity link towing to Assin Fosu.' },
  { label: 'Assin Fosu to Accra Towing', path: '/service-areas/assin-fosu-to-accra', desc: 'Return transport from Assin Fosu to Accra.' },
  { label: 'Accra to Dunkwa on Offin Mining', path: '/service-areas/accra-to-dunkwa-on-offin', desc: 'Gold mining and agricultural basin transport to Dunkwa on Offin.' },
  { label: 'Dunkwa on Offin to Accra Mining', path: '/service-areas/dunkwa-on-offin-to-accra', desc: 'Return transport from Dunkwa on Offin to Accra.' }
];

export const SITEMAP_CATEGORIES: SitemapCategory[] = [
  {
    id: 'main',
    code: 'A',
    categoryNumber: 1,
    title: 'Main & Company Pages',
    description: 'Core navigational pages, booking forms, company info, and 24/7 emergency dispatch centers.',
    iconName: 'Home',
    links: MAIN_PAGES
  },
  {
    id: 'towing',
    code: 'B',
    categoryNumber: 2,
    title: 'Emergency Towing & Roadside Recovery',
    description: '24/7 rapid dispatch, flatbed transport, winch extractions, and heavy commercial towing solutions.',
    iconName: 'Truck',
    links: TOWING_SERVICES
  },
  {
    id: 'haulage',
    code: 'C',
    categoryNumber: 3,
    title: 'Haulage & Heavy Equipment Transport',
    description: 'Nationwide freight transport, heavy construction machinery, containers, and Tema port logistics.',
    iconName: 'Container',
    badge: 'Logistics',
    links: HAULAGE_SERVICES
  },
  {
    id: 'services',
    code: 'D',
    categoryNumber: 4,
    title: 'Automotive Repairs & Fleet Solutions',
    description: 'Certified mechanics, computerized diagnostics, collision body repairs, spray painting, and corporate fleet plans.',
    iconName: 'Wrench',
    links: AUTO_SERVICES
  },
  {
    id: 'sales',
    code: 'E',
    categoryNumber: 5,
    title: 'Vehicle Sales Inventory',
    description: 'Browse inspected new and foreign-used sedans, SUVs, luxury cars, and 4x4 pickup trucks for sale.',
    iconName: 'Car',
    links: VEHICLE_SALES
  },
  {
    id: 'rental',
    code: 'F',
    categoryNumber: 6,
    title: 'Car Rental & Commercial Fleet',
    description: 'Flexible daily, weekly, and monthly vehicle rentals ranging from economy cars to luxury chauffeured VIP vehicles.',
    iconName: 'Key',
    links: CAR_RENTALS
  },
  {
    id: 'parts',
    code: 'G',
    categoryNumber: 7,
    title: 'Auto Parts & Battery Store',
    description: 'Genuine OEM replacement components, heavy-duty batteries, synthetic oils, brake pads, and accessories.',
    iconName: 'Battery',
    links: AUTO_PARTS
  },
  {
    id: 'blog',
    code: 'H',
    categoryNumber: 8,
    title: 'Blog & Automotive Guides',
    description: 'Helpful driver safety guides, vehicle maintenance checklists, emergency breakdown advice, and news.',
    iconName: 'BookOpen',
    links: BLOG_POSTS_LINKS
  },
  {
    id: 'legal',
    code: 'I',
    categoryNumber: 9,
    title: 'Legal, Terms & Company Policies',
    description: 'Our customer terms, transit insurance rules, cancellation policies, pricing transparency, and accessibility.',
    iconName: 'ShieldCheck',
    links: LEGAL_POLICIES
  },
  {
    id: 'local-areas',
    code: 'J',
    categoryNumber: 10,
    title: 'Greater Accra Local Service Areas',
    description: 'Dedicated 24/7 emergency towing and roadside coverage across 35+ neighborhoods and districts.',
    iconName: 'MapPin',
    badge: '35 Locations',
    links: GREATER_ACCRA_AREAS
  },
  {
    id: 'corridors',
    code: 'K',
    categoryNumber: 11,
    title: 'Intercity Towing & Haulage Corridors',
    description: 'Nationwide long-distance towing, recovery, and heavy equipment transport connecting all 16 regions of Ghana.',
    iconName: 'Navigation',
    badge: 'Nationwide',
    links: INTERCITY_CORRIDORS
  }
];

export interface NumberedSitemapEntry {
  globalNumber: number; // 1 to Total (e.g. 1 to 338)
  categoryCode: string; // 'A', 'B', etc.
  categoryNumber: number; // 1, 2, etc.
  categoryTitle: string;
  categoryItemId: string; // e.g. "A.1", "A.2", "K.15"
  categoryIndex: number; // 1-indexed position in category
  label: string;
  path: string;
  desc?: string;
  badge?: string;
}

export function getNumberedSitemapEntries(): NumberedSitemapEntry[] {
  const result: NumberedSitemapEntry[] = [];
  let globalCount = 0;

  for (const cat of SITEMAP_CATEGORIES) {
    cat.links.forEach((link, idx) => {
      globalCount++;
      result.push({
        globalNumber: globalCount,
        categoryCode: cat.code,
        categoryNumber: cat.categoryNumber,
        categoryTitle: cat.title,
        categoryItemId: `${cat.code}.${idx + 1}`,
        categoryIndex: idx + 1,
        label: link.label,
        path: link.path,
        desc: link.desc,
        badge: link.badge
      });
    });
  }

  return result;
}

export function getAllSitemapLinks(): SitemapLink[] {
  const seen = new Set<string>();
  const all: SitemapLink[] = [];
  
  for (const cat of SITEMAP_CATEGORIES) {
    for (const link of cat.links) {
      if (!seen.has(link.path + link.label)) {
        seen.add(link.path + link.label);
        all.push(link);
      }
    }
  }
  return all;
}

export function getTotalLinkCount(): number {
  return SITEMAP_CATEGORIES.reduce((acc, cat) => acc + cat.links.length, 0);
}
