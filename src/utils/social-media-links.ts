import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { env } from "@/env";

import { whatsAppLink } from "./whatsApp-link";

interface SocialLink {
  title: string;
  icon: IconDefinition;
  url: string;
}

export const socialLinks: SocialLink[] = [
  env.LINKEDIN_URL && {
    title: "LinkedIn",
    icon: faLinkedinIn,
    url: env.LINKEDIN_URL,
  },
  env.INSTAGRAM_URL && {
    title: "Instagram",
    icon: faInstagram,
    url: env.INSTAGRAM_URL,
  },
  env.GITHUB_PROFILE_URL && {
    title: "GitHub",
    icon: faGithub,
    url: env.GITHUB_PROFILE_URL,
  },
  {
    title: "WhatsApp",
    icon: faWhatsapp,
    url: whatsAppLink,
  },
  { title: "E-mail", icon: faAt, url: `mailto:${env.EMAIL}` },
].filter((link): link is SocialLink => Boolean(link));
