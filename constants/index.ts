// constants/index.ts
import image_hero from "@/public/images/image_hero.png";

export const HERO_BG = image_hero;

export interface PropertyAddress {
  state: string;
  city: string;
  country: string;
}

export interface PropertyOffers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: PropertyAddress;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffers;
  image: string;
  discount: string;
}

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  // Add the rest of your property objects here...
];
