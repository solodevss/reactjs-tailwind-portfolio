import { useState } from "react"
import { cn } from "@/lib/utils"
//Array showing lists of skills
const skills = [

    // Frontend Skills
    { name: "HTML 5/", level: 100, category: "frontend" },
    { name: "CSS 3", level: 90, category: "frontend" },
    { name: "JavaScript (ES6+)", level: 75, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },
    { name: "Tailwind CSS", level: 75, category: "frontend" },
    { name: "Bootstrap", level: 80, category: "frontend" },
    { name: "Next.js", level: 70, category: "frontend" },

    // Backend Skills
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 90, category: "backend" },
    { name: "MongoDB", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 75, category: "bacckend" },
    { name: "RESTful API Development", level: 80, category: "backend" },
    { name: "Authentication Systems(JWT)", level: 70, category: "backend" },

    // Tools
    { name: "Git", level: 95, category: "tools" },
    { name: "GitHub", level: 95, category: "tools" },
    { name: "VS Cdoe", level: 100, category: "tools" },
    { name: "Figma", level: 90, category: "tools" },
    { name: "Canva", level: 90, category: "tools" },
    { name: "Postman", level: 85, category: "tools" },
    { name: "NPM", level: 100, category: "tools" },
    { name: "Command Line Interface", level: 75, category: "tools" },
    { name: "ESLint", level: 95, category: "tools" },
    { name: "Chrome DevTools", level: 95, category: "tools" },

    // Deployment
    { name: "Vercel", level: 80, category: "deployment" },
    { name: "Netlify", level: 80, category: "deployment" },
    { name: "GitHub Pages", level: 95, category: "deployment" },
    { name: "Render", level: 95, category: "deployment" },

    //Other Skills
    { name: "SEO Optimisation", level: 80, category: "other" },
    { name: "API Testing & Documentation", level: 75, category: "other" },
    { name: "Agile / Scrum Understanding", level: 75, category: "other" },
    { name: "Problem Solving & Debugging", level: 95, category: "other" },
];

const categories = ["all", "frontend", "backend", "tools", "deployment", "other"]

export const Skills = () => {

    const  [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory); 

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className = {cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-forefround" : "bg-secondary/70 text-foreground hover:bd-secondary "
                            )}
                        >
                                {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded -full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}}
                                />
                            </div> 
                            
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}