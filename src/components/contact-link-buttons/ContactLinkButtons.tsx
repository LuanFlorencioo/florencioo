import Link from "next/link";
import {
	SiDiscord,
	SiGithub,
	SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import { Clipboard } from "@/components/clipboard";
import { discordUser } from "@/data/personal-data";
import { githubLink, linkedinLink, whatsappLink } from "@/data/links";

export function ContactLinkButtons() {
	return (
		<div className="w-max flex items-center justify-center gap-4">
			<Button
				variant="link"
				size="icon"
				className="hover:bg-[#25D366] hover:text-white"
				asChild
			>
				<Link href={whatsappLink} target="_blank">
					<SiWhatsapp />
				</Link>
			</Button>

			<Button
				variant="link"
				size="icon"
				className="hover:bg-[#181717] hover:text-white"
				asChild
			>
				<Link href={githubLink} target="_blank">
					<SiGithub />
				</Link>
			</Button>

			<Button
				variant="link"
				size="icon"
				className="hover:bg-[#0076b2] fill-primary hover:fill-white"
				asChild
			>
				<Link href={linkedinLink} target="_blank">
					<svg viewBox="0 0 128 128">
						<path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z">
							<title>LinkedIn Icon</title>
						</path>
					</svg>
				</Link>
			</Button>

			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="link"
						size="icon"
						className="hover:bg-[#5865F2] hover:text-white"
					>
						<SiDiscord />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="bg-muted/10 border-none">
					<Clipboard value={discordUser}>
						<SiDiscord /> {discordUser}
					</Clipboard>
				</PopoverContent>
			</Popover>
		</div>
	);
}
