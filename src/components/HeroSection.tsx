"use client";

import { AnimatedGradientText } from './ui/animated-gradient-text';
import { Particles } from './ui/particles';
import { useTranslation } from '../lib/useTranslation';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatedGradientText>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            {t.hero.title}
          </h1>
        </AnimatedGradientText>
        
        <p className="text-2xl md:text-3xl text-[#e5e5e5] mb-4 font-medium">
          {t.hero.role} @ <span className="text-[#00ff88]">{t.hero.company}</span>
        </p>
        
        <p className="text-lg md:text-xl text-[#a3a3a3] mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        
        <p className="text-base md:text-lg text-[#a3a3a3] mb-12 max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-[#00ff88] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#00cc6a] transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
