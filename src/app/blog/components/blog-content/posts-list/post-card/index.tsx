import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const PostCard = ({
  postData,
}: {
  postData: {
    id: string;
    title: string;
    subtitle?: string;
    image: {
      url: string;
    };
    author: {
      name: string;
    };
  };
}) => (
  <Link href={`/blog/${postData.id}`} className="w-full">
    <Card className="h-full w-full cursor-pointer gap-0 overflow-hidden rounded-lg pt-0 pb-2 duration-300 hover:scale-95 hover:opacity-80">
      <CardHeader className="relative h-80 w-full md:h-60">
        <Image
          alt={postData.title}
          fill
          src={postData.image.url}
          className="rounded-b-lg object-cover"
        />
      </CardHeader>
      <CardContent className="w-full p-2">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="group w-full cursor-default space-y-2">
              <CardTitle className="line-clamp-2 w-full text-lg group-hover:underline">
                {postData.title}
              </CardTitle>
              {postData.subtitle && (
                <p className="line-clamp-2 text-start group-hover:underline">
                  {postData.subtitle}
                </p>
              )}
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold">{postData.title}</h2>
            {postData.subtitle && <p>{postData.subtitle}</p>}
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  </Link>
);
