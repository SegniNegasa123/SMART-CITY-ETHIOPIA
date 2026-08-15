"use client";

import React from "react";
import { useLanguage } from "@/components/shared/LanguageContext";
import { SMART_PROJECTS } from "@/lib/constants";
import { Sparkles, TrendingUp, CheckCircle2, Clock, Globe2, Building } from "lucide-react";

export default function ProjectsPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-mono text-[#F5A623]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ADDIS ABABA SMART CITY 2030 STRATEGIC ROADMAP</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#F0F4FF]">
          {language === "en"
            ? "Flagship Urban Transformation Projects"
            : "የአዲስ አበባ ከተማ ስማርት ሲቲ ታላላቅ ፕሮጀክቶች"}
        </h1>
        <p className="text-xs sm:text-sm text-[#8A9BB5]">
          {language === "en"
            ? "Inspect capital budgets, milestones, and progress for major infrastructure, IoT, and mobility projects shaping Africa's capital."
            : "የመዲናዋን መሰረተ ልማት እና ቴክኖሎጂ የሚያዘምኑ ታላላቅ ፕሮጀክቶችን በጀት እና የስራ አፈጻጸም ይከታተሉ።"}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SMART_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="glass-panel p-6 rounded-2xl border-[#1A2D4A] glass-card-hover flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30">
                  {proj.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#00C7B1]">
                  {proj.progressPercent}% Complete
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#F0F4FF]">
                  {language === "en" ? proj.titleEn : proj.titleAm}
                </h3>
                <p className="text-xs text-[#8A9BB5] mt-1.5 leading-relaxed">
                  {language === "en" ? proj.descriptionEn : proj.descriptionAm}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2.5 bg-[#050C15] rounded-full overflow-hidden border border-[#1A2D4A]">
                <div
                  className="h-full bg-gradient-to-r from-[#00C7B1] via-[#F5A623] to-[#2ECC71] rounded-full"
                  style={{ width: `${proj.progressPercent}%` }}
                />
              </div>

              {/* Milestones list */}
              <div className="space-y-2 pt-2 border-t border-[#1A2D4A]/50">
                <span className="text-[11px] font-mono text-[#8A9BB5] uppercase">
                  Project Milestones:
                </span>
                <ul className="space-y-1.5 text-xs">
                  {proj.milestones.map((m, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {m.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-[#F5A623]" />
                        )}
                        <span className={m.completed ? "text-[#F0F4FF]" : "text-[#8A9BB5]"}>
                          {m.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8A9BB5]">{m.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 mt-4 border-t border-[#1A2D4A] flex flex-wrap items-center justify-between gap-2 text-xs text-[#8A9BB5]">
              <div>
                <span className="text-[#8A9BB5]">Budget: </span>
                <span className="font-semibold text-[#F0F4FF]">{proj.budgetETB}</span>
              </div>
              <div>
                <span className="text-[#8A9BB5]">Lead: </span>
                <span className="font-medium text-[#00C7B1]">{proj.leadAgency}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
