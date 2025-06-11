import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Months from "../pages/Months/Months";
import Tasks from "../pages/Tasks/Tasks";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.MONTHS} element={<Months />} />
      <Route path={ROUTES.TASKS} element={<Tasks />} />
      <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
    </Routes>
  );
};
