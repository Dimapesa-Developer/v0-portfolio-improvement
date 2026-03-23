"use client"

import { ArrowUpRight, Code2, Layers, Mail, Github, Linkedin, MapPin, Briefcase, Database, Bot, Cpu, Server, Phone, Download, Sparkles } from "lucide-react"
import { BauhausCircle, BauhausTriangle, BauhausSquare, BauhausSemiCircle } from "./bauhaus-shapes"

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

function LogoCell() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-card p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <GridPattern />
      <div className="absolute top-8 left-8">
        <BauhausCircle className="w-6 h-6" color="var(--primary)" />
      </div>
      <div className="absolute bottom-8 right-8">
        <BauhausTriangle className="w-6 h-6" color="var(--secondary)" />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
          Diego Martin
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
          <span className="text-primary font-mono">{'{ '}</span>
          Pelayo Salazar
          <span className="text-primary font-mono">{' }'}</span>
        </h2>
        <p className="text-sm md:text-base font-mono text-secondary mt-3">ICT Engineer | Automation & AI Specialist</p>
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>Nayarit, Mexico</span>
        </div>
      </div>
    </div>
  )
}

function AboutCell() {
  return (
    <div className="relative flex flex-col justify-between bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <div className="absolute -bottom-12 -right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <BauhausCircle className="w-40 h-40" color="var(--primary)" />
      </div>
      <div className="relative z-10">
        <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">About</span>
        <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-4 text-balance">
          ICT Engineer specializing in automation, AI & digital transformation
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          6+ years of experience in systems administration, database management, and process automation in the public sector. 
          I develop innovative solutions using n8n, React, TypeScript, and AI tools to improve operational efficiency.
        </p>
      </div>
    </div>
  )
}

function ShapeShowcase() {
  return (
    <div className="relative flex items-center justify-center bg-muted border border-border overflow-hidden group hover:border-secondary/40 transition-colors duration-500 h-full">
      <div className="relative flex items-center justify-center gap-4 p-8">
        <BauhausCircle className="w-14 h-14 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-700" color="var(--primary)" />
        <BauhausTriangle className="w-14 h-14 md:w-20 md:h-20 group-hover:rotate-12 transition-transform duration-700" color="var(--secondary)" />
        <BauhausSquare className="w-14 h-14 md:w-20 md:h-20 group-hover:scale-110 transition-transform duration-700" color="var(--foreground)" />
      </div>
      <span className="absolute bottom-4 left-4 text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">Form follows function</span>
    </div>
  )
}

function ServicesCell() {
  const services = [
    { icon: Bot, label: "AI & Automation" },
    { icon: Database, label: "Database Admin" },
    { icon: Server, label: "Systems & Networks" },
    { icon: Code2, label: "Web Development" },
  ]

  return (
    <div className="relative flex flex-col bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-6 block">Expertise</span>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {services.map((service) => (
          <div key={service.label} className="flex flex-col gap-2 p-3 border border-border/50 hover:border-primary/30 transition-colors duration-300">
            <service.icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
            <span className="text-xs font-mono text-foreground">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCell({ title, category, description, index }: { title: string; category: string; description?: string; index: number }) {
  const colors = ["var(--primary)", "var(--secondary)"]
  const shapes = [BauhausCircle, BauhausTriangle, BauhausSemiCircle, BauhausSquare]
  const Shape = shapes[index % shapes.length]
  const color = colors[index % colors.length]

  return (
    <div className="relative flex flex-col justify-between bg-card p-6 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 cursor-pointer h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-700">
        <Shape className="w-48 h-48" color={color} />
      </div>
      <div className="relative z-10 flex justify-between items-start">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{category}</span>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      </div>
      <div className="relative z-10 mt-auto pt-4">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
        {description && <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{description}</p>}
      </div>
    </div>
  )
}

function StatsCell() {
  return (
    <div className="relative flex flex-col justify-center bg-primary p-6 md:p-8 border border-primary overflow-hidden group h-full">
      <div className="absolute -top-6 -right-6 opacity-20">
        <BauhausTriangle className="w-24 h-24" color="#000000" />
      </div>
      <div className="absolute bottom-6 left-6 opacity-10">
        <BauhausSquare className="w-16 h-16" color="#000000" />
      </div>
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="text-5xl md:text-6xl font-bold text-primary-foreground">6+</span>
          <p className="text-xs font-mono text-primary-foreground/60 uppercase tracking-[0.2em] mt-1">Years Experience</p>
        </div>
        <div className="w-full h-px bg-primary-foreground/20" />
        <div>
          <span className="text-5xl md:text-6xl font-bold text-primary-foreground">30+</span>
          <p className="text-xs font-mono text-primary-foreground/60 uppercase tracking-[0.2em] mt-1">Users Supported</p>
        </div>
      </div>
    </div>
  )
}

function TechStackCell() {
  const techs = ["React", "TypeScript", "n8n", "PostgreSQL", "Supabase", "Ionic", "Tailwind CSS", "Git"]

  return (
    <div className="relative flex flex-col bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Tech Stack</span>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactCell() {
  return (
    <div className="relative flex flex-col justify-between bg-secondary p-6 md:p-8 border border-secondary overflow-hidden group h-full">
      <div className="absolute -bottom-8 -left-8 opacity-20">
        <BauhausCircle className="w-32 h-32" color="#000000" />
      </div>
      <span className="text-xs font-mono text-accent-foreground/70 uppercase tracking-[0.3em] mb-4 block">Contact</span>
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-accent-foreground">
          <Mail className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono text-xs text-accent-foreground/70">Available on request</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-accent-foreground">
          <Phone className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono text-xs text-accent-foreground/70">Available on request</span>
        </div>
        <div className="flex gap-3 mt-2">
          <a href="https://github.com/Dimapesa-Developer" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300" aria-label="GitHub">
            <Github className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com/in/diego-martin-pelayo-salazar" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  )
}

function WorkExperienceCell() {
  return (
    <div className="relative flex flex-col bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <BauhausSquare className="w-32 h-32" color="var(--secondary)" />
      </div>
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Experience</span>
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-4 h-4 text-secondary" />
          <h3 className="text-base font-bold text-foreground">Systems Technician</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-1">State Revenue Collection Office of Nayarit</p>
        <p className="text-xs font-mono text-primary">April 2019 - Present</p>
        <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'>'}</span>
            <span>LAN administration & IT infrastructure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'>'}</span>
            <span>Database management & backups</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">{'>'}</span>
            <span>AI agent development (Rebeca)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function EducationCell() {
  return (
    <div className="relative flex flex-col bg-card p-6 border border-border overflow-hidden group hover:border-secondary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Education</span>
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h3 className="text-base font-bold text-foreground">Bachelor of ICT Engineering</h3>
        <p className="text-sm text-muted-foreground mb-1">Information Systems</p>
        <p className="text-xs text-secondary">Universidad Tecnologica de Nayarit</p>
        <p className="text-xs font-mono text-muted-foreground mt-2">Sep 2015 - Jul 2019</p>
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs text-muted-foreground">License: 14441574</p>
        </div>
      </div>
    </div>
  )
}

function CertificationsCell() {
  const certs = [
    "Prompt Engineering & AI - Platzi",
    "n8n Automation - Platzi",
    "React & JavaScript - Platzi",
    "Supabase - Platzi",
    "PagerDuty Practitioner",
    "Claude Code - Full Course",
  ]

  return (
    <div className="relative flex flex-col bg-muted p-6 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Certifications</span>
      <div className="flex flex-wrap gap-2">
        {certs.map((cert) => (
          <span
            key={cert}
            className="px-2 py-1 text-[10px] font-mono border border-border/50 text-muted-foreground hover:border-secondary hover:text-secondary transition-colors duration-300"
          >
            {cert}
          </span>
        ))}
      </div>
    </div>
  )
}

function LanguagesCell() {
  return (
    <div className="relative flex flex-col justify-center bg-card p-6 border border-border overflow-hidden group hover:border-secondary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Languages</span>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-mono text-foreground">Spanish</span>
            <span className="text-[10px] text-primary">Native</span>
          </div>
          <div className="h-1.5 bg-border overflow-hidden">
            <div className="h-full bg-primary w-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-mono text-foreground">English</span>
            <span className="text-[10px] text-muted-foreground">IELTS 6.0-6.5</span>
          </div>
          <div className="h-1.5 bg-border overflow-hidden">
            <div className="h-full bg-secondary w-3/4" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-mono text-foreground">French</span>
            <span className="text-[10px] text-muted-foreground">DELF A1</span>
          </div>
          <div className="h-1.5 bg-border overflow-hidden">
            <div className="h-full bg-muted-foreground w-1/4" />
          </div>
        </div>
      </div>
    </div>
  )
}

function QuoteCell() {
  return (
    <div className="relative flex flex-col justify-center bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-secondary/40 transition-colors duration-500 h-full">
      <blockquote className="relative z-10">
        <span className="text-6xl text-secondary/30 font-serif leading-none absolute -top-2 -left-1">{'"'}</span>
        <p className="text-sm md:text-base text-foreground leading-relaxed pl-6 italic">
          Committed to operational efficiency, digital transformation, and continuous improvement.
        </p>
        <footer className="mt-4 pl-6">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            {'// Philosophy'}
          </span>
        </footer>
      </blockquote>
    </div>
  )
}

function SoftSkillsCell() {
  const skills = [
    "Effective Communication",
    "Problem-solving",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "User Empathy",
  ]

  return (
    <div className="relative flex flex-col bg-card p-6 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Soft Skills</span>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-xs font-mono border ${idx % 2 === 0 ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'} hover:border-opacity-100 transition-colors duration-300`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function CTACell() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-primary p-6 border border-primary overflow-hidden group h-full">
      <div className="absolute -top-4 -left-4 opacity-20">
        <BauhausCircle className="w-20 h-20" color="#000000" />
      </div>
      <div className="relative z-10 text-center">
        <Sparkles className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
        <h3 className="text-lg font-bold text-primary-foreground mb-2">Available Now</h3>
        <p className="text-xs text-primary-foreground/70 mb-4">Immediate availability</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background text-foreground text-xs font-mono">
          <Mail className="w-3 h-3" />
          {"Let's Connect"}
        </div>
      </div>
    </div>
  )
}

export function BentoGrid() {
  return (
    <main className="min-h-screen bg-background p-3 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Navigation */}
        <nav className="flex items-center justify-between mb-6 md:mb-8 px-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-[0.3em]">Portfolio / 2026</span>
          <div className="flex gap-6">
            <a href="#work" className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300">Work</a>
            <a href="#about" className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300">About</a>
            <a href="#contact" className="text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-3 md:gap-4">
          {/* Row 1: Logo (2x2), Shapes (1x1), Stats (1x2) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <LogoCell />
          </div>
          <div className="lg:col-span-1">
            <ShapeShowcase />
          </div>
          <div className="lg:col-span-1 row-span-2">
            <StatsCell />
          </div>

          {/* Row 2 continuation: Quote */}
          <div className="lg:col-span-1">
            <QuoteCell />
          </div>

          {/* Row 3: About (2x1), Services (1x1), Work Experience (1x1) */}
          <div className="md:col-span-2 lg:col-span-2">
            <AboutCell />
          </div>
          <div className="lg:col-span-1">
            <ServicesCell />
          </div>
          <div className="lg:col-span-1">
            <WorkExperienceCell />
          </div>

          {/* Row 4: Projects */}
          <div className="lg:col-span-1">
            <ProjectCell 
              title="Rebeca - AI Agent" 
              category="Conversational AI" 
              description="RAG-based virtual assistant for citizen queries about vehicle registration procedures."
              index={0} 
            />
          </div>
          <div className="lg:col-span-1">
            <ProjectCell 
              title="Educational Trivia App" 
              category="Mobile App" 
              description="Multi-role app with bcrypt auth and PostgreSQL/Supabase database."
              index={1} 
            />
          </div>
          <div className="lg:col-span-1">
            <ProjectCell 
              title="IoT Train Detection" 
              category="IoT System" 
              description="Community alert system using ESP32 sensors with real-time push notifications."
              index={2} 
            />
          </div>
          <div className="lg:col-span-1">
            <EducationCell />
          </div>

          {/* Row 5: Certifications, Tech Stack, Languages, Contact */}
          <div className="md:col-span-2 lg:col-span-2">
            <CertificationsCell />
          </div>
          <div className="lg:col-span-1">
            <TechStackCell />
          </div>
          <div className="lg:col-span-1">
            <LanguagesCell />
          </div>

          {/* Row 6: Soft Skills, CTA, Contact */}
          <div className="lg:col-span-2">
            <SoftSkillsCell />
          </div>
          <div className="lg:col-span-1">
            <CTACell />
          </div>
          <div className="lg:col-span-1">
            <ContactCell />
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between mt-6 md:mt-8 px-2 pb-4">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            Diego Martin Pelayo Salazar
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            Valid Passport | Immediate Availability
          </span>
        </footer>
      </div>
    </main>
  )
}
