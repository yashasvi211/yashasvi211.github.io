"use client"

import { useState, useEffect } from "react"
import { experiences } from "@/data/experiences"
import { projects } from "@/data/projects"
import { skillsData } from "@/data/skills"
import { Header } from "@/components/header"
import { Terminal } from "@/components/terminal"
import { CodeSnippet } from "@/components/code-snippet"
import { Briefcase, Code2, Cpu } from "lucide-react"

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
            <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 space-y-16">

                {/* HERO SECTION */}
                <section className="space-y-6">
                    <div className="space-y-4 text-lg">
                        <p className="text-secondary">{"> Hello, I'm Yashasvi."}</p>
                        <p className="bg-primary text-primary-foreground w-fit px-1">
                            {"> I build robust systems with quiet efficiency."}
                        </p>
                    </div>

                    <Terminal />
                </section>

                {/* EXPERIENCE SECTION */}
                <section id="experience" className="space-y-6">
                    <h2 className="text-xl text-foreground flex items-center gap-2">
                        <Briefcase size={20} className="text-primary" /> # experience
                    </h2>

                    {experiences.map((experience, index) => (
                        <div key={index} className="space-y-2 ml-4">
                            <div className="space-y-1">
                                <p>[[{experience.company.toLowerCase()}]]</p>
                                <p className="text-secondary ml-2">title: "{experience.title}"</p>
                                <p className="text-secondary ml-2">date: "{experience.date}"</p>
                                <p className="text-secondary ml-2">stack: [{experience.stack.join(", ")}]</p>
                                <div className="text-secondary ml-2 flex">
                                    <span className="mr-2">desc:</span>
                                    <div className="flex-1">
                                        "{experience.desc}"
                                        <ul className="mt-2 space-y-1">
                                            {experience.bullets.map((b, i) => (
                                                <li key={i}>- {b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="space-y-6">
                    <h2 className="text-xl text-foreground flex items-center gap-2">
                        <Code2 size={20} className="text-primary" /> projects:
                    </h2>

                    <div className="space-y-8 ml-4">
                        {projects.map((project, index) => (
                            <div key={index} className="space-y-2">
                                <div className="space-y-1">
                                    <p>
                                        <span className="text-foreground">- name: </span>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-primary hover:text-white transition-colors cursor-pointer"
                                        >
                                            {project.title}
                                        </button>
                                    </p>
                                    <p className="text-secondary ml-2">tech: [{project.tags.join(", ")}]</p>
                                    <p className="text-secondary ml-2">desc: "{project.desc}"</p>
                                    <p className="ml-2">
                                        <span className="text-foreground">code_snippet: </span>
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-primary hover:text-white transition-colors cursor-pointer"
                                        >
                                            {project.code_snippet_title}
                                        </button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section id="skills" className="space-y-6">
                    <h2 className="text-xl text-foreground flex items-center gap-2">
                        <Cpu size={20} className="text-primary" /> # technical_skills
                    </h2>
                    
                    <div className="space-y-4 ml-4">
                        {skillsData.map((category, idx) => (
                            <div key={idx} className="space-y-1">
                                <p>
                                    <span className="text-foreground">- {category.category.toLowerCase()}: </span>
                                </p>
                                <p className="text-secondary ml-2">[{category.skills.join(", ")}]</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="space-y-6">
                    <h2 className="text-xl text-foreground">## contact</h2>

                    <div className="space-y-2">
                        <p className="text-secondary">{"> Get in touch:"}</p>
                        <p className="ml-4">
                            <span className="text-foreground">Email: </span>
                            <a href="mailto:jake@su.edu" className="text-primary hover:text-white transition-colors">
                                jake@su.edu
                            </a>
                        </p>
                        <p className="ml-4">
                            <span className="text-foreground">GitHub: </span>
                            <a href="https://github.com/yashasvi211" className="text-primary hover:text-white transition-colors">
                                github.com/yashasvi211
                            </a>
                        </p>
                        <p className="ml-4">
                            <span className="text-foreground">LinkedIn: </span>
                            <a href="https://linkedin.com/in/jake" className="text-primary hover:text-white transition-colors">
                                linkedin.com/in/jake
                            </a>
                        </p>
                    </div>
                </section>

            </main>
            {selectedProject && <CodeSnippet project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </div>
    )
}
