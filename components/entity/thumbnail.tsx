import { ReactNode } from "react";
import { Skeleton } from "../skeleton";

const EntityThumbnail = ({
  className,
  children,
  loading = false,
}: EntityThumbnailArgs) => {
  return (
    <div className={["flex-shrink", className].filter((x) => x).join(" ")}>
      <Skeleton show={loading}>{children}</Skeleton>
    </div>
  );
};

export type EntityThumbnailArgs = {
  className?: string;
  children?: ReactNode;
  loading?: boolean;
};

export { EntityThumbnail };
