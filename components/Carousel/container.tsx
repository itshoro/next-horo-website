import { FC, ReactNode } from "react";
import Items, { ItemsProps } from "./items";
import Fixed, { FixedProps } from "./fixed";
import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
  direction: Direction;
  snap?: SnapBehaviour;
  className?: string;
};

type Direction = "x" | "y" | "both";
type SnapBehaviour = "mandatory" | "proximity" | "none";

type CarouselProps = FC<ContainerProps> & {
  Items: FC<ItemsProps>;
  Fixed: FC<FixedProps>;
};

const Container: CarouselProps = ({
  children,
  className,
  direction,
  snap = "none",
}) => {
  const directionClassname = styles[`scroll-direction-${direction}`];
  const snapBehaviourClassname =
    snap !== "none" && styles[`scroll-snap-behaviour-${snap}`];

  return (
    <>
      <div
        className={[
          styles.carousel,
          directionClassname,
          snapBehaviourClassname,
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
};

Container.Items = Items;
Container.Fixed = Fixed;

export default Container;
