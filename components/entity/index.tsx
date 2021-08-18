import { createContext, ReactNode, useContext } from "react";
import { EntityField } from "./field";
import { EntityThumbnail, EntityThumbnailArgs } from "./thumbnail";

type EntityState = {
  loading: boolean;
};

const EntityContext = createContext<EntityState>({ loading: false });
EntityContext.displayName = "EntityContext";

const useEntityContext = (component: string) => {
  let context = useContext(EntityContext);
  if (context === null) {
    let err = new Error(
      `${component} is missing a parent <${Entity.name}/> component.`
    );
    if (Error.captureStackTrace) Error.captureStackTrace(err, useEntityContext);
    throw err;
  }
  return context;
};

const Entity = ({ children, className, loading }: EntityArgs) => {
  return (
    <EntityContext.Provider
      value={{
        loading: loading ?? false,
      }}
    >
      <div
        className={["flex flex-row flex-wrap justify-between", className]
          .filter((x) => x)
          .join(" ")}
      >
        {children}
      </div>
    </EntityContext.Provider>
  );
};

type EntityArgs = {
  loading?: boolean;
  children?: ReactNode;
  className?: string;
};

Entity.Field = EntityField;
Entity.Thumbnail = EntityThumbnail;

export { Entity, useEntityContext };
