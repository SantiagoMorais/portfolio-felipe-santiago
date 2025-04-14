import { Background } from "@/components/background";

import { Content } from "./components/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:px-4">
      <Background />
      <Content />
    </main>
  );
}
