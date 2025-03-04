"use client";

import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import {
	Carousel as C,
	CarouselItem as CI,
	CarouselContent,
} from "@/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export function Carousel({
	children,
	autoScrollOpts,
}: {
	children: React.ReactNode;
	autoScrollOpts: AutoScrollOptionsType;
}) {
	return (
		<C
			opts={{
				align: "start",
				loop: true,
				dragFree: true,
			}}
			plugins={[AutoScroll(autoScrollOpts)]}
			className="w-full"
		>
			<CarouselContent>{children}</CarouselContent>
		</C>
	);
}

export function CarouselItem({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CI className="basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/8 p-4">
			{children}
		</CI>
	);
}
