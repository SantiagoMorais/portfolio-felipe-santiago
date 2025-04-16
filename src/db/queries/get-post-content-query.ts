export const GET_POST_CONTENT_QUERY = `
  query GetCurrentlyPostQuery($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      subtitle
      createdAt
      updatedAt
      date
      image {
        url
      }
      videoUrl
      text {
        html
      }
      author {
        name
        description
        avatar {
          url
        }
        linkedin
        github
      }
    }
  }
`;
