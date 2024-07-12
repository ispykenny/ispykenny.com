import { Image } from './global.types';

export type AboutPageProps = {
  pageBy: {
    title: string;
    content: string;
    aboutPage: {
      mainImage: Image;
    };
  };
};
