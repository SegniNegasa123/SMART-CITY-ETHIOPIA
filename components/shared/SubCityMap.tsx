"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { SUB_CITIES } from "@/lib/constants";
import { SubCity } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import {
  MapPin,
  Building,
  Users,
  Shield,
  Phone,
  Flame,
  Activity,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function SubCityMap() {
  const { language } = useLanguage();
  const [selectedSubCity, setSelectedSubCity] = useState<SubCity>(SUB_CITIES[0]);
  const [activeLayer, setActiveLayer] = useState<"all" | "hubs" | "emergency">("all");

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Interactive Sub-City Vector Grid Selector */}
      <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border-[#1A2D4A] relative overflow-hidden">
        {/* Layer Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="font-display font-bold text-sm text-[#F0F4FF] flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#00C7B1]" />
              <span>
                {language === "en"
                  ? "Addis Ababa 11 Sub-City GIS Grid"
                  : "የአዲስ አበባ 11ዱ ክፍለ ከተሞች ጂአይኤስ ካርታ"}
              </span>
            </h4>
            <p className="text-[11px] text-[#8A9BB5]">
              {language === "en"
                ? "Click any sub-city sector to inspect administrative capacity and live metrics"
                : "የአስተዳደር አቅምና የቀጥታ መረጃዎችን ለመመልከት አንዱን ክፍለ ከተማ ይምረጡ"}
            </p>
          </div>

          <div className="flex items-center space-x-1.5 p-1 bg-[#050C15] rounded-lg border border-[#1A2D4A]">
            <button
              onClick={() => setActiveLayer("all")}
              className={`px-2.5 py-1 text-[10px] rounded font-medium transition-all ${
                activeLayer === "all"
                  ? "bg-[#00C7B1] text-[#050C15] font-semibold"
                  : "text-[#8A9BB5] hover:text-[#F0F4FF]"
              }`}
            >
              All Hubs
            </button>
            <button
              onClick={() => setActiveLayer("emergency")}
              className={`px-2.5 py-1 text-[10px] rounded font-medium transition-all ${
                activeLayer === "emergency"
                  ? "bg-[#F5A623] text-[#050C15] font-semibold"
                  : "text-[#8A9BB5] hover:text-[#F0F4FF]"
              }`}
            >
              Emergency
            </button>
          </div>
        </div>

        {/* Sub-City Interactive Tile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {SUB_CITIES.map((sc) => {
            const isSelected = selectedSubCity.id === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedSubCity(sc)}
                className={`p-3 rounded-xl text-left transition-all duration-200 border relative overflow-hidden ${
                  isSelected
                    ? "bg-[#00C7B1]/15 border-[#00C7B1] shadow-[0_0_20px_rgba(0,199,177,0.2)]"
                    : "bg-[#0A1628]/60 border-[#1A2D4A] hover:border-[#00C7B1]/40 hover:bg-[#0A1628]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[9px] text-[#8A9BB5]">{sc.code}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      sc.status === "Operational" ? "bg-[#2ECC71]" : "bg-[#F5A623]"
                    }`}
                  />
                </div>
                <h5 className="font-display font-semibold text-xs text-[#F0F4FF] truncate">
                  {language === "en" ? sc.nameEn : sc.nameAm}
                </h5>
                <p className="text-[10px] text-[#8A9BB5] mt-0.5 truncate">
                  {formatNumber(sc.population)} pop.
                </p>
              </button>
            );
          })}
        </div>

        {/* Bottom Geographical Note */}
        <div className="mt-5 pt-3 border-t border-[#1A2D4A]/50 flex items-center justify-between text-[10px] text-[#8A9BB5] font-mono">
          <span>Coordinate Reference: EPSG:20137 (Adindan / UTM zone 37N)</span>
          <span className="text-[#00C7B1]">Total Area: 527 km²</span>
        </div>
      </div>

      {/* Right Column: Detailed Sub-City Inspector Panel */}
      <div className="lg:col-span-5 glass-panel-glow p-6 rounded-2xl border-[#00C7B1]/30">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1A2D4A]">
          <div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/20">
              {selectedSubCity.code}
            </span>
            <h3 className="font-display font-bold text-xl text-[#F0F4FF] mt-1">
              {language === "en" ? selectedSubCity.nameEn : selectedSubCity.nameAm}
            </h3>
          </div>
          <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30 rounded-lg">
            {selectedSubCity.status}
          </span>
        </div>

        {/* Narrative Description */}
        <p className="text-xs text-[#8A9BB5] leading-relaxed mb-5">
          {language === "en" ? selectedSubCity.descriptionEn : selectedSubCity.descriptionAm}
        </p>

        {/* Key Municipal Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3 rounded-xl bg-[#050C15]/70 border border-[#1A2D4A]">
            <div className="flex items-center space-x-1.5 text-xs text-[#8A9BB5] mb-1">
              <Users className="w-3.5 h-3.5 text-[#00C7B1]" />
              <span>Population</span>
            </div>
            <span className="font-display text-base font-bold text-[#F0F4FF]">
              {formatNumber(selectedSubCity.population)}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#050C15]/70 border border-[#1A2D4A]">
            <div className="flex items-center space-x-1.5 text-xs text-[#8A9BB5] mb-1">
              <Building className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Service Hubs</span>
            </div>
            <span className="font-display text-base font-bold text-[#F0F4FF]">
              {selectedSubCity.hubs} Woredas
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#050C15]/70 border border-[#1A2D4A]">
            <div className="flex items-center space-x-1.5 text-xs text-[#8A9BB5] mb-1">
              <Activity className="w-3.5 h-3.5 text-[#2ECC71]" />
              <span>Hospitals & Clinics</span>
            </div>
            <span className="font-display text-base font-bold text-[#F0F4FF]">
              {selectedSubCity.hospitals} Facilities
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#050C15]/70 border border-[#1A2D4A]">
            <div className="flex items-center space-x-1.5 text-xs text-[#8A9BB5] mb-1">
              <Shield className="w-3.5 h-3.5 text-[#00C7B1]" />
              <span>Emergency Units</span>
            </div>
            <span className="font-display text-base font-bold text-[#F0F4FF]">
              {selectedSubCity.policeStations + selectedSubCity.fireStations} Stations
            </span>
          </div>
        </div>

        {/* Mayor's Sub-City Contact & Fast Route */}
        <div className="pt-3 border-t border-[#1A2D4A] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#8A9BB5] flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-[#00C7B1]" />
              <span>Administration Office:</span>
            </span>
            <span className="font-mono text-[#F0F4FF] font-semibold">
              {selectedSubCity.mayorOfficeContact}
            </span>
          </div>

          <Link
            href={`/map?subcity=${selectedSubCity.id}`}
            className="w-full py-2.5 px-4 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <span>
              {language === "en"
                ? `Explore ${selectedSubCity.nameEn} Infrastructure`
                : `የ${selectedSubCity.nameAm} ዝርዝር ካርታ`}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
