import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@lib/utils";

export const ThemeToggler = () => {
    console.log("ThemeToggler mounted");
    const [isDarkMode, setIsDarkMode] = useState(false);

    // light/dark mode storage(browser logs option)
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");

        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);


    // theme change from light to dark theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
        onClick={toggleTheme}
        className={cn(
            // combined classname using cn & twMerge
            "fixed max-sm:hidden top-5 right-5 z-50 p-2",
            "rounded-full transition-colors duration-300",
            "focus:outline-none"
        )}
        >
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};