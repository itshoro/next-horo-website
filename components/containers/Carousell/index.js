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
        return styles[`scroll-align-${dir && dir + "-"}start`];
      case "center":
        return styles[`scroll-align-${dir && dir + "-"}center`];
      case "end":
        return styles[`scroll-align-${dir && dir + "-"}end`];
      case "none":
        return styles[`scroll-align-${dir && dir + "-"}none`];
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
        resolveAlign(align),
        resolveAlign(alignX, "inline"),
        resolveAlign(alignY, "block"),
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
