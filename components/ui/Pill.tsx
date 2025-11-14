import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Pill({ label, active = false, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap
        ${active ? "bg-emerald-500 text-white border-emerald-600" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"}`}
      type="button"
    >
      {label}
    </button>
  );
}
