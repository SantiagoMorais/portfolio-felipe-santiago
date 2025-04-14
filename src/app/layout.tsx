import "./globals.css";

import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { ThemeTogglerProvider } from "@/contexts/theme-toggler-context";

import { Footer } from "./components/footer";
import { Header } from "./components/header";

const rubik = Rubik({
  variable: "--font-rubik-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio Felipe Santiago",
  description:
    "Sou um desenvolvedor web fullstack com experiência em tecnologias modernas como Next.js, React, Node.js, bancos SQL e NoSQL, Docker e muito mais. " +
    "Meu foco é criar aplicações modernas, escaláveis e otimizadas, para entregar sites e aplicações web responsivas, " +
    "intuitivas e fáceis de manter. Se você busca um profissional para desenvolver seu projeto comigo ou busca um profissional compromissado " +
    "para a sua empresa, estou pronto para transformar suas ideias em realidade. Vamos trabalhar juntos para dar vida aos seus projetos " +
    "ao próximo nível!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} flex flex-col items-center antialiased`}
      >
        <Header />
        <ThemeTogglerProvider>{children}</ThemeTogglerProvider>
        <Footer />
      </body>
    </html>
  );
}
