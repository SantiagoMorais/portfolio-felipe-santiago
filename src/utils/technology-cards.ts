import { StaticImageData } from "next/image";

import nextjsLogo from "@/assets/icons/nextjs.png";
import nodeLogo from "@/assets/icons/node.png";
import dbLogo from "@/assets/icons/postgresql.png";
import reactLogo from "@/assets/icons/react.png";
import tailwindLogo from "@/assets/icons/tailwind.png";
import typescriptLogo from "@/assets/icons/typescript.png";

export interface ITechnologyCard {
  image: StaticImageData;
  title: string;
  content: string;
}

export const technologyCards: ITechnologyCard[] = [
  {
    image: nextjsLogo,
    title: "Next.js",
    content:
      "Desenvolve sites rápidos e otimizados, entregando resultados notáveis.",
  },
  {
    image: reactLogo,
    title: "React",
    content: "Criação de sites modernos e interativos, destacando seu negócio.",
  },
  {
    image: typescriptLogo,
    title: "TypeScript",
    content:
      "Aprimora o código, garantindo segurança e performance para um site confiável.",
  },
  {
    image: nodeLogo,
    title: "Node.js",
    content: `APIs que conectam sites a funções importantes como pagamentos e agendamentos.`,
  },
  {
    image: dbLogo,
    title: "SQL & NoSQL",
    content:
      "Sistemas para guardar e gerenciar suas informações (como clientes e produtos).",
  },
  {
    image: tailwindLogo,
    title: "Tailwind",
    content:
      "Cria designs modernos, responsivos e atraentes, adaptados a qualquer dispositivo.",
  },
];
