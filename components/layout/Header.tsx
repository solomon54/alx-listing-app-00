import React from "react";
import { Search, User, LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold"> 
              V
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-lg">VacayNest</span>
              <p className="text-xs text-slate-500">Find your perfect stay</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 px-4">
            <label htmlFor="property-search" className="sr-only">Search properties</label>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} />
              </div>
              <input
                id="property-search"
                name="property-search"
                type="search"
                placeholder="Search city, state, or property name (e.g. Bali, Villa)"
                className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400"
                aria-label="Search properties"
              />
            </div>
          </div>

          {/* Actions (Sign in / Sign up) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-50"
            >
              <User size={16} />
              <span>Sign in</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600"
            >
              <LogIn size={16} />
              <span>Sign up</span>
            </button>
          </div>
        </div>

        {/* Types of accommodation */}
        <nav className="mt-3">
          <ul className="flex gap-3 overflow-x-auto py-2">
            {[
              "Rooms",
              "Villa",
              "Mansion",
              "Countryside",
              "Beachfront",
              "Ski",
              "Safari",
              "Cabin",
              "Apartment",
            ].map((type) => (
              <li key={type} className="flex-shrink-0">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-full border border-slate-200 text-sm font-medium hover:bg-slate-50"
                  aria-label={`Filter: ${type}`}>{type}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
