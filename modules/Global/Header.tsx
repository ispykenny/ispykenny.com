import { ActionLink, Container, Heading } from '@/components';
import { Arrow } from '@/icons';
import { HeaderProps } from '@/types';

export const Header = ({ heroTitle, heroCopy }: HeaderProps) => {
	if (!heroTitle || !heroCopy) return null;
	return (
		<section className="min-h-[calc(10vh)] w-full items-center justify-between flex mb-10 pb-20">
			<Container>
				<div className="sm:max-w-lg md:max-w-screen-sm lg:max-w-screen-md">
					<Heading sizeVariant="lg" tag={'h1'}>
						{heroTitle}
					</Heading>
				</div>
				<div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md">
					<div
						className="text-base md:text-lg mt-4 [&>a]:mt-8 [&>a]:inline-block leading-7"
						dangerouslySetInnerHTML={{ __html: heroCopy }}
					/>
					<div className="mt-8 flex flex-col md:flex-row gap-8">
						<ActionLink
							href="/about"
							theme="secondary"
							text="About me"
						/>
						<ActionLink
							href="/contact"
							theme="primary"
							text="Contact me"
							icon={<Arrow />}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
