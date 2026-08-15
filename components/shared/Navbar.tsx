"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import {
  Building2,
  Activity,
  Layers,
  MapPin,
  Sparkles,
  FileCheck2,
  User,
  Shield,
  Menu,
  X,
  Languages,
  PhoneCall,
} from "lucide-react";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.navHome, icon: Building2 },
    { href: "/services", label: t.navServices, icon: Layers },
    { href: "/dashboard", label: t.navDashboard, icon: Activity },
    { href: "/map", label: t.navMap, icon: MapPin },
    { href: "/projects", label: t.navProjects, icon: Sparkles },
    { href: "/transparency", label: t.navTransparency, icon: FileCheck2 },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1A2D4A]/80 bg-[#050C15]/90 backdrop-blur-xl">
      {/* 24/7 Municipal Emergency Ticker */}
      <div className="w-full bg-[#0A1628] border-b border-[#1A2D4A]/50 py-1 px-4 text-xs font-mono text-[#8A9BB5] flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-7xl mx-auto w-full">
          <PhoneCall className="w-3.5 h-3.5 text-[#00C7B1] animate-pulse" />
          <span className="truncate">{t.emergencyHeader}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Seal */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C7B1] via-[#0A1628] to-[#F5A623] p-[1.5px] shadow-[0_0_20px_rgba(0,199,177,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#050C15] rounded-[10px] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#00C7B1] group-hover:rotate-6 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-bold text-sm tracking-wide text-[#F0F4FF]">
                {t.brandName}
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/30 rounded">
                AASCS
              </span>
            </div>
            <span className="text-[10px] text-[#8A9BB5] font-light truncate max-w-[200px] sm:max-w-none">
              {t.brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center space-x-1.5 ${
                  active
                    ? "bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/30 shadow-[0_0_15px_rgba(0,199,177,0.15)]"
                    : "text-[#8A9BB5] hover:text-[#F0F4FF] hover:bg-[#0A1628]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? "text-[#00C7B1]" : "text-[#8A9BB5]"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Language Toggle & Citizen/Admin Portal Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-[#0A1628] hover:bg-[#0F1E35] border border-[#1A2D4A] text-xs font-medium text-[#F0F4FF] transition-all hover:border-[#00C7B1]/40"
            title="Switch Language (English / አማርኛ)"
          >
            <Languages className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>{language === "en" ? "አማርኛ" : "English"}</span>
          </button>

          {/* Citizen Portal */}
          <Link
            href="/portal"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#00C7B1] hover:bg-[#00B39F] text-[#050C15] text-xs font-semibold shadow-[0_0_20px_rgba(0,199,177,0.25)] transition-all hover:shadow-[0_0_25px_rgba(0,199,177,0.4)]"
          >
            <User className="w-3.5 h-3.5" />
            <span>{t.navPortal}</span>
          </Link>

          {/* Admin Command Link */}
          <Link
            href="/admin"
            className="p-1.5 rounded-lg bg-[#0A1628] hover:bg-[#0F1E35] border border-[#1A2D4A] text-[#8A9BB5] hover:text-[#00C7B1] transition-all"
            title="City Official Admin Center"
          >
            <Shield className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="p-1.5 rounded-lg bg-[#0A1628] border border-[#1A2D4A] text-xs text-[#F5A623]"
          >
            {language === "en" ? "አማ" : "EN"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0A1628] border border-[#1A2D4A] text-[#F0F4FF]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#1A2D4A] bg-[#0A1628]/95 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                  active ? "bg-[#00C7B1]/10 text-[#00C7B1]" : "text-[#8A9BB5]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#1A2D4A] flex items-center justify-between">
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-lg bg-[#00C7B1] text-[#050C15] font-semibold text-xs mr-2"
            >
              {t.navPortal}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 text-center rounded-lg bg-[#0F1E35] border border-[#1A2D4A] text-[#8A9BB5] text-xs"
            >
              {t.navAdmin}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
