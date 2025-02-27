import { Geist, Geist_Mono, Nova_Flat } from "next/font/google";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

const novaFlat = Nova_Flat({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-nova-flat",
});

export const fonts = [geistSans, geistMono, novaFlat]
	.map((f) => f.variable)
	.join(" ");
