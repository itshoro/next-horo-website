import { ReactElement } from "react";

const StatCard = ({ title, children }: StatCardArgs) => (
  <div className="bg-accent rounded-lg text-secondary py-4 px-6">
    <div className="flex items-baseline justify-between gap-4">
      <div className="capitalize pb-2 flex-shrink-0">{title}</div>
      {children}
    </div>
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
