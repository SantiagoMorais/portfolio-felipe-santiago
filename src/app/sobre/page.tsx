import { Background } from "@/components/background";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { AboutContent } from "./components/about-content";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <Background />
      <AboutContent />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
