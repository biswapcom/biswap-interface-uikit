import { createContext, ElementType } from "react";

export const MenuSolContext = createContext<{ linkComponent: ElementType }>({
  linkComponent: "a",
});
