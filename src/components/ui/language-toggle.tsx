"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "es" | null;
    if (savedLang) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const selectLanguage = (newLang: "en" | "es") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLang }));
    setIsOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 right-0 bg-[#111111] border border-[#1a1a1a] rounded-lg shadow-lg shadow-[#00ff88]/20 overflow-hidden min-w-[140px]"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language.code as "en" | "es")}
                className={`w-full px-4 py-3 text-left hover:bg-[#1a1a1a] transition-colors ${
                  lang === language.code ? "bg-[#00ff88]/10 text-[#00ff88]" : "text-[#e5e5e5]"
                }`}
              >
                <span className="text-sm font-medium">{language.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#00ff88] hover:bg-[#00cc6a] text-[#0a0a0a] rounded-full shadow-lg shadow-[#00ff88]/50 flex items-center justify-center font-bold text-sm transition-all duration-300 hover:scale-110"
        aria-label="Toggle language"
      >
        {lang.toUpperCase()}
      </button>
    </div>
  );
}
