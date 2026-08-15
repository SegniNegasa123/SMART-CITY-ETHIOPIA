"use client";

import React from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { SubCityMap } from "@/components/shared/SubCityMap";
import { SUB_CITIES } from "@/lib/constants";
import { MapPin, Globe, Compass, Radio, Shield, Building } from "lucide-react";

export default function MapPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00C7B1]/10 border border-[#00C7B1]/30 text-xs font-mono text-[#00C7B1]">
          <Compass className="w-3.5 h-3.5" />
          <span>GEOSPATIAL URBAN INTELLIGENCE · ADDIS ABABA GIS</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#F0F4FF]">
          {language === "en" ? "Interactive 11 Sub-City GIS Grid" : "የአዲስ አበባ 11ዱ ክፍለ ከተሞች ጂአይኤስ መረጃ"}
        </h1>
        <p className="text-xs sm:text-sm text-[#8A9BB5]">
          {language === "en"
            ? "Explore administrative jurisdiction boundaries, emergency infrastructure density, and population distribution across the capital."
            : "የክፍለ ከተሞችን ወሰን፣ የህዝብ ብዛት እና የአስቸኳይ ጊዜ አገልግሎት ማዕከሎችን በካርታ ላይ ይመልከቱ።"}
        </p>
      </div>

      {/* Main SubCityMap component */}
      <SubCityMap />

      {/* Summary Grid of 11 Sub-Cities */}
      <div className="pt-6">
        <h3 className="font-display font-bold text-lg text-[#F0F4FF] mb-4">
          {language === "en" ? "Sub-City Administrative Profiles" : "የክፍለ ከተሞች አስተዳደራዊ መረጃዎች"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUB_CITIES.map((sc) => (
            <div key={sc.id} className="glass-panel p-4 rounded-xl border-[#1A2D4A] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#00C7B1]">{sc.code}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A1628] text-[#2ECC71] border border-[#2ECC71]/30 font-semibold">
                  {sc.status}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm text-[#F0F4FF]">
                {language === "en" ? sc.nameEn : sc.nameAm}
              </h4>
              <p className="text-xs text-[#8A9BB5] line-clamp-2">
                {language === "en" ? sc.descriptionEn : sc.descriptionAm}
              </p>
              <div className="pt-2 border-t border-[#1A2D4A]/50 flex items-center justify-between text-[11px] text-[#8A9BB5]">
                <span>Area: {sc.areaKm2} km²</span>
                <span>Hubs: {sc.hubs} Woredas</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
