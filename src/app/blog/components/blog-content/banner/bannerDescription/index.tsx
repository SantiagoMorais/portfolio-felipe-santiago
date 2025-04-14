import { Logo } from "@/components/logo";

export const BannerDescription = () => (
  <div className="z-20 flex h-fit w-full flex-col items-center justify-center p-10 py-20 sm:h-[30dvw]">
    <h2 className="text-large mb-5 font-extrabold tracking-widest text-white uppercase sm:text-[3.2dvw]">
      Blog
    </h2>
    <div className="shadow-allAround mb-8 flex size-[12rem] items-center justify-start rounded-full border-2 border-white bg-black/40 p-10 shadow-white sm:size-[12dvw] sm:justify-center sm:border-[.2dvw]">
      <Logo
        iconClassName="size-10 sm:size-[2.8dvw]"
        className="text-4xl text-white first-letter:text-6xl sm:text-[2.8dvw] sm:first-letter:text-[4dvw]"
      />
    </div>
    <h3 className="text-medium mb-2 text-center leading-tight font-bold text-white sm:text-[1.6dvw]">
      Felipe Santiago <span className="text-primary">Desenvolvedor Web</span>
    </h3>
    <h3 className="text-small text-center font-normal text-white sm:text-[1.15dvw]">
      Acesse conteúdos essenciais sobre desenvolvimento web e programação.
    </h3>
  </div>
);
