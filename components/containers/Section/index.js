const Section = ({ children, className, style }) => (
  <section
    className={["w-full px-4 sm:px-12 max-w-[1024px] mx-auto", className]
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
      className={["max-w-[640px] mx-auto", className]
        .filter((x) => x)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  </Section>
);

export { Section, InnerSection };
