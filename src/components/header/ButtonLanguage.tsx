import { Globe } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

export function ButtonLanguage() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Globe />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<Link href="/" locale="en">
					<DropdownMenuItem>English</DropdownMenuItem>
				</Link>

				<Link href="/" locale="pt">
					<DropdownMenuItem>Português</DropdownMenuItem>
				</Link>

				<Link href="/" locale="es">
					<DropdownMenuItem>Español</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
