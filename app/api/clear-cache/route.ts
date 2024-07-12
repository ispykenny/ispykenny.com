"use server";

import { gqlClient } from "@/utils";
import { gql } from "graphql-request";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const getAllSlugsToCacheBust = gql`
    {
      pages {
        nodes {
          slug
        }
      }
    }
  `;

  const data = (await gqlClient.request(getAllSlugsToCacheBust)) as {
    pages: { nodes: { slug: string }[] };
  };

  const slugsArray = data?.pages?.nodes.map((node) => node.slug);

  revalidateTag("cache");
  for (const slug of slugsArray) {
    revalidatePath(`/api/get-page-data/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
  });
}
