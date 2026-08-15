"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { INITIAL_TELEMETRY } from "@/lib/constants";
import {
  Wind,
  Bus,
  Activity,
  Zap,
  CheckCircle2,
  TrendingUp,
  Clock,
  Radio,
} from "lucide-react";

export function LiveTelemetry() {
  const { language } = useLanguage();
  const [telemetry, setTelemetry] = useState(INITIAL_TELEMETRY);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate live heartbeat sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        aqi: {
          ...prev.aqi,
          value: Math.max(38, Math.min(55, prev.aqi.value + (Math.random() > 0.5 ? 1 : -1))),
        },
        transit: {
          ...prev.transit,
          busesActive: Math.min(920, Math.max(820, prev.transit.busesActive + Math.floor(Math.random() * 5 - 2))),
        },
        traffic: {
          ...prev.traffic,
          congestionLevel: Math.min(65, Math.max(25, prev.traffic.congestionLevel + (Math.random() > 0.5 ? 1 : -1))),
        },
        municipalOperations: {
          ...prev.municipalOperations,
          resolvedComplaintsToday: prev.municipalOperations.resolvedComplaintsToday + (Math.random() > 0.7 ? 1 : 0),
        },
      }));
      setLastUpdated(new Date());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Live Stream Status Bar */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1A2D4A]/60">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-[#00C7B1]/10 border border-[#00C7B1]/30 text-[10px] font-mono text-[#00C7B1]">
            <Radio className="w-3 h-3 animate-pulse text-[#00C7B1]" />
            <span>LIVE IOT STREAM</span>
          </div>
          <span className="text-[11px] text-[#8A9BB5]">
            {language === "en" ? "Polling 4,200+ Smart Sensors" : "ከ4,200+ ስማርት ሴንሰሮች በቀጥታ"}
          </span>
        </div>
        <div className="text-[10px] font-mono text-[#8A9BB5] flex items-center space-x-1">
          <Clock className="w-3 h-3 text-[#F5A623]" />
          <span>{lastUpdated.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Grid of 4 Core Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Air Quality Index (AQI) */}
        <div className="glass-panel p-4 rounded-xl relative overflow-hidden glass-card-hover group border-[#1A2D4A]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C7B1]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#00C7B1]/10 transition-all" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">
              {language === "en" ? "Air Quality (AQI)" : "የአየር ጥራት (AQI)"}
            </span>
            <Wind className="w-4 h-4 text-[#00C7B1]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-2xl font-bold text-[#F0F4FF]">
              {telemetry.aqi.value}
            </span>
            <span className="text-xs text-[#2ECC71] font-semibold">
              {telemetry.aqi.status}
            </span>
          </div>
          <p className="text-[10px] text-[#8A9BB5] mt-1 truncate">
            {telemetry.aqi.station}
          </p>
        </div>

        {/* Card 2: Public Transit Fleet */}
        <div className="glass-panel p-4 rounded-xl relative overflow-hidden glass-card-hover group border-[#1A2D4A]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5A623]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#F5A623]/10 transition-all" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">
              {language === "en" ? "Active Bus Fleet" : "የአውቶቡስ ስምሪት"}
            </span>
            <Bus className="w-4 h-4 text-[#F5A623]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-2xl font-bold text-[#F0F4FF]">
              {telemetry.transit.busesActive}
            </span>
            <span className="text-xs text-[#8A9BB5]">/ {telemetry.transit.busFleetTotal}</span>
          </div>
          <p className="text-[10px] text-[#2ECC71] mt-1">
            {telemetry.transit.onTimeRate}% on-time departure rate
          </p>
        </div>

        {/* Card 3: Traffic Density */}
        <div className="glass-panel p-4 rounded-xl relative overflow-hidden glass-card-hover group border-[#1A2D4A]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#2ECC71]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#2ECC71]/10 transition-all" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">
              {language === "en" ? "Traffic Flow" : "የትራፊክ ፍሰት"}
            </span>
            <Activity className="w-4 h-4 text-[#2ECC71]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-2xl font-bold text-[#F0F4FF]">
              {telemetry.traffic.congestionLevel}%
            </span>
            <span className="text-xs text-[#8A9BB5]">
              {telemetry.traffic.averageSpeedKmh} km/h avg
            </span>
          </div>
          <p className="text-[10px] text-[#8A9BB5] mt-1">
            {telemetry.traffic.activeIncidents} active road alerts
          </p>
        </div>

        {/* Card 4: Municipal Operations SLA */}
        <div className="glass-panel p-4 rounded-xl relative overflow-hidden glass-card-hover group border-[#1A2D4A]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C7B1]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#00C7B1]/10 transition-all" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8A9BB5] font-medium">
              {language === "en" ? "Resolved Issues Today" : "ዛሬ የተፈቱ ቅሬታዎች"}
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#00C7B1]" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-display text-2xl font-bold text-[#F0F4FF]">
              {telemetry.municipalOperations.resolvedComplaintsToday}
            </span>
            <span className="text-xs text-[#00C7B1] font-medium">
              {telemetry.municipalOperations.citizenSatisfactionRate}% satisfaction
            </span>
          </div>
          <p className="text-[10px] text-[#8A9BB5] mt-1">
            Avg SLA: {telemetry.municipalOperations.averageResolutionHours} hours
          </p>
        </div>
      </div>
    </div>
  );
}
