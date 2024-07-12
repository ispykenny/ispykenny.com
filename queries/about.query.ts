import { gql } from "graphql-request";

export const AboutTemplateQuery = gql`
  query AboutTemplateQuery($slug: String!) {
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
      aboutPage {
        mainImage {
          node {
            mediaDetails {
              height
              width
            }
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
