import { CSSProperties, FC } from "react";
import styles from "./bleed.module.css";

interface BleedProps {
  accent: string;
}

const Bleed: FC<BleedProps> = ({ accent }) => {
  return (
    <div
      style={
        {
          "--accent": accent,
        } as CSSProperties
      }
      className={[
        "absolute top-0 left-0 w-44 max-h-full aspect-square opacity-20 rounded-lg -z-10",
        styles.bleed,
      ].join(" ")}
    />
  );
};

export { Bleed };
