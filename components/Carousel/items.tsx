import { Children, cloneElement, CSSProperties, FC, ReactNode } from "react";
import styles from "./items.module.css";

type StopBehaviour = "normal" | "always";
type SnapAlignment = "start" | "center" | "end" | "none";

export type ItemsProps = {
  children: ReactNode;
  stopBehaviour: StopBehaviour;
  alignment: SnapAlignment;
  className?: string;
  sizeAtleast?:
    | {
        min: string;
        max: string;
      }
    | string;
};

const Items: FC<ItemsProps> = ({
  children,
  stopBehaviour,
  alignment,
  className,
  sizeAtleast,
}) => {
  const snapStopClassname = styles[`snap-stop-behaviour-${stopBehaviour}`];
  const alignmentClassname = styles[`snap-align-${alignment}`];

  const inlineStyle = (
    typeof sizeAtleast === "string"
      ? {
          "--min-size": sizeAtleast,
          "--max-size": sizeAtleast,
        }
      : {
          "--min-size": sizeAtleast ? sizeAtleast.min : "auto",
          "--max-size": sizeAtleast ? sizeAtleast.max : "auto",
        }
  ) as CSSProperties;

  return (
    <div className={[styles.items, className].filter((x) => x).join(" ")}>
      {Children.map(children, (child) => {
        const element = child as React.ReactElement;

        const classNames = [
          element.props.className,
          styles.item,
          snapStopClassname,
          alignmentClassname,
        ]
          .filter((x) => x)
          .join(" ");
        const style = { ...element.props.style, ...inlineStyle };

        return cloneElement(element, {
          ...element.props,
          style,
          className: classNames,
        });
      })}
    </div>
  );
};

export default Items;
