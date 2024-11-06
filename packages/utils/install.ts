import type { Plugin, App } from "vue";

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name || "UnnamedComponent";

    // register component
    app.component(name, comp as SFCWithInstall<T>);
  };

  return comp as SFCWithInstall<T>;
};
