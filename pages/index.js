import { AnimatedLink } from "@/components/links";
import { Carousell, CarousellItems } from "@/components/containers";
import Head from "next/head";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full px-2">
      <div className="py-6">
        <object className="w-4 h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 25"
          >
            <g clipPath="url(#clip0)">
              <path
                fill="#fff"
                d="M13.88 18.87c.84-1.4 1.38-1.73 1.38-4.38 0-1.1-.35-2.09-.6-2.86a7.23 7.23 0 00-.3-7.4s.16.9-1.47 1.68a5.2 5.2 0 00-2.1 1.8 7 7 0 00-4.9-.3 7.76 7.76 0 00-2.24-5.1A3.8 3.8 0 013.22.66a.6.6 0 00-.26.54S2.61.16 1.9-.01c.3.7.43 1.46.39 2.21a7.03 7.03 0 00-.75 8.82S-.07 13.09 0 17.1c0 3.8 3.42 7.67 8.45 7.82 3.81.1 3.26.06 5.08.06-1.05-2.56-.69-4.31.36-6.12zM1.95 10.15c-.49-1.74-.3-3.62.52-5.23.35-.81.55-1.68.6-2.55 2.25 1.93 2.07 5.3 2.07 5.3-1.26.1-3.19 2.48-3.19 2.48zm10.07-1.78c.37-.65.9-1.18 1.56-1.53.43-.32.74-.78.88-1.3A4.33 4.33 0 0114.3 11c-1.13-2.12-2.27-2.64-2.27-2.64z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h15.54v25H0z" />
              </clipPath>
            </defs>
          </svg>
        </object>
      </div>
    </div>
  );
};

const EducationItem = ({ from, to, university, major, title }) => (
  <article className="py-8 min-w-[80%]">
    <div className="pb-4 space-y-2">
      <div className="text-xs">
        {from} &ndash; {to} &middot; {major}
      </div>
      <div className="text-white">{university}</div>
    </div>
    {title && (
      <div className="inline-flex rounded-full py-1 px-3 bg-ember text-ember bg-opacity-10 text-xs items-center gap-1">
        <object>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="url(#b)"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </object>
        {title}
      </div>
    )}
  </article>
);

export default function Home() {
  const educationItems = (
    <CarousellItems className="space-x-8 px-6">
      <EducationItem
        from={2018}
        to={2021}
        university="Hochschule Niederrhein"
        major="Computer Science"
        title="Bachelor of Science"
      />
      <EducationItem
        from={2017}
        to={2018}
        university="Heinrich Heine Universität"
        major="Computer Science"
      />
    </CarousellItems>
  );

  return (
    <>
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-[#b7b7b7]">
        <div className="relative px-4">
          <Navigation />
          <section className="flex min-h-screen flex-col justify-center pt-[80px]">
            <div className="my-auto">
              <div className="mb-16 px-2">
                <h1 className="font-bold text-white text-5xl">
                  Ohayo, my name is <br />{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-foxfire to-ember">
                    Tim Nelke
                  </span>
                  .
                </h1>
              </div>
              <div className="text-sm px-2 space-y-6">
                <div>
                  Based in Willich, Germany, I’m a computer science student in
                  my last year of university, who realizes dreams as reality.
                </div>

                <div>
                  <AnimatedLink
                    className="font-medium"
                    title="View my resume"
                    href="#"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-start px-2">
            <div className="flex rounded-full overflow-hidden">
              <Image
                layout="fixed"
                objectFit="cover"
                src="/profile.jpg"
                quality={100}
                width={96}
                height={96}
              />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white my-6">
                A Quick Summary
              </h2>
              <div className="text-sm space-y-3">
                <p>
                  Currently I’m threading the needle between being a
                  jack-of-all-trades and becoming an expert, who blends design
                  knowledge and application development.
                </p>
                <p>
                  So check out some of the things I’m great at, what I’ve
                  achieved and what I’ve done. If you’re looking for some more
                  casual achievements you can also take a look at my dashboard.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="pt-6">
          <h3 className="font-semibold px-6 text-white">Education</h3>
          <Carousell
            direction="x"
            style={{ scrollSnapPadding: "0 1.5rem" }}
            alignX="start"
            type="mandatory"
            items={educationItems}
          />
        </section>
      </div>
    </>
  );
}
