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
      className={[
        "inline-flex items-center space-x-2 bg-clip-text text-transparent group focus:pl-2 hover:pl-2 transition-all",
        className,
        styles.gradient,
      ]
        .filter((x) => x)
        .join(" ")}
    >
      <span className="align-middle">{title}</span>
      <span className="relative flex items-center justify-center">
        <div className="relative">
          <svg
            className="h-8 select-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
          >
            <defs>
              <linearGradient id="b" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(348deg 91% 50%)" />
                <stop offset="100%" stopColor="hsl(331deg 88% 46%)" />
              </linearGradient>
              <clipPath
                id="a"
                className="transform origin-center rotate-[220deg]"
              >
                <path
                  d="M101.807 123.37c10-.352 18.193 5.401 18.193 5.401V0H0v128.771s9.701-5.227 17.069-5.227 10.464 6.314 20.877 6.314c10.175 0 12.703-4.209 22.053-4.209s11.981 5.438 20.578 5.438 11.23-7.365 21.23-7.717z"
                  className={styles.clipWave}
                >
                  <animate
                    attributeName="d"
                    begin="0"
                    dur=".1"
                    from="M101.807,123.37c10-0.352,18.193,5.401,18.193,5.401V0H0v128.771c0,0,9.701-5.227,17.069-5.227s10.464,6.314,20.877,6.314 c10.175,0,12.703-4.209,22.053-4.209s11.981,5.438,20.578,5.438S91.807,123.722,101.807,123.37z"
                    repeatCount="indefinite"
                    to="M101.807,123.37c10-0.352,18.193,5.401,18.193,5.401V0H0v128.771c0,0,9.701-5.227,17.069-5.227s10.464,6.314,20.877,6.314 c10.175,0,12.703-4.209,22.053-4.209s11.981,5.438,20.578,5.438S91.807,123.722,101.807,123.37z"
                    values="M101.807,123.37c10-0.352,18.193,5.401,18.193,5.401V0H0v128.771c0,0,9.701-5.227,17.069-5.227s10.464,6.314,20.877,6.314 c10.175,0,12.703-4.209,22.053-4.209s11.981,5.438,20.578,5.438S91.807,123.722,101.807,123.37z;M101.807,135.303c10-0.352,18.193-6.531,18.193-6.531V0H0v128.771c0,0,9.701,4.952,17.069,4.952s10.464-9.299,20.877-9.299 c10.175,0,12.703,9.299,22.053,9.299s11.981-9.123,20.578-9.123S91.807,135.654,101.807,135.303z ;M101.807,123.37c10-0.352,18.193,5.401,18.193,5.401V0H0v128.771c0,0,9.701-5.227,17.069-5.227s10.464,6.314,20.877,6.314 c10.175,0,12.703-4.209,22.053-4.209s11.981,5.438,20.578,5.438S91.807,123.722,101.807,123.37z"
                  />
                </path>
              </clipPath>
            </defs>
            <g clipPath="url(#a)">
              <circle x="1" y="1" cx="50%" cy="50%" r="58" fill="url(#b)" />
            </g>
            <circle
              cx="50%"
              cy="50%"
              r="58"
              fill="transparent"
              stroke="url(#b)"
              strokeWidth="4"
            />
            <text
              // `mix-blend-mode` seems to break `backdrop-filter`, going to have to manually set new colors
              className="text-ember group-focus:text-black group-hover:text-black transition-colors duration-75"
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
    </a>
  </Link>
);

type AnimatedLinkArgs = {
  title: string;
  href: string | Url;
  className: string;
  onClick: MouseEventHandler;
  onMouseEnter: MouseEventHandler;
};

export default AnimatedLink;
