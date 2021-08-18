import { Text } from "@/components/text";

const { InnerSection } = require("@/components/containers/Section");

const ProjectItem = ({ title, description, tags, href }) => {
  return (
    <article className="inline-block w-full rounded-lg border border-accent p-6">
      <Text as="h3" color="foreground" weight="semibold" className="pb-1 mb-1">
        {title}
      </Text>
      <Text as="div" color="secondary" className="mt-1 pt-2 pb-8">
        {description}
      </Text>

      <ul className="flex space-x-2 text-sm p-3 mb-6 bg-accent select-none rounded-lg">
        {tags.map((tag) => (
          <li className="px-3 py-1 rounded-full bg-black">{tag}</li>
        ))}
      </ul>

      <a
        href={href}
        className="font-medium hover:px-2 hover:py-1 focus:px-2 focus:py-1 underline rounded-md text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all"
      >
        View Source Code
      </a>
    </article>
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
    },
    {
      title: "MTag",
      description:
        "I was always curious about how media players where able to extract data from various music files, with MTag I started implementing a library that explores how this is done. While the development is currently on hiatus, I am still looking to also implement FLAC and WAV support.",
      tags: ["c#", "byte operations", "files"],
      href: "https://github.com/itshoro/mtag",
    },
  ];

  return (
    <>
      <InnerSection className="mt-24">
        <Text color="foreground" weight="bold" className="text-4xl" as="h2">
          Projects
        </Text>
      </InnerSection>
      <InnerSection className="flex flex-col space-y-4 pt-8">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </InnerSection>
    </>
  );
};

export default Projects;
