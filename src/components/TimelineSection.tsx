"use client";

import { useTranslation } from '../lib/useTranslation';

export function TimelineSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t.timeline.title} <span className="text-[#00ff88]">{t.timeline.titleAccent}</span>
        </h2>
        <p className="text-[#a3a3a3] text-center mb-12">
          {t.timeline.subtitle}
        </p>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {t.timeline.milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex items-start gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#00ff88] rounded-full border-4 border-[#0a0a0a] transform md:-translate-x-1/2 z-10"></div>
                
                <div className={`flex-1 ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#00ff88] transition-colors text-left md:text-inherit">
                    <div className="text-[#00ff88] text-sm font-mono mb-2">{milestone.period}</div>
                    <h3 className="text-xl font-semibold mb-3 text-[#e5e5e5]">{milestone.title}</h3>
                    <p className="text-[#a3a3a3] text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
