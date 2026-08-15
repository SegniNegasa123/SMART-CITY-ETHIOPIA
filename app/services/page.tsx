"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { MUNICIPAL_SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Search, Filter, Layers, FileText, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", labelEn: "All Services (24+)", labelAm: "ሁሉም አገልግሎቶች (24+)" },
    { id: "CIVIL", labelEn: "Civil & Vital Events", labelAm: "የልደትና ነዋሪነት" },
    { id: "LAND", labelEn: "Land & Housing", labelAm: "መሬትና ቤቶች" },
    { id: "COMMERCE", labelEn: "Commerce & Revenue", labelAm: "ንግድና ገቢዎች" },
    { id: "TRANSPORT", labelEn: "Transport & Mobility", labelAm: "ትራንስፖርት" },
    { id: "ENVIRONMENT", labelEn: "Environment & Water", labelAm: "ውሃና አካባቢ ጥበቃ" },
  ];

  const filtered = MUNICIPAL_SERVICES.filter((srv) => {
    const matchCat = selectedCategory === "ALL" || srv.category === selectedCategory;
    const matchSearch =
      srv.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      srv.titleAm.includes(search) ||
      srv.descriptionEn.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00C7B1]/10 border border-[#00C7B1]/30 text-xs font-mono text-[#00C7B1]">
          <Layers className="w-3.5 h-3.5" />
          <span>OFFICIAL MUNICIPAL E-SERVICES CATALOG</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#F0F4FF]">
          {language === "en" ? "24+ Unified Digital City Services" : "24+ የተቀናጁ ዲጂታል የማዘጋጃ ቤት አገልግሎቶች"}
        </h1>
        <p className="text-xs sm:text-sm text-[#8A9BB5]">
          {language === "en"
            ? "Submit multi-step electronic applications, upload verified credentials, and track government approvals with zero paperwork."
            : "ያለ ወረቀት ንክኪ ማመልከቻዎችን በኦንላይን ያቅርቡ፣ ሰነዶችን ይላኩ፣ እንዲሁም የስራ ሂደቱን ደረጃ በደረጃ ይከታተሉ።"}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-4 rounded-2xl border-[#1A2D4A] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#00C7B1] text-[#050C15] font-semibold shadow-[0_0_15px_rgba(0,199,177,0.3)]"
                  : "bg-[#050C15] text-[#8A9BB5] hover:text-[#F0F4FF] border border-[#1A2D4A]"
              }`}
            >
              {language === "en" ? cat.labelEn : cat.labelAm}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === "en" ? "Filter by name or keyword..." : "በስም ወይም ቃል ይፈልጉ..."}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-xs text-[#F0F4FF] placeholder-[#8A9BB5]/60 focus:border-[#00C7B1] focus:outline-none"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((srv) => (
          <ServiceCard key={srv.id} service={srv} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl border-[#1A2D4A]">
          <p className="text-sm text-[#8A9BB5]">
            {language === "en"
              ? "No municipal services matched your search criteria."
              : "ምንም የተገኘ አገልግሎት የለም።"}
          </p>
        </div>
      )}
    </div>
  );
}
