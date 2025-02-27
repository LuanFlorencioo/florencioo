"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/ui/button";

export function ButtonTheme() {
	const { setTheme, theme } = useTheme();

	const handleChangeTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Button variant="outline" size="icon" onClick={handleChangeTheme}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
}
