import { Text } from "@/components/text";

import { Section } from "@/components/containers/Section";
import { ProjectCard } from "@/components/Card/project";
import { IconType } from "@/components/icons";

const ProjectItem = ({ label, description, tags, href }: ProjectItemArgs) => {
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
              {label}
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
      label: "BASHO",
      description:
        "A python based distributed system, simulating a pax counter. Built for a university asignment.",
      tags: ["python", "sql", "api", "distributed"],
      icon: "python" as IconType,
      href: "https://github.com/itshoro/basho",
    },
    {
      label: "MTag",
      description: "Lightweight ID3v2 Tag reader.",
      tags: ["csharp", "byte operations", "files"],
      icon: "csharp" as IconType,
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

      <Section className="divide-y space-y-8 divide-accent pt-16 md:w-[min(100vw_-_4rem,_70ch)]">
        {projects.map((project) => (
          <ProjectCard key={project.label} {...project} />
        ))}
      </Section>
    </>
  );
};

type ProjectItemArgs = {
  label: string;
  description: string;
  tags: string[];
  href: string;
};

export default Projects;
