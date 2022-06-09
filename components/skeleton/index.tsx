import { ReactNode } from "react";

const Skeleton = ({
  children,
  className,
  inline = false,
  show = true,
}: SkeletonArgs) => {
  if (children && !show) return <>{children}</>;

  return (
    <span
      className={[
        "skeleton rounded inline-flex select-none isolate",
        inline ? "h-auto" : "h-full w-full",
        className,
      ]
        .filter((x) => x)
        .join(" ")}
    >
      <div className="opacity-0">{children}</div>
    </span>
  );
};

type SkeletonArgs = {
  children?: ReactNode;
  className?: string;
  inline?: boolean;
  show?: boolean;
};

export { Skeleton };
