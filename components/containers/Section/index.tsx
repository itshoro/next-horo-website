import { CSSProperties, ReactNode } from "react";

const sectionPaddingX = "px-6 sm:px-12";
const sectionMarginX = "mx-6 sm:mx-12";

const Section = ({
  children,
  className,
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => (
  <section
    className={["w-full max-w-[1260px] mx-auto", className, sectionPaddingX]
      .filter((x) => x)
      .join(" ")}
    style={style}
  >
    {children}
  </section>
);

const InnerSection = ({
  children,
  className,
  style,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => (
  <Section>
    <div
      className={["max-w-[720px] mx-auto", className]
        .filter((x) => x)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  </Section>
);

export { Section, InnerSection, sectionPaddingX, sectionMarginX };
