"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const LAT = 50.1999092;
const LNG = 15.8448265;
const MIN_ZOOM = 10;
const MAX_ZOOM = 19;

function buildSrc(zoom: number) {
  return `https://maps.google.com/maps?q=${LAT},${LNG}&z=${zoom}&output=embed`;
}

interface MapEmbedProps {
  className?: string;
}

export default function MapEmbed({ className = "h-52" }: MapEmbedProps) {
  const [zoom, setZoom] = useState(13);

  return (
    <div className="relative">
      <div className={`rounded-2xl overflow-hidden border border-gray-200 ${className}`}>
        <iframe
          src={buildSrc(zoom)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa - Hradec Králové"
        />
      </div>

      <div className="absolute bottom-3 right-3 flex flex-col gap-1">
        <button
          onClick={() => setZoom((z) => Math.min(z + 1, MAX_ZOOM))}
          className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all border border-gray-200"
          aria-label="Přiblížit"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 1, MIN_ZOOM))}
          className="w-8 h-8 bg-white shadow-md rounded flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all border border-gray-200"
          aria-label="Oddálit"
        >
          <Minus size={16} />
        </button>
      </div>
    </div>
  );
}
