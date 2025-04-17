import { ContentContainer } from "@/components/content-container";
import { Button } from "@/components/ui/button";
import { whatsAppLink } from "@/utils/whatsApp-link";

import { AuroraBackground } from "./aurora-background";
import { FAQs } from "./faqs";
import { Hero } from "./hero";
import { Portfolio } from "./portfolio";

export const Content = () => (
  <ContentContainer>
    <Hero />
    <Portfolio />
    <FAQs />
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <h2 className="text-foreground text-3xl font-semibold md:text-5xl">
          Pronto para começar?
        </h2>
        <p className="text-muted-foreground max-w-100">
          Construa sites modernos, escaláveis e performáticos comigo para
          impressionar os seus clientes. Leve o seu trabalho para o próximo
          nível hoje!
        </p>
        <Button variant={"default"} asChild>
          <a href={whatsAppLink} target="_blank">
            Entre em contato
          </a>
        </Button>
      </div>
    </AuroraBackground>
  </ContentContainer>
);
