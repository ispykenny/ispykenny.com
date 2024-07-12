import { gql } from 'graphql-request';

export const HomeTemplateQuery = gql`
  query HomeTemplateQuery($slug: String!) {
    pageBy(uri: $slug) {
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
      homePage {
        heroTitle
        heroCopy
        projects {
          title
          content
          link
          image {
            node {
              sourceUrl
            }
          }
        }
      }
      workexp {
        workExperience {
          company
          products {
            productName
            productSlug
            productDuration
            productImage {
              node {
                sourceUrl
              }
            }
          }
          role {
            title
          }
        }
      }
    }
    posts {
      nodes {
        excerpt
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
