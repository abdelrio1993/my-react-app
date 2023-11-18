import axios from "axios";
import { URL_BASE } from '../constants';

export const getLogin = (
  setIsLoginig,
  dispatch,
  saveLoginData,
  setIsAuthenticatedAction,
  setLogin,
  openNotificationSuccess,
  api,
  navigate
) => {
  setIsLoginig(true);
  
  axios.get(`${URL_BASE}/login`).then((response) => {
    setTimeout(() => {
        openNotificationSuccess(api, 'top', "authenticated user",  "Welcome to the FrontEnd/Test system.");        
        dispatch(saveLoginData(response.data.data))   
        dispatch(setIsAuthenticatedAction(true));
        setAuthenticatedForCurrentUser({ status: true});
        setLogin(response.data);
        setIsLoginig(false);
      }, 2000);
  }).catch(error => {
        console.log("error", error);
        dispatch(setIsAuthenticatedAction(false));
  });
};

export const setAuthenticatedForCurrentUser = (data) => {
  axios.put(`${URL_BASE}/isAuthenticated`, data).then((response) => {
      console.log("The user is authenticated");
  }).catch(error => {
      console.log("error", error);
  });
};