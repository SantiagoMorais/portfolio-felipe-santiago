"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import heroImage from "@/assets/imgs/hero-image.png";

export const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="drop-shadow-secondary relative max-w-120 min-w-60 flex-1 md:min-w-80"
  >
    <Image
      src={heroImage}
      alt="Imagem principal"
      className="h-auto w-full object-contain"
    />
  </motion.div>
);
