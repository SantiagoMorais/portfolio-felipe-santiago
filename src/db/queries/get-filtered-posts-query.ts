export const GET_FILTERED_POSTS_QUERY = `
  query GetFilteredPosts($filter: String!, $after: String, $first: Int!) {
    postsConnection(
      where: { filter_some: { title_contains: $filter } }
      after: $after
      first: $first
      orderBy: createdAt_DESC
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
