"use client";

import { useTranslation } from '../lib/useTranslation';

export function GitHubSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t.github?.title || "Check Out My"} <span className="text-[#00ff88]">{t.github?.titleAccent || "Code"}</span>
        </h2>
        <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
          {t.github?.subtitle || "Explore my open-source projects and contributions on GitHub"}
        </p>
        
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#00ff88] transition-all duration-300 group">
          <div className="p-6 border-b border-[#1a1a1a]">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#e5e5e5] group-hover:text-[#00ff88] transition-colors">
                  cerkvenihaxel
                </h3>
                <p className="text-[#a3a3a3] text-sm">
                  {t.github?.bio || "Application Security Engineer | Building secure software"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88] mb-1">60+</div>
                <div className="text-sm text-[#a3a3a3]">{t.github?.repositories || "Repositories"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88] mb-1">5+</div>
                <div className="text-sm text-[#a3a3a3]">{t.github?.years || "Years Coding"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88] mb-1">900+</div>
                <div className="text-sm text-[#a3a3a3]">{t.github?.contributions || "Contributions"}</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                </svg>
                <span>{t.github?.languages || "Go, Rust, TypeScript, Python, PHP"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Argentina 🇦🇷</span>
              </div>
            </div>
            
            <a 
              href="https://github.com/cerkvenihaxel"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-[#00ff88] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#00cc6a] transition-colors text-center"
            >
              {t.github?.cta || "View GitHub Profile"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
