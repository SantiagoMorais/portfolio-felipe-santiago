import { Background } from "@/components/background";

import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <Header />
    </main>
  );
}
