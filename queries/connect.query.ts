import { gql } from 'graphql-request';

export const ConnectTemplateQuery = gql`
  query ConnectTemplateQuery($slug: String!) {
    pageBy(uri: $slug) {
      title
      content
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;
