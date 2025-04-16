export const GET_POSTS_QUERY = `
  query GetPostsQuery($after: String, $first: Int!) {
    postsConnection(after: $after, first: $first) {
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
