"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function Clipboard({
	children,
	value,
}: {
	children: React.ReactNode;
	value: string;
}) {
	const [isCopied, setIsCopied] = useState(false);

	const handleClickButton = async () => {
		try {
			if (!isCopied) {
				await navigator.clipboard.writeText(value.trim());
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			}
		} catch (error) {
			console.log("Falha ao copiar!");
		}
	};

	return (
		<div className="w-full flex items-center justify-center">
			<p className="text-sm text-primary-foreground">
				<span className="w-max h-10 px-4 bg-secondary/20 dark:bg-secondary/50 rounded-l-md flex items-center gap-2">
					{children}
				</span>
			</p>

			<button
				type="button"
				onClick={handleClickButton}
				className="size-10 bg-secondary/50  dark:bg-secondary rounded-r-md flex items-center justify-center text-primary-foreground dark:text-foreground"
			>
				{isCopied ? <Check size={16} /> : <Copy size={16} />}
			</button>
		</div>
	);
}
