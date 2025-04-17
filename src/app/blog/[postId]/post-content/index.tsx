import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

import { ContentContainer } from "@/components/content-container";
import { Button } from "@/components/ui/button";
import { IPostContentQuery } from "@/core/interfaces/post-content-query";
import { getPostContent } from "@/db/functions/get-post-content";
import { GET_POST_CONTENT_QUERY } from "@/db/queries/get-post-content-query";
import { formatDateToPTBRFormat } from "@/utils/format-date-to-pt-br-format";

import { PostAuthor } from "./post-author";

export const PostContent = async ({ postId }: { postId: string }) => {
  const { post } = await getPostContent<IPostContentQuery>({
    query: GET_POST_CONTENT_QUERY,
    id: postId,
  });

  return (
    <ContentContainer>
      <div className="flex h-full w-full flex-col items-center gap-10">
        <h2 className="text-foreground mx-5 px-8 text-center text-2xl font-bold first-letter:capitalize md:my-5 md:text-4xl">
          {post.title}
        </h2>
        <div className="w-full px-5 pb-10 md:px-20" id="postContent">
          <div className="relative w-full">
            <Image
              src={post.image.url}
              alt={`Imagem do post ${post.title}`}
              width={1200}
              height={675}
              className="h-auto max-h-20 w-full object-contain md:max-h-24"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          {post.subtitle && <h3>{post.subtitle}</h3>}
          {post.text.html && parse(post.text.html)}
        </div>
        <p className="bg-secondaryPanel text-medium text-textColor rounded-md text-center font-medium">
          Post criado/atualizado em:{" "}
          <span className="text-primary">
            {formatDateToPTBRFormat(
              post.updatedAt ? post.updatedAt : post.createdAt
            )}
          </span>
        </p>
        <Link href="/blog">
          <Button className="group space-x-2">
            <FontAwesomeIcon
              icon={faUndo}
              className="duration-300 group-hover:scale-110 group-hover:rotate-[-360deg]"
            />
            Retornar
          </Button>
        </Link>
      </div>
      <PostAuthor data={post.author} />
    </ContentContainer>
  );
};
