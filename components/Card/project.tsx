import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Icon, { IconProps, IconType } from "@/components/icons";

import styles from "./project.module.css";
import { Body } from ".";
import { Bleed } from "./bleed";

interface ProjectProps {
  label: string;
  icon: IconType;
  href: string;
}

interface DetailedProjectProps extends ProjectProps {
  description: string;
  tags: string[];
}

const mapIconToColor = (type: IconType): string => {
  switch (type) {
    case IconType.CSharp:
      return "#474599";
    case IconType.Python:
      return "#49878F";
    default:
      return "transparent";
  }
};

const ProjectCard: FC<
  DetailedProjectProps &
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ label, description, href, icon, tags, className, ...props }) => {
  return (
    <a
      {...props}
      className={[className, "block"].filter((x) => x).join(" ")}
      href={href}
    >
      <Body className="overflow-hidden">
        <Bleed accent={mapIconToColor(icon)} />
        <div className="p-8 space-y-2 isolate">
          <div className="relative">
            <IconWrapper type={icon} size={20} />
          </div>
          <div className="space-y-1">
            <div className="font-medium text-white">{label}</div>
            <div className="text-sm">{description}</div>
          </div>
        </div>
      </Body>
    </a>
  );
};

const Minimal: FC<
  ProjectProps &
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ label, icon, href, ...props }) => {
  return (
    <a {...props} href={href}>
      <Body className={"group overflow-hidden"}>
        <Bleed accent={mapIconToColor(icon)} />
        <div className="p-4 space-y-2 isolate">
          <div className="flex items-center gap-4">
            <IconWrapper type={icon} size={20} />
            <h1 className="text-white font-medium text-sm">{label}</h1>
            <HoverArrow />
          </div>
        </div>
      </Body>
    </a>
  );
};

const HoverArrow = () => {
  return (
    <svg
      className="ml-auto h-6 select-none font-normal opacity-0 scale-75 -translate-x-2 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
    >
      <circle cx="50%" cy="50%" r="58" fill="rgb(0 0 0 / 40%)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="64"
      >
        &rarr;
      </text>
    </svg>
  );
};

const IconWrapper: FC<IconProps> = (props) => {
  return (
    <div className="rounded-lg bg-black/30 inline-block p-4">
      <Icon {...props} />
    </div>
  );
};

export { ProjectCard, Minimal };
