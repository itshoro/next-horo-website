import { ReactElement } from "react";
import { Skeleton } from "../skeleton";
import { Text } from "../text";
import { useEntityContext } from ".";

const EntityField = ({ title, description, align }: EntityFieldArgs) => {
  const alignClass =
    align &&
    {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    }[align];

  let context = useEntityContext(
    [EntityField.name, title].filter((x) => x).join(".")
  );
  const { loading } = context;

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
      <Skeleton show={loading}>
        <Text
          color={loading ? "transparent" : "foreground"}
          weight="bold"
          as="div"
          truncate={true}
        >
          {title}
        </Text>
      </Skeleton>
      <Skeleton show={loading}>
        <Text
          color={loading ? "transparent" : "secondary"}
          as="div"
          className="text-sm"
          truncate={true}
        >
          {description}
        </Text>
      </Skeleton>
    </div>
  );
};

export type EntityFieldArgs = {
  title?: string | ReactElement;
  description?: string | ReactElement;
  align?: "left" | "center" | "right";
  loading?: boolean;
};

export { EntityField };
