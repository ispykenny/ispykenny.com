import { Container, Heading } from "@/components";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Arrow } from "@/icons";
import { PostNode } from "@/types";

type Props = {
  blogs: PostNode[];
  className?: string;
};

export const Articles = ({ blogs, className }: Props) => {
  return (
    <section className={className}>
      <Container>
        <Heading sizeVariant="sm" tag="p">
          Articles
        </Heading>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => {
            return (
              <div
                className="hasShadow  p-6 rounded-2xl w-full flex flex-col gap-6"
                key={index}
              >
                <div className="aspect-video overflow-hidden w-full relative bg-gray-100 rounded-xl hasShadow  asp">
                  <Link href={`blogs/${blog.slug}`} className="p-6 ">
                    <Image
                      src={blog?.featuredImage?.node.sourceUrl || ""}
                      alt={blog.title || ""}
                      height={200}
                      width={200}
                      className="object-cover inset-0 absolute h-full w-full"
                    />
                  </Link>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-lg">{blog.title}</p>
                    <p>Published on: {dayjs(blog.date).format("MM.DD.YYYY")}</p>
                  </div>
                  <div
                    className="text-base md:text-base mt-2 [&>a]:mt-8 [&>a]:inline-block leading-7 line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: blog.excerpt || "",
                    }}
                  />
                  <Link
                    href={`blogs/${blog.slug}`}
                    className="inline-flex mt-3 items-center gap-2 font-bold"
                  >
                    Read more{" "}
                    <span className="sr-only">about {blog.title}</span>
                    <Arrow />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
