import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

export const fonts = [geistSans, geistMono].map((f) => f.variable).join(" ");
