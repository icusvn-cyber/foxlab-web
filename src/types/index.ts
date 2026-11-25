export interface Course {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  duration: string;
  level: string;
  format: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  modules: {
    title: string;
    description: string;
    hours: string;
  }[];
  highlights: string[];
  equipmentIncluded: string[];
  popular?: boolean;
}

export interface ChemicalProduct {
  id: string;
  name: string;
  code: string;
  category: 'cleaning' | 'restoration' | 'dye' | 'protection' | 'adhesives';
  categoryLabel: string;
  volume: string;
  pH: string;
  image: string;
  shortDesc: string;
  features: string[];
  idealFor: string[];
  safetyGrade: string;
  inStock: boolean;
  priceEstimate: string;
  usageSteps: string[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  brand: string;
  itemType: string;
  problem: string;
  solution: string;
  chemicalsUsed: string[];
  turnaroundTime: string;
  beforeImg: string;
  afterImg: string;
  technicianNotes: string;
}

export interface DiagnosticMaterial {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface DiagnosticIssue {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  commonIn: string;
}
