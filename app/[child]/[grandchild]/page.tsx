// ✨ For now we can just assume these are single blog posts
// ✨ We can add more types and queries later
import { Container, DefaultContent, Heading } from '@/components';
import { fetchPostData } from '@/utils';
import dayjs from 'dayjs';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: { grandchild: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.grandchild;

	// fetch data
	const fetchBlogPost = await fetchPostData(slug);
	const { status, data } = await fetchBlogPost?.json();
	if (status === 404) {
		return {
			title: 'Post not found',
			description: 'This post does not exist',
		};
	}

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: data.seo.title,
		description: data.seo.metaDesc,
		openGraph: {
			images: [
				{
					url: data.seo.opengraphImage.sourceUrl,
				},
				...previousImages,
			],
		},
	};
}
export default async function GrandChildPage({
	params,
}: {
	params: {
		child: string;
		grandchild: string;
	};
}) {
	const fetchBlogPost = await fetchPostData(params.grandchild);
	const { status, data } = await fetchBlogPost?.json();

	if (status === 404) {
		return (
			<Container classes="text-center">
				<Heading sizeVariant="sm" tag="h1">
					Page for{' '}
					<span className="text-blue-500">{params.grandchild}</span>{' '}
					not found
				</Heading>
			</Container>
		);
	}

	return (
		<section>
			<Container>
				<div className="md:max-w-screen-sm lg:max-w-screen-md m-auto pb-10">
					<div className="flex flex-col gap-2 mb-3 font-semibold">
						<p>
							Published on {dayjs(data.date).format('MM.DD.YY')}
						</p>
					</div>
					<Heading sizeVariant="sm" tag="h1">
						{data.title}
					</Heading>
					<DefaultContent className="" content={data.content} />
				</div>
			</Container>
		</section>
	);
}
