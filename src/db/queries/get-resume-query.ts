export const GET_RESUMES_QUERY = `
  query GetResumesQuery {
    resumes {
      title
      id
      document {
        url
      }
    }
  }
`;
