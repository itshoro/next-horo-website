import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "./link";

import Menu from "./Menu";
import { sectionPaddingX } from "@/components/containers/Section";

const NavBackdrop = ({ children, expandedMenu, className }) => (
  <nav
    className={[
      "fixed w-full z-10 bg-black text-white duration-500 ease-in-out backdrop-filter backdrop-blur-lg backdrop-saturate-150",
      expandedMenu ? "h-screen bg-opacity-100" : "h-12 bg-opacity-40",
      "md:h-12",
      className,
    ]
      .filter((x) => x)
      .join(" ")}
    style={{ transitionProperty: "height,background" }}
  >
    {children}
  </nav>
);

const NavLinks = ({ links, expandedMenu }) => (
  <ul
    className={[
      "flex flex-col items-start mx-auto md:flex-row md:mx-intial md:space-x-4 md:justify-end",
      sectionPaddingX,
    ]
      .filter((x) => x)
      .join(" ")}
  >
    {links.map(({ title, href }, i) => (
      <li
        key={"mainNav" + title + i}
        style={{
          transitionDelay: "500ms",
          transitionDuration: `${250 + i * 150}ms`,
          transitionProperty: "transform,opacity",
        }}
        className={[
          "transform transition ease-in-out",
          !expandedMenu
            ? "invisible opacity-0 -translate-y-8"
            : "visible opacity-100 translate-y-0",
          "md:visible md:opacity-100 md:translate-y-0",
        ]
          .filter((x) => x)
          .join(" ")}
      >
        <Link title={title} href={href} />
      </li>
    ))}
  </ul>
);

const Navigation = ({ links }) => {
  const router = useRouter();

  const [expandedMenu, setExpandedMenu] = useState(false);
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setExpandedMenu(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <NavBackdrop expandedMenu={expandedMenu} className="text-white">
      <div className="md:h-12 md:flex md:justify-between md:items-center max-w-[1260px] mx-auto">
        <Menu setExpandedMenu={setExpandedMenu} expandedMenu={expandedMenu} />

        <div
          className={[
            "py-3 md:py-0 border-t md:border-none transition-colors",
            expandedMenu ? "border-offblack" : "border-transparent",
          ]
            .filter((x) => x)
            .join(" ")}
        >
          <NavLinks links={links} expandedMenu={expandedMenu} />
        </div>
      </div>
    </NavBackdrop>
  );
};

export default Navigation;
