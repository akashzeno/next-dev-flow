"use client";

import { useState, useEffect, useContext, createContext } from "react";

interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState("light");

	const handleThemeChange = (value: string) => {
		if (value === "dark") {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
			localStorage.theme = "dark";
			setMode("dark");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
			setMode("light");
		}
	};

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			handleThemeChange("dark");
		} else {
			handleThemeChange("light");
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ mode, handleThemeChange }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined)
		throw new Error("ThemeContext must be used within a ThemeProvider");
	return context;
}
