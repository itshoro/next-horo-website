import { Snippet } from "contentlayer/generated";
import { FC, ReactNode } from "react";

interface SnippetLayoutProps {
  snippet: Snippet;
  children: ReactNode;
}

const SnippetLayout: FC<SnippetLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="pt-[15vh]" />
      <section className="prose max-w-[600px] mx-auto">{children}</section>
    </>
  );
};

export default SnippetLayout;
