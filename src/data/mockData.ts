import { Product, Article, FAQItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'eco-pest-guard',
    sku: 'US-ECO-450',
    name: 'Eco Pest Guard™ – All-in-One Cockroach & Pest Eradication Spray (450ml)',
    bengaliSubtitle: 'তেলাপোকা নির্মূলে ১০০% কার্যকরী ও পরিবেশবান্ধব সমাধান • Safe Instant Neuro-Block',
    category: 'pest',
    categoryLabel: 'Pest Control & Prevention',
    badge: 'BEST SELLER',
    badgeType: 'bestseller',
    rating: 4.9,
    reviewCount: 12480,
    soldCount: '8,500+ Bottles Sold nationwide',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
      'https://lh3.googleusercontent.com/aida/AEtjO1XVMNtlUMEjdw2KG6wtEnwMbsDNqFOthrOFKVOPCcf7wTDMXrMUDCmaIbG1Eqqdb8JbONNT-84LvyFaNtS8FlSLp20nifqqRaFZ66B-W5FFfVFdfIocwZAsxsSZi_lxp7SsPP6VJCwyEKwf3Iajg4nQlU0u3u43EmjYtcgTUxbYrTqMJFbzqaGwqmNQLADSkbRzXjmxkFppggjbgaqz2iqFoYZeG_3C6geAH_G7hFE4hNnDmNqF7KdFFOc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw',
      'https://lh3.googleusercontent.com/aida/AEtjO1WiuM_DGR9K7VpF8dcBl6ERZ72dIYIalZ_MpKkDvP-pFMRVZSi68K8_GYNYnZ3-zFLSzpBjZz22EPCMzpnbaCNbQOgZv_riPsmZXBAtPYgYvtKW69tsK0VBdtTWS9NAJTGKdNL4BJSdURqBTtosOaHrvCpuFjYdKWaNbtXNW2rrPGOe3wfSZ5UY4hu-Soxh2p0Ww2C_9ZE9cnQDa2CVpBEhqb1DnszHrmnXykmbtPY9dz1z1luCrZ7H1hPE'
    ],
    price: 650,
    originalPrice: 850,
    discountPercent: 24,
    couponAmount: 100,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Rosemary & cedarwood formula disrupts insect neuro-receptors without synthetic chemicals. Neutralizes cockroaches, ants, bedbugs & termites within 48 hours on contact.',
    bulletFeatures: [
      '100% Lethal Action: Neutralizes cockroaches, ants, bedbugs & termites within 48 hours on contact.',
      'Odorless & Plant-Based: No pungent chemical fumes; completely safe for kids, pets & food prep areas once applied.',
      'Ready-to-Spray & Easy to Use: Ergonomic trigger spray bottle, no messy mixing or dilution needed.',
      'Long-Lasting Barrier Protection: Prevents insect re-infestation and egg colony hatching for up to 90 days.',
      'Cash on Delivery & Guarantee: Nationwide COD across Bangladesh with 100% Money-Back Guarantee ("কাজ না করলে টাকা ফেরত").'
    ],
    targetProblems: ['Cockroaches', 'Ants', 'Bedbugs'],
    formulationType: 'Botanical Spray (Ready-to-Use)',
    variants: [
      {
        id: 'single-450',
        name: 'Single Pack (450ml)',
        volume: '450ml (1 Bottle)',
        price: 650,
        originalPrice: 850,
        savingsPercent: 24
      },
      {
        id: 'combo-2pack',
        name: 'Family Combo (2x Bottles)',
        volume: '450ml x 2 Bottles (900ml Total)',
        price: 1090,
        originalPrice: 1500,
        savingsPercent: 28,
        popular: true
      },
      {
        id: 'triple-3pack',
        name: 'Triple Shield (3x Bottles)',
        volume: '450ml x 3 Bottles (1,350ml Total)',
        price: 1590,
        originalPrice: 2250,
        savingsPercent: 30
      }
    ]
  },
  {
    id: 'eko-kitchen-degreaser',
    sku: 'US-DEG-500',
    name: 'EKO Kitchen Degreaser & Cleanser (500ml)',
    bengaliSubtitle: 'কিচেন চিমনি ও চুলার পোড়া তেল দূরকারী • Plant-Based Grease Breaker',
    category: 'kitchen',
    categoryLabel: 'Kitchen & Heavy Degreasing',
    badge: 'BIO-ENZYMATIC',
    badgeType: 'bio',
    rating: 4.8,
    reviewCount: 4120,
    soldCount: '4,200+ Bottles Sold',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
      'https://lh3.googleusercontent.com/aida/AEtjO1XVMNtlUMEjdw2KG6wtEnwMbsDNqFOthrOFKVOPCcf7wTDMXrMUDCmaIbG1Eqqdb8JbONNT-84LvyFaNtS8FlSLp20nifqqRaFZ66B-W5FFfVFdfIocwZAsxsSZi_lxp7SsPP6VJCwyEKwf3Iajg4nQlU0u3u43EmjYtcgTUxbYrTqMJFbzqaGwqmNQLADSkbRzXjmxkFppggjbgaqz2iqFoYZeG_3C6geAH_G7hFE4hNnDmNqF7KdFFOc'
    ],
    price: 590,
    originalPrice: 750,
    discountPercent: 21,
    couponAmount: 80,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Plant-derived bio-solvents dissolve heavy burnt oil and chimney grease in under 60 seconds without caustic sodium damage.',
    bulletFeatures: [
      'Rapid 60-Second Emulsion: Dissolves grease, carbonized oil and stove residue instantly.',
      'Zero Caustic Fumes: Safe for home kitchens, marble counters, and stainless steel chimneys.',
      'Removes Roach Pheromones: Wipes out insect scent trails that attract night crawling colonies.'
    ],
    targetProblems: ['Burnt Oil & Grease'],
    formulationType: 'Bio-Enzymatic Degreaser',
    variants: [
      {
        id: 'degreaser-single',
        name: '500ml Spray Bottle',
        volume: '500ml',
        price: 590,
        originalPrice: 750,
        savingsPercent: 21
      },
      {
        id: 'degreaser-refill',
        name: '1000ml Refill Pack',
        volume: '1000ml',
        price: 990,
        originalPrice: 1350,
        savingsPercent: 27,
        popular: true
      }
    ]
  },
  {
    id: 'eco-leather-shield',
    sku: 'US-LTH-500',
    name: 'Eco Leather Shield & Conditioner (500ml)',
    bengaliSubtitle: 'লেদার সোফা ও গাড়ির সিটের দীর্ঘস্থায়ী সুরক্ষা • Anti-Mite Restorative',
    category: 'leather',
    categoryLabel: 'Leather & Furniture Shield',
    badge: 'FURNITURE CARE',
    badgeType: 'furniture',
    rating: 4.9,
    reviewCount: 3280,
    soldCount: '3,100+ Bottles Sold',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw'
    ],
    price: 720,
    originalPrice: 900,
    discountPercent: 20,
    couponAmount: 80,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Botanical conditioning wax creates an anti-mite barrier and revives rich luster on real leather sofas, upholstery and car interiors.',
    bulletFeatures: [
      'Dust Mite Barrier: Repels microscopic mites and allergen colonies nested in sofa seams.',
      'Carnauba & Jojoba Wax: Hydrates dry leather fibers to prevent cracking and peeling.',
      'Non-Sticky Satin Finish: Zero greasy residue, completely safe for children & pets.'
    ],
    targetProblems: ['Leather Sofas', 'Dust Mites'],
    formulationType: 'Plant Wax Conditioning Barrier',
    variants: [
      {
        id: 'leather-single',
        name: '500ml Applicator Bottle',
        volume: '500ml',
        price: 720,
        originalPrice: 900,
        savingsPercent: 20
      }
    ]
  },
  {
    id: 'termite-wood-shield',
    sku: 'US-TRM-250',
    name: 'Termite & Wood Bio-Shield Injector (250ml)',
    bengaliSubtitle: 'কাঠের ঘুণপোকা ও উইপোকা ধ্বংসকারী ইনজেক্টর • Deep Subterranean Barrier',
    category: 'wood',
    categoryLabel: 'Pest Control & Prevention',
    badge: 'WOOD CARE',
    badgeType: 'wood',
    rating: 4.8,
    reviewCount: 1920,
    soldCount: '2,000+ Units Sold',
    featuredImage: 'https://lh3.googleusercontent.com/aida/AEtjO1WiuM_DGR9K7VpF8dcBl6ERZ72dIYIalZ_MpKkDvP-pFMRVZSi68K8_GYNYnZ3-zFLSzpBjZz22EPCMzpnbaCNbQOgZv_riPsmZXBAtPYgYvtKW69tsK0VBdtTWS9NAJTGKdNL4BJSdURqBTtosOaHrvCpuFjYdKWaNbtXNW2rrPGOe3wfSZ5UY4hu-Soxh2p0Ww2C_9ZE9cnQDa2CVpBEhqb1DnszHrmnXykmbtPY9dz1z1luCrZ7H1hPE',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida/AEtjO1WiuM_DGR9K7VpF8dcBl6ERZ72dIYIalZ_MpKkDvP-pFMRVZSi68K8_GYNYnZ3-zFLSzpBjZz22EPCMzpnbaCNbQOgZv_riPsmZXBAtPYgYvtKW69tsK0VBdtTWS9NAJTGKdNL4BJSdURqBTtosOaHrvCpuFjYdKWaNbtXNW2rrPGOe3wfSZ5UY4hu-Soxh2p0Ww2C_9ZE9cnQDa2CVpBEhqb1DnszHrmnXykmbtPY9dz1z1luCrZ7H1hPE'
    ],
    price: 850,
    originalPrice: 1150,
    discountPercent: 26,
    couponAmount: 100,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Bio-active terpene oil reaches internal colony channels without damaging fine woodwork or emitting harsh petroleum smells.',
    bulletFeatures: [
      'Deep Needle Applicator: Penetrates pinhole entry points directly into wood nests.',
      'Eliminates Termite Queens: Prevents seasonal swarming and hollow timber degradation.',
      'Residual 24-Month Action: Binds to cellulose fibers creating an unpalatable barrier.'
    ],
    targetProblems: ['Termites & Wood'],
    formulationType: 'Botanical Spray (Ready-to-Use)',
    variants: [
      {
        id: 'termite-single',
        name: '250ml Precision Syringe Injector',
        volume: '250ml',
        price: 850,
        originalPrice: 1150,
        savingsPercent: 26
      }
    ]
  },
  {
    id: 'eco-pest-family-double',
    sku: 'US-DBL-900',
    name: 'Eco Pest Guard™ Family Double Pack (900ml Total)',
    bengaliSubtitle: 'বড় অ্যাপার্টমেন্ট ও রেস্টুরেন্টের জন্য সাশ্রয়ী • Continuous 90-Day Defense',
    category: 'combo',
    categoryLabel: 'Combos & Bundles',
    badge: 'DOUBLE PACK',
    badgeType: 'combo',
    rating: 4.9,
    reviewCount: 6300,
    soldCount: '5,000+ Packs Delivered',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg'
    ],
    price: 1090,
    originalPrice: 1500,
    discountPercent: 28,
    couponAmount: 100,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Two 450ml bottles with ultra-fine mist nozzles for baseline multi-room coverage. Continuous 90-day perimeter shield for medium to large apartments.',
    bulletFeatures: [
      'Dual 450ml Trigger Sprayers: Treat kitchen and bedrooms simultaneously.',
      'Save ৳৪১০ Instantly: Best value pricing for full domestic coverage.',
      'Free Nationwide Express COD: Inspect both bottles before paying the rider.'
    ],
    targetProblems: ['Cockroaches', 'Ants'],
    formulationType: 'Multi-Item Sanitation Combo',
    variants: [
      {
        id: 'family-pack-var',
        name: 'Family Double Pack (2x 450ml)',
        volume: '900ml Total',
        price: 1090,
        originalPrice: 1500,
        savingsPercent: 28
      }
    ]
  },
  {
    id: 'complete-home-trio',
    sku: 'US-TRIO-PRO',
    name: 'Complete Home Sanitation Trio (Pest + Kitchen + Leather)',
    bengaliSubtitle: 'কীটপতঙ্গ, কিচেন তেল ও আসবাবের সমন্বিত প্যাক • সম্পূর্ণ ঘর সুরক্ষা কম্বো (৩টি বোতল)',
    category: 'combo',
    categoryLabel: 'Combos & Bundles',
    badge: 'COMBO BUNDLE',
    badgeType: 'combo',
    rating: 5.0,
    reviewCount: 1850,
    soldCount: '4,500+ Homes Protected',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw'
    ],
    price: 1650,
    originalPrice: 2350,
    discountPercent: 30,
    couponAmount: 150,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: '3 Full size units: Pest Guard (450ml) + Kitchen Cleanser (500ml) + Leather Shield (500ml) with Free Microfiber Cloth & 2x Nozzles.',
    bulletFeatures: [
      'Complete 3-in-1 Master Protection Arsenal: Kitchen, Furniture, and Living spaces.',
      'Save ৳৭০০ with Master Bundle: Standard value ৳২,৩৫০, bundle price ৳১,৬৫০.',
      'FREE High-Density Microfiber Towel & 2x Pro-Trigger Spray Nozzles included.'
    ],
    targetProblems: ['Cockroaches', 'Burnt Oil & Grease', 'Leather Sofas'],
    formulationType: 'Multi-Item Sanitation Combo',
    variants: [
      {
        id: 'trio-master-var',
        name: 'Complete Home Sanitation Trio',
        volume: '3 Full Size Bottles (1,450ml Total)',
        price: 1650,
        originalPrice: 2350,
        savingsPercent: 30
      }
    ]
  },
  {
    id: 'eco-perimeter-concentrate',
    sku: 'US-CON-1000',
    name: 'UltraShield Bio-Perimeter Concentrate 32x (1 Liter / 1 Gallon)',
    bengaliSubtitle: 'হাই-কনসেন্ট্রেট বাউন্ডারি স্প্রে • ৩২ গুণ ডাইলুশন সাশ্রয়ী ফর্মুলা',
    category: 'concentrates',
    categoryLabel: 'Eco-Shield Concentrates',
    badge: 'HIGH YIELD',
    badgeType: 'bio',
    rating: 4.9,
    reviewCount: 2450,
    soldCount: '1,800+ Gallons Deployed',
    featuredImage: 'https://lh3.googleusercontent.com/aida/AEtjO1XVMNtlUMEjdw2KG6wtEnwMbsDNqFOthrOFKVOPCcf7wTDMXrMUDCmaIbG1Eqqdb8JbONNT-84LvyFaNtS8FlSLp20nifqqRaFZ66B-W5FFfVFdfIocwZAsxsSZi_lxp7SsPP6VJCwyEKwf3Iajg4nQlU0u3u43EmjYtcgTUxbYrTqMJFbzqaGwqmNQLADSkbRzXjmxkFppggjbgaqz2iqFoYZeG_3C6geAH_G7hFE4hNnDmNqF7KdFFOc',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida/AEtjO1XVMNtlUMEjdw2KG6wtEnwMbsDNqFOthrOFKVOPCcf7wTDMXrMUDCmaIbG1Eqqdb8JbONNT-84LvyFaNtS8FlSLp20nifqqRaFZ66B-W5FFfVFdfIocwZAsxsSZi_lxp7SsPP6VJCwyEKwf3Iajg4nQlU0u3u43EmjYtcgTUxbYrTqMJFbzqaGwqmNQLADSkbRzXjmxkFppggjbgaqz2iqFoYZeG_3C6geAH_G7hFE4hNnDmNqF7KdFFOc'
    ],
    price: 1450,
    originalPrice: 1950,
    discountPercent: 25,
    couponAmount: 150,
    stockStatus: 'In Stock • Ready for Same-Day Dispatch',
    dispatchInfo: 'Home Delivery: Dhaka ৳৬০ | Outside Dhaka ৳১২০',
    description: 'Ultra-concentrated botanical formula yields up to 32 liters of perimeter and garden insect barrier. Ideal for large homes, gardens, warehouses and commercial kitchens.',
    bulletFeatures: [
      '32x Dilution Ratio: 1 Liter bottle makes 32 Liters of ready-to-spray perimeter defense.',
      'Rain-Resistant Polymer: Retains efficacy on exterior concrete, soil borders, and walls for 6 months.',
      'Massive Cost Savings: Cuts commercial pest control costs by over 70% with non-toxic safety.'
    ],
    targetProblems: ['Ticks & Fleas', 'Mosquitoes', 'Outdoor Ants'],
    formulationType: 'High-Dilution Botanical Concentrate',
    variants: [
      {
        id: 'con-1l',
        name: '1 Liter Pro Concentrate (Yields 32L)',
        volume: '1 Liter',
        price: 1450,
        originalPrice: 1950,
        savingsPercent: 25
      },
      {
        id: 'con-gallon',
        name: '1 Gallon Master Jug (Yields 120L)',
        volume: '3.78 Liters (1 Gal)',
        price: 3850,
        originalPrice: 5200,
        savingsPercent: 26,
        popular: true
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'How to Permanently Eliminate Home Pests in 48 Hours',
    bengaliTitle: '৪৮ ঘণ্টায় তেলাপোকা ও ক্ষতিকর পোকা স্থায়ীভাবে দূর করার বৈজ্ঞানিক উপায়',
    category: 'Bug Prevention & Elimination',
    categorySlug: 'pest',
    readTime: '6 min read',
    date: 'Published 2 days ago',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB36HfOqS6SxdxQV5pnuFiNJOgCkJ_0qvBSbF2b2ZgkA8j73gZWjhJtwZzf2yTaqkXelbOp3UwEGLSSAAphWLgy7mmLcYRkopKWq8fFwSsP9eNgKcyvVvLDq3sal1JaRNYd58O-wHuWPBvl2-JZohNxj3W6XYAePOioig8UPLyKAd6SeutuiWQK767uVjQObN0wC7ckF4jMN57YzTlCtq1WsJJJXRuGo_2xijVDcyIgtKF4LvUlJ1g4wg',
    excerpt: 'Synthetic aerosol sprays scatter pest nests into baseboards and kitchen cabinetry. Discover how botanical octopamine receptor antagonists disrupt roach and ant nervous systems instantly—without emitting dangerous organophosphate fumes.',
    author: {
      name: 'Dr. A. Rahman, Ph.D.',
      role: 'Senior Bio-Safety Specialist, UltraShield Clinical Labs • Dhaka',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'
    },
    productIdsUsed: ['eco-pest-guard', 'eko-kitchen-degreaser', 'eco-leather-shield'],
    keyHighlights: [
      'Perimeter Target Mapping: Pinpoint sub-counter pipe junctions and hidden void nests.',
      '100% Plant-Safe Neuro-Blockers: Targets octopamine receptors unique to cold-blooded insects.',
      '90-Day Natural Barrier: Micro-encapsulated cedarwood oil prevents seasonal recolonization.'
    ],
    contentPhases: [
      {
        phaseNumber: '01',
        title: 'Perimeter Scout & Crevice Infiltration',
        duration: 'Hour 00 to Hour 04',
        description: 'Remove kickplates under sink plumbing and open under-cabinet storage. Inspect the motor housing under the refrigerator—this is the primary thermal incubation zone for German cockroaches. Clear dry breadcrumbs and residual cooking fats that neutralize bio-barrier scents.',
        keyCheck: 'Target hotspots: Sink drains, refrigerator base coils, microwave base feet.'
      },
      {
        phaseNumber: '02',
        title: 'High-Velocity Bio-Stream Application',
        duration: 'Hour 04 to Hour 24',
        description: 'Twist nozzle to the STREAM setting. Apply Eco Pest Guard directly into cracks, expansion joints, and corner trims. Wet the surface until a subtle herbal sheen is visible. For crawling pests, this creates an inescapable bio-zone where cuticle waxes dissolve within 180 seconds.',
        keyCheck: 'Safe around kitchen counters and food storage; zero organophosphates.'
      },
      {
        phaseNumber: '03',
        title: 'The 90-Day Bio-Barrier Curing',
        duration: 'Hour 24 to Hour 48',
        description: 'Do not wipe down applied edges with hot soapy water for 48 hours. As the botanical carrier evaporates, the micro-encapsulated cedar, thyme, and mint resins anchor to the porous masonry and wood, creating an active barrier that repels scouts for up to 90 continuous days.',
        keyCheck: 'Complete horizon-barrier hits unseen reach nymphs deep inside drywall.'
      }
    ]
  },
  {
    id: 'art-2',
    title: 'Grease vs. Bio-Enzymatic Solvents: Why Bleach Damages Granite',
    bengaliTitle: 'গ্রিজ বনাম বায়ো-এনজাইম: ব্লিচ কেন কিচেন মার্বেল নষ্ট করে',
    category: 'Kitchen Sanitization',
    categorySlug: 'kitchen',
    readTime: '5 min read',
    date: 'Published 4 days ago',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbbNkiuSVnhOhAYYIu_OSEiqvIq2RMGaw-tKvPOddRruTTSjYbUSJQLaUKi_QMVoEF50W-MjFv_KpnALO9GDEChlZAbK7ahuHXWz0WKzD008w8IGQXQAsibWtRFoHv1vbXaZUD_WzXMG6OP7EcFLzy1b7tTfem8eJg0r8e7xC0ThBc1ncdTQAFIO1x6fUwkG-3NwHb5-xYSaQPdWv4MbGCqALeJ_58pNzkHS3HFeerVjP8Zfz6BPag',
    excerpt: 'Caustic bleach solutions etch natural stone resins and leave microscopic abrasions that trap food odors. Learn how plant enzymes dissolve burnt polymer oils safely.',
    author: {
      name: 'Sabina Yasmin',
      role: 'Surface Materials Scientist',
      avatar: 'https://images.unsplash.com/photo-1594824813576-a059d04efb9a?auto=format&fit=crop&w=200&q=80'
    },
    productIdsUsed: ['eko-kitchen-degreaser'],
    keyHighlights: [
      'Neutral pH Preservation: Protects expensive quartz, granite and marble resins.',
      'Natural Lipase Enzymes: Breaks down oil molecules into water-soluble peptides.',
      'Eliminates Pest Pheromones: Deprives ants and roaches of chemical guidance trails.'
    ]
  },
  {
    id: 'art-3',
    title: 'Is Your Sofa Harboring Dust Mites? The 15-Minute Protocol',
    bengaliTitle: 'সোফার ডাস্ট মাইট দূর করার ১৫ মিনিটের ঘরোয়া নিয়ম',
    category: 'Leather & Surface Armor',
    categorySlug: 'leather',
    readTime: '4 min read',
    date: 'Published 1 week ago',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU0scUqlQeohPr9cooHA8IkU_ZBzh5Wajv_Aa9UDNL9jon9H4iHh3bk-hYRW2f42c5uO18mwXJfYW-A6ow3UGfPzKVkgQWL-ndkZfVRcapWBR6t69e3UcwxRcyPibxglvOBlJ8S-wXr4EZgyKgPwBRcSA7NvILr4FRb8Lu8pZ51tQiXyAzoGzA7XQ1Yy3weOnw0WDM6KmuWl55ezxBuo49KycmEunsnzrm8rumG-udsP6MLJlifztYxw',
    excerpt: 'Eliminate microscopic allergens and restore fine leather pores using non-greasy organic lipid barriers that repel dust mites, bedbugs, and humidity mold.',
    author: {
      name: 'T. Chowdhury',
      role: 'Upholstery Preservation Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    productIdsUsed: ['eco-leather-shield'],
    keyHighlights: [
      'Repels Seam Mites: Prevents microscopic colony nesting in sofa crevices.',
      'Restores Natural Oils: Prevents peeling and stiffness in humid climate.',
      'Zero Greasy Gloss: Leaves a clean, breathable satin finish.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is Eco Pest Guard truly 100% safe around infants, puppies, and indoor cats?',
    answer: 'Yes. Unlike industrial extermination chemicals, our formulation is crafted around targeted botanical active matrices that specifically disrupt octopamine receptors present only in cold-blooded invertebrates. Mammals, humans, dogs, and cats completely lack these receptors, meaning the formula acts simply as an inert pleasant herbal fragrance with zero carcinogenic risk.',
    category: 'pet-safety',
    highlightPoints: [
      'Zero Harsh Synthetics: Formulation contains zero organophosphates, synthetic pyrethroids, or toxic aerosol propellant gases.',
      'Mammalian Safety Profile: Uses target-specific botanical extracts that paralyze insect octopamine receptors (which mammals, pets, and children do not possess).',
      'Food-Prep Certified: Odorless and non-staining on marble dining tables, kitchen prep surfaces, pantry drawers, and baby bedding fabrics.'
    ]
  },
  {
    id: 'faq-2',
    question: 'How does Cash on Delivery (COD) work and what is the delivery timeframe?',
    answer: 'We provide 100% Risk-Free Open-Box Cash on Delivery across all 64 districts in Bangladesh. You pay ৳০ advance! When the delivery rider arrives, you have the full right to inspect the outer seal and check the tamper-proof security hologram before handing over cash.',
    category: 'shipping',
    highlightPoints: [
      'Inside Dhaka: 1-2 Days Guaranteed delivery (Courier charge ৳৬০).',
      'Outside Dhaka & All 64 Districts: 2-3 Days via SteadFast / RedX Express (Courier charge ৳১০০).',
      'Open-Box Inspection: Rider will wait while you inspect every bottle, seal, and nozzle.'
    ]
  },
  {
    id: 'faq-3',
    question: 'How long does the 90-day bio-barrier actually last on kitchen tiles and cabinets?',
    answer: 'Once applied and allowed to dry for 15 minutes, our micro-encapsulated cedarwood and thyme botanical oils bind directly to porous tile grout, wood grain, and baseboards. The repellent scent envelope remains active for up to 90 days indoors without rinsing off during normal damp mopping.',
    category: 'usage',
    highlightPoints: [
      'Micro-encapsulated formula resists air oxidation.',
      'Repels newly hatched nymphs attempting to re-enter through plumbing gaps.',
      'Reapply lightly every 3 months for continuous multi-year protection.'
    ]
  },
  {
    id: 'faq-4',
    question: 'What is your 100% Satisfaction & Money-Back Policy if pests persist?',
    answer: 'We stand behind our laboratory results with an unconditional 30-day money-back guarantee ("কাজ না করলে টাকা ফেরত"). If applied according to our 3-phase protocol and you still see active insect breeding, simply contact our helpline via call or WhatsApp for an instant 100% refund via bKash/Nagad.',
    category: 'guarantee',
    highlightPoints: [
      '30-day unconditional claim window.',
      'Instant refund directly to your bKash or Nagad mobile wallet.',
      'No complicated return shipping paperwork required.'
    ]
  },
  {
    id: 'faq-5',
    question: 'Can I use the Kitchen Degreaser directly after applying the Eco Pest Guard spray?',
    answer: 'Yes! In fact, we recommend using the EKO Kitchen Degreaser first to remove stubborn cooking oils and insect pheromone trails, then finishing with Eco Pest Guard along cabinet baseboards and motor coils for maximum 90-day knockdown efficacy.',
    category: 'usage',
    highlightPoints: [
      'Wipes away grease that traps food particles.',
      'Leaves a sterilized surface for maximum botanical adhesion.'
    ]
  }
];
