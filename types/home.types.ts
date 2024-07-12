import { Image, PostNode } from "./global.types";

export type HeaderProps = {
  heroTitle: string;
  heroCopy: string;
};

export type Project = {
  title: string;
  content: string;
  link: string;
  image: Image;
};

export type Product = {
  productName: string;
  productSlug: string;
  productDuration: string;
  productImage: Image;
};

export type WorkExperience = {
  company: string;
  products: Product[];
  role: {
    title: string;
  }[];
};

export type WorkExpProps = {
  workexp: {
    workExperience: WorkExperience[];
  };
};

export type Posts = {
  nodes: PostNode[];
};

export type HomePageProps = {
  pageBy: {
    homePage: {
      heroTitle: string;
      heroCopy: string;
      projects: Project[];
    };
    workexp: {
      workExperience: WorkExperience[];
    };
  };
  posts: Posts;
};
