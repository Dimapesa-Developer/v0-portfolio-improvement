"use client"

import { ArrowUpRight, Code2, Layers, Mail, Github, Linkedin, Globe, Terminal } from "lucide-react"
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
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
          <span className="text-primary font-mono">{'{ '}</span>
          DIMAPESA
          <span className="text-primary font-mono">{' }'}</span>
        </h1>
        <p className="text-2xl md:text-4xl lg:text-5xl font-light text-secondary mt-1">Tech</p>
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
          Creative technology studio building digital experiences
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We blend design and engineering to craft interfaces that feel alive. From web applications
          to interactive installations, we push boundaries.
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
    { icon: Code2, label: "Web Development" },
    { icon: Layers, label: "UI/UX Design" },
    { icon: Terminal, label: "Backend Systems" },
    { icon: Globe, label: "Digital Strategy" },
  ]

  return (
    <div className="relative flex flex-col bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-6 block">Services</span>
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

function ProjectCell({ title, category, index }: { title: string; category: string; index: number }) {
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
      <div className="relative z-10 mt-auto pt-8">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
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
          <span className="text-5xl md:text-6xl font-bold text-primary-foreground">47+</span>
          <p className="text-xs font-mono text-primary-foreground/60 uppercase tracking-[0.2em] mt-1">Projects Delivered</p>
        </div>
        <div className="w-full h-px bg-primary-foreground/20" />
        <div>
          <span className="text-5xl md:text-6xl font-bold text-primary-foreground">12</span>
          <p className="text-xs font-mono text-primary-foreground/60 uppercase tracking-[0.2em] mt-1">Years Experience</p>
        </div>
      </div>
    </div>
  )
}

function TechStackCell() {
  const techs = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Figma", "AWS", "Docker"]

  return (
    <div className="relative flex flex-col bg-card p-6 md:p-8 border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-500 h-full">
      <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-4 block">Stack</span>
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
        <a
          href="mailto:hello@dimapesa.tech"
          className="flex items-center gap-2 text-sm text-accent-foreground hover:opacity-80 transition-opacity duration-300"
        >
          <Mail className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-mono">hello@dimapesa.tech</span>
        </a>
        <div className="flex gap-3 mt-2">
          <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300" aria-label="GitHub">
            <Github className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300" aria-label="Website">
            <Globe className="w-5 h-5" strokeWidth={1.5} />
          </a>
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
          Less is more. Form follows function. Every element serves a purpose.
        </p>
        <footer className="mt-4 pl-6">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            {'// Design Philosophy'}
          </span>
        </footer>
      </blockquote>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(220px,auto)] gap-3 md:gap-4">
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

          {/* Row 3: About (2x1), Services (1x1), Project (1x1) */}
          <div className="md:col-span-2 lg:col-span-2">
            <AboutCell />
          </div>
          <div className="lg:col-span-1">
            <ServicesCell />
          </div>
          <div className="lg:col-span-1">
            <ProjectCell title="E-Commerce Platform" category="Web App" index={0} />
          </div>

          {/* Row 4: Project, Project, TechStack, Contact */}
          <div className="lg:col-span-1">
            <ProjectCell title="Brand Identity System" category="Design" index={1} />
          </div>
          <div className="lg:col-span-1">
            <ProjectCell title="Data Dashboard" category="Analytics" index={2} />
          </div>
          <div className="lg:col-span-1">
            <TechStackCell />
          </div>
          <div className="lg:col-span-1">
            <ContactCell />
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-between mt-6 md:mt-8 px-2 pb-4">
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            {'{ DIMAPESA } Tech'}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
            Built with precision
          </span>
        </footer>
      </div>
    </main>
  )
}
