import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import { HomePage } from "../pages/home";
import { PAGES } from "../config/constants";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AppNavigator = () => {
  return (
    <Router history={history}>
      <div>
        <div>
          <Header />
          <Routes>
            <Route path={PAGES.HOME} element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default AppNavigator;
