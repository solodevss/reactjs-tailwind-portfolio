import { Moon, Sun } from "lucide-react";
import { useState } from "react"

export const ThemeToggler = () => {
    const [isDarkMode, setisDarkMode] = useState(false);

    return <button> {isDarkMode ? <Sun/> : <Moon/>} </button>
}
