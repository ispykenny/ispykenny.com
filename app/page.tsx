import { HomeTemplate } from '@/templates/HomeTemplate';
import { fetchPageData, Template } from '@/utils';

export default async function Home() {
	const fetchData = await fetchPageData('home');
	const { data, template } = await fetchData.json();

	if (template === Template.Home) {
		return <HomeTemplate data={data} />;
	}

	return null;
}
