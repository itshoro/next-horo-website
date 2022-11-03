import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({ external = false, href, children }: LinkArgs) => {
  return !external ? (
    <NextLink
      href={href}
      className="relative group text-[#F686B5] animated-underline"
    >
      <span className="isolate">
        <span>{children}</span>
      </span>
    </NextLink>
  ) : (
    <a href={href} className="relative group text-[#F686B5] animated-underline">
      <span className="isolate">
        <span>
          {children}
          <span className="text-current">&nbsp;&#8599;</span>
        </span>
      </span>
    </a>
  );
};

type LinkArgs = {
  external?: boolean;
  href: string;
  children: ReactNode;
};

export { Link };
