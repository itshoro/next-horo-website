import { Text } from "@/components/text";
import { ProjectCard } from "@/components/Card/project";
import { IconType } from "@/components/icons";

const Projects = () => {
  const projects = [
    {
      label: "nworking",
      description: "IPv4 network and subnet calculator for study purposes",
      tags: ["csharp", "byte operations", "files"],
      icon: "python" as IconType,
      href: "https://github.com/itshoro/nworking",
    },
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
    <div className="pt-8 px-6">
      <div className="pt-24 max-w-[64ch] 2xl:max-w-[74ch] mx-auto pb-8">
        <Text color="foreground" weight="semibold" className="text-xl" as="h1">
          Projects
        </Text>
      </div>

      <div className="space-y-8 max-w-[64ch] 2xl:max-w-[74ch] mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.label} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
