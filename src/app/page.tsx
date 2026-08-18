"use client"

import { useState, useEffect } from "react"
import { experiences } from "@/data/experiences"
import { projects } from "@/data/projects"
import { skillsData } from "@/data/skills"
import { Header } from "@/components/header"
import { Terminal } from "@/components/terminal"
import { CodeSnippet } from "@/components/code-snippet"
import { Briefcase, Code2, Cpu, Github, Linkedin, Twitter, Code, Cloud, ExternalLink, Mail, TerminalSquare, UserCircle2 } from "lucide-react"

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
                <section className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                            <div className="flex items-center gap-3">
                                <TerminalSquare className="text-primary" size={28} />
                                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Hello, I'm Yashasvi.</h1>
                            </div>
                            <div className="flex items-center gap-2 text-secondary mb-1">
                                <UserCircle2 size={20} />
                                <span className="text-lg">@yashasvi211</span>
                            </div>
                        </div>
                        <p className="bg-primary text-primary-foreground w-fit px-3 py-2 text-lg md:text-xl font-bold rounded-sm shadow-sm">
                            I build software systems with purpose and performance.
                        </p>
                    </div>

                    <div className="pt-4 max-w-3xl">
                        <Terminal />
                    </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section id="experience" className="space-y-8 pt-4 border-t border-border/50">
                    <h2 className="text-2xl md:text-3xl text-foreground flex items-center gap-3 font-bold">
                        <Briefcase size={28} className="text-primary" /> Experience
                    </h2>

                    <div className="space-y-10">
                        {experiences.map((experience, index) => (
                            <div key={index} className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                        {experience.title} <span className="text-primary">@ {experience.company}</span>
                                    </h3>
                                    <span className="text-secondary bg-muted px-3 py-1 rounded-sm text-sm w-fit">
                                        {experience.date}
                                    </span>
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

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {experience.stack.map((tech, tIdx) => (
                                        <span key={tIdx} className="bg-muted text-secondary px-3 py-1 text-sm rounded-sm border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
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
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full flex justify-center items-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground border border-border py-2 transition-colors rounded-sm"
                                    >
                                        <Code2 size={16} /> View Code
                                    </button>
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
                            <a href="mailto:yashasvi211@hotmail.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Mail size={20} className="text-primary" /> 
                                <span className="break-all">yashasvi211@hotmail.com</span>
                            </a>
                            <a href="https://github.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Github size={20} className="text-primary" /> 
                                <span className="break-all">yashasvi211</span>
                            </a>
                            <a href="https://www.linkedin.com/in/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Linkedin size={20} className="text-primary" /> 
                                <span className="break-all">yashasvi211</span>
                            </a>
                            <a href="https://twitter.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Twitter size={20} className="text-primary" /> 
                                <span className="break-all">@yashasvi211</span>
                            </a>
                            <a href="https://leetcode.com/yashasvi211" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Code size={20} className="text-primary" /> 
                                <span className="break-all">yashasvi211</span>
                            </a>
                            <a href="https://bsky.app/profile/yashasvi211.bsky.social" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
                                <Cloud size={20} className="text-primary" /> 
                                <span className="break-all">@yashasvi211.bsky.social</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            {selectedProject && <CodeSnippet project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    )
}
