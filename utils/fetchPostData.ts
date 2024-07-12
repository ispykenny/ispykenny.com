"use server";

import { ROUTES } from "./routes";

export const fetchPostData = async (slug: string) => {
  const data = await fetch(`${ROUTES.GET_POST}/${slug}`, {
    next: {
      tags: ["cache"],
    },
  });

  return data;
};
