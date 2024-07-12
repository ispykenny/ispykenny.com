import { Header, WorkExperience, MyProducts, Articles } from "@/modules";
import { HomePageProps } from "@/types";

export const HomeTemplate = ({ data }: { data: HomePageProps }) => {
  const { pageBy: pageData, posts } = data;

  return (
    <div>
      <Header
        heroCopy={pageData.homePage.heroCopy}
        heroTitle={pageData.homePage.heroTitle}
      />
      <WorkExperience
        className="bg-white py-16 my-16 text-secondary-color"
        workExperience={pageData.workexp.workExperience}
      />
      <MyProducts projects={pageData.homePage.projects} className="pb-40" />
      {data.posts && <Articles blogs={posts.nodes} className="pb-40" />}
    </div>
  );
};
