import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

import { BlogContent } from "./components/blog-content";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Header />
      <BlogContent />
      <Footer />
      <WhatsAppAndScrollButtons />
    </main>
  );
}
