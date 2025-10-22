// Components installation
import { ThemeToggler } from "@components/ThemeToggler";
import { StarBackground } from "@components/StarBackground";
// import { StarBackground } from "@components/StarBackground";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggler />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar0 */}
        <NavBar />

        {/* Main Content */}

        {/* Footer */}
    </div>;
}