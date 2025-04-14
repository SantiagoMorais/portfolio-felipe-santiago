export const ContentContainer = ({ children }: React.PropsWithChildren) => (
  <section className="flex h-auto w-full max-w-(--breakpoint-2xl) flex-col items-center gap-10 p-4 py-8 md:gap-20">
    {children}
  </section>
);
