import { Text } from "@/components/text";
import Icon from "@/components/icons";
import Image from "next/image";

const { Section } = require("@/components/containers/Section");

const ProjectItem = ({
  title,
  description,
  tags,
  status,
  img,
  logo,
  href,
}: ProjectItemArgs) => {
  return (
    <article className="w-full">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="grid grid-cols-[300px,1fr] pt-8 pb-16">
        <div>
          <Text
            as="h3"
            color="foreground"
            weight="semibold"
            className="pb-1 mb-1 text-lg"
          >
            {title}
          </Text>
          <div className="bg-accent inline-block px-4 py-2 rounded-lg">
            <Text as="div" color="foreground" className="inline-block text-sm">
              {status}
            </Text>
          </div>
        </div>
        <div>
          <Text as="p" color="secondary" weight="normal" className="pb-1 mb-1">
            {description}
          </Text>
        </div>
      </div>
    </article>

    // <article className="inline-block w-full rounded-lg bg-gradient-to-br from-[hsla(348deg,91%,50%,0.15)] to-bg-white/5 shadow-inner">
    //   <div class="flex items-center px-6 py-4">
    //     {!logo && (
    //       <a className="block" href={href}>
    //         <div className="rounded-lg bg-black/40 p-3">
    //           <Icon type="git" size={24} />
    //         </div>
    //       </a>
    //     )}

    //     <ul className="flex items-center space-x-2 text-xs select-none ml-2 pl-2 border-l-2 border-black">
    //       {tags.map((tag) => (
    //         <li className="px-3 py-1 rounded-full bg-black/40">{tag}</li>
    //       ))}
    //     </ul>
    //   </div>
    //   <div className="rounded-lg bg-black/40 border border-white/10 p-6">
    //     <Text
    //       as="h3"
    //       color="foreground"
    //       weight="semibold"
    //       className="pb-1 mb-1"
    //     >
    //       {title}
    //     </Text>
    //     <Text as="div" color="secondary" className="mt-1 pt-2">
    //       {description}
    //     </Text>
    //   </div>
    // </article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BASHO",
      description:
        "A proof of concept distributed python application that interacts with multiple databases and responds to multiple clients, tries to replicate a pax-counting application.",
      tags: ["python", "sql", "api", "distributed"],
      href: "https://github.com/itshoro/basho",
      img: "/profile.jpg",
      status: "In Progress",
    },
    {
      title: "MTag",
      description:
        "Having been always curious about how media players were able to extract data from various media files, I started implementing a library that explores how this is done. While the development of MTag is currently on hiatus, I am still looking to also implement FLAC and WAV support.",
      tags: ["c#", "byte operations", "files"],
      href: "https://github.com/itshoro/mtag",
      img: "/profile.jpg",
      status: "Hiatus",
    },
  ];

  return (
    <>
      <Section className="mt-24">
        <Text color="foreground" weight="bold" className="text-4xl" as="h2">
          Projects
        </Text>
      </Section>

      <div className="bg-accent pl-2 pr-3 py-2 rounded-lg text-white">
        <div className="flex items-center">
          <div className="mx-2">
            <Icon type="git" />
          </div>
          <input
            placeholder="Search..."
            className="bg-transparent placeholder-shown:placeholder-skeleton_foreground border-none outline-none"
          ></input>
        </div>
      </div>

      <Section className="fles items-start pt-8">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </Section>
    </>
  );
};

type ProjectItemArgs = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  img: string;
  logo: string;
  href: string;
};

export default Projects;
