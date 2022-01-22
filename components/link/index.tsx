import NextLink from "next/link";
import { ReactNode } from "react";

const Link = ({ external = false, href, children }: LinkArgs) => {
  return external ? (
    <NextLink href={href}>
      <a className="relative group">
        <span className="isolate">
          <span className="group-hover:text-white [text-shadow:0_-1px_black,0_1px_black,-1px_0_black,1px_0_black]">
            {children}
          </span>
          <svg
            className="inline isolate h-3 ml-1 group-hover:animate-bounce group-hover:text-white transition-colors"
            viewBox="0 0 16 16"
            strokeWidth={1.35}
          >
            <g stroke="currentColor">
              <line x1={15} x2={1} y1={1} y2={15}></line>
              <line strokeLinecap="square" x2={8} x1={15} y1={1} y2={1}></line>
              <line strokeLinecap="square" x2={15} x1={15} y1={8} y2={1}></line>
            </g>
          </svg>
        </span>
        <span className="absolute -z-10 bottom-px left-0 w-full bg-skeleton_foreground group-hover:bg-white h-px group-hover:animate-link transition-colors"></span>
      </a>
    </NextLink>
  ) : (
    <a href={href} className="relative group">
      <span className="isolate">
        <span className="group-hover:text-white [text-shadow:0_-1px_black,0_1px_black,-1px_0_black,1px_0_black]">
          {children}
        </span>
      </span>
      <span className="absolute -z-10 bottom-px left-0 w-full bg-skeleton_foreground group-hover:bg-white h-px group-hover:animate-link transition-colors"></span>
    </a>
  );
};

type LinkArgs = {
  external?: boolean;
  href: string;
  children: ReactNode;
};

export { Link };
