export type Image = {
	node: {
		sourceUrl: string;
		altText: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};

export type PostNode = {
	excerpt: string;
	slug: string;
	title: string;
	date: string;
	featuredImage: Image;
};

export type BasicPageProps = {
	pageBy: {
		title: string;
		content: string;
	};
};
