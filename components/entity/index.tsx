import { ReactElement, ReactNode } from "react";
import { EntityField } from "./field";
import { EntityThumbnail, EntityThumbnailArgs } from "./thumbnail";

const Entity = ({ children, className, thumbnail }: EntityArgs) => {
  return (
    <div
      className={["flex flex-col sm:flex-row justify-between", className]
        .filter((x) => x)
        .join(" ")}
    >
      {thumbnail}
      {children}
    </div>
  );
};

type EntityArgs = {
  thumbnail?: ReactElement<EntityThumbnailArgs>;
  children?: ReactNode;
  className?: string;
};

export { Entity, EntityField, EntityThumbnail };
