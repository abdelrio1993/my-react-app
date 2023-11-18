import { screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setIsAuthenticatedAction } from "./containers/Login/reducers/isAuthenticatedReducer";
import configureStore from "./store";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "./utils/test-utils";
import App from "./App";

test("renders login when not autenticated", async () => {
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const h2Text = screen.getByText("LOGIN FRONTEND/TEST");
  expect(h2Text).toBeInTheDocument();
});

test("renders root when autenticated", async () => {
  const store = configureStore;
  store.dispatch(setIsAuthenticatedAction([], { payload: true }));
  renderWithProviders(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    { store }
  );
  const sideBarTitle = screen.getByText("FRONTEND TEST");
  expect(sideBarTitle).toBeInTheDocument();

  // after clicking in collapse icon
  const collapseIcon = screen.getByTestId("img-for-collapse");
  fireEvent.click(collapseIcon);

  const sideBarTitleCollapsed = screen.getByText("TEST");
  expect(sideBarTitleCollapsed).toBeInTheDocument();
  // after clicking in logout
  const btnLogout = screen.getByRole("button");
  fireEvent.click(btnLogout);

  const h2Text = screen.getByText("LOGIN FRONTEND/TEST");
  expect(h2Text).toBeInTheDocument();
});