import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./containers/Login/reducers/loginReducer";
import isAuthenticatedReducer from "./containers/Login/reducers/isAuthenticatedReducer";
import rolesListReducer from "./containers/Roles/reducers/rolesListReducer";
import  permissionsListReducer  from "./containers/Roles/reducers/permissionsListReducer";
export default configureStore({
  reducer: {
    loging: loginReducer,
    isAuthenticated: isAuthenticatedReducer,
    rolesList: rolesListReducer,
    permissionsList: permissionsListReducer,
  },
});
