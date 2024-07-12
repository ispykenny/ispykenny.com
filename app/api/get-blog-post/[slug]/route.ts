import { PostNode } from '@/types';
import { gqlClient } from '@/utils';
import { gql } from 'graphql-request';
import { NextResponse } from 'next/server';

type ContextTypes = {
	params: {
		slug: string;
	};
};

const postQuery = gql`
	query PostQuery($slug: String!) {
		postBy(slug: $slug) {
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

export async function GET(request: Request, context: ContextTypes) {
	const slug = context.params.slug;

	const data = (await gqlClient.request(postQuery, {
		slug,
	})) as {
		postBy: PostNode;
	};

	if (data.postBy === null) {
		return NextResponse.json({
			status: 404,
		});
	}

	return NextResponse.json({
		status: 200,
		data: data.postBy,
	});
}
