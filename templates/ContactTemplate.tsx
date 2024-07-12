import { Container, Heading } from "@/components";
import { ContactForm } from "@/modules";
import { BasicPageProps } from "@/types";

export const ContactTemplate = ({ data }: { data: BasicPageProps }) => {
  return (
    <section>
      <Container>
        <div className="text-center">
          <Heading sizeVariant="md" tag="h1">
            {data.pageBy.title}
          </Heading>
          <div className="mt-4 max-w-[800px] m-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: data.pageBy.content,
              }}
            />
          </div>
        </div>
        <div className="mt-4 max-w-2xl m-auto py-4 px-3 md:px-8 bg-primary-color">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};
