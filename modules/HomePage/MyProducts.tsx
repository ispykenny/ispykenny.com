import { ActionLink, Container, DefaultContent, Heading } from '@/components';
import { Arrow } from '@/icons';
import { Project } from '@/types';
import Image from 'next/image';

export const MyProducts = ({
	className,
	projects,
}: {
	className?: string;
	projects: Project[];
}) => {
	return (
		<section className={className}>
			<Container>
				<Heading sizeVariant="sm" tag="p">
					My Startups
				</Heading>
				{projects.map((project, index: number) => (
					<div
						key={index}
						className="mt-10 flex flex-col-reverse md:flex-row md:p-10 gap-10 items-center p-6 hasShadow rounded-2xl"
					>
						<div className="md:w-1/2">
							<p className="text-2xl font-bold">
								{project.title}
							</p>
							<DefaultContent
								className={''}
								content={project.content}
							/>
							<div className="block md:inline-block mt-10">
								<ActionLink
									href={project.link}
									theme="primary"
									text="View project"
									isExternal
									icon={<Arrow />}
								/>
							</div>
						</div>
						<div className="md:w-2/3 hasShadow rounded-2xl overflow-hidden">
							<Image
								src={project.image.node.sourceUrl}
								width={1920}
								height={1080}
								alt="Preview image"
							/>
						</div>
					</div>
				))}
			</Container>
		</section>
	);
};
