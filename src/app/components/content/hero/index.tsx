"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

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

export const Hero = ({ whatsAppLink }: { whatsAppLink: string }) => (
  <section className="flex min-h-[50dvh] w-full flex-col justify-center gap-10 md:h-screen md:max-h-[768px] md:min-h-fit">
    <motion.h2
      className="text-xl leading-14 md:text-2xl"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {"Olá, eu sou".split("").map((char, index) => (
        <motion.span
          key={`text-${index}`}
          variants={letter}
          className="text-xl font-semibold md:text-2xl"
        >
          {char}
        </motion.span>
      ))}
      <br />
      <motion.strong className="from-secondary to-primary bg-linear-to-r bg-clip-text text-3xl text-transparent md:text-5xl">
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
          className="text-xl font-semibold md:text-2xl"
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-muted-foreground max-w-(--breakpoint-lg) text-lg"
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
      <Link href={whatsAppLink} target="_blank">
        <Button className="md:px-4 md:py-6 md:text-lg">Entre em contato</Button>
      </Link>
      <Button
        variant="outline"
        className="hover:border-primary hover:text-primary duration-300 hover:border-1 md:px-4 md:py-6 md:text-lg"
      >
        Sobre mim
      </Button>
    </motion.div>
  </section>
);
