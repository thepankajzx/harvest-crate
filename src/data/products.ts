import { asset } from "../lib/assets";

export interface ProductBenefit {
  title: string;
  desc: string;
}

export interface ProductHarvest {
  altitude: string;
  harvestMethod: string;
  chemicalFree: string;
  dispatchTime: string;
  season: string;
}

export interface TasteProfile {
  sweetness: number;
  crispness: number;
  juiciness: number;
  tanginess: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  rating: number;
  reviews: number;
  price: {
    "5 Kg": number;
    "10 Kg": number;
  };
  originalPrice: {
    "5 Kg": number;
    "10 Kg": number;
  };
  image: string;
  aboutFruit: string;
  tasteProfile: TasteProfile;
  benefits: ProductBenefit[];
  harvestProcess: ProductHarvest;
  bestWaysToEat: string[];
}

export const products: Product[] = [
  {
    id: "p4",
    title: "Tart Granny Smith",
    subtitle: "Tangy & Audible Crunch",
    description: "Bold, tart & crisp. Low sugar, diabetic-friendly, perfect for baking & detox.",
    badge: "Low Sugar · Super Crisp",
    rating: 5,
    reviews: 38,
    price: {
      "5 Kg": 1799,
      "10 Kg": 3399
    },
    originalPrice: {
      "5 Kg": 2000,
      "10 Kg": 4000
    },
    image: asset("IMAGES/apple_green_fresh.png"),
    aboutFruit: "Our Tart Granny Smith is a refreshing contrast to sweeter cultivars. Its glossy, vivid emerald-green skin protects firm, snowy-white flesh that carries an invigorating zesty tang. Known for having one of the lowest glycemic indexes among tree fruits, it is the top choice for fitness enthusiasts and diabetic-conscious diets.",
    tasteProfile: {
      sweetness: 2,
      crispness: 5,
      juiciness: 4,
      tanginess: 5,
    },
    benefits: [
      {
        title: "Diabetic & Keto Friendly",
        desc: "Significantly lower natural sugar content with high fiber makes it safe for blood sugar management."
      },
      {
        title: "Metabolic Activation",
        desc: "High natural malic acid levels stimulate liver detoxification pathways and assist calorie burning."
      },
      {
        title: "Immunity & Cellular Defense",
        desc: "Abundant procyanidins and Vitamin C fortify white blood cell function against seasonal ailments."
      },
      {
        title: "Digestive Regularity",
        desc: "High density of non-digestible dietary fiber keeps your colon clean and metabolic transit optimal."
      }
    ],
    harvestProcess: {
      altitude: "6,800 – 7,400 ft (Upper Valley Orchards)",
      harvestMethod: "Strictly selected by hand when starch-to-acid balance reaches prime tart crispness",
      chemicalFree: "Free from synthetic shine agents, pesticide residue tested",
      dispatchTime: "Packaged directly in eco-friendly protective crates",
      season: "September – December"
    },
    bestWaysToEat: [
      "Juiced with fresh ginger, cucumber, and mint for a morning detox tonic.",
      "Baked into traditional apple pies or tarts — holds its firm shape under high heat.",
      "Tossed into crisp green salads with goat cheese, arugula, and balsamic glaze."
    ]
  },
  {
    id: "p1",
    title: "Heritage Red Delicious",
    subtitle: "Sweet & Classic Crunch",
    description: "Deep red, crisp, naturally sweet. The apple most families reorder every season.",
    badge: "Best Seller",
    rating: 5,
    reviews: 140,
    price: {
      "5 Kg": 1499,
      "10 Kg": 2799
    },
    originalPrice: {
      "5 Kg": 1650,
      "10 Kg": 3300
    },
    image: asset("IMAGES/1.jpg"),
    aboutFruit: "Heritage Red Delicious is the crown jewel of high-altitude Himalayan orchards. Characterized by its classic heart shape, deep crimson blush, and fine-grained aromatic flesh, it delivers an instant nostalgic crunch. Grown naturally without synthetic growth promoters, its sweetness develops under intense mountain sunshine and chilling cold nights.",
    tasteProfile: {
      sweetness: 5,
      crispness: 4,
      juiciness: 4,
      tanginess: 1,
    },
    benefits: [
      {
        title: "Heart Health & Cholesterol",
        desc: "Packed with soluble fiber (pectin) and polyphenol antioxidants that help lower LDL cholesterol and support arterial health."
      },
      {
        title: "Sustained Energy & Low GI",
        desc: "Slow-release natural fruit sugars prevent glucose spikes, keeping you energized throughout your busy day."
      },
      {
        title: "Gut Microbiome Balance",
        desc: "High concentration of prebiotic pectin feeds beneficial gut flora, promoting smooth digestion and overall gut immunity."
      },
      {
        title: "Skin Radiance & Anti-aging",
        desc: "Rich in Vitamin C and flavonoids that fight oxidative stress and promote collagen maintenance."
      }
    ],
    harvestProcess: {
      altitude: "7,200 – 8,000 ft (Upper Shimla Valleys)",
      harvestMethod: "100% Hand-plucked with cotton gloves to prevent bruising",
      chemicalFree: "Zero wax polish, zero synthetic preservation dips",
      dispatchTime: "Direct tree-to-crate packaging within 24 hours of harvest",
      season: "Peak Autumn Harvest (August – November)"
    },
    bestWaysToEat: [
      "Wash and bite straight in with the skin intact for maximum antioxidants.",
      "Slice into morning oatmeal, muesli, or Greek yogurt bowls.",
      "Pair with mild mountain cheddar or natural peanut butter for an energy snack."
    ]
  },
  {
    id: "p2",
    title: "Golden Orchard Apples",
    subtitle: "Honey-sweet & Buttery-soft",
    description: "Honey-sweet, buttery-soft. Gentle for kids & elders, rich in Vitamin C.",
    badge: "Kid & Elder Friendly",
    rating: 5,
    reviews: 67,
    price: {
      "5 Kg": 1499,
      "10 Kg": 2799
    },
    originalPrice: {
      "5 Kg": 1999,
      "10 Kg": 3998
    },
    image: asset("IMAGES/2.jpg"),
    aboutFruit: "Golden Orchard apples are renowned for their delicate, buttery-velvet texture and honeyed aromatic profile. With a glowing amber-yellow skin kiss-marked with a slight golden blush, they lack the tough tart skin of ordinary apples. Ideal for toddlers, seniors, and anyone who prefers tender, floral sweetness without intense jaw strain.",
    tasteProfile: {
      sweetness: 5,
      crispness: 3,
      juiciness: 5,
      tanginess: 1,
    },
    benefits: [
      {
        title: "Extra Gentle on Digestion",
        desc: "Lower organic acidity and soft dietary fiber make it exceptionally soothing for delicate stomachs, kids, and elderly parents."
      },
      {
        title: "Potent Vitamin C Shield",
        desc: "Contains naturally elevated ascorbic acid to strengthen the immune system against seasonal coughs and flu."
      },
      {
        title: "Natural Hydration",
        desc: "Over 85% structured organic cell water infused with natural electrolytes for cellular hydration."
      },
      {
        title: "Brain & Memory Support",
        desc: "Contains quercetin, a potent neuroprotective bioflavonoid associated with cognitive vitality."
      }
    ],
    harvestProcess: {
      altitude: "6,500 – 7,500 ft (Sunny Alpine Slopes)",
      harvestMethod: "Carefully hand-gathered at peak sweetness test (Brix > 14)",
      chemicalFree: "100% Raw unpolished skin — edible right from the box",
      dispatchTime: "Sorted by hand, cushioned in recyclable trays within 36 hours",
      season: "September – December"
    },
    bestWaysToEat: [
      "Delicious pureed into smooth, zero-sugar baby applesauce.",
      "Naturally melts into apple pies, crumbles, and warm spiced compotes without extra sugar.",
      "Cut into fresh green salads with walnuts and honey-lime dressing."
    ]
  },
  {
    id: "p3",
    title: "Mountain Fuji Apples",
    subtitle: "Sweetest & Juiciest",
    description: "The sweetest apple on our hillsides — dense, exceptionally juicy and crisp enough to hear.",
    badge: "Sweetest & Juiciest",
    rating: 5,
    reviews: 29,
    price: {
      "5 Kg": 1899,
      "10 Kg": 3599
    },
    originalPrice: {
      "5 Kg": 2150,
      "10 Kg": 4300
    },
    image: asset("IMAGES/3.jpg"),
    aboutFruit: "Mountain Fuji is famous for having the highest natural sugar concentration (Brix rating) of any apple variety. Grown in high mountain belts where frost cools the trees overnight, the apple builds dense cellular sugar pockets. When you take a bite, it erupts with audible, thirst-quenching juice.",
    tasteProfile: {
      sweetness: 5,
      crispness: 5,
      juiciness: 5,
      tanginess: 2,
    },
    benefits: [
      {
        title: "Maximum Antioxidant Defense",
        desc: "Super-concentrated catechin and chlorogenic acid compounds protect cardiovascular tissues from daily stress."
      },
      {
        title: "Superb Extended Shelf Life",
        desc: "Dense cellular structure allows it to stay crunchy and juicy in your refrigerator for over 4-6 weeks without preservatives."
      },
      {
        title: "Oral Health & Freshness",
        desc: "The firm bite stimulates saliva production, cleansing teeth and naturally reducing bad oral bacteria."
      },
      {
        title: "Natural Pre-Workout Fuel",
        desc: "Optimal balance of fructose, potassium, and antioxidants provides sustained muscle endurance."
      }
    ],
    harvestProcess: {
      altitude: "7,800 – 8,500 ft (Snow-Line Orchards)",
      harvestMethod: "Harvested only after first autumn frost triggers natural sugar crystallization",
      chemicalFree: "Zero cold-storage chamber gases, unadulterated orchard freshness",
      dispatchTime: "Shipped straight from mountain farms directly to your doorstep",
      season: "Late Harvest (October – January)"
    },
    bestWaysToEat: [
      "Cold from the fridge: the crunch can literally be heard from across the room.",
      "Cold-pressed into vibrant unpasteurized raw cider.",
      "Sliced thin into artisanal cheese boards and charcuterie platters."
    ]
  }
];
