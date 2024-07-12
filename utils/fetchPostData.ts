"use server";

export const fetchPostData = async (slug: string) => {
  const data = await fetch(`http://localhost:3000/api/get-blog-post/${slug}`, {
    next: {
      tags: ["cache"],
    },
  });

  return data;
};
