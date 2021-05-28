import PropTypes from "prop-types";

const PageHeading = ({ as, children, className }) => {
  const Tag = as;

  return (
    <Tag
      className={["font-bold text-white text-4xl pb-2 mb-2", className]
        .filter((x) => x)
        .join(" ")}
      style={{ lineHeight: "1.1" }}
    >
      {children}
    </Tag>
  );
};

PageHeading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

const ArticleHeading = ({ as, children, className }) => {
  const Tag = as;

  return (
    <Tag
      className={["font-bold text-white", className].filter((x) => x).join(" ")}
      style={{ lineHeight: "1.1" }}
    >
      {children}
    </Tag>
  );
};

ArticleHeading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export { PageHeading, ArticleHeading };
