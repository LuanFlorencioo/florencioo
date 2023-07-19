import fonts from "@/fonts";
import { Header } from "@/components";
import { NavbarProvider } from "@/contexts";

export default function Home() {
  const { inter, lexend } = fonts;

  return (
    <main className={`w-full min-h-screen relative ${inter.className} ${lexend.className} top-0 left-0 z-20`}>
      <NavbarProvider>
        <Header />
      </NavbarProvider>
    </main>
  )
}
