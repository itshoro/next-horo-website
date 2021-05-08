import { AnimatedLink } from "@/components/links";
import { ScrollContainer } from "@/components/containers";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tim Nelke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex">
        <div className="m-auto w-[375px] h-[812px] overflow-auto shadow-xl rounded-xl bg-black text-[#b7b7b7]">
          <main className="mx-8">
            <div>
              <h1 className="font-bold text-white text-5xl">
                Ohayo, my name is <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-foxfire to-ember">
                  Tim Nelke
                </span>
                .
              </h1>
            </div>
            <span>
              Based in Willich, Germany, I’m a computer science student in my
              last year of university, who realizes dreams as reality.
            </span>

            <AnimatedLink title="View my resume" href="#" />
          </main>
        </div>
      </div>
    </div>
  );
}
