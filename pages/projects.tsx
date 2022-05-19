import { Text } from "@/components/text";

import { Section } from "@/components/containers/Section";

const ProjectItem = ({ title, description, tags, href }: ProjectItemArgs) => {
  return (
    <article className="group select-none py-8 mb-8">
      <a href={href}>
        <div className="max-w-md">
          <div>
            <Text
              as="h3"
              color="foreground"
              weight="semibold"
              className="mb-2 flex items-center gap-2"
            >
              {title}
              <svg
                className="h-6 select-none font-normal opacity-0 scale-75 -translate-x-2 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
              >
                <circle cx="50%" cy="50%" r="58" fill="#1a1a1a" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="currentColor"
                  fontSize="64"
                >
                  &rarr;
                </text>
              </svg>
            </Text>
          </div>
          <div>
            <Text
              as="p"
              color="secondary"
              weight="normal"
              className="pb-1 mb-1"
            >
              {description}
            </Text>
          </div>
          <div></div>
        </div>
      </a>
      <div>
        <ul className="flex flex-wrap max-w-96 gap-4 text-white font-mono">
          {tags.map((tag) => {
            return <li className="py-1 px-2 bg-accent rounded-lg">{tag}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "BASHO",
      description:
        "A python based distributed system, simulating a pax counter. Built for a university asignment.",
      tags: ["python", "sql", "api", "distributed"],
      href: "https://github.com/itshoro/basho",
    },
    {
      title: "MTag",
      description: "Lightweight ID3v2 Tag reader.",
      tags: ["c#", "byte operations", "files"],
      href: "https://github.com/itshoro/mtag",
    },
  ];

  return (
    <>
      <Section className="pt-24 md:w-[min(100vw_-_4rem,_70ch)]">
        <Text color="foreground" weight="semibold" className="text-4xl" as="h2">
          Projects
        </Text>
      </Section>

      <Section className="divide-y divide-accent pt-16 md:w-[min(100vw_-_4rem,_70ch)]">
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
  href: string;
};

export default Projects;
