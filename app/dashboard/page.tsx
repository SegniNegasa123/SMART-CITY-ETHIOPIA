"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { INITIAL_TELEMETRY, SUB_CITIES } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";
import {
  Activity,
  Wind,
  Bus,
  Zap,
  Droplets,
  Radio,
  Clock,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  TrendingUp,
  MapPin,
} from "lucide-react";

export default function DashboardPage() {
  const { language } = useLanguage();
  const [telemetry, setTelemetry] = useState(INITIAL_TELEMETRY);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        aqi: {
          ...prev.aqi,
          value: Math.max(35, Math.min(55, prev.aqi.value + (Math.random() > 0.5 ? 1 : -1))),
        },
        transit: {
          ...prev.transit,
          busesActive: Math.min(930, Math.max(830, prev.transit.busesActive + Math.floor(Math.random() * 5 - 2))),
        },
        traffic: {
          ...prev.traffic,
          congestionLevel: Math.min(70, Math.max(25, prev.traffic.congestionLevel + (Math.random() > 0.5 ? 1 : -1))),
        },
      }));
      setLastRefreshed(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A2D4A]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00C7B1] mb-1">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#00C7B1]" />
            <span>CENTRAL MUNICIPAL COMMAND TELEMETRY</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#F0F4FF]">
            {language === "en"
              ? "Live City Infrastructure Telemetry"
              : "የቀጥታ የከተማ መሰረተ ልማት መቆጣጠሪያ"}
          </h1>
          <p className="text-xs text-[#8A9BB5] mt-0.5">
            {language === "en"
              ? "Continuous real-time telemetry streaming from environmental stations, transit fleets, and municipal service desks."
              : "ከአካባቢ ጥበቃ ጣቢያዎች፣ ከትራንስፖርት አውታሮች እና ከአገልግሎት መስኮቶች የሚመጡ የቀጥታ መረጃዎች።"}
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <div className="px-3 py-1.5 rounded-xl bg-[#0A1628] border border-[#1A2D4A] flex items-center space-x-2 text-[#8A9BB5] font-mono">
            <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Refreshed: {lastRefreshed.toLocaleTimeString()}</span>
          </div>
          <button
            onClick={() => setLastRefreshed(new Date())}
            className="p-2 rounded-xl bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/30 hover:bg-[#00C7B1]/20 transition-all"
            title="Force Telemetry Sync"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row 1: 4 Key Indicator Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-panel p-5 rounded-2xl border-[#1A2D4A]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">Environmental AQI</span>
            <Wind className="w-4 h-4 text-[#00C7B1]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-3xl font-bold text-[#F0F4FF]">
              {telemetry.aqi.value}
            </span>
            <span className="text-xs text-[#2ECC71] font-semibold">
              {telemetry.aqi.status}
            </span>
          </div>
          <p className="text-[11px] text-[#8A9BB5] mt-1">PM2.5: {telemetry.aqi.pm25} µg/m³</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-[#1A2D4A]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">Public Bus Fleet</span>
            <Bus className="w-4 h-4 text-[#F5A623]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-3xl font-bold text-[#F0F4FF]">
              {telemetry.transit.busesActive}
            </span>
            <span className="text-xs text-[#8A9BB5]">
              / {telemetry.transit.busFleetTotal} Active
            </span>
          </div>
          <p className="text-[11px] text-[#2ECC71] mt-1">
            {formatNumber(telemetry.transit.dailyPassengers)} Daily Riders
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-[#1A2D4A]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">Power Grid Stability</span>
            <Zap className="w-4 h-4 text-[#2ECC71]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-3xl font-bold text-[#F0F4FF]">
              {telemetry.grid.powerStabilityPercent}%
            </span>
            <span className="text-xs text-[#2ECC71] font-semibold">Optimal</span>
          </div>
          <p className="text-[11px] text-[#8A9BB5] mt-1">
            {telemetry.grid.activeMaintenanceZones} Maintenance Zones
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-[#1A2D4A]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">Water Distribution</span>
            <Droplets className="w-4 h-4 text-[#00C7B1]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-3xl font-bold text-[#F0F4FF]">
              {telemetry.grid.waterDistributionRate}%
            </span>
            <span className="text-xs text-[#00C7B1] font-semibold">Standard</span>
          </div>
          <p className="text-[11px] text-[#8A9BB5] mt-1">AAWSA Reservoir Feed Normal</p>
        </div>
      </div>

      {/* Row 2: Sub-City Telemetry Breakdown Table */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] space-y-4">
        <h3 className="font-display font-bold text-base text-[#F0F4FF]">
          {language === "en" ? "11 Sub-City Telemetry Matrix" : "የ11ዱ ክፍለ ከተሞች የቀጥታ መረጃ ሠንጠረዥ"}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1A2D4A] text-[#8A9BB5] font-mono uppercase text-[10px]">
                <th className="py-3 px-3">Sub-City</th>
                <th className="py-3 px-3">Code</th>
                <th className="py-3 px-3">Population</th>
                <th className="py-3 px-3">Hubs</th>
                <th className="py-3 px-3">Hospitals</th>
                <th className="py-3 px-3">Emergency Units</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A2D4A]/50">
              {SUB_CITIES.map((sc) => (
                <tr key={sc.id} className="hover:bg-[#0A1628]/80 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#F0F4FF]">
                    {language === "en" ? sc.nameEn : sc.nameAm}
                  </td>
                  <td className="py-3 px-3 font-mono text-[#00C7B1]">{sc.code}</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">{formatNumber(sc.population)}</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">{sc.hubs} Woredas</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">{sc.hospitals}</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">
                    {sc.policeStations + sc.fireStations} Stations
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2ECC71]/10 text-[#2ECC71] border border-[#2ECC71]/30">
                      {sc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
