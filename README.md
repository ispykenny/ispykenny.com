# ispykenny.com

[![ispykenny](https://api.ispykenny.com/wp-content/uploads/2024/07/Screenshot-2024-07-12-at-2.30.45 PM-e1720822021384.png "ispykenny")](http://ispykenny.com 'ispykenny')

### Stack

- Next.js (App Dir): Learn more [Next.js](https://next.js)
- GraphQL for data fetching [WPGraphQL](https://www.wpgraphql.com)
- Tailwind for styling [Tailwind](https://tailwindcss.com/)
- Sendgrid for contact form [Sendgrid](https://sendgrid.com/en-us)

### Examples

---

####Child Routes

Child routes make the `fetchPageData($slug) (path: api/get-page-data/$slug)` request. This request does the following:

It gets the slug template so it can use the associated graphql query

```
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
```

**and the [child]->page.tsx**
will use:

```
export default async function ChildPage({
  params,
}: {
  params: { child: string };
}) {
  const childSlug = params.child;
  const fetchData = await fetchPageData(childSlug);
  const { data, template } = await fetchData.json();

  const templates: { [key: string]: JSX.Element } = {
    [Template.About]: <AboutTemplate data={data} />,
    [Template.Connect]: <ConnectTemplate />,
    [Template.Contact]: <ContactTemplate data={data} />,
    [Template.Blog]: <BlogTemplate data={data} />,
  };

  const TemplateComponent = templates[template] || <>Page not found</>;
  return TemplateComponent;
}
```
