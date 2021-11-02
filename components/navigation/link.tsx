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
          "block font-medium text-base md:text-sm px-3 rounded py-1 my-2 md:my-0 hover:bg-white/10 focus:bg-white/10 active:bg-white/[.15] active:text-foreground transition-colors",
          isCurrentPage
            ? "text-foreground bg-white/10 border-t border-white/10"
            : "text-secondary",
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
