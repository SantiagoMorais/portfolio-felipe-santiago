export const GET_PORTFOLIO_BY_CATEGORY = `
  query {
    categories {
      id
      categoryName
      portfolio {
        name
        topics
        htmlUrl
        description
        id
        homePage
        topics
        banner {
          url
        }
      }
    }
  }
`;
