import Link from "next/link";
import {
	SiDiscord,
	SiGithub,
	SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Button } from "@/ui/button";
import { LinkedinSVG } from "@/components/linkedin-svg";
import {
	discordLink,
	githubLink,
	linkedinLink,
	whatsappLink,
} from "@/data/links";

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
				className="hover:bg-[#0076b2] group"
				asChild
			>
				<Link href={linkedinLink} target="_blank">
					<LinkedinSVG className="fill-primary group-hover:fill-white" />
				</Link>
			</Button>

			<Button
				variant="link"
				size="icon"
				className="hover:bg-[#5865F2] hover:text-white"
				asChild
			>
				<Link href={discordLink} target="_blank">
					<SiDiscord />
				</Link>
			</Button>
		</div>
	);
}
