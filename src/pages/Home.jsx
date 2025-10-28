// Components installation
import { ThemeToggler } from "@components/ThemeToggler";
import { StarBackground } from "@components/StarBackground";
import { NavBar } from "@components/NavBar";
import { HeroSection } from "@components/HeroSection";
import { About } from "../components/About";
import { Skills } from  "@components/Skills"

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
            <HeroSection />

            <About />

            <Skills />
        </main>

        {/* Footer */}
    </div>;
}