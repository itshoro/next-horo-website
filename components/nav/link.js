import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = ({ title, href, router }) => {
  return (
    <Link href={href}>
      <a className="block py-2 my-2 font-black text-base">
        <span
          className={[
            href === router.pathname ? "text-white" : "text-[#b4b4b4]",
            "font-semibold md:text-sm",
          ]
            .filter((x) => x)
            .join(" ")}
        >
          {title}
        </span>
      </a>
    </Link>
  );
};

export default withRouter(NavLink);
