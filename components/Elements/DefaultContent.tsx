import { cn } from "@/utils";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  content?: string;
  className: string;
};

export const DefaultContent = ({ children, content, className }: Props) => {
  const styles = `[&_p]:text-lg [&_ul_ul]:my-2 [&_a]:font-bold [&_a]:text-blue-500 [&_h2]:text-4xl [&_h2]:font-bold [&_.wp-block-image]:my-8 [&>img]:inline-block [&_ul]:list-disc [&_ul]:pl-8 [&>ol]:list-decimal [&>ol]:pl-4 [&>p]:mt-4 [&>p]:leading-6 [&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2`;

  if (content)
    return (
      <div
        className={cn(styles, className)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );

  return <div className={cn(styles, className)}>{children}</div>;
};
