import { CardsList } from "./cards-list";

export const CoreTechnologies = () => (
  <section className="flex max-w-(--breakpoint-2xl) flex-col items-center gap-8">
    <h2 className="max-w-(--breakpoint-md) text-center text-3xl font-semibold md:text-4xl">
      Soluções web eficientes para seu negócio
    </h2>
    <p className="text-muted-foreground mb-8 max-w-(--breakpoint-md) text-center text-base">
      Foco em soluções web que utilizam ferramentas modernas, garantindo sites
      rápidos, seguros e visualmente marcantes que conectam negócios ao futuro.
    </p>
    <CardsList />
  </section>
);
