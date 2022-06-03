import { FC, ReactNode } from "react";

type PositionAnchor = "top" | "left" | "bottom" | "right";
type TailwindScale =
  | "px"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

type FixedPosition = `${PositionAnchor}-${TailwindScale}`;

export interface FixedProps {
  children: ReactNode;
  position: FixedPosition;
}

const Fixed: FC<FixedProps> = ({ children, position }) => {
  return (
    <div className={["sticky inline-flex", position].join(" ")}>{children}</div>
  );
};

export default Fixed;
