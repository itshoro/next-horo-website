import styles from "./index.module.css";
import requiredIf from "react-required-if";
import PropTypes from "prop-types";

const CarousellItems = ({ children, className, style }) => (
  <div style={style} className={className}>
    {children}
  </div>
);

CarousellItems.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

const Carousell = ({
  items,
  className,
  direction,
  mobileHideScrollbars = false,
  alignX,
  alignY,
  align,
  style,
  type,
  dir,
}) => {
  if (!items) {
    throw new Error(
      "Carousell needs a property items of type `CarousellItems`"
    );
  }

  if (!direction || !type)
    throw new Error(
      "Carousell requires for the properties `direction` and `type` to be present"
    );

  if (!["x", "y", "both"].includes(direction))
    throw new Error(
      "`direction` only takes the values 'x', 'y' or 'both', check for a possible typo"
    );

  if (!["mandatory", "proximity"].includes(type))
    throw new Error(
      "`type` only takes the values 'mandatory' or 'proximity' check for a possible typo"
    );

  if (align && (alignX || alignY)) {
    throw new Error(
      "`align` overwrites `alignX` and `alignY`, remove redundancy"
    );
  }

  if (align && !["start", "center", "end", "none"].includes(align)) {
    throw new Error("Unrecognized value for `align`.");
  }
  if (alignX && !["start", "center", "end", "none"].includes(alignX)) {
    throw new Error("Unrecognized value for `alignX`.");
  }
  if (alignY && !["start", "center", "end", "none"].includes(alignY)) {
    throw new Error("Unrecognized value for `alignY`.");
  }

  const resolveAlign = (align, dir = null) => {
    switch (align) {
      case "start":
        if (dir === "inline") return styles["scroll-align-inline-start"];
        if (dir === "block") return styles["scroll-align-block-start"];
        return styles["scroll-align-start"];
      case "center":
        if (dir === "inline") return styles["scroll-align-inline-center"];
        if (dir === "block") return styles["scroll-align-block-center"];
        return styles["scroll-align-center"];
      case "end":
        if (dir === "inline") return styles["scroll-align-inline-end"];
        if (dir === "block") return styles["scroll-align-block-end"];
        return styles["scroll-align-end"];
      case "none":
        if (dir === "inline") return styles["scroll-align-inline-none"];
        if (dir === "block") return styles["scroll-align-block-none"];
        return styles["scroll-align-none"];
      default:
        return null;
    }
  };

  return (
    <div
      className={[
        styles.viewArea,
        mobileHideScrollbars && "hideScrollbars",
        styles[direction],
        styles[type],
        align && resolveAlign(align),
        alignX && resolveAlign(alignX, "inline"),
        alignY && resolveAlign(alignY, "block"),
        className,
      ]
        .filter((x) => x)
        .join(" ")}
      dir={dir || "ltr"}
      style={style}
    >
      {items}
    </div>
  );
};

Carousell.propTypes = {
  items: PropTypes.node.isRequired,
  mobileHideScrollbars: PropTypes.bool,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["x", "y", "both"]).isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(["mandatory", "proximity"]).isRequired,
  dir: PropTypes.string,
  alignX: requiredIf(
    PropTypes.oneOf(["start", "center", "end", "none"]),
    (props) => props.align === undefined
  ),
  alignY: requiredIf(
    PropTypes.oneOf(["start", "center", "end", "none"]),
    (props) => props.align === undefined
  ),
  align: requiredIf(
    PropTypes.oneOf(["start", "center", "end", "none"]),
    (props) => props.alignX === undefined && props.alignY === undefined
  ),
};

export { Carousell, CarousellItems };
