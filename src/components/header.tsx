"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const sectionId = href.split('#')[1];
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
        setMobileMenuOpen(false);
    };

    const navItems = [
        { label: "Experience", href: "/#experience"  },
        { label: "Projects", href: "/#projects"  },
        { label: "Skills", href: "/#skills"  },
        { label: "Contact", href: "/#contact" }
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between font-mono">
            <Link href="/" className="text-lg hover:text-primary transition-colors text-foreground font-bold">
            yashasvi.
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
                <Link 
                key={index} 
                href={item.href} 
                className="hover:text-primary transition-colors text-secondary-foreground"
                onClick={(e) => {
                    if (item.href.startsWith("/#") && pathname === "/") {
                    handleSmoothScroll(e, item.href);
                    }
                }}
                >
                {item.label}
                </Link>
            ))}
            </nav>

            <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border font-mono shadow-lg pb-4">
            <nav className="px-6 py-4 flex flex-col space-y-4">
                {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors text-lg"
                    onClick={(e) => {
                    if (item.href.startsWith("/#") && pathname === "/") {
                        handleSmoothScroll(e, item.href);
                    } else {
                        setMobileMenuOpen(false);
                    }
                    }}
                >
                    {item.label}
                </Link>
                ))}
            </nav>
            </div>
        )}
        <div className="led-bar"></div>
        </header>
    )
}
