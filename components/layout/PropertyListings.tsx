import React from "react";
import { PropertyProps } from "@/constants";
import PropertyCard from "./PropertyCard";

interface PropertyListingsProps {
  properties: PropertyProps[];
}

export default function PropertyListings({ properties }: PropertyListingsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-6">
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}
