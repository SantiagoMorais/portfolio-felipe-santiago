import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IAuthorInfo } from "@/core/interfaces/author-info";

export const PostAuthor = ({ data }: { data: IAuthorInfo }) => (
  <section className="flex flex-col items-center justify-center gap-8 md:flex-row">
    <div className="border-primary shadow-primary relative h-[60dvw] w-[60dvw] overflow-hidden rounded-full border-2 shadow-md/50 md:h-60 md:w-60">
      <Image
        alt={data.name}
        src={data.avatar.url}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col gap-4">
      <h3 className="text-muted-foreground text-center text-xl font-semibold md:text-start">
        Autor:{" "}
        <strong className="text-foreground font-semibold">{data.name}</strong>
      </h3>
      <p className="bg-muted max-w-120 p-2 text-sm">{data.description}</p>
      <div className="flex justify-center gap-4 md:justify-start">
        {data.github && (
          <Button className="size-fit">
            <a href={data.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="size-6 text-lg" />
            </a>
          </Button>
        )}
        {data.linkedin && (
          <Button className="size-fit">
            <a href={data.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="size-6 text-lg" />
            </a>
          </Button>
        )}
      </div>
    </div>
  </section>
);
