import { Background } from "@/components/background";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Content } from "./components/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <Background />
      <Content />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
