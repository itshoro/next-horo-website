import styles from "./index.module.css";
import Link from "next/link";
import { Url } from "url";
import { MouseEventHandler } from "react";

const AnimatedLink = ({
  title,
  className,
  href,
  onClick,
  onMouseEnter,
}: AnimatedLinkArgs) => (
  <Link href={href}>
    <a
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={["group relative inline-block rounded-full", className]
        .filter((x) => x)
        .join(" ")}
    >
      <div className="py-2 px-6 rounded-lg transition-all gradient-splash bg-[#111] text-white">
        <div className="inline-flex space-x-2 items-center">
          <span className="align-middle">{title}</span>
          <span className="relative flex items-center justify-center">
            <div>
              <svg
                className="h-6 absolute right-0 -translate-y-full top-1/2 opacity-0 -translate-x-full group-hover:pl-6 group-hover:translate-x-0 group-hover:opacity-100 text-white/20 select-none transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
              >
                <g>
                  <circle
                    x="1"
                    y="1"
                    cx="50%"
                    cy="50%"
                    r="58"
                    stroke="currentColor"
                    fill="none"
                  />
                </g>
                <circle
                  cx="50%"
                  cy="50%"
                  r="58"
                  fill="transparent"
                  className="text-transparent group-hover:text-accent group-focus:text-accent transition-colors"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <text
                  // `mix-blend-mode` seems to break `backdrop-filter`, going to have to manually set new colors
                  className="text-white/20 group-hover:text-white/50 group-focus:text-white/50 transition-colors"
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="currentColor"
                  fontSize="64"
                >
                  &rarr;
                </text>
              </svg>
            </div>
          </span>
        </div>
      </div>
    </a>
  </Link>
);

type AnimatedLinkArgs = {
  title: string;
  href: string | Url;
  className?: string;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
};

export default AnimatedLink;
