import { sectionPaddingX } from "@/components/containers/Section";
import Logo from "@/components/logo";
import Link from "next/link";

const MenuButton = ({ expandedMenu, onClick, className }) => {
  return (
    <div className="flex group">
      <button
        onClick={onClick}
        className={[
          className,
          "rounded md:hidden hover:bg-white hover:bg-opacity-20 ",
        ]
          .filter((x) => x)
          .join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path
              d="M4 6h16M4"
              className={[
                "transform-gpu transition-transform duration-500 origin-center",
                expandedMenu &&
                  "rotate-45 translate-x-[-4px] translate-y-[4px]",
              ]
                .filter((x) => x)
                .join(" ")}
            />
            <path
              d="M4 12h16M4"
              className={[
                expandedMenu && "opacity-0",
                "transition-opacity duration-500",
              ]
                .filter((x) => x)
                .join(" ")}
            />
            <path
              d="M4 18h16"
              className={[
                "transform-gpu transition-transform duration-500 origin-center",
                expandedMenu &&
                  "-rotate-45 translate-x-[-4px] translate-y-[-5px]",
              ]
                .filter((x) => x)
                .join(" ")}
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

const Menu = ({ expandedMenu, setExpandedMenu }) => (
  <div
    className={["flex justify-between py-3", sectionPaddingX]
      .filter((x) => x)
      .join(" ")}
  >
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <MenuButton
      expandedMenu={expandedMenu}
      onClick={() => {
        setExpandedMenu(!expandedMenu);
      }}
    />
  </div>
);

export default Menu;
