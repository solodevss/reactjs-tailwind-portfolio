import { ArrowRightToLine, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 6,
        title: "A Website Landing Page",
        description: "A beautiful landing page app using React and Tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express"],
        demoUrl: "#",
        githubUrl: "#",
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to details, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={tag + i} className="px-2 py-2 text-xs font-medium border rounded-full bg-secondary text-secondary">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

                <div className="text-center mt-12">
                    <a className="flex cosmic-button w-fit items-center mx-auto gap-2" href="#" target="_blank">
                        Check My Github <ArrowRightToLine size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
};
