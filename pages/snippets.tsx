import { allSnippets, Snippet } from "contentlayer/generated";
import { GetStaticProps } from "next";
import { FC } from "react";

type SnippetMeta = Omit<Snippet, "type" | "body" | "_id" | "_raw">;

interface SnippetsProps {
  snippets: SnippetMeta[];
}

const Snippets: FC<SnippetsProps> = ({ snippets }) => {
  return (
    <ul>
      {snippets.map((snippet) => (
        <li key={snippet.slug}>{snippet.title}</li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = allSnippets.map(({ title, date, slug }) => ({
    title,
    date,
    slug,
  }));

  return {
    props: {
      snippets,
    },
  };
};

export default Snippets;
