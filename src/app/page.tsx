import { Background } from "@/components/background";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Background />
      <Header />
      <Footer />
    </main>
  );
}
