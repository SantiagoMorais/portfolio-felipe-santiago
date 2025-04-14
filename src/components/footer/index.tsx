import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/utils/social-media-links";

import { RoutesList } from "../header/routes-list";

export const Footer = () => (
  <footer className="mt-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center gap-4 px-4 py-8">
    <Separator />
    <section className="flex w-full flex-col items-center gap-4 py-4 md:flex-row md:justify-between md:px-16">
      <Logo className="size-8" />
      <div className="flex w-full flex-1 flex-col items-center gap-4">
        <p className="text-muted-foreground w-full max-w-80 text-justify text-sm">
          Felipe Santiago é Desenvolvedor Web FullStack, especializado em criar
          sites e sistemas personalizados para ajudar empresas e micronegócios a
          se destacar no digital, com foco em resultados e na experiência do
          usuário.
        </p>
        <ul className="flex gap-2">
          {socialLinks.map(({ icon, url, title }) => (
            <li key={title}>
              <Button variant={"ghost"} asChild>
                <Link href={url} target="_blank">
                  <FontAwesomeIcon icon={icon} />
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <RoutesList className="flex-row flex-wrap justify-center pt-0 md:flex-col" />
    </section>
    <Separator />
    <p className="text-muted-foreground flex text-center">
      © Felipe Santiago - Desenvolvedor Web
    </p>
  </footer>
);
