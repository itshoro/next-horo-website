import { CSharpIcon } from "./csharp";
import { FigmaIcon } from "./figma";
import { GitIcon } from "./git";
import { NextJSIcon } from "./nextjs";
import { PythonIcon } from "./python";
import { TailwindCSSIcon } from "./tailwindcss";
import { VSCodeIcon } from "./vscode";
import { GithubIcon } from "./github";
import { TwitterIcon } from "./twitter";
import { SpotifyIcon } from "./spotify";

const Icon = ({ type, size }: IconArgs) => {
  switch (type) {
    case IconType.CSharp:
      return <CSharpIcon size={size} />;
    case IconType.Figma:
      return <FigmaIcon size={size} />;
    case IconType.Git:
      return <GitIcon size={size} />;
    case IconType.NextJS:
      return <NextJSIcon size={size} />;
    case IconType.Python:
      return <PythonIcon size={size} />;
    case IconType.TailwindCSS:
      return <TailwindCSSIcon size={size} />;
    case IconType.VSCode:
      return <VSCodeIcon size={size} />;
    case IconType.Github:
      return <GithubIcon size={size} />;
    case IconType.Twitter:
      return <TwitterIcon size={size} />;
    case IconType.Spotify:
      return <SpotifyIcon size={size} />;
    default:
      return null;
  }
};

type IconArgs = {
  type: IconType | string;
  size?: number;
};

enum IconType {
  CSharp = "csharp",
  Figma = "figma",
  NextJS = "nextjs",
  Git = "git",
  Python = "python",
  TailwindCSS = "tailwindcss",
  VSCode = "vscode",
  Github = "github",
  Twitter = "twitter",
  Spotify = "spotify",
}

export default Icon;
