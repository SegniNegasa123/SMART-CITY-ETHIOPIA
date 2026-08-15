"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/shared/LanguageContext";
import { LiveTelemetry } from "@/components/shared/LiveTelemetry";
import { SubCityMap } from "@/components/shared/SubCityMap";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { MUNICIPAL_SERVICES, SMART_PROJECTS, NEWS_ARTICLES } from "@/lib/constants";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  Layers,
  FileCheck2,
  Users,
  Building,
  TrendingUp,
  Cpu,
  Eye,
} from "lucide-react";

export default function HomePage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [trackRefInput, setTrackRefInput] = useState("");

  const filteredServices = MUNICIPAL_SERVICES.filter((srv) => {
    const matchesCategory = selectedCategory === "ALL" || srv.category === selectedCategory;
    const matchesSearch =
      srv.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.titleAm.includes(searchQuery) ||
      srv.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col space-y-20 pb-20 overflow-hidden">
      {/* 1. HERO SECTION WITH AMBIENT PARTICLES & SEARCH */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grid-mesh-bg rounded-3xl mt-4 border border-[#1A2D4A]/50">
        {/* Glow Spheres */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00C7B1]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-[#F5A623]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* Institutional Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0A1628] border border-[#00C7B1]/30 text-xs font-mono text-[#00C7B1] shadow-[0_0_20px_rgba(0,199,177,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <span>CITY GOVERNMENT OF ADDIS ABABA · AASCS 2.0</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F0F4FF] leading-[1.15]">
            {language === "en" ? (
              <>
                The Digital Heart of <br className="hidden sm:inline" />
                <span className="text-gradient-teal">Africa&apos;s Capital</span>
              </>
            ) : (
              <>
                የአፍሪካ መዲና <br className="hidden sm:inline" />
                <span className="text-gradient-teal">ስማርት ሲቲ ዲጂታል መድረክ</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#8A9BB5] max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Integrated Search Bar */}
          <div className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-[#8A9BB5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.heroSearchPlaceholder}
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-[#0A1628]/90 border border-[#1A2D4A] focus:border-[#00C7B1] focus:outline-none focus:ring-2 focus:ring-[#00C7B1]/20 text-sm text-[#F0F4FF] placeholder-[#8A9BB5]/60 transition-all backdrop-blur-xl shadow-card"
              />
              <button className="absolute right-2 px-4 py-2 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs transition-all">
                {language === "en" ? "Search" : "ፈልግ"}
              </button>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-xl bg-[#00C7B1] text-[#050C15] shadow-[0_0_20px_rgba(0,199,177,0.3)] hover:shadow-[0_0_30px_rgba(0,199,177,0.5)] transition-all flex items-center space-x-1.5"
            >
              <span>{t.btnApplyNow}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portal"
              className="px-5 py-2.5 rounded-xl bg-[#0A1628] hover:bg-[#0F1E35] border border-[#1A2D4A] text-[#F0F4FF] transition-all"
            >
              {t.btnTrackApplication}
            </Link>
            <Link
              href="/portal?tab=complaint"
              className="px-5 py-2.5 rounded-xl bg-[#0A1628] hover:bg-[#0F1E35] border border-[#F5A623]/30 text-[#F5A623] transition-all"
            >
              {t.btnReportIssue}
            </Link>
          </div>
        </div>

        {/* 4 Hero Counters */}
        <div className="mt-14 pt-8 border-t border-[#1A2D4A]/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#00C7B1]">
              24+
            </span>
            <p className="text-[11px] text-[#8A9BB5] mt-0.5">{t.statActiveServices}</p>
          </div>
          <div>
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F5A623]">
              11
            </span>
            <p className="text-[11px] text-[#8A9BB5] mt-0.5">{t.statSubCities}</p>
          </div>
          <div>
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#2ECC71]">
              96.4%
            </span>
            <p className="text-[11px] text-[#8A9BB5] mt-0.5">{t.statResolutionRate}</p>
          </div>
          <div>
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#F0F4FF]">
              5.6M+
            </span>
            <p className="text-[11px] text-[#8A9BB5] mt-0.5">{t.statConnectedCitizens}</p>
          </div>
        </div>
      </section>

      {/* 2. REAL-TIME CITY TELEMETRY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F0F4FF]">
            {t.telemetrySectionTitle}
          </h2>
          <p className="text-xs text-[#8A9BB5] mt-1">{t.telemetrySectionSubtitle}</p>
        </div>
        <LiveTelemetry />
      </section>

      {/* 3. INTERACTIVE 11 SUB-CITY GIS MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F0F4FF]">
            {t.subCitySectionTitle}
          </h2>
          <p className="text-xs text-[#8A9BB5] mt-1">{t.subCitySectionSubtitle}</p>
        </div>
        <SubCityMap />
      </section>

      {/* 4. MUNICIPAL E-SERVICES CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F0F4FF]">
              {t.servicesSectionTitle}
            </h2>
            <p className="text-xs text-[#8A9BB5] mt-1">{t.servicesSectionSubtitle}</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0A1628] rounded-xl border border-[#1A2D4A]">
            {["ALL", "CIVIL", "LAND", "COMMERCE", "TRANSPORT", "ENVIRONMENT"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#00C7B1] text-[#050C15] font-semibold shadow-[0_0_15px_rgba(0,199,177,0.3)]"
                    : "text-[#8A9BB5] hover:text-[#F0F4FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.slice(0, 8).map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0A1628] hover:bg-[#0F1E35] border border-[#00C7B1]/40 text-[#00C7B1] text-xs font-semibold transition-all hover:border-[#00C7B1]"
          >
            <span>
              {language === "en"
                ? `Explore All ${MUNICIPAL_SERVICES.length} E-Services →`
                : `ሁሉንም ${MUNICIPAL_SERVICES.length} አገልግሎቶች ይመልከቱ →`}
            </span>
          </Link>
        </div>
      </section>

      {/* 5. SMART CITY 2030 MEGA PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F0F4FF]">
            {t.projectsSectionTitle}
          </h2>
          <p className="text-xs text-[#8A9BB5] mt-1">{t.projectsSectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SMART_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel p-6 rounded-2xl border-[#1A2D4A] glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-[#00C7B1] font-semibold">
                    {proj.progressPercent}% Completed
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#F0F4FF] mb-2">
                  {language === "en" ? proj.titleEn : proj.titleAm}
                </h3>

                <p className="text-xs text-[#8A9BB5] leading-relaxed mb-4">
                  {language === "en" ? proj.descriptionEn : proj.descriptionAm}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-[#050C15] rounded-full overflow-hidden mb-4 border border-[#1A2D4A]">
                  <div
                    className="h-full bg-gradient-to-r from-[#00C7B1] to-[#2ECC71] rounded-full transition-all duration-1000"
                    style={{ width: `${proj.progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[#1A2D4A]/50 flex items-center justify-between text-xs text-[#8A9BB5]">
                <span>Budget: {proj.budgetETB}</span>
                <span className="text-[#F0F4FF] font-medium">Target: {proj.targetCompletion}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. UNIVERSAL APPLICATION TRACKER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl border-[#00C7B1]/40 relative overflow-hidden text-center max-w-3xl mx-auto">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#00C7B1]/10 border border-[#00C7B1]/30 text-[10px] font-mono text-[#00C7B1]">
              UNIVERSAL REFERENCE ENGINE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F0F4FF]">
              {language === "en"
                ? "Track Any Municipal Application in Real Time"
                : "የማንኛውንም ማመልከቻ ሁኔታ በቀጥታ ይከታተሉ"}
            </h2>
            <p className="text-xs text-[#8A9BB5]">
              {language === "en"
                ? "Enter your reference number (e.g. AASCS-2026-BIRTH-882910) for real-time status and officer verification."
                : "የማመልከቻ ቁጥርዎን በማስገባት ያለበትን ደረጃና የተመደበለትን ባለሙያ ይመልከቱ።"}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <input
                type="text"
                value={trackRefInput}
                onChange={(e) => setTrackRefInput(e.target.value)}
                placeholder="AASCS-2026-SRV-XXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-xs font-mono text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
              />
              <Link
                href={`/portal?track=${trackRefInput || "AASCS-2026-DEMO-01"}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs whitespace-nowrap transition-all"
              >
                {language === "en" ? "Track Now" : "አሁን ተከታተል"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
