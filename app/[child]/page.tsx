import { GetSeoQuery } from '@/queries';
import {
	AboutTemplate,
	BlogTemplate,
	ConnectTemplate,
	ContactTemplate,
	HomeTemplate,
} from '@/templates';
import { fetchPageData, gqlClient, Template } from '@/utils';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
	{
		params,
	}: {
		params: {
			child: string;
		};
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.child;

	// fetch data
	const fetchBlogPost = (await gqlClient.request(GetSeoQuery, {
		slug,
	})) as any;

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: fetchBlogPost.pageBy.seo.title,
		description: fetchBlogPost.pageBy.seo?.metaDesc,
		openGraph: {
			images: [
				{
					url: fetchBlogPost.pageBy.seo.opengraphImage.sourceUrl,
				},
				...previousImages,
			],
		},
	};
}

export default async function ChildPage({
	params,
}: {
	params: { child: string };
}) {
	const childSlug = params.child;
	const fetchData = await fetchPageData(childSlug);
	const { data, template } = await fetchData.json();

	switch (template) {
		case Template.About:
			return <AboutTemplate data={data} />;
		case Template.Connect:
			return <ConnectTemplate />;
		case Template.Contact:
			return <ContactTemplate data={data} />;
		case Template.Blog:
			return <BlogTemplate data={data} />;
		default:
			<>Page not found</>;
	}
}
