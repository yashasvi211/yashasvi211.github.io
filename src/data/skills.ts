import { 
    Database, 
    Server, 
    BrainCircuit, 
    Cloud, 
    Layout
} from "lucide-react";

import { 
    FaPython, 
    FaReact, 
    FaDocker, 
    FaLinux, 
    FaAws 
} from "react-icons/fa";

import { 
    SiFastapi, 
    SiPostgresql, 
    SiRedis, 
    SiJavascript, 
    SiRedux, 
    SiTailwindcss, 
    SiNginx 
} from "react-icons/si";

import { HiOutlineDatabase } from "react-icons/hi";
import { TbApi, TbBrain, TbRobot } from "react-icons/tb";

export const skillsData = [
    {
        category: "Backend & Data",
        icon: Database,
        skills: [
            { name: "Python", icon: FaPython },
            { name: "FastAPI", icon: SiFastapi },
            { name: "REST APIs", icon: TbApi },
            { name: "SQL", icon: HiOutlineDatabase },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "Database Design", icon: HiOutlineDatabase }
        ]
    },
    {
        category: "AI Platform",
        icon: BrainCircuit,
        skills: [
            { name: "LLMs", icon: TbBrain },
            { name: "Prompt Engineering", icon: TbBrain },
            { name: "AI Agents", icon: TbRobot },
            { name: "LangChain", icon: TbBrain },
            { name: "Qdrant", icon: HiOutlineDatabase },
            { name: "Vector Search", icon: HiOutlineDatabase },
            { name: "RAG", icon: TbBrain },
            { name: "Structured Outputs", icon: TbApi }
        ]
    },
    {
        category: "Cloud & Systems",
        icon: Cloud,
        skills: [
            { name: "Temporal", icon: Server },
            { name: "AWS EC2", icon: FaAws },
            { name: "AWS ECS", icon: FaAws },
            { name: "Docker", icon: FaDocker },
            { name: "Linux", icon: FaLinux },
            { name: "NGINX", icon: SiNginx },
            { name: "Distributed Systems", icon: Server }
        ]
    },
    {
        category: "Frontend",
        icon: Layout,
        skills: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "React", icon: FaReact },
            { name: "Redux", icon: SiRedux },
            { name: "TailwindCSS", icon: SiTailwindcss },
            { name: "Tiptap", icon: Layout }
        ]
    }
];
