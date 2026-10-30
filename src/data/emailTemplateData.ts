export interface LuxuryProduct {
  id: string;
  name: string;
  frenchTitle: string;
  collection: string;
  price: string;
  editionLimit: string;
  heroImage: string;
  heroImageFallback: string;
  detailImage1: string;
  detailImage2: string;
  storyImage: string;
  kicker: string;
  headline: string;
  curatorNote: string;
  description: string;
  specifications: { label: string; value: string }[];
  craftsmanshipHighlight: {
    title: string;
    description: string;
    hoursOfCraft: string;
  };
  secondaryOffer: {
    title: string;
    subtitle: string;
    image: string;
    note: string;
  };
}

export const LUXURY_PRODUCTS: LuxuryProduct[] = [
  {
    id: 'astre-noir',
    name: "L'Astre Noir Tourbillon",
    frenchTitle: "Haute Horlogerie — Pièce Unique",
    collection: "Place Vendôme Atelier Reserve",
    price: "€148,000",
    editionLimit: "Strictly limited to 28 individually numbered creations worldwide",
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85",
    heroImageFallback: "linear-gradient(135deg, #0a0a0a 0%, #171513 50%, #241e18 100%)",
    detailImage1: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=85",
    detailImage2: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85",
    storyImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    kicker: "Private Client Allocation",
    headline: "The Architecture of Perpetual Motion",
    curatorNote: "An unhurried study in dark celestial balance. Three years in confidential development within our Genevan ateliers, L'Astre Noir unites an obsidian meteorite dial with a free-sprung 60-second flying tourbillon.",
    description: "Each caliber is assembled, hand-beveled, and tested over 420 consecutive hours by a single Master Horologist. Housed in a sculpted 41mm 18-karat brushed rose gold case, the dial is cleaved from authentic Swedish Muonionalusta meteorite, acid-etched to reveal its million-year-old Widmanstätten crystalline geometry.",
    specifications: [
      { label: "Calibre", value: "Manufacture Calibre VK-890, Flying Tourbillon" },
      { label: "Power Reserve", value: "72 Hours via Twin Coaxial Barrels" },
      { label: "Case Architecture", value: "41mm · 18k Rose Gold with Hand-Satin Finishes" },
      { label: "Dial Material", value: "Muonionalusta Meteorite with Obsidian PVD" },
      { label: "Strap & Clasp", value: "Matte Black Alligator · 18k Gold Deployant" },
      { label: "Certification", value: "Poinçon de Genève & Chronometer COSC" }
    ],
    craftsmanshipHighlight: {
      title: "Hand-Anglage & Black Polish",
      description: "No machine touches the inner angles. The titanium tourbillon cage alone requires seventy hours of gentian wood lap polishing to achieve mirror-black reflection.",
      hoursOfCraft: "380 Hours of Artisanal Finishing"
    },
    secondaryOffer: {
      title: "Private Atelier Preview",
      subtitle: "Salon Privé, 14 Place Vendôme, Paris",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=85",
      note: "Patrons holding this private allocation are cordially invited to an intimate twilight viewing and tasting menu with Creative Director Henri Vauquelin."
    }
  },
  {
    id: 'extrait-or',
    name: "L'Ombre Céleste — Extrait de Parfum",
    frenchTitle: "Haute Parfumerie Rare Vintage",
    collection: "Grasse Botanical Private Reserve",
    price: "€2,450",
    editionLimit: "Numbered flacons 01 to 100 · 2026 Harvest",
    heroImage: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
    heroImageFallback: "linear-gradient(135deg, #0e0d0b 0%, #1f1b14 50%, #302619 100%)",
    detailImage1: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85",
    detailImage2: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=85",
    storyImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    kicker: "Haute Parfumerie Release",
    headline: "Night Blooming Jasmine & Century-Aged Cambodian Oud",
    curatorNote: "Harvested during the final moonlit nights of May in Grasse, France. L'Ombre Céleste represents the absolute pinnacle of artisanal natural distillation.",
    description: "Compounded at an extraordinary 38% perfume concentration, each crystal flacon is individually mouth-blown by master glassblowers in Saint-Louis and sealed with traditional gold thread baudruchage.",
    specifications: [
      { label: "Concentration", value: "Extrait de Parfum (38% Pure Essence)" },
      { label: "Top Notes", value: "Florentine Orris Butter, Italian Bergamot" },
      { label: "Heart Notes", value: "Centifolia Rose of May, Night Jasmine" },
      { label: "Base Notes", value: "30-Year Aged Wild Trat Oud, Ambergris" },
      { label: "Vessel", value: "Hand-Blown St. Louis Crystal with 24k Gold Thread" },
      { label: "Volume", value: "100ml / 3.4 FL. OZ. · Wooden Lacquer Coffret" }
    ],
    craftsmanshipHighlight: {
      title: "Solvent-Free Cold Enfeurage",
      description: "Ten thousand freshly plucked jasmine blossoms are laid onto organic oils daily for six consecutive weeks to capture their volatile nocturnal aroma.",
      hoursOfCraft: "90 Days of Slow Maceration"
    },
    secondaryOffer: {
      title: "Bespoke Monogram Coffret",
      subtitle: "Personalized by Parisian Calligrapher",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=85",
      note: "Complimentary personalization with your family crest or initials hand-embossed into French black calfskin."
    }
  },
  {
    id: 'saddle-monolith',
    name: "The Monolith Weekender N°01",
    frenchTitle: "Maroquinerie d'Exception",
    collection: "Heritage Saddle Leathergoods",
    price: "€9,800",
    editionLimit: "Atelier batch strictly capped at 40 pieces annually",
    heroImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
    heroImageFallback: "linear-gradient(135deg, #100f0d 0%, #1a1612 50%, #2e2216 100%)",
    detailImage1: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
    detailImage2: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85",
    storyImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    kicker: "Maroquinerie Bespoke Series",
    headline: "Uncut Full-Grain Box Calf & Solid Palladium Hardware",
    curatorNote: "Formed from a single contiguous hide of French box calfskin, vegetable-tanned over twelve months in Saint-Pée-sur-Nivelle using oak bark and chestnut liquors.",
    description: "Every single stitch is sewn by hand using two needles and beeswax-coated linen thread (point sellier). If a thread were ever severed, the remaining seam can never unravel.",
    specifications: [
      { label: "Leather", value: "French Box Calfskin · Full-Grain Vegetable Tanned" },
      { label: "Hardware", value: "Hand-Machined Solid Palladium with Guilloché Lock" },
      { label: "Lining", value: "Natural Ecru Kidskin with Hidden Travel Compartment" },
      { label: "Stitching", value: "Traditional Saddle Stitch (Point Sellier) by Hand" },
      { label: "Dimensions", value: "52cm × 28cm × 24cm · Approved Cabin Luggage" },
      { label: "Provenance", value: "100% Made in Saint-Honoré Ateliers, Paris" }
    ],
    craftsmanshipHighlight: {
      title: "Hand-Burnished Waxed Edges",
      description: "The raw leather edges undergo twelve successive applications of hot bone-glue, pigment, and hand-heated irons to create an impenetrable waterproof seal.",
      hoursOfCraft: "56 Hours of Hand Stitching"
    },
    secondaryOffer: {
      title: "Complimentary Concierge Travel Set",
      subtitle: "Matching Passport Folio & Luggage Tag",
      image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=85",
      note: "Included exclusively for private patrons during this launch window with custom silver foil monograms."
    }
  }
];

export interface ClientProfile {
  salutation: string;
  name: string;
  allocationId: string;
  salonLocation: string;
  vipTier: string;
  conciergeName: string;
}

export const DEFAULT_CLIENT: ClientProfile = {
  salutation: "Lord",
  name: "Julian Sterling",
  allocationId: "VAU-2026-N°08",
  salonLocation: "14 Place Vendôme, Paris",
  vipTier: "Patron Privilégié",
  conciergeName: "Margaux de Saint-Germain"
};

export const SALON_OPTIONS = [
  "14 Place Vendôme, Paris",
  "35 Rue du Rhône, Geneva",
  "168 New Bond Street, London",
  "720 Madison Avenue, New York",
  "Ginza 6-Chome, Tokyo"
];
