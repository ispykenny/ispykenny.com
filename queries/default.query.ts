import { gql } from "graphql-request";

export const DefaultTemplateQuery = gql`
  query DefaultTemplateQuery($slug: String!) {
    page(id: $slug, idType: URI) {
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
