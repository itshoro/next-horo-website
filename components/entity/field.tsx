import { ReactNode } from "react";
import { Skeleton } from "../skeleton";
import { Text } from "../text";

const EntityField = ({
  title,
  description,
  align,
  loading = false,
}: EntityFieldArgs) => {
  const alignClass =
    align &&
    {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }[align];

  return (
    <div
      className={[
        "flex-1 flex flex-col min-w-0",
        alignClass,
        loading && "space-y-2",
      ]
        .filter((x) => x)
        .join(" ")}
    >
      <Skeleton show={loading}>{title}</Skeleton>
      <Skeleton show={loading}>{description}</Skeleton>
    </div>
  );
};

export type EntityFieldArgs = {
  title?: string;
  description?: string;
  align?: "left" | "center" | "right";
  loading?: boolean;
};

export { EntityField };
