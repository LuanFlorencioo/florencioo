import Image, { type ImageProps } from "next/image";

export function ProjectCardCover(props: ImageProps) {
	return (
		<Image
			{...props}
			fill
			className="w-full h-full object-cover object-center rounded-md"
		/>
	);
}
