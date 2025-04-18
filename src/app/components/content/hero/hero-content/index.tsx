"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { componentsRoutesId } from "@/utils/routes";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letter = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const HeroContent = ({ whatsAppLink }: { whatsAppLink: string }) => (
  <section className="flex w-full min-w-60 flex-1 flex-col justify-center gap-10 md:h-screen md:max-h-[768px] md:min-h-[50dvh] md:min-h-fit md:min-w-80">
    <motion.h2
      className="leading-loose"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {"Olá, eu sou".split("").map((char, index) => (
        <motion.span
          key={`text-${index}`}
          variants={letter}
          className="text-2xl font-semibold md:text-4xl"
        >
          {char}
        </motion.span>
      ))}
      <br />
      <motion.strong className="from-secondary to-primary bg-linear-to-r bg-clip-text text-4xl text-transparent md:text-6xl">
        {"Felipe Santiago".split("").map((char, index) => (
          <motion.span key={`strong-${index}`} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.strong>
      <br />
      {"Desenvolvedor Fullstack".split("").map((char, index) => (
        <motion.span
          key={`text-${index}`}
          variants={letter}
          className="text-2xl font-semibold md:text-4xl"
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-muted-foreground max-w-(--breakpoint-lg) text-justify text-lg md:text-start"
    >
      Desenvolvedor web com foco em React, Next e desenvolvimento de APIs Node
      com TypeScript. Veja meus projetos no meu portfólio e entre em contato
      comigo pelas minhas redes!
    </motion.h3>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex w-full flex-wrap gap-4"
    >
      <Link
        href={whatsAppLink}
        target="_blank"
        className="w-fit flex-1 md:flex-none"
      >
        <Button className="w-full min-w-40 md:w-fit md:px-4 md:py-6 md:text-lg">
          Entre em contato
        </Button>
      </Link>
      <Link
        href={componentsRoutesId.aboutUs.path}
        className="w-fit flex-1 md:flex-none"
      >
        <Button
          variant="outline"
          className="hover:border-primary hover:text-primary w-full min-w-40 duration-300 hover:border-1 md:w-fit md:px-4 md:py-6 md:text-lg"
        >
          Sobre mim
        </Button>
      </Link>
    </motion.div>
  </section>
);
