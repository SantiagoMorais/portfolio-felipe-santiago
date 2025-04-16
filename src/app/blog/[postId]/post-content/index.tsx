import parse from "html-react-parser";
import Image from "next/image";

import { ContentContainer } from "@/components/content-container";
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
        <div className="w-full px-5 pb-10 md:px-20 md:pb-20" id="postContent">
          <div className="relative h-60 max-w-full md:h-96">
            <Image
              fill
              src={post.image.url}
              alt={`Imagem do post ${post.title}`}
              id="postBanner"
              className="object-contain"
            />
          </div>
          {post.subtitle && <h3>{post.subtitle}</h3>}
          {post.text.html && parse(post.text.html)}
        </div>
        <p className="bg-secondaryPanel text-medium text-textColor rounded-md px-4 py-2 text-center font-medium">
          Post criado/atualizado em:{" "}
          <span className="text-primary">
            {formatDateToPTBRFormat(
              post.updatedAt ? post.updatedAt : post.createdAt
            )}
          </span>
        </p>
      </div>
      <PostAuthor data={post.author} />
    </ContentContainer>
  );
};
