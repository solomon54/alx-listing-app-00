import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { HERO_BG, PROPERTYLISTINGSAMPLE, PropertyProps } from "@/constants";
import Pill from "@/components/ui/Pill";

export default function HomePage() {
  const filters = ["Top Villa", "Self Checkin", "Beachfront", "Luxury", "Pet Friendly"];
  const [activeFilter, setActiveFilter] = useState<string>("");

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((p) => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HERO_BG.src})` }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-lg sm:text-xl drop-shadow">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <div className="flex gap-2 overflow-x-auto py-3 px-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-6">
        {filteredProperties.map((property) => (
          <div
            key={property.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-gray-600 mt-1">${property.price} / night</p>
              <p className="text-yellow-500 mt-1">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
