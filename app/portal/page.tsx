"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { SUB_CITIES } from "@/lib/constants";
import { generateComplaintRef } from "@/lib/utils";
import {
  User,
  Search,
  FileCheck2,
  AlertTriangle,
  Clock,
  CheckCircle2,
  MapPin,
  Camera,
  CreditCard,
  ShieldCheck,
  Send,
  PlusCircle,
} from "lucide-react";

export default function CitizenPortalPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"tracker" | "complaint" | "vault">("tracker");
  const [searchRef, setSearchRef] = useState("AASCS-2026-BIRTH-882910");
  const [queriedRef, setQueriedRef] = useState("AASCS-2026-BIRTH-882910");

  // Complaint Form State
  const [complaintCategory, setComplaintCategory] = useState("Water Leak");
  const [complaintSubCity, setComplaintSubCity] = useState(SUB_CITIES[0].nameEn);
  const [complaintTitle, setComplaintTitle] = useState("");
  const [complaintDesc, setComplaintDesc] = useState("");
  const [submittedComplaintRef, setSubmittedComplaintRef] = useState<string | null>(null);

  const mockTimeline = [
    {
      status: "SUBMITTED",
      title: "Application Logged",
      date: "Aug 14, 2026 09:30 AM",
      officer: "System Gateway",
      completed: true,
    },
    {
      status: "UNDER_REVIEW",
      title: "Biometric EID & National ID Verified",
      date: "Aug 14, 2026 02:15 PM",
      officer: "Officer Abebe Bekele (Arada Hub)",
      completed: true,
    },
    {
      status: "IN_INSPECTION",
      title: "Department Technical Verification",
      date: "Aug 15, 2026 11:00 AM",
      officer: "Senior Registrar Selamawit T.",
      completed: true,
    },
    {
      status: "APPROVED",
      title: "Digital Certificate Generated (QR Signed)",
      date: "Estimated: Today 04:00 PM",
      officer: "Municipal Approver",
      completed: false,
    },
  ];

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateComplaintRef();
    setSubmittedComplaintRef(ref);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Citizen Welcome Header */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C7B1] to-[#0A1628] p-[1.5px]">
            <div className="w-full h-full bg-[#050C15] rounded-[14px] flex items-center justify-center">
              <User className="w-6 h-6 text-[#00C7B1]" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-display font-bold text-lg text-[#F0F4FF]">
                Selamawit Tadesse Bekele
              </h1>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30">
                FAYDA VERIFIED
              </span>
            </div>
            <p className="text-xs text-[#8A9BB5] font-mono mt-0.5">
              EID-49201948 · Sub-City: Bole (Woreda 03) · Phone: +251 922 334 455
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-1.5 p-1 bg-[#050C15] rounded-xl border border-[#1A2D4A]">
          <button
            onClick={() => setActiveTab("tracker")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "tracker"
                ? "bg-[#00C7B1] text-[#050C15] shadow-[0_0_15px_rgba(0,199,177,0.3)]"
                : "text-[#8A9BB5] hover:text-[#F0F4FF]"
            }`}
          >
            Universal Tracker
          </button>
          <button
            onClick={() => setActiveTab("complaint")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "complaint"
                ? "bg-[#F5A623] text-[#050C15] shadow-[0_0_15px_rgba(245,166,35,0.3)]"
                : "text-[#8A9BB5] hover:text-[#F0F4FF]"
            }`}
          >
            Report Grievance
          </button>
          <button
            onClick={() => setActiveTab("vault")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "vault"
                ? "bg-[#00C7B1] text-[#050C15]"
                : "text-[#8A9BB5] hover:text-[#F0F4FF]"
            }`}
          >
            Document Vault
          </button>
        </div>
      </div>

      {/* Tab 1: Universal Application Tracker */}
      {activeTab === "tracker" && (
        <div className="space-y-6">
          {/* Tracker Search Box */}
          <div className="glass-panel p-4 sm:p-6 rounded-2xl border-[#1A2D4A]">
            <h3 className="font-display font-bold text-sm text-[#F0F4FF] mb-2">
              Query Municipal Application Status
            </h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchRef}
                onChange={(e) => setSearchRef(e.target.value)}
                placeholder="Enter Reference (e.g. AASCS-2026-BIRTH-882910)"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-xs font-mono text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
              />
              <button
                onClick={() => setQueriedRef(searchRef)}
                className="px-5 py-2.5 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs transition-all"
              >
                Lookup
              </button>
            </div>
          </div>

          {/* Active Application Inspector */}
          <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-[#00C7B1]/30 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1A2D4A] gap-3">
              <div>
                <span className="font-mono text-xs font-bold text-[#00C7B1]">
                  REFERENCE: {queriedRef}
                </span>
                <h2 className="font-display font-bold text-lg text-[#F0F4FF] mt-1">
                  Birth Certificate Digital Issuance & Authentication
                </h2>
                <p className="text-xs text-[#8A9BB5]">
                  Department of Civil Status & Vital Events · Arada Sub-City Hub
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30">
                IN TECHNICAL REVIEW
              </span>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#8A9BB5] uppercase">
                Application Audit Trail & Progress:
              </span>
              <div className="relative pl-6 border-l-2 border-[#1A2D4A] space-y-6">
                {mockTimeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                        item.completed
                          ? "bg-[#2ECC71] border-[#2ECC71]"
                          : "bg-[#050C15] border-[#F5A623] animate-pulse"
                      }`}
                    />
                    <div>
                      <h4 className="font-semibold text-xs text-[#F0F4FF]">{item.title}</h4>
                      <p className="text-[11px] text-[#8A9BB5]">{item.officer}</p>
                      <span className="text-[10px] font-mono text-[#00C7B1]">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Report Civic Grievance / Incident */}
      {activeTab === "complaint" && (
        <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-[#F5A623]/30 max-w-3xl mx-auto space-y-6">
          <div>
            <h2 className="font-display font-bold text-xl text-[#F0F4FF] flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-[#F5A623]" />
              <span>Report Municipal Incident / Grievance</span>
            </h2>
            <p className="text-xs text-[#8A9BB5] mt-1">
              Geo-tag damaged roads, water pipe bursts, streetlight failures, or power outages directly to municipal field crews.
            </p>
          </div>

          {submittedComplaintRef ? (
            <div className="p-6 rounded-2xl bg-[#2ECC71]/10 border border-[#2ECC71]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#2ECC71] mx-auto" />
              <h3 className="font-display font-bold text-lg text-[#F0F4FF]">
                Grievance Dispatched to Field Crew!
              </h3>
              <p className="text-xs text-[#8A9BB5]">
                Your incident report has been logged with the Rapid Municipal Response Team.
              </p>
              <div className="font-mono text-sm font-bold text-[#00C7B1]">
                TRACKING ID: {submittedComplaintRef}
              </div>
            </div>
          ) : (
            <form onSubmit={handleComplaintSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8A9BB5] mb-1">Incident Category</label>
                  <select
                    value={complaintCategory}
                    onChange={(e) => setComplaintCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#F5A623] focus:outline-none"
                  >
                    <option value="Water Leak">Water Pipeline Burst (AAWSA)</option>
                    <option value="Pothole / Road">Road Damage / Pothole Repair</option>
                    <option value="Power Outage">Streetlight & Power Hazard</option>
                    <option value="Waste / Sanitation">Solid Waste & Sanitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#8A9BB5] mb-1">Sub-City Location</label>
                  <select
                    value={complaintSubCity}
                    onChange={(e) => setComplaintSubCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#F5A623] focus:outline-none"
                  >
                    {SUB_CITIES.map((sc) => (
                      <option key={sc.id} value={sc.nameEn}>
                        {sc.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#8A9BB5] mb-1">Incident Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Major water leak on Bole Medhanialem Street"
                  value={complaintTitle}
                  onChange={(e) => setComplaintTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#F5A623] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8A9BB5] mb-1">Detailed Description & Landmarks</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Provide precise location, landmarks, and severity..."
                  value={complaintDesc}
                  onChange={(e) => setComplaintDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#F5A623] focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl border border-dashed border-[#1A2D4A] bg-[#050C15] text-center">
                <Camera className="w-6 h-6 text-[#F5A623] mx-auto mb-1" />
                <span className="text-[#F0F4FF] font-semibold">Attach Geo-Tagged Photos (Optional)</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#F5A623] hover:bg-[#E09612] text-[#050C15] font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-[0_0_20px_rgba(245,166,35,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Grievance to Municipal Dispatch</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab 3: Digital Document Vault */}
      {activeTab === "vault" && (
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border-[#1A2D4A] space-y-6">
          <div>
            <h2 className="font-display font-bold text-xl text-[#F0F4FF]">
              Encrypted Citizen Document Vault
            </h2>
            <p className="text-xs text-[#8A9BB5]">
              Stored securely on AWS S3 with biometric hashing for instant 1-click reuse across municipal e-services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              { title: "Fayda National ID Certificate", type: "PDF", size: "1.2 MB", verified: true },
              { title: "Kebele Resident ID Card (Bole)", type: "JPG", size: "840 KB", verified: true },
              { title: "Taxpayer TIN Clearance", type: "PDF", size: "650 KB", verified: true },
            ].map((doc, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#050C15] border border-[#1A2D4A] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#00C7B1]">{doc.type}</span>
                  <span className="text-[10px] text-[#2ECC71] flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
                <h4 className="font-semibold text-[#F0F4FF]">{doc.title}</h4>
                <div className="pt-2 border-t border-[#1A2D4A]/50 flex items-center justify-between text-[10px] text-[#8A9BB5]">
                  <span>Size: {doc.size}</span>
                  <span className="text-[#00C7B1]">Encrypted AES-256</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
