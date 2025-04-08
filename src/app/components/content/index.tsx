import { whatsAppLink } from "@/utils/whatsApp-link";

import { Hero } from "./hero";

export const Content = () => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-20 p-4 py-8">
    <Hero whatsAppLink={whatsAppLink} />
  </section>
);
