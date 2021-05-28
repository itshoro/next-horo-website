import { Carousell, CarousellItems } from "@/components/containers/";
import { NowPlaying } from "@/components/spotify";

import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="pt-16 pb-6 m-auto w-full">
    <div className="text-sm">
      <div className="border-t mx-6 ml-6  border-white border-opacity-10" />
      <Carousell
        direction="x"
        align="none"
        type="proximity"
        mobileHideScrollbars={false}
        className="mt-6 py-2 mb-8 ml-6 lg:mr-6"
        style={{ scrollPadding: "0 0 0 1.5rem" }}
        items={
          <CarousellItems className="inline-flex items-center gap-4 relative pr-6 lg:pr-0 lg:mr-6">
            <div className="inline-flex rounded-full overflow-hidden sticky left-0">
              <Image
                objectFit="cover"
                src="/profile.jpg"
                layout="fixed"
                width={48}
                height={48}
              />
            </div>
            <a
              className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
              href="#"
            >
              Github
            </a>
            <a
              className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
              href="#"
            >
              Twitter
            </a>
            <NowPlaying />
          </CarousellItems>
        }
      />
      <nav className="px-6 pb-16">
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
