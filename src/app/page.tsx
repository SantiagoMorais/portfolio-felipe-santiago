import { Background } from "@/components/background";

import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Background />
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
