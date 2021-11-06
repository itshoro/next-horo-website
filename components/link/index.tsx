import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({
  external = false,
  underline = true,
  href,
  children,
}: LinkArgs) => {
  const className = [
    "text-foreground rounded-sm hover:text-foxfire transition-colors delay-75",
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
  external?: boolean;
  underline?: boolean;
  href: string;
  children: ReactNode;
};

export { Link };
