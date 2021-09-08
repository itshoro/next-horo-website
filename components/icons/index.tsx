import { CSharpIcon } from "./csharp";
import { FigmaIcon } from "./figma";
import { GitIcon } from "./git";
import { NextJSIcon } from "./nextjs";
import { PythonIcon } from "./python";
import { TailwindCSSIcon } from "./tailwindcss";
import { VSCodeIcon } from "./vscode";

const Icon = ({ type }: IconArgs) => {
  switch (type) {
    case IconType.CSharp:
      return <CSharpIcon />;
    case IconType.Figma:
      return <FigmaIcon />;
    case IconType.Git:
      return <GitIcon />;
    case IconType.NextJS:
      return <NextJSIcon />;
    case IconType.Python:
      return <PythonIcon />;
    case IconType.TailwindCSS:
      return <TailwindCSSIcon />;
    case IconType.VSCode:
      return <VSCodeIcon />;
    default:
      return null;
  }
};

type IconArgs = {
  type: IconType | string;
};

enum IconType {
  CSharp = "csharp",
  Figma = "figma",
  NextJS = "nextjs",
  Git = "git",
  Python = "python",
  TailwindCSS = "tailwindcss",
  VSCode = "vscode",
}

export default Icon;
