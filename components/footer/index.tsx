import { Carousell } from "@/components/containers/";
import { NowPlaying } from "@/components/spotify";
import {
  sectionPaddingX,
  sectionMarginX,
} from "@/components/containers/Section";

import Link from "next/link";
import Image from "next/image";
import Icon from "../icons";

const Footer = () => (
  <footer className="pt-16 pb-6 m-auto w-full max-w-[1260px]">
    <div className="text-sm">
      <div
        className={["border-t border-white border-opacity-10", sectionMarginX]
          .filter((x) => x)
          .join(" ")}
      />
      <Carousell
        scroll={{ direction: "x", type: "proximity" }}
        align="none"
        className="mt-6 py-2 mb-8 ml-6 sm:ml-12 lg:mx-12"
      >
        <Carousell.Items
          className="inline-flex items-center gap-4 relative pr-6 sm:mr-6 scroll-pr-6 md:scroll-pr-12 lg:scroll-pr-0 lg:pr-0 lg:mr-0 lg:!flex
          "
        >
          <div className="border border-accent px-4 py-2 rounded-lg">
            <NowPlaying />
          </div>
          <a
            className="p-4 rounded-lg border border-accent text-white"
            href="https://github.com/itshoro"
          >
            <Icon type="github" size={24} />
          </a>
          <a
            className="p-4 rounded-lg border border-accent text-white hover:text-[#1DA1F2] transition-colors"
            href="https://twitter.com/horo_dev"
          >
            <Icon type="twitter" size={24} />
          </a>
        </Carousell.Items>
      </Carousell>

      <nav className={["pb-16", sectionPaddingX].filter((x) => x).join(" ")}>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href="/">
              <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/digital_garden">
              <a className="font-medium hover:px-2 focus:px-2 hover:py-1 focus:py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all">
                Digital Garden
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;