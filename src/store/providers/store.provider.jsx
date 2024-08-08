import { useReducer } from "react";

import { StoreContext } from "../context/store.context";
import { userReducer } from "../reducers/user.reducer";

let authInitialState = {
  user: null
};

export default function StoreProvider({children}) {
  const [authState, authDispatch] = useReducer(userReducer, authInitialState);

  function setAuthUser(authenticatedUser) {
    authDispatch({
      type: "SET_AUTH_USER",
      payload: authenticatedUser
    });
  }


  const storeInitialState = {
    auth: {
      user: authState.user,
      setAuthUser: setAuthUser
    }
  };

  return (
    <StoreContext.Provider value={storeInitialState}>
      { children }
    </StoreContext.Provider>
  );
}