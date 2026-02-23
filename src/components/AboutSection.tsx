"use client";

import { useTranslation } from '../lib/useTranslation';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center order-1 md:order-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88] rounded-full opacity-75 blur-lg animate-gradient bg-[length:200%_auto]"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#00ff88] shadow-2xl shadow-[#00ff88]/50">
                <img 
                  src="/perfil.png" 
                  alt="Axel Cerkvenih"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left order-2 md:order-none">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title} <span className="text-[#00ff88]">{t.about.titleAccent}</span>
            </h2>
            
            <p className="text-[#a3a3a3] text-lg mb-6 leading-relaxed">
              {t.about.intro}
            </p>
            
            <p className="text-[#a3a3a3] text-lg mb-6 leading-relaxed">
              {t.about.education}
            </p>
            
            <p className="text-[#a3a3a3] text-lg mb-8 leading-relaxed">
              {t.about.mindset}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                <div className="text-3xl font-bold text-[#00ff88] mb-1">5+</div>
                <div className="text-sm text-[#a3a3a3]">{t.about.yearsExp}</div>
              </div>
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#00ff88] transition-colors">
                <div className="text-3xl font-bold text-[#00ff88] mb-1">10+</div>
                <div className="text-sm text-[#a3a3a3]">{t.about.projectsCompleted}</div>
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-[#00ff88] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#00cc6a] transition-colors"
              >
                {t.about.cta}
              </a>
              <a 
                href="/Axel Cerkvenih - Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 border border-[#00ff88] text-[#00ff88] rounded-lg font-medium hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                {t.about.downloadCV || "Download CV"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
