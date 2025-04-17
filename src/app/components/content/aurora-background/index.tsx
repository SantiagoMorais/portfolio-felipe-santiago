export const AuroraBackground = ({ children }: React.PropsWithChildren) => (
  <section className="bg-sidebar relative w-full overflow-hidden rounded-xl py-16 md:py-30">
    <div className="aurora-background absolute inset-0 rounded-3xl" />
    {children}
  </section>
);
