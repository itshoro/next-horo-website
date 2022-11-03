import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const Link = ({ href, children }: LinkArgs) => {
  const router = useRouter();
  const isCurrentPage = router?.pathname === href;

  return (
    <NextLink
      href={href}
      className={[
        "block font-medium text-base md:text-sm px-3 rounded py-1 my-2 md:my-0 hover:text-foreground active:text-foreground transition-colors duration-500",
        isCurrentPage
          ? "text-foreground bg-foreground/5 dark:bg-opacity-10 dark:border-foreground/10"
          : "text-secondary border-transparent",
      ]
        .filter((x) => x)
        .join(" ")}
    >
      {isCurrentPage && <span className="sr-only">Current Page: </span>}
      {children}
    </NextLink>
  );
};

export type LinkArgs = {
  href: string;
  children: ReactNode;
};

export { Link };
