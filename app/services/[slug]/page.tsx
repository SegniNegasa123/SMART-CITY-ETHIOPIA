"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/components/shared/LanguageContext";
import { MUNICIPAL_SERVICES, SUB_CITIES } from "@/lib/constants";
import { formatETB, generateApplicationRef } from "@/lib/utils";
import {
  ArrowLeft,
  CheckCircle2,
  UploadCloud,
  FileCheck,
  CreditCard,
  Building,
  User,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function ServiceApplicationPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const service = MUNICIPAL_SERVICES.find((s) => s.slug === slug) || MUNICIPAL_SERVICES[0];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "EID-",
    phone: "+2519",
    subCity: SUB_CITIES[0].nameEn,
    woreda: "01",
    houseNumber: "",
    notes: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles((prev) => [...prev, e.target.files![0].name]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateApplicationRef(service.category);
    setSubmittedRef(ref);
    setStep(4);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Back to catalog button */}
      <Link
        href="/services"
        className="inline-flex items-center space-x-1.5 text-xs text-[#8A9BB5] hover:text-[#00C7B1] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{language === "en" ? "Back to All Services" : "ወደ አገልግሎቶች ዝርዝር ይመለሱ"}</span>
      </Link>

      {/* Service Header Card */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/20 uppercase">
            {service.category} SERVICE
          </span>
          <h1 className="font-display font-bold text-xl sm:text-2xl text-[#F0F4FF] mt-1.5">
            {language === "en" ? service.titleEn : service.titleAm}
          </h1>
          <p className="text-xs text-[#8A9BB5] mt-1">
            {language === "en" ? service.descriptionEn : service.descriptionAm}
          </p>
        </div>

        <div className="flex sm:flex-col items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-[#1A2D4A] pt-3 sm:pt-0 sm:pl-6 text-right">
          <div className="text-xs text-[#8A9BB5]">Government Fee</div>
          <div className="font-display text-xl font-bold text-[#F0F4FF]">
            {service.feeETB === 0 ? <span className="text-[#2ECC71]">Free</span> : formatETB(service.feeETB)}
          </div>
          <div className="text-[10px] text-[#F5A623] flex items-center space-x-1 mt-0.5">
            <Clock className="w-3 h-3" />
            <span>SLA: {service.processingDays} Days</span>
          </div>
        </div>
      </div>

      {/* Stepper Wizard Indicator */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
        {[
          { num: 1, label: "Identity" },
          { num: 2, label: "Location" },
          { num: 3, label: "Documents" },
          { num: 4, label: "Confirmation" },
        ].map((s) => (
          <div
            key={s.num}
            className={`p-2.5 rounded-xl border transition-all ${
              step === s.num
                ? "bg-[#00C7B1]/15 border-[#00C7B1] text-[#00C7B1] font-semibold"
                : step > s.num
                ? "bg-[#2ECC71]/10 border-[#2ECC71]/40 text-[#2ECC71]"
                : "bg-[#0A1628] border-[#1A2D4A] text-[#8A9BB5]"
            }`}
          >
            Step {s.num}: {s.label}
          </div>
        ))}
      </div>

      {/* Wizard Step Body */}
      <div className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-[#00C7B1]/30">
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-base text-[#F0F4FF] flex items-center space-x-2">
              <User className="w-4 h-4 text-[#00C7B1]" />
              <span>Step 1: Citizen Identity & Personal Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#8A9BB5] mb-1">Full Legal Name (as on Fayda ID)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Selamawit Tadesse Bekele"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#8A9BB5] mb-1">Fayda National ID Number</label>
                <input
                  type="text"
                  required
                  placeholder="EID-XXXXXXXX"
                  value={formData.nationalId}
                  onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[#8A9BB5] mb-1">Ethiopian Mobile Number (for SMS Tracking)</label>
                <input
                  type="text"
                  required
                  placeholder="+251 9XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs flex items-center space-x-1.5 transition-all"
              >
                <span>Proceed to Location Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-base text-[#F0F4FF] flex items-center space-x-2">
              <Building className="w-4 h-4 text-[#00C7B1]" />
              <span>Step 2: Sub-City & Municipal Jurisdiction</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-[#8A9BB5] mb-1">Assigned Sub-City (ክፍለ ከተማ)</label>
                <select
                  value={formData.subCity}
                  onChange={(e) => setFormData({ ...formData, subCity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
                >
                  {SUB_CITIES.map((sc) => (
                    <option key={sc.id} value={sc.nameEn}>
                      {sc.nameEn} ({sc.nameAm})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#8A9BB5] mb-1">Woreda (ወረዳ)</label>
                <input
                  type="text"
                  placeholder="e.g. 03"
                  value={formData.woreda}
                  onChange={(e) => setFormData({ ...formData, woreda: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-[#8A9BB5] mb-1">House Number (የቤት ቁጥር)</label>
                <input
                  type="text"
                  placeholder="e.g. 402 / New"
                  value={formData.houseNumber}
                  onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050C15] border border-[#1A2D4A] text-[#F0F4FF] focus:border-[#00C7B1] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A2D4A] text-[#8A9BB5] hover:text-[#F0F4FF] text-xs font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs flex items-center space-x-1.5"
              >
                <span>Proceed to Documents</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-base text-[#F0F4FF] flex items-center space-x-2">
              <UploadCloud className="w-4 h-4 text-[#00C7B1]" />
              <span>Step 3: Upload Required Verification Documents</span>
            </h3>

            {/* Checklist of required documents */}
            <div className="p-4 rounded-xl bg-[#050C15] border border-[#1A2D4A] space-y-2">
              <span className="text-xs text-[#8A9BB5] font-semibold uppercase font-mono">
                Mandatory Documentation Checklist:
              </span>
              <ul className="text-xs space-y-1 text-[#F0F4FF]">
                {service.requiredDocuments.map((doc, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C7B1]" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upload Box */}
            <div className="border-2 border-dashed border-[#1A2D4A] hover:border-[#00C7B1]/50 rounded-2xl p-6 text-center bg-[#050C15]/50 transition-all cursor-pointer relative">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <UploadCloud className="w-8 h-8 text-[#00C7B1] mx-auto mb-2" />
              <p className="text-xs font-semibold text-[#F0F4FF]">
                Click or drag & drop files to upload (PDF, PNG, JPG, DWG)
              </p>
              <p className="text-[10px] text-[#8A9BB5] mt-1">
                Encrypted at rest on AWS S3 / Cloudflare R2 Document Vault
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-1.5 text-xs font-mono text-[#00C7B1]">
                <span className="text-[10px] text-[#8A9BB5]">Uploaded Attachments:</span>
                {uploadedFiles.map((fn, i) => (
                  <div key={i} className="p-2 rounded-lg bg-[#0A1628] border border-[#1A2D4A] flex items-center justify-between">
                    <span>📄 {fn}</span>
                    <span className="text-[#2ECC71]">✓ Ready</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A2D4A] text-[#8A9BB5] hover:text-[#F0F4FF] text-xs font-semibold"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-[#2ECC71] hover:bg-[#27AE60] text-[#050C15] font-semibold text-xs flex items-center space-x-1.5 shadow-[0_0_20px_rgba(46,204,113,0.3)]"
              >
                <span>Submit & Pay {service.feeETB > 0 ? formatETB(service.feeETB) : "(Free)"}</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && submittedRef && (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#2ECC71]/20 border border-[#2ECC71] text-[#2ECC71] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(46,204,113,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-[#F0F4FF]">
                Application Successfully Submitted!
              </h3>
              <p className="text-xs text-[#8A9BB5] max-w-md mx-auto mt-1">
                Your application has been routed to the {formData.subCity} Sub-City Department. You will receive an SMS confirmation on {formData.phone}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#050C15] border border-[#00C7B1]/40 inline-block max-w-sm w-full font-mono text-center">
              <span className="text-[10px] text-[#8A9BB5]">UNIVERSAL REFERENCE NUMBER:</span>
              <div className="text-base font-bold text-[#00C7B1] tracking-wider mt-0.5">
                {submittedRef}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={`/portal?track=${submittedRef}`}
                className="px-6 py-2.5 rounded-xl bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] font-semibold text-xs transition-all"
              >
                Track in Citizen Portal →
              </Link>
              <Link
                href="/services"
                className="px-6 py-2.5 rounded-xl bg-[#0A1628] border border-[#1A2D4A] text-[#F0F4FF] text-xs font-semibold"
              >
                Apply for Another Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
