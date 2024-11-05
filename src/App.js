/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import routes from "routes";
//import LoginPage from "pages/LoginPage/LoginPage";
//import SignInBasic from "pages/LandingPages/SignIn";
//import ClassAiPage from "pages/ClassAiPage/ClassAiPage";
//import LandingPages from "pages/LandingPages/AboutUs/index.js";
// import CardBoard from "../src/components/RPCGComponents/RPCGBoard.js";
import RPCGPage from "pages/RPCGPages/RPCGPage";
import "components/RPCGComponents/CardComponent.css";
const App = () => {
  const { pathname } = useLocation();
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    // Check if there's a logged-in user and set their role
    const loggedInUser = localStorage.getItem("user");
    //console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      const userObj = JSON.parse(loggedInUser);
      //console.log("userObj", userObj);
      setCurrentUserRole(userObj.role);
      //console.log("userObj.role", userObj.role);
      setIsLoggedIn(true);
    } else {
      setCurrentUserRole(null);
      setIsLoggedIn(false);
    }
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      // Check if user role has access to the route
      if (currentUserRole && route.roles.includes(currentUserRole)) {
        if (route.route) {
          return <Route exact path={route.route} element={route.component} key={route.key} />;
        }
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {isLoggedIn ? (
          <>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <Route path="*" element={<RPCGPage />} />
        )}
      </Routes>
    </ThemeProvider>
  );
};
export default App;
