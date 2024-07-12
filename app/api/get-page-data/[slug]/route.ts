'use server';
import {
  AboutTemplateQuery,
  BlogTemplateQuery,
  ConnectTemplateQuery,
  ContactTemplateQuery,
  DefaultTemplateQuery,
  HomeTemplateQuery,
} from '@/queries';
import {
  getPageTemplate,
  gqlClient,
  Template,
  TemplateQueryMap,
} from '@/utils';
import { NextResponse } from 'next/server';

type ContextTypes = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, context: ContextTypes) {
  const slug = context.params.slug;

  const pageTemplate = await getPageTemplate(slug);

  const templateQuery: TemplateQueryMap = {
    [Template.About]: AboutTemplateQuery,
    [Template.Blog]: BlogTemplateQuery,
    [Template.Contact]: ContactTemplateQuery,
    [Template.Connect]: ConnectTemplateQuery,
    [Template.Default]: DefaultTemplateQuery,
    [Template.Home]: HomeTemplateQuery,
    [Template.undefined]: HomeTemplateQuery,
  };

  const pageData = await gqlClient.request(
    templateQuery[pageTemplate as Template],
    {
      slug,
    },
  );

  return NextResponse.json({
    status: 200,
    data: pageData,
    template: pageTemplate,
  });
}
