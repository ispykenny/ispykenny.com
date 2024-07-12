import { gql } from 'graphql-request';

export const GetSeoQuery = gql`
	query GetSeoQuery($slug: String!) {
		pageBy(uri: $slug) {
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
