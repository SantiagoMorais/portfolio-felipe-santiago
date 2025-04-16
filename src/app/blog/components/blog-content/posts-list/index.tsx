import { IPostsData } from "@/core/interfaces/get-posts-query";
import { getPosts } from "@/db/functions/get-posts";
import { GET_POSTS_QUERY } from "@/db/queries/get-posts-query";

export const PostsList = async () => {
  const { postsConnection } = await getPosts<IPostsData>({
    first: 10,
    query: GET_POSTS_QUERY,
  });

  return (
    <section>
      <div>
        {postsConnection.edges.map(({ node }) => (
          <li key={node.id}>{node.title}</li>
        ))}
      </div>
    </section>
  );
};
