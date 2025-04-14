import Image from "next/image";

import aboutUsImage from "@/assets/imgs/about-image.jpg";

import { AboutUsCards } from "./about-us-cards";
import { AboutUsContent } from "./about-us-content";

export const AboutUs = () => (
  <section className="flex max-w-(--breakpoint-xl) flex-col gap-2 md:flex-row md:gap-10">
    <h2 className="mb-6 block text-center text-3xl font-semibold md:hidden md:text-start">
      Quem é Felipe?
    </h2>
    <div className="sticky h-[90dvw] w-full rounded-xl md:top-[calc(var(--header-height)+30px)] md:h-150 md:max-h-[calc(100vh-var(--header-height))] md:w-[40dvw] md:max-w-100">
      <div className="to-background absolute bottom-0 left-0 z-10 h-1/4 w-full bg-linear-to-b from-transparent md:hidden" />
      <Image
        fill
        src={aboutUsImage}
        alt="Sobre nós"
        className="rounded-t-lg object-cover md:rounded-lg"
      />
    </div>
    <article className="flex-1 space-y-8 pt-4">
      <AboutUsContent />
      <AboutUsCards />
    </article>
  </section>
);
