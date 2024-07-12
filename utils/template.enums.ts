export enum Template {
  Home = 'Home',
  About = 'About',
  Blog = 'Blog',
  Contact = 'Contact',
  Connect = 'Connect',
  Default = 'Default',
  undefined = 'undefined',
}

export type TemplateQueryMap = {
  [key in Template]: string;
};
