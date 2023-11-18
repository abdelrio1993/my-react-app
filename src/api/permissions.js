import axios from "axios";
import { URL_BASE } from "../constants";

export const getPermissions = (
  setIsLoadingPermissions,
  openNotificationSuccess,
  dispatch,
  permissionsListAction,
  api
) => {
    setIsLoadingPermissions(true);

  openNotificationSuccess(api, "bottomRight", "Permissions loaded correctly.");
  axios
    .get(`${URL_BASE}/permissions`)
    .then((response) => {
      setTimeout(() => {
        dispatch(permissionsListAction(response.data));
        setIsLoadingPermissions(false);
        openNotificationSuccess(api, "bottomRight", "Permissions loaded correctly.");
      }, 1500);
    })
    .catch((error) => {
      console.log("error", error);
    });
};