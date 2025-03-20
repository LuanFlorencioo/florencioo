"use client";

import { Button } from "@/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export function CVButton() {
	const openCV = () => {
		const pdfUrl = "/cv-luanflorencio.pdf";
		window.open(pdfUrl, "_blank");
	};

	return (
		<Button variant="secondary" onClick={openCV}>
			Currículo (CV) <SquareArrowOutUpRight />
		</Button>
	);
}
