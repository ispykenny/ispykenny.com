export const fetchPageData = async (slug: string) =>
	fetch(`http://localhost:3000/api/get-page-data/${slug}`, {
		next: {
			tags: ['cache'],
		},
	});
