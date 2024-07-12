import { Articles } from "@/modules";
import { BlogPageProps } from "@/types";
export const BlogTemplate = ({ data }: { data: BlogPageProps }) => {
  const { posts } = data;
  return <Articles blogs={posts.nodes} />;
};
