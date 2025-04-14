import { ContentContainer } from "@/components/container";

import { AuroraBackground } from "./aurora-background";
import { FAQs } from "./faqs";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";

export const Content = () => (
  <ContentContainer>
    <Hero />
    <Portfolio />
    <FAQs />
    <AuroraBackground />
  </ContentContainer>
);
