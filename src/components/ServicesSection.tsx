"use client";

import { useTranslation } from '../lib/useTranslation';

const icons = {
  code: (
    <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  ),
  server: (
    <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  medical: (
    <svg className="w-6 h-6 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  )
};

export function ServicesSection() {
  const { t } = useTranslation();
  const iconKeys = ['code', 'server', 'shield', 'medical'] as const;

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t.services.title} <span className="text-[#00ff88]">{t.services.titleAccent}</span>
        </h2>
        <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((service, idx) => (
            <div key={idx} className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#00ff88] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-colors">
                  {icons[iconKeys[idx]]}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-[#e5e5e5] group-hover:text-[#00ff88] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#a3a3a3] text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.linkText && (
                    <a 
                      href="https://vadahealth-landing.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00ff88] text-sm font-medium hover:underline"
                    >
                      {service.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-[#00ff88] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#00cc6a] transition-colors"
          >
            {t.services.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
