import { gql } from 'graphql-request';

export const BlogTemplateQuery = gql`
	query {
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
