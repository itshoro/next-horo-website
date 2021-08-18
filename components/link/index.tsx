import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({
  external = false,
  underline = true,
  href,
  children,
}: LinkArgs) => {
  const className = [
    "font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-sm text-white focus:bg-white/10 hover:bg-white/10 transition-all",
    underline && "underline",
  ]
    .filter((x) => x)
    .join(" ");

  return external ? (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

type LinkArgs = {
  external: boolean;
  underline: boolean;
  href: string;
  children: ReactNode;
};

export { Link };
