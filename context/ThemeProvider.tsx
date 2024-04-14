"use client";

import { useState, useEffect, useContext, createContext } from "react";

interface ThemeContextType {
	mode: string;
	setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState("");

	const handleThemeChange = () => {
		document.documentElement.classList.add(mode === "light" ? "dark" : "light");
	};

	useEffect(() => {
		handleThemeChange();
	}, [mode]);

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
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
