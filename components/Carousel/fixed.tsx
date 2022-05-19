import { FC, ReactNode } from "react";

export interface FixedProps {
  children: ReactNode;
}

const Fixed: FC<FixedProps> = ({ children }) => {
  return <>{children}</>;
};

export default Fixed;
