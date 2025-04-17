export const GET_POSTS_SEARCHED_BY_TITLE_QUERY = `
  query GetPostsByTitle($title: String!, $after: String, $first: Int!) {
    postsConnection(
      where: { title_contains: $title }
      after: $after
      first: $first
    ) {
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
