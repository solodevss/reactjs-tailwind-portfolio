// Components installation
import { ThemeToggler } from "@components/ThemeToggler";
import { StarBackground } from "@components/StarBackground";
import { NavBar } from "@components/NavBar";
import { Hero } from "@components/Hero";
import { About } from "../components/About";
import { Skills } from  "@components/Skills"
import { Projects } from "../components/Projects";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggler />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar0 */}
        <NavBar />

        {/* Main Content */}
        <main>
            <Hero />

            <About />

            <Skills />

            <Projects />
        </main>

        {/* Footer */}
    </div>;
}