import { ReactNode } from "react";
import { useEntityContext } from ".";
import { Skeleton } from "../skeleton";

const EntityThumbnail = ({ className, children }: EntityThumbnailArgs) => {
  let context = useEntityContext(EntityThumbnail.name);
  const { loading } = context;

  return (
    <div className={["flex-shrink", className].filter((x) => x).join(" ")}>
      <Skeleton show={loading}>{children}</Skeleton>
    </div>
  );
};

export type EntityThumbnailArgs = {
  className?: string;
  children?: ReactNode;
};

export { EntityThumbnail };
