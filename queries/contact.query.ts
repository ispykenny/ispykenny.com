import { gql } from 'graphql-request';

export const ContactTemplateQuery = gql`
	query ContactTemplateQuery($slug: String!) {
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
