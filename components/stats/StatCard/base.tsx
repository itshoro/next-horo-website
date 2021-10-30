import PropTypes from "prop-types";
import { ReactElement } from "react";

const StatCard = ({ title, children }: StatCardArgs) => (
  <div className="border border-accent rounded-lg text-white py-2 px-4 text-sm">
    <div className="capitalize pb-2">{title}</div>
    {children}
  </div>
);

type StatCardArgs = {
  title: string;
  children?: ReactElement;
};

type LoadingCardArgs = {
  loading?: boolean;
};

export { StatCard };
export type { LoadingCardArgs };
