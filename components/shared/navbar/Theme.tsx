import { useTheme } from "@/context/ThemeProvider";

export default function Theme() {
	const { mode, setMode } = useTheme();
	return <div>Theme</div>;
}
