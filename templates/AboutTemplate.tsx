import { Container, DefaultContent, Heading } from '@/components';
import { AboutPageProps } from '@/types';
import Image from 'next/image';

export const AboutTemplate = ({ data }: { data: AboutPageProps }) => {
	const { pageBy: pageData } = data;
	return (
		<Container>
			<div className="max-w-[900px] flex flex-col-reverse md:flex-col justify-between  gap-8 md:gap-10 ">
				<div className="md:w-full max-w-[700px]">
					<Heading sizeVariant="md" tag="h1">
						{pageData.title}
					</Heading>
					<DefaultContent
						className="mt-4"
						content={pageData.content}
					/>
				</div>
				<div className="md:w-full">
					<div className="rounded-2xl overflow-hidden hasShadow  relative">
						<Image
							priority
							className="object-cover"
							src={pageData.aboutPage.mainImage.node.sourceUrl}
							height={
								pageData.aboutPage.mainImage.node.mediaDetails
									.height
							}
							width={
								pageData.aboutPage.mainImage.node.mediaDetails
									.width
							}
							alt={
								pageData.aboutPage.mainImage.node.altText || ''
							}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};
