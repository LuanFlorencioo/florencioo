import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Home");

	return <h1>Hello World!</h1>;
}
