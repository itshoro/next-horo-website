import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import Icon, { IconProps, IconType } from "@/components/icons";

import { Body } from ".";
import { Bleed } from "./bleed";

export interface ProjectProps {
  label: string;
  icon: IconType;
  href: string;
}

export interface DetailedProjectProps extends ProjectProps {
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
    <Body className="overflow-hidden">
      <div className="p-6 isolate">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-2">
          <div className="">
            <IconWrapper type={icon} size={20} />
          </div>
          <div className="space-y-2 w-full">
            <div className="flex gap-4 items-center justify-start w-full">
              <div className="font-medium text-foreground">{label}</div>
            </div>
            <div className="break-words pb-4">{description}</div>
          </div>
        </div>
        <div className="pt-4 border-t w-full border-t-white/10">
          <a
            {...props}
            className={[className, "peer inline-block ml-auto"]
              .filter((x) => x)
              .join(" ")}
            href={href}
          >
            <div className="group rounded-lg border border-accent dark:border-transparent dark:bg-black/30 dark:hover:bg-black/50 transition-colors duration-200 ease-out inline-block p-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  View on
                </span>
                <Icon type="github" size={16} />
              </div>
            </div>
          </a>
          <Bleed accent={mapIconToColor(icon)} />
        </div>
      </div>
    </Body>
  );
};

const Minimal: FC<
  ProjectProps &
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ label, icon, href, ...props }) => {
  return (
    <a {...props} href={href}>
      <Body className="group overflow-hidden">
        <div className="p-4 isolate">
          <Bleed accent={mapIconToColor(icon)} />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IconWrapper type={icon} size={20} />
              <h1 className="text-foreground font-medium text-sm">{label}</h1>
            </div>
            <HoverArrow />
          </div>
        </div>
      </Body>
    </a>
  );
};

export const HoverArrow = () => {
  return (
    <svg
      className="h-6 select-none font-normal opacity-0 scale-75 -translate-x-2 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
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
    <div className="rounded-lg border border-accent dark:border-transparent dark:bg-black/30 inline-block p-4 z-10">
      <Icon {...props} />
    </div>
  );
};

export { ProjectCard, Minimal };
