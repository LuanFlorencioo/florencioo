"use client";

import { Button } from "@/ui/button";

export function CVButton({
	children,
}: {
	children: React.ReactNode;
}) {
	const openCV = () => {
		const pdfUrl = "/cv-luanflorencio.pdf";
		window.open(pdfUrl, "_blank");
	};

	return (
		<Button variant="secondary" onClick={openCV}>
			{children}
		</Button>
	);
}
