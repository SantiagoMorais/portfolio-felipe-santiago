import { whatsAppLink } from "@/utils/whatsApp-link";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export const Hero = () => (
  <section className="flex max-w-(--breakpoint-xl) flex-wrap items-center justify-center gap-10">
    <HeroContent whatsAppLink={whatsAppLink} />
    <HeroImage />
  </section>
);
