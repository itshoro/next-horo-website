import { Carousel } from "@/components/Carousel";
import { NowPlaying } from "@/components/spotify";

import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="pt-16 pb-6 md:mr-auto">
    <div className="text-sm">
      <div className="border-t border-white border-opacity-10 mx-8 md:mx-24" />
      <Carousel
        direction="x"
        snap="proximity"
        className="relative mt-6 py-2 mb-8 space-x-2 md:flex ml-8 pr-8 md:ml-0 md:px-24"
      >
        <Carousel.Fixed position="left-0">
          <div className="inline-flex">
            <Image
              className="rounded-full z-10"
              objectFit="cover"
              src="/profile.jpg"
              layout="fixed"
              width={48}
              height={48}
              alt=""
              priority={false}
              quality={50}
            />

            <div className="absolute left-0 h-full w-16 bg-gradient-to-r from-black" />
          </div>
        </Carousel.Fixed>
        <Carousel.Items
          stopBehaviour="normal"
          sizeAtleast="auto"
          alignment="none"
          className="items-center pr-6 space-x-4 md:flex md:w-full md:p-0"
        >
          <a
            className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
            href="https://github.com/itshoro"
          >
            Github
          </a>
          <a
            className="font-medium px-2 py-1 rounded-md hover:text-white focus:text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-colors"
            href="https://twitter.com/horo_dev"
          >
            Twitter
          </a>
          <div className="md:!ml-auto">
            <NowPlaying />
          </div>
        </Carousel.Items>
      </Carousel>

      <nav className="pb-16 px-8 md:px-24">
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
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
