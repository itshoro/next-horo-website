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
        "skeleton w-full rounded inline-flex select-none",
        inline ? "h-auto" : "h-full",
        className,
      ]
        .filter((x) => x)
        .join(" ")}
    >
      {children}
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
