import { createContext } from "react";

export const StoreContext = createContext({
  auth: {
    user: null,
    setAuthUser: () => {}
  }
});