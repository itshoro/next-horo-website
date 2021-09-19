import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.css";

const Carousell = ({
  className,
  children,
  scroll,
  mobileHideScrollbars = false,
  align,
  style,
}: CarousellArgs) => {
  const resolveAlign = (
    align: string,
    dir: "inline" | "block" | null = null
  ) => {
    const key = ["scroll-align", dir && dir, align].filter((x) => x).join("-");

    if (key in styles) return styles[key];
    return null;
  };

  const resolvedAlign =
    typeof align === "string"
      ? resolveAlign(align)
      : [
          align.x && resolveAlign(align.x, "inline"),
          align.y && resolveAlign(align.y, "block"),
        ]
          .filter((x) => x)
          .join(" ");

  if (!resolvedAlign)
    throw new Error("Carousell is missing an `align` property");

  return (
    <section
      className={[
        styles.viewArea,
        mobileHideScrollbars && "hideScrollbars",
        styles[scroll.direction],
        styles[scroll.type],
        resolvedAlign,
        className,
      ]
        .filter((x) => x)
        .join(" ")}
      style={style}
    >
      {children}
    </section>
  );
};

type CarousellArgs = {
  className?: string;
  children?: ReactNode;
  scroll: {
    direction: "x" | "y" | "both";
    type: "mandatory" | "proximity";
  };
  mobileHideScrollbars?: boolean;
  style?: CSSProperties;
  align:
    | {
        x?: "start" | "center" | "end" | "none";
        y?: "start" | "center" | "end" | "none";
      }
    | "start"
    | "center"
    | "end"
    | "none";
};

const Items = ({ children, className, style }: ItemsArgs) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

type ItemsArgs = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

Carousell.Items = Items;

export { Carousell };
