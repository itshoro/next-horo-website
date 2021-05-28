const sectionPaddingX = "px-6 sm:px-12";

const Section = ({ children, className, style }) => (
  <section
    className={["w-full max-w-[1260px] mx-auto", className, sectionPaddingX]
      .filter((x) => x)
      .join(" ")}
    style={style}
  >
    {children}
  </section>
);

const InnerSection = ({ children, className, style }) => (
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

export { Section, InnerSection, sectionPaddingX };
