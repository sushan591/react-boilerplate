import PageNotFound from "components/errors/PageNotFound";
import routes from "constants/routes";
import { Login } from "pages/auth";
import ForgotPassword from "pages/auth/ForgotPassword";
import ResetPassword from "pages/auth/ResetPassword";
import SetPassword from "pages/auth/SetPassword";
import Dashboard from "pages/dashboard/Dashboard";
import UserList from "pages/dashboard/users/UserList";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";

// Top level application router.

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.auth.login} element={<Login />} />
        <Route path={routes.auth.forgotPassword} element={<ForgotPassword />} />
        <Route path={routes.auth.setPassword} element={<SetPassword />} />
        <Route path={routes.auth.resetPassword} element={<ResetPassword />} />

        <Route path={routes.dashboard} element={<AuthenticateRoute />}>
          <Route path={routes.users.list} element={<UserList />} />
          <Route path={routes.dashboard} element={<Dashboard />} />
        </Route>
        <Route path={routes.remaining} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
