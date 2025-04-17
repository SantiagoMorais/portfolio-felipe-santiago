import { MessageCircleCode } from "lucide-react";
import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";

import { ILogoProps } from "@/core/interfaces/logo-props";

export const Logo = ({ className, iconClassName, padding }: ILogoProps) => (
  <Link
    href="/"
    className={twMerge(
      "flex cursor-pointer duration-300 hover:scale-105",
      padding
    )}
  >
    <p
      className={twJoin(
        "text-foreground mt-2 text-2xl font-extrabold text-nowrap transition-colors duration-150 select-none first-letter:text-4xl",
        className
      )}
    >
      FS
      <span className="bg-secondary ml-1 inline-block size-1.5 rounded-full" />
    </p>
    <MessageCircleCode
      className={`transition-colors duration-150 ${twMerge("text-foreground size-12 duration-0", iconClassName)}`}
    />
  </Link>
);
