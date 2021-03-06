import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <a className="block p-1 rounded hover:bg-white/10 focus:bg-white/10 active:bg-white/[.15] transition-colors duration-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-6 h-6"
        viewBox="0 0 16 25"
      >
        <g clipPath="url(#clip0)">
          <path
            fill="currentColor"
            d="M13.88 18.87c.84-1.4 1.38-1.73 1.38-4.38 0-1.1-.35-2.09-.6-2.86a7.23 7.23 0 00-.3-7.4s.16.9-1.47 1.68a5.2 5.2 0 00-2.1 1.8 7 7 0 00-4.9-.3 7.76 7.76 0 00-2.24-5.1A3.8 3.8 0 013.22.66a.6.6 0 00-.26.54S2.61.16 1.9-.01c.3.7.43 1.46.39 2.21a7.03 7.03 0 00-.75 8.82S-.07 13.09 0 17.1c0 3.8 3.42 7.67 8.45 7.82 3.81.1 3.26.06 5.08.06-1.05-2.56-.69-4.31.36-6.12zM1.95 10.15c-.49-1.74-.3-3.62.52-5.23.35-.81.55-1.68.6-2.55 2.25 1.93 2.07 5.3 2.07 5.3-1.26.1-3.19 2.48-3.19 2.48zm10.07-1.78c.37-.65.9-1.18 1.56-1.53.43-.32.74-.78.88-1.3A4.33 4.33 0 0114.3 11c-1.13-2.12-2.27-2.64-2.27-2.64z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="currentColor" d="M0 0h15.54v25H0z" />
          </clipPath>
        </defs>
      </svg>
    </a>
  </Link>
);

export default Logo;
