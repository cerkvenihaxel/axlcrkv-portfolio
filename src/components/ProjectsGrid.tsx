"use client";

import { BentoGrid, BentoCard } from "./ui/bento-grid";
import { BorderBeam } from "./ui/border-beam";

interface Project {
  name: string;
  stack: string[];
  securityFocus: string;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const featured = ['VadaHealth', 'SISCON', 'CRUD Rust'];
  
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Security-Focused <span className="text-[#00ff88]">Projects</span>
        </h2>
        <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
          Building secure, scalable solutions across healthcare, fintech, and enterprise systems
        </p>
        
        <BentoGrid>
          {projects.map((project, idx) => {
            const isFeatured = featured.some(f => project.name.includes(f));
            
            return (
              <BentoCard key={idx} className={isFeatured ? "relative" : ""}>
                {isFeatured && <BorderBeam />}
                
                <h3 className="text-xl font-semibold mb-3 text-[#e5e5e5]">
                  {project.name}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-mono bg-[#00ff88]/10 text-[#00ff88] rounded-full border border-[#00ff88]/20">
                    {project.securityFocus}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs bg-[#1a1a1a] text-[#a3a3a3] rounded border border-[#1a1a1a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
