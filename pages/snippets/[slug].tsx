import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import components from "components/MDXComponents";

import { allSnippets, Snippet as SnippetProps } from "contentlayer/generated";
import SnippetLayout from "@/layouts/snippet";

const Snippet: FC<SnippetProps> = (snippet) => {
  const Component = useMDXComponent(snippet.body.code);
  return (
    <SnippetLayout snippet={snippet}>
      <Component components={components} />
    </SnippetLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = allSnippets.find((snippet) => snippet.slug === params?.slug);

  return {
    props: snippet ?? {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allSnippets.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export default Snippet;
