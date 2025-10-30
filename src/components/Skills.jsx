
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
    { name: "Git", level: 95, category: "tool" },
    { name: "GitHub", level: 95, category: "tool" },
    { name: "VS Cdoe", level: 100, category: "tool" },
    { name: "Figma", level: 90, category: "tool" },
    { name: "Canva", level: 90, category: "tool" },
    { name: "Postman", level: 85, category: "tool" },
    { name: "NPM", level: 100, category: "tool" },
    { name: "Command Line Interface", level: 75, category: "tool" },
    { name: "ESLint", level: 95, category: "tool" },
    { name: "Chrome DevTools", level: 95, category: "tool" },

    // Deployment
    { name: "Vercel", level: 80, category: "deplotment" },
    { name: "Netlify", level: 80, category: "deployment" },
    { name: "GitHub Pages", level: 95, category: "deployment" },
    { name: "Render", level: 95, category: "deployment" },

    //Other Skills
    { name: "SEO Optimisation", level: 80, category: "other" },
    { name: "API Testing & Documentation", level: 75, category: "other" },
    { name: "Agile / Scrum Understanding", level: 75, category: "other" },
    { name: "Problem Solving & Debugging", level: 95, category: "other" },
]

export const Skills = () => {

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}