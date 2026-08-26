"use client"

import { useState, useEffect } from "react"
import { experiences } from "@/data/experiences"
import { projects } from "@/data/projects"
import { skillsData } from "@/data/skills"
import { Header } from "@/components/header"
import { Terminal } from "@/components/terminal"
import { CodeSnippet } from "@/components/code-snippet"
import { Briefcase, Code2, Cpu, Github, Linkedin, Twitter, Code, Cloud, ExternalLink, Mail, TerminalSquare, GraduationCap } from "lucide-react"

function calculateDuration(dateString: string) {
    try {
        const parts = dateString.split(" - ");
        if (parts.length !== 2) return "";
        
        const start = new Date(parts[0]);
        const end = parts[1].toLowerCase() === "present" ? new Date() : new Date(parts[1]);
        
        if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";

        let months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth();
        
        months += 1; // Include the starting month completely

        if (months <= 0) return "";

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : "";
        const monthStr = remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : "";
        
        return [yearStr, monthStr].filter(Boolean).join(" ");
    } catch {
        return "";
    }
}

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                const timer = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, []); 

    return (
        <div className="min-h-screen bg-background text-text font-mono">
            <Header />
            <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 space-y-20">

                {/* HERO SECTION */}
                <section className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 pt-2 md:pt-0">
                    <div className="space-y-6 md:space-y-8 flex-1 w-full min-w-0">
                        <div className="space-y-4 md:space-y-6">
                            
                            {/* Mobile: Heading & Photo Side-by-Side | Desktop: Just Heading */}
                            <div className="flex flex-row justify-between items-start gap-4">
                                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                                    <div className="flex items-start md:items-center gap-2 md:gap-3">
                                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight md:leading-normal">
                                            Hello, I'm<br /> Yashasvi Parashar.
                                        </h1>
                                    </div>
                                </div>
                                {/* Mobile Photo */}
                                <div className="md:hidden w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0 shadow-md">
                                    <img src="/profile.jpg" alt="Yashasvi Parashar" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <p className="bg-primary text-primary-foreground w-fit px-3 md:px-4 py-2 md:py-2.5 text-sm sm:text-base md:text-xl font-bold rounded-sm shadow-sm leading-snug">
                                Building thoughtful solutions to meaningful problems.
                            </p>
                        </div>

                        <div className="pt-2 md:pt-4 w-full max-w-3xl">
                            <Terminal />
                        </div>
                    </div>

                    {/* Desktop Photo */}
                    <div className="hidden md:block w-44 h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0 shadow-md md:mt-6">
                        <img src="/profile.jpg" alt="Yashasvi Parashar" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section id="experience" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <Briefcase size={28} className="text-primary" /> Experience
                    </h2>

                    <div className="space-y-10">
                        {experiences.map((experience, index) => {
                            const duration = calculateDuration(experience.date);
                            return (
                                <div key={index} className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                                {experience.title} <span className="text-primary">@ {experience.company}</span>
                                            </h3>
                                            {experience.location && (
                                                <p className="text-secondary-foreground text-sm mt-1">
                                                    {experience.location}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-1.5 mt-1 md:mt-0 shrink-0">
                                            <span className="font-medium bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-sm text-sm shadow-sm">
                                                {experience.date}
                                            </span>
                                            {duration && (
                                                <span className="text-secondary/80 text-sm md:pr-1">
                                                    {duration}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-foreground/90 leading-relaxed text-lg">
                                        {experience.desc}
                                    </p>
                                    
                                    <ul className="space-y-2 mt-4">
                                        {experience.bullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3 text-secondary-foreground">
                                                <span className="text-primary mt-1">▹</span> 
                                                <span className="leading-relaxed">{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* EDUCATION SECTION */}
                <section id="education" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <GraduationCap size={28} className="text-primary" /> Education
                    </h2>

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                                        Jaypee University Of Engineering<br />
                                        And Technology, Guna
                                    </h3>
                                    <p className="text-secondary-foreground mt-2 text-lg">
                                        Bachelor of Technology in Computer Science and Engineering
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0 shrink-0">
                                    <span className="text-secondary/80 font-medium bg-muted px-3 py-1 rounded-sm text-sm border border-border/50 shadow-sm inline-block">
                                        2021 - 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <Code2 size={28} className="text-primary" /> Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-card border border-border p-6 rounded-sm flex flex-col justify-between hover:border-primary/50 transition-colors">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <p className="text-secondary-foreground mb-6 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                                
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="bg-muted text-secondary px-2 py-1 text-xs rounded-sm border border-border">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex justify-center items-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground border border-border py-2 transition-colors rounded-sm"
                                    >
                                        <Code2 size={16} /> View Code
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section id="skills" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <Cpu size={28} className="text-primary" /> Technical Skills
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skillsData.map((category, idx) => {
                            const CategoryIcon = category.icon;
                            return (
                                <div key={idx} className="bg-card border border-border p-6 rounded-sm hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                                        <CategoryIcon className="text-primary" size={24} />
                                        <h3 className="text-lg font-bold text-foreground uppercase tracking-wider">{category.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, sIdx) => {
                                            const SkillIcon = skill.icon;
                                            return (
                                                <span key={sIdx} className="bg-background border border-border text-secondary-foreground px-3 py-1 text-sm rounded-sm flex items-center gap-2">
                                                    <SkillIcon size={14} className="text-primary/80" /> {skill.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <Mail size={28} className="text-primary" /> Contact
                    </h2>

                    <div className="bg-card border border-border p-8 rounded-sm">
                        <p className="text-lg text-foreground mb-8">
                            Ready to build something robust? Get in touch.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <a href="mailto:yashasvi211@hotmail.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Mail size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Email</span>
                                    <span className="break-all text-sm">yashasvi211@hotmail.com</span>
                                </div>
                            </a>
                            <a href="https://github.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Github size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">GitHub</span>
                                    <span className="break-all text-sm">yashasvi211</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Linkedin size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">LinkedIn</span>
                                    <span className="break-all text-sm">yashasvi211</span>
                                </div>
                            </a>
                            <a href="https://twitter.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Twitter size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Twitter (X)</span>
                                    <span className="break-all text-sm">@yashasvi211</span>
                                </div>
                            </a>
                            <a href="https://leetcode.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Code size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">LeetCode</span>
                                    <span className="break-all text-sm">yashasvi211</span>
                                </div>
                            </a>
                            <a href="https://bsky.app/profile/yashasvi211.bsky.social" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group">
                                <Cloud size={20} className="text-primary shrink-0" /> 
                                <div className="flex flex-col">
                                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">Bluesky</span>
                                    <span className="break-all text-sm">@yashasvi211.bsky.social</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            {selectedProject && <CodeSnippet project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    )
}
