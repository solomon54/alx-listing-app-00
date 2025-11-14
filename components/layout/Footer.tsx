import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">VacayNest</h3>
            <p className="text-sm leading-6 text-slate-400">
              Discover unique stays around the world — luxury villas, cozy cabins,
              oceanfront mansions, and more.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Top Rated</li>
              <li>Luxury Stays</li>
              <li>Beachfront</li>
              <li>Mountain View</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Help Center</li>
              <li>Cancellation Options</li>
              <li>Safety Information</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-5 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} VacayNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
