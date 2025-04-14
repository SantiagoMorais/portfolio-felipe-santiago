import { AuroraBackground } from "./aurora-background";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-10 p-4 py-8">
    <Hero />
    <Portfolio />
    <AuroraBackground />
  </section>
);
