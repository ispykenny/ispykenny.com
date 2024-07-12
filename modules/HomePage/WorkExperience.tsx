import Image from 'next/image';

import { Container, Heading, Hr, Tag } from '@/components';
import { WorkExperience as WorkExperienceTypes } from '@/types';

export const WorkExperience = ({
	workExperience,
	className,
}: {
	workExperience: WorkExperienceTypes[];
	className?: string;
}) => {
	return (
		<section className={className}>
			<Container classes="flex flex-col gap-20 xl:justify-between">
				{workExperience?.map((experience, index: number) => (
					<div key={index}>
						<Hr />
						<Heading sizeVariant="sm" tag={'p'}>
							{experience.company}
						</Heading>
						<div className="mt-4 inline-flex flex-col gap-4 md:flex md:flex-row">
							{experience.role.map(
								(role: { title: string }, index: number) => {
									return (
										<Tag text={role.title} key={index} />
									);
								}
							)}
						</div>
						<div className="flex flex-col sm:flex-row gap-10 pt-10">
							{experience?.products.map(
								(product, index: number) => (
									<div
										key={index}
										className="bg-primary-color flex flex-col items-center gap-4 hasShadow px-10 py-6 rounded-3xl"
									>
										<div>
											<Image
												src={
													product.productImage?.node
														?.sourceUrl
												}
												alt={product.productName}
												height={50}
												width={50}
											/>
										</div>
										<div className="text-center">
											<p className="font-bold">
												{product.productName}
											</p>
											<p className="text-xs font-semibold">
												{product.productDuration}
											</p>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				))}
			</Container>
		</section>
	);
};
