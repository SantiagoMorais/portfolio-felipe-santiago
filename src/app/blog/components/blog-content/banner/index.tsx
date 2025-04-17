import Image from "next/image";

import bannerImage from "@/assets/imgs/banner-image.webp";

export const Banner = () => (
  <section className="shadow-foreground/20 relative flex h-fit w-full flex-col gap-8 overflow-hidden rounded-lg bg-black p-8 py-12 shadow-lg md:flex-row">
    <Image
      fill
      className="absolute object-cover object-center opacity-40"
      src={bannerImage}
      alt="Notebook"
    />
    <article className="z-10 flex flex-1 flex-col gap-2 md:min-h-60">
      <div className="space-y-2">
        <h2 className="text-2xl text-white">Blog de Tecnologia</h2>
        <p className="max-w-80 text-sm leading-tight text-white">
          Acesse conteúdos essenciais sobre desenvolvimento web e programação.
        </p>
      </div>
      <p className="mt-5 text-sm leading-tight text-white md:mt-auto">
        Felipe Santiago Desenvolvedor Web
      </p>
    </article>
    <div className="z-10 flex flex-1 justify-end rounded-lg border border-white p-4 md:justify-start">
      <p className="flex h-20 max-w-60 flex-col gap-2 text-sm text-white">
        <span className="rounded-md bg-gray-400 px-1 text-sm">
          #programação
        </span>
        <span className="rounded-md bg-gray-400 px-1 text-sm">#web</span>
        <span className="rounded-md bg-gray-400 px-1 text-sm">#tecnologia</span>
      </p>
    </div>
  </section>
);
