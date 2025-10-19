export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  challenges: {
    title: string;
    items: string[];
  };
  solutions: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      products: string[];
    }[];
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  keyProducts: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}
