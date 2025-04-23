import { useRef } from "react";

import { SheetClose } from "@/components/ui/sheet";
import { IResumesContent } from "@/core/interfaces/resumes-query";
import { IRouteItemProps } from "@/core/interfaces/routes-list-props";

export const ResumeLink = ({
  linksData,
  resumes,
}: {
  resumes: Array<IResumesContent>;
  linksData: Pick<IRouteItemProps, "insideASheet" | "setPosition">;
}) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const { setPosition, insideASheet } = linksData;
  const handleOnMouseEnter = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
      top: ref.current.offsetTop, // the relative position to the father element
      height,
    });
  };

  const link = ({ resume }: { resume: IResumesContent }) => {
    return (
      <a
        className={`inline-block px-3 py-1.5 ${insideASheet ? "text-xl" : "text-base"}`}
        href={resume.document.url}
        target="_blank"
        key={resume.title}
      >
        {resume.title}
      </a>
    );
  };

  return (
    <>
      {resumes.map((resume) => (
        <li
          key={resume.id}
          ref={ref}
          onMouseEnter={handleOnMouseEnter}
          className="relative z-30 block w-fit px-4"
        >
          {insideASheet ? (
            <SheetClose>{link({ resume: resume })}</SheetClose>
          ) : (
            link({ resume: resume })
          )}
        </li>
      ))}
    </>
  );
};
