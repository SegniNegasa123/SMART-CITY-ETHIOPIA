"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import {
  FileCheck2,
  Download,
  TrendingUp,
  Scale,
  FileSpreadsheet,
  Building,
  CheckCircle2,
  Send,
} from "lucide-react";

export default function TransparencyPage() {
  const { language } = useLanguage();
  const [foiSubmitted, setFoiSubmitted] = useState(false);

  const datasets = [
    {
      title: "Addis Ababa Municipal Budget Allocation 2025/2026",
      category: "Finance & Fiscal",
      size: "4.2 MB",
      format: "PDF & CSV",
      updated: "July 2026",
    },
    {
      title: "Sub-City Cadastral & Land Use Parcel Data",
      category: "Urban Planning",
      size: "18.4 MB",
      format: "GeoJSON / Shapefile",
      updated: "August 2026",
    },
    {
      title: "Public Transit Fleet GPS Telemetry (Monthly Log)",
      category: "Transport",
      size: "9.1 MB",
      format: "JSON & CSV",
      updated: "August 2026",
    },
    {
      title: "Air Quality Environmental Sensor Historical Registry",
      category: "Environment",
      size: "6.8 MB",
      format: "CSV",
      updated: "August 2026",
    },
  ];

  const tenders = [
    {
      ref: "AASCS-TND-2026-041",
      title: "Procurement of 250 Solar Smart Streetlights (Bole & Kirkos Corridors)",
      budget: "45,000,000 ETB",
      deadline: "September 15, 2026",
      status: "OPEN FOR BIDS",
    },
    {
      ref: "AASCS-TND-2026-038",
      title: "Supply of 5G Environmental IoT Stations for 11 Sub-Cities",
      budget: "18,500,000 ETB",
      deadline: "September 02, 2026",
      status: "OPEN FOR BIDS",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00C7B1]/10 border border-[#00C7B1]/30 text-xs font-mono text-[#00C7B1]">
          <Scale className="w-3.5 h-3.5" />
          <span>OPEN GOVERNANCE & CIVIC TRANSPARENCY INITIATIVE</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#F0F4FF]">
          {language === "en" ? "Municipal Transparency & Open Data Portal" : "የከተማዋ ግልጽነትና ኦፕን ዳታ መድረክ"}
        </h1>
        <p className="text-xs sm:text-sm text-[#8A9BB5]">
          {language === "en"
            ? "Access official municipal datasets, annual budgets, active government tenders, and submit Freedom of Information (FOI) requests."
            : "የከተማ አስተዳደሩን በጀት፣ የጨረታ ማስታወቂያዎችን እና የኦፕን ዳታ መረጃዎችን በነጻ ያውርዱ።"}
        </p>
      </div>

      {/* Row 1: Open Datasets Catalog */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-[#1A2D4A] space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-[#F0F4FF]">
              {language === "en" ? "Public Open Datasets" : "የህዝብ ክፍት የመረጃ ቋት"}
            </h3>
            <p className="text-xs text-[#8A9BB5]">
              Machine-readable datasets released under Creative Commons Public Domain (CC0).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {datasets.map((d, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#050C15] border border-[#1A2D4A] flex items-center justify-between hover:border-[#00C7B1]/40 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#00C7B1]">{d.category}</span>
                <h4 className="font-semibold text-xs text-[#F0F4FF]">{d.title}</h4>
                <div className="flex items-center space-x-3 text-[10px] text-[#8A9BB5]">
                  <span>Format: {d.format}</span>
                  <span>Size: {d.size}</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Downloading dataset: ${d.title}`)}
                className="p-2 rounded-lg bg-[#0A1628] hover:bg-[#00C7B1] text-[#8A9BB5] hover:text-[#050C15] transition-colors border border-[#1A2D4A]"
                title="Download Dataset"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Live Public Procurement Tenders */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-[#1A2D4A] space-y-6">
        <h3 className="font-display font-bold text-lg text-[#F0F4FF]">
          {language === "en" ? "Active Public Procurement Tenders" : "ንቁ የማዘጋጃ ቤት ጨረታዎች"}
        </h3>

        <div className="space-y-3">
          {tenders.map((t, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#050C15] border border-[#1A2D4A] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-[#F5A623]">{t.ref}</span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30">
                    {t.status}
                  </span>
                </div>
                <h4 className="font-semibold text-xs text-[#F0F4FF] mt-1">{t.title}</h4>
                <p className="text-[11px] text-[#8A9BB5] mt-0.5">Budget: {t.budget}</p>
              </div>

              <div className="text-right sm:border-l sm:border-[#1A2D4A] sm:pl-4">
                <span className="text-[10px] text-[#8A9BB5]">Closing Date</span>
                <p className="text-xs font-semibold text-[#F0F4FF]">{t.deadline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Freedom of Information (FOI) Request Form */}
      <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-[#00C7B1]/30 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-lg text-[#F0F4FF] text-center mb-1">
          Freedom of Information (FOI) Request
        </h3>
        <p className="text-xs text-[#8A9BB5] text-center mb-6">
          Citizens and journalists can submit official requests for municipal documentation.
        </p>

        {foiSubmitted ? (
          <div className="p-6 rounded-xl bg-[#2ECC71]/10 border border-[#2ECC71]/40 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#2ECC71] mx-auto" />
            <h4 className="font-bold text-sm text-[#F0F4FF]">FOI Request Dispatched</h4>
            <p className="text-xs text-[#8A9BB5]">
              Reference #FOI-2026-0928 has been logged with the Mayor&apos;s Public Disclosure Bureau.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFoiSubmitted(true);
            }}
            className="space-y-4 text-xs"
          >
            <div>
              <label className="block text-[#8A9BB5] mb-1">Applicant Name & Organization</label>
              <input
                type="text"
                required
                placeholder="e.g. Ethiopian Press Agency / Citizen"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#8A9BB5] mb-1">Official Email Address</label>
              <input
                type="email"
                required
                placeholder="press@example.org"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[#8A9BB5] mb-1">Document / Dataset Requested</label>
              <textarea
                required
                rows={3}
                placeholder="Specify the exact municipal report, department, and time period..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Formal FOI Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
