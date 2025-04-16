export interface IPostsData {
  postsConnection: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
    edges: Array<{
      node: {
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
    }>;
  };
}
