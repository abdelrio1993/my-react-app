import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import loginReducer from "../containers/Login/reducers/loginReducer";
import isAuthenticatedReducer from "../containers/Login/reducers/isAuthenticatedReducer";
import rolesListReducer from "../containers/Roles/reducers/rolesListReducer";
import permissionsListReducer from "../containers/Roles/reducers/permissionsListReducer";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        loging: loginReducer,
        isAuthenticated: isAuthenticatedReducer,
        rolesList: rolesListReducer,
        permissionsList: permissionsListReducer,


      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
