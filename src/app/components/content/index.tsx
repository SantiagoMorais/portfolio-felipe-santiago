import { AuroraBackground } from "./aurora-background";
import { FAQs } from "./faqs";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-10 p-4 py-8 md:gap-20">
    <Hero />
    <Portfolio />
    <FAQs />
    <AuroraBackground />
  </section>
);
