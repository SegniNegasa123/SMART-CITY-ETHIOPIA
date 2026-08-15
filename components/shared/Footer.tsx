"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { SUB_CITIES } from "@/lib/constants";
import { Building2, Shield, Globe, Mail, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="w-full bg-[#03070E] border-t border-[#1A2D4A] pt-14 pb-8 text-[#8A9BB5] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand & Institutional Mandate */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C7B1] to-[#F5A623] p-[1.5px]">
                <div className="w-full h-full bg-[#050C15] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#00C7B1]" />
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#F0F4FF]">
                  {t.brandName}
                </h4>
                <p className="text-[10px] text-[#8A9BB5]">{t.brandSubtitle}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#8A9BB5] max-w-sm">
              {t.footerDisclaimer}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[11px] font-mono text-[#00C7B1]">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#2ECC71] animate-ping" />
                <span>System Status: Operational 99.98%</span>
              </span>
            </div>
          </div>

          {/* Column 2: 11 Sub-City Directory */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-xs text-[#F0F4FF] tracking-wider uppercase">
              {language === "en" ? "11 Sub-Cities" : "11ዱ ክፍለ ከተሞች"}
            </h5>
            <ul className="grid grid-cols-1 gap-1.5 text-[11px]">
              {SUB_CITIES.slice(0, 6).map((sc) => (
                <li key={sc.id}>
                  <Link
                    href={`/map?subcity=${sc.id}`}
                    className="hover:text-[#00C7B1] transition-colors flex items-center justify-between"
                  >
                    <span>{language === "en" ? sc.nameEn : sc.nameAm}</span>
                    <span className="text-[9px] text-[#1A2D4A] font-mono">{sc.code}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/map" className="text-[#00C7B1] hover:underline text-[10px] font-medium">
                  {language === "en" ? "View All 11 Sub-Cities →" : "ሁሉንም 11ዱን ይመልከቱ →"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-xs text-[#F0F4FF] tracking-wider uppercase">
              {language === "en" ? "Digital Services" : "ዲጂታል አገልግሎቶች"}
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/services" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Civil & Vital Registration" : "የልደትና የነዋሪነት አገልግሎቶች"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Land & Building Permits" : "የመሬት እና የግንባታ ፈቃድ"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Trade & Revenue Licenses" : "የንግድ ፈቃድ እና ግብር"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Transit & Smart Mobility" : "የህዝብ ትራንስፖርትና ፓርኪንግ"}
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Incident & Grievance Filing" : "የዜጎች ቅሬታ ማቅረቢያ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Transparency */}
          <div className="space-y-3">
            <h5 className="font-display font-semibold text-xs text-[#F0F4FF] tracking-wider uppercase">
              {language === "en" ? "Transparency & Open Data" : "ግልጽነትና ኦፕን ዳታ"}
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/transparency" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "City Budget & Expenditures" : "የከተማዋ በጀትና ወጪዎች"}
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Public Procurement Tenders" : "የግዢና ጨረታ ማስታወቂያዎች"}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#00C7B1] transition-colors">
                  {language === "en" ? "Smart City 2030 Roadmap" : "የስማርት ሲቲ 2030 ራዕይ"}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#00C7B1] transition-colors flex items-center space-x-1">
                  <span>{language === "en" ? "Official Command Center" : "የባለስልጣናት መቆጣጠሪያ"}</span>
                  <Shield className="w-3 h-3 text-[#F5A623]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-6 border-t border-[#1A2D4A]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8A9BB5]">
          <p>
            © {new Date().getFullYear()} Addis Ababa City Administration · {t.allRightsReserved}
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-[#F5A623]">🇪🇹 City of Addis Ababa</span>
            <span className="text-[#00C7B1]">v2.4.0-Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
