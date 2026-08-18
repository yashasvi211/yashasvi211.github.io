import { 
    Database, 
    Server, 
    Bot, 
    BrainCircuit, 
    Cloud, 
    Container, 
    Layout, 
    TerminalSquare,
    Network
} from "lucide-react";

export const skillsData = [
    {
        category: "Backend & Data",
        icon: Database,
        skills: ["Python", "FastAPI", "REST APIs", "SQL", "PostgreSQL", "Redis", "Database Design"]
    },
    {
        category: "AI Platform",
        icon: BrainCircuit,
        skills: ["LLMs", "Prompt Engineering", "AI Agents", "LangChain", "Qdrant", "Vector Search", "RAG", "Structured Outputs"]
    },
    {
        category: "Cloud & Systems",
        icon: Cloud,
        skills: ["Temporal", "AWS EC2", "AWS ECS", "Docker", "Linux", "NGINX", "Distributed Systems"]
    },
    {
        category: "Frontend",
        icon: Layout,
        skills: ["JavaScript", "React", "Redux", "TailwindCSS", "Tiptap"]
    }
];
