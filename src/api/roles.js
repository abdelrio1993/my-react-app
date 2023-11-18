import axios from "axios";
import { URL_BASE } from "../constants";

export const getRoles = (
  setIsLoadingRoles,
  setDataRol,
  openNotificationSuccess,
  dispatch,
  rolesListAction,
  api
) => {
  setIsLoadingRoles(true);

  openNotificationSuccess(api, "bottomRight", "Roles loaded correctly.");
  axios
    .get(`${URL_BASE}/roles`)
    .then((response) => {
      setTimeout(() => {
        dispatch(rolesListAction(response.data));
        setIsLoadingRoles(false);
        setDataRol(response.data);
        openNotificationSuccess(api, "bottomRight", "Roles loaded correctly.");
      }, 1500);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const createRole = (data, dispatch, rolesAddAction) => {
  axios
    .post(`${URL_BASE}/roles`, data)
    .then((response) => {
      console.log("state", response.data)
      dispatch(rolesAddAction(response.data));
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const deleteRole = (id) => {
  axios
    .delete(`${URL_BASE}/roles/${id}`)
    .then((response) => {
      console.log("Roles deleted correctly.");
    })
    .catch((error) => {
      console.log("error", error);
    });
};
