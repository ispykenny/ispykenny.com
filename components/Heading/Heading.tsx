import { ReactNode, createElement } from "react";

type PropTypes = {
  sizeVariant: "sm" | "md" | "lg" | "massive";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: ReactNode;
};

export const Heading = ({ sizeVariant, tag, children }: PropTypes) => {
  const getClasses = () => {
    switch (sizeVariant) {
      case "sm":
        return "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl";
      case "md":
        return "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl";
      case "lg":
        return "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl";
      case "massive":
        return "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl";
    }
  };
  return createElement(
    tag,
    { className: "font-bold  " + getClasses() },
    children,
  );
};
