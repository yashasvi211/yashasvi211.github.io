"use client"

import { useState } from "react"
import { X, ExternalLink } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { customDarkTheme } from "@/styles/syntax-themes"
import { useTheme } from "@/components/theme-context"

interface Project {
  title: string
  tags: string[]
  desc: string
  language: string
  code_snippet: string
  github: string
}

interface CodeSnippetProps {
  project: Project
  onClose: () => void
}

export function CodeSnippet({ project, onClose }: CodeSnippetProps) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const getLanguageCode = (lang: string) => {
        const languageMap: Record<string, string> = {
            "cpp": "cpp",
            "c++": "cpp",
            "ts": "typescript",
            "tsx": "tsx",
            "js": "javascript",
            "jsx": "jsx",
            "py": "python",
            "rust": "rust"
        }
        
        return languageMap[lang.toLowerCase()] || lang.toLowerCase()
    }

    const syntaxLanguage = getLanguageCode(project.language)

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 font-mono" 
            onClick={handleBackdropClick}
        >
            <div className="bg-[#111111] border border-[#333333] max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333333]">
                    <span className="text-xs text-[#9ca3af] uppercase tracking-wide">
                        {project.language}
                    </span>
                    <button 
                        onClick={onClose} 
                        className="text-[#ef4444] hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>

                <div className="overflow-auto max-h-[calc(90vh-120px)] bg-[#1a1a1a]">
                    <SyntaxHighlighter
                        language={syntaxLanguage}
                        style={customDarkTheme}
                        customStyle={{
                            margin: 0,
                            padding: "1rem",
                            background: "transparent",
                            fontSize: "0.875rem",
                        }}
                        showLineNumbers={false}
                        wrapLines={true}
                        wrapLongLines={true}
                    >
                        {project.code_snippet}
                    </SyntaxHighlighter>
                </div>

                <div className="p-4 bg-[#1a1a1a] border-t border-[#333333] flex justify-end">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#ef4444] hover:text-white transition-colors text-sm"
                    >
                        <ExternalLink size={14} />
                        <span>View Source</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
