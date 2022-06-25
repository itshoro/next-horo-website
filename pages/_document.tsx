import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Computer Science Major and aspiring software engineer from Germany. It's all about me, Tim Nelke, trying to share my knowledge and projects."
        />
      </Head>
      <body className="dark:bg-black text-secondary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
