import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const Link = ({ href, children }: LinkArgs) => {
  const router = useRouter();
  const isCurrentPage = router?.pathname === href;

  return (
    <NextLink href={href}>
      <a
        className={[
          "block font-medium text-base md:text-sm px-3 border-t rounded py-1 my-2 md:my-0 hover:text-white active:text-foreground transition-colors duration-500",
          isCurrentPage
            ? "text-foreground bg-white/10 border-white/10"
            : "text-secondary border-transparent",
        ]
          .filter((x) => x)
          .join(" ")}
      >
        {isCurrentPage && <span className="sr-only">Current Page: </span>}
        {children}
      </a>
    </NextLink>
  );
};

export type LinkArgs = {
  href: string;
  children: ReactNode;
};

export { Link };
