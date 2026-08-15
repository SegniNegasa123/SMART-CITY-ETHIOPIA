"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { SUB_CITIES } from "@/lib/constants";
import {
  Shield,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileCheck2,
  Activity,
  Search,
  Filter,
  Lock,
  Radio,
} from "lucide-react";

export default function AdminPage() {
  const { language } = useLanguage();
  const [activeRole, setActiveRole] = useState<"SUPER_ADMIN" | "ADMIN" | "OFFICIAL" | "AUDITOR">("SUPER_ADMIN");
  const [selectedSubCityFilter, setSelectedSubCityFilter] = useState("ALL");

  const mockApplications = [
    {
      id: "app-1",
      ref: "AASCS-2026-BIRTH-882910",
      applicant: "Selamawit Tadesse",
      service: "Birth Certificate Digital Issuance",
      subCity: "Bole",
      submitted: "10 mins ago",
      status: "UNDER_REVIEW",
    },
    {
      id: "app-2",
      ref: "AASCS-2026-LAND-491022",
      applicant: "Yohannes Haile",
      service: "Building Construction Permit Clearance",
      subCity: "Kirkos",
      submitted: "28 mins ago",
      status: "IN_INSPECTION",
    },
    {
      id: "app-3",
      ref: "AASCS-2026-COMM-109284",
      applicant: "Abel Getachew",
      service: "Commercial Business License Registration",
      subCity: "Arada",
      submitted: "1 hour ago",
      status: "SUBMITTED",
    },
  ];

  const mockAuditLogs = [
    {
      action: "APPLICATION_APPROVED",
      actor: "Officer Abebe B. (EID-10029384)",
      target: "AASCS-2026-TRADE-99210",
      time: "14:22:01",
      ip: "196.188.42.10",
    },
    {
      action: "FEE_ADJUSTMENT_OVERRIDE",
      actor: "Admin Meron K. (EID-55019283)",
      target: "SRV-BLD-02",
      time: "14:15:30",
      ip: "196.188.42.14",
    },
    {
      action: "SUB_CITY_TRIAGE_DISPATCH",
      actor: "System Gateway",
      target: "GRIEV-2026-481920",
      time: "14:02:11",
      ip: "10.0.4.1",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header with RBAC Switcher */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5A623]/20 border border-[#F5A623] text-[#F5A623] flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-display font-bold text-xl text-[#F0F4FF]">
                Government & Administrative Command Center
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00C7B1]/10 text-[#00C7B1] border border-[#00C7B1]/30">
                RBAC ACTIVE
              </span>
            </div>
            <p className="text-xs text-[#8A9BB5]">
              City Government of Addis Ababa · Central Operations Terminal
            </p>
          </div>
        </div>

        {/* Role Selector */}
        <div className="flex items-center space-x-1.5 p-1 bg-[#050C15] rounded-xl border border-[#1A2D4A] text-xs font-mono">
          {(["SUPER_ADMIN", "ADMIN", "OFFICIAL", "AUDITOR"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setActiveRole(r)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeRole === r
                  ? "bg-[#F5A623] text-[#050C15] font-bold"
                  : "text-[#8A9BB5] hover:text-[#F0F4FF]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Operations KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-xl border-[#1A2D4A]">
          <span className="text-xs text-[#8A9BB5]">Pending Triage Queue</span>
          <div className="font-display text-2xl font-bold text-[#F5A623] mt-1">142</div>
          <span className="text-[10px] text-[#00C7B1]">Across all 11 Sub-Cities</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border-[#1A2D4A]">
          <span className="text-xs text-[#8A9BB5]">Approved Today</span>
          <div className="font-display text-2xl font-bold text-[#2ECC71] mt-1">1,894</div>
          <span className="text-[10px] text-[#2ECC71]">↑ 14% vs daily average</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border-[#1A2D4A]">
          <span className="text-xs text-[#8A9BB5]">Average SLA Velocity</span>
          <div className="font-display text-2xl font-bold text-[#00C7B1] mt-1">4.2 hrs</div>
          <span className="text-[10px] text-[#00C7B1]">Target: &lt; 24.0 hrs</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border-[#1A2D4A]">
          <span className="text-xs text-[#8A9BB5]">Active Officers Online</span>
          <div className="font-display text-2xl font-bold text-[#F0F4FF] mt-1">328</div>
          <span className="text-[10px] text-[#8A9BB5]">Connected via VPN Secure Net</span>
        </div>
      </div>

      {/* Application Triage Table */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="font-display font-bold text-base text-[#F0F4FF]">
            Live Application Triage & Approval Desk
          </h3>

          <div className="flex items-center space-x-2">
            <select
              value={selectedSubCityFilter}
              onChange={(e) => setSelectedSubCityFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-[#050C15] border border-[#1A2D4A] text-xs text-[#F0F4FF] focus:outline-none"
            >
              <option value="ALL">All Sub-Cities</option>
              {SUB_CITIES.map((sc) => (
                <option key={sc.id} value={sc.nameEn}>
                  {sc.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1A2D4A] text-[#8A9BB5] font-mono uppercase text-[10px]">
                <th className="py-3 px-3">Reference #</th>
                <th className="py-3 px-3">Applicant</th>
                <th className="py-3 px-3">Service</th>
                <th className="py-3 px-3">Sub-City</th>
                <th className="py-3 px-3">Submitted</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A2D4A]/50">
              {mockApplications.map((app) => (
                <tr key={app.id} className="hover:bg-[#0A1628]/80 transition-colors">
                  <td className="py-3 px-3 font-mono text-[#00C7B1] font-semibold">{app.ref}</td>
                  <td className="py-3 px-3 font-medium text-[#F0F4FF]">{app.applicant}</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">{app.service}</td>
                  <td className="py-3 px-3 text-[#F5A623]">{app.subCity}</td>
                  <td className="py-3 px-3 text-[#8A9BB5]">{app.submitted}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/30">
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right space-x-1.5">
                    <button
                      onClick={() => alert(`Approved application ${app.ref}`)}
                      className="px-2.5 py-1 rounded bg-[#2ECC71]/20 hover:bg-[#2ECC71] text-[#2ECC71] hover:text-[#050C15] font-semibold text-[10px] transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => alert(`Rejected application ${app.ref}`)}
                      className="px-2.5 py-1 rounded bg-[#EF4444]/20 hover:bg-[#EF4444] text-[#EF4444] hover:text-[#050C15] font-semibold text-[10px] transition-colors"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Immutable Audit Log Stream */}
      <div className="glass-panel p-6 rounded-2xl border-[#1A2D4A] space-y-3">
        <h3 className="font-display font-bold text-base text-[#F0F4FF] flex items-center space-x-2">
          <Lock className="w-4 h-4 text-[#00C7B1]" />
          <span>Immutable Administrative Audit Trail</span>
        </h3>

        <div className="space-y-2 font-mono text-xs">
          {mockAuditLogs.map((log, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#050C15] border border-[#1A2D4A] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]"
            >
              <div className="flex items-center space-x-2">
                <span className="text-[#00C7B1] font-semibold">{log.action}</span>
                <span className="text-[#8A9BB5]">by {log.actor}</span>
                <span className="text-[#F5A623]">[{log.target}]</span>
              </div>
              <div className="flex items-center space-x-3 text-[#8A9BB5] text-[10px]">
                <span>IP: {log.ip}</span>
                <span>{log.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
