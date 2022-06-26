import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
}

const Body: FC<
  CardProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      className={[className, "dark:bg-accent bg-black/5 rounded-2xl relative"]
        .filter((x) => x)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};

export interface BodyProps {
  children?: ReactNode;
}

export { Body };
