"use client";

import React from "react";
import Link from "next/link";
import { MunicipalService } from "@/lib/types";
import { formatETB } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";
import {
  FileText,
  FileCheck,
  CreditCard,
  HeartHandshake,
  HardHat,
  Home,
  Building2,
  MapPin,
  Briefcase,
  Receipt,
  Megaphone,
  TrendingUp,
  Bus,
  Truck,
  Car,
  AlertTriangle,
  Droplets,
  Trash2,
  Trees,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

interface ServiceCardProps {
  service: MunicipalService;
}

const ICON_MAP: Record<string, React.ElementType> = {
  FileText,
  FileCheck,
  CreditCard,
  HeartHandshake,
  HardHat,
  Home,
  Building2,
  MapPin,
  Briefcase,
  Receipt,
  Megaphone,
  TrendingUp,
  Bus,
  Truck,
  Car,
  AlertTriangle,
  Droplets,
  Trash2,
  Trees,
  ShieldCheck,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useLanguage();
  const IconComponent = ICON_MAP[service.iconName] || FileText;

  return (
    <div className="glass-panel p-5 rounded-2xl border-[#1A2D4A] glass-card-hover flex flex-col justify-between group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C7B1]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#00C7B1]/15 transition-all" />

      <div>
        {/* Top Header Row: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#050C15] border border-[#1A2D4A] flex items-center justify-center text-[#00C7B1] group-hover:border-[#00C7B1]/50 group-hover:shadow-[0_0_15px_rgba(0,199,177,0.2)] transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-[#0A1628] text-[#8A9BB5] border border-[#1A2D4A] uppercase tracking-wider">
            {service.category}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-display font-bold text-sm text-[#F0F4FF] mb-1.5 group-hover:text-[#00C7B1] transition-colors leading-snug">
          {language === "en" ? service.titleEn : service.titleAm}
        </h4>

        {/* Short Description */}
        <p className="text-xs text-[#8A9BB5] line-clamp-2 leading-relaxed mb-4">
          {language === "en" ? service.descriptionEn : service.descriptionAm}
        </p>
      </div>

      {/* Bottom Metadata & CTA Button */}
      <div className="pt-3 border-t border-[#1A2D4A]/50 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1 text-[#8A9BB5]">
            <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>
              {service.processingDays === 1
                ? "Same Day"
                : `${service.processingDays} Days SLA`}
            </span>
          </div>
          <span className="font-display font-semibold text-[#F0F4FF]">
            {service.feeETB === 0 ? (
              <span className="text-[#2ECC71]">Free</span>
            ) : (
              formatETB(service.feeETB)
            )}
          </span>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="w-full py-2 px-3 rounded-xl bg-[#0A1628] hover:bg-[#00C7B1] text-[#F0F4FF] hover:text-[#050C15] font-semibold text-xs flex items-center justify-center space-x-1.5 border border-[#1A2D4A] hover:border-[#00C7B1] transition-all"
        >
          <span>{language === "en" ? "Apply Online" : "በኦንላይን ያመልክቱ"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
