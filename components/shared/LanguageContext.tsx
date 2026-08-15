"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/lib/types";
import { I18N } from "@/lib/constants";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof I18N.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("aascs-lang") as Language;
    if (saved === "en" || saved === "am") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("aascs-lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "am" : "en";
    setLanguage(nextLang);
  };

  const t = I18N[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
