// Address of a property
export interface PropertyAddress {
  state: string;
  city: string;
  country: string;
}

// Offers of a property (beds, showers, occupants)
export interface PropertyOffers {
  bed: string;
  shower: string;
  occupants: string;
}

// Property data interface
export interface PropertyProps {
  name: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffers;
  image: string;
  discount: string; // "" if no discount or a number as string e.g. "30"
}

// Props for Pill component (filter buttons)
export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}
