export const GET_POSTS_QUERY = `
  query GetPostsQuery($after: String, $first: Int!) {
    postsConnection(after: $after, first: $first, orderBy: createdAt_DESC ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          subtitle
          image {
            url
          }
          author {
            name
          }
        }
      }
    }
  }
`;
