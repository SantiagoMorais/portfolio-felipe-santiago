"use client";
import "./index.css";

import { useEffect } from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { addVerticalAnimation } from "@/utils/add-vertical-animation";
import { iconsList } from "@/utils/content-coming-soon-icons-list";

export const ContentComingSoon = () => {
  useEffect(() => {
    addVerticalAnimation();
  }, []);

  return (
    <section className="w-full max-w-(--breakpoint-lg) space-y-4">
      <Card className="relative overflow-hidden">
        <CardTitle className="text-muted-foreground text-center text-2xl font-semibold md:text-3xl">
          Em Breve
        </CardTitle>
        <CardContent className="relative flex justify-center gap-8">
          <div
            className="vertical-scroller h-60 max-w-16 md:h-48"
            data-direction="up"
          >
            <ul className="scroller__inner flex flex-col gap-4 py-4">
              {iconsList.map((Icon, i) => (
                <li
                  key={i}
                  className="bg-muted border-muted-foreground flex items-center justify-center rounded-sm border p-2"
                >
                  <Icon className="text-primary size-10" />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="vertical-scroller h-60 max-w-16 md:h-48"
            data-direction="down"
          >
            <ul className="scroller__inner flex flex-col gap-4 py-4">
              {iconsList.map((Icon, i) => (
                <li
                  key={i}
                  className="bg-muted border-muted-foreground flex items-center justify-center rounded-sm border p-2"
                >
                  <Icon className="text-primary size-10" />
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
