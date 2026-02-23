import fs from 'fs';
import path from 'path';

const profilePath = path.join(process.cwd(), 'src/content/profile/Axel Cerkvenih.md');
const projectsCsvPath = path.join(process.cwd(), 'src/content/profile/Axel Cerkvenih/Projects 2da2b9a8a56d4dac85cd3abf1f52ef7a.csv');

export function parseMarkdown() {
  const content = fs.readFileSync(profilePath, 'utf-8');
  return content;
}

export function parseProjects() {
  const csv = fs.readFileSync(projectsCsvPath, 'utf-8');
  const lines = csv.split('\n').filter(line => line.trim());
  const projects = lines.slice(1).map(name => name.trim()).filter(Boolean);
  
  return projects.map(name => {
    const stack = inferStack(name);
    const securityFocus = inferSecurityFocus(name);
    return { name, stack, securityFocus };
  });
}

function inferStack(projectName: string): string[] {
  const lower = projectName.toLowerCase();
  const stacks: string[] = [];
  
  if (lower.includes('rust')) stacks.push('Rust');
  if (lower.includes('flutter')) stacks.push('Flutter', 'Dart');
  if (lower.includes('laravel')) stacks.push('Laravel', 'PHP');
  if (lower.includes('health') || lower.includes('crm')) stacks.push('Backend', 'Database');
  if (lower.includes('landing')) stacks.push('Frontend', 'HTML/CSS');
  if (lower.includes('api')) stacks.push('REST API');
  
  return stacks.length > 0 ? stacks : ['Full Stack'];
}

function inferSecurityFocus(projectName: string): string {
  const lower = projectName.toLowerCase();
  
  if (lower.includes('health') || lower.includes('crm')) return 'Data Privacy & HIPAA';
  if (lower.includes('rust')) return 'Memory Safety';
  if (lower.includes('api')) return 'API Security';
  
  return 'Secure Development';
}

export function parseTechnologies() {
  const content = parseMarkdown();
  
  // Find Technologies section - more flexible regex
  const lines = content.split('\n');
  let startIdx = -1;
  let endIdx = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Technologies')) {
      startIdx = i;
    }
    if (startIdx !== -1 && lines[i].startsWith('## ') && i > startIdx + 2) {
      endIdx = i;
      break;
    }
  }
  
  if (startIdx === -1) return [];
  if (endIdx === -1) endIdx = lines.length;
  
  const techLines = lines.slice(startIdx, endIdx)
    .filter(line => line.trim().startsWith('-') && line.includes('**'));
  
  return techLines.map(line => {
    const match = line.match(/\*\*(.+?):\*\*(.+)/);
    if (match) {
      return {
        category: match[1].trim(),
        items: match[2].split(',').map(item => item.trim().replace(/\.$/, ''))
      };
    }
    return null;
  }).filter(Boolean);
}

export function parseExperience() {
  const content = parseMarkdown();
  
  // Find Experience section
  const lines = content.split('\n');
  let startIdx = -1;
  let endIdx = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Experience') && lines[i].startsWith('##')) {
      startIdx = i;
    }
    if (startIdx !== -1 && lines[i].includes('Technologies') && i > startIdx + 2) {
      endIdx = i;
      break;
    }
  }
  
  if (startIdx === -1) return [];
  if (endIdx === -1) endIdx = lines.length;
  
  const expLines = lines.slice(startIdx + 3, endIdx); // Skip header and ---
  const experiences = [];
  
  let i = 0;
  while (i < expLines.length) {
    const line = expLines[i].trim();
    
    // Check if line is a date pattern (starts with month or has date format)
    const datePattern = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/;
    if (datePattern.test(line)) {
      const period = line;
      i++;
      
      // Next line should be the title
      if (i < expLines.length) {
        const title = expLines[i].trim();
        i++;
        
        // Collect description lines until next date or empty line
        const descLines = [];
        while (i < expLines.length && expLines[i].trim() && !datePattern.test(expLines[i].trim())) {
          descLines.push(expLines[i].trim());
          i++;
        }
        
        const description = descLines.join(' ');
        
        if (title && description) {
          experiences.push({ title, period, description });
        }
      }
    } else {
      i++;
    }
  }
  
  return experiences;
}

