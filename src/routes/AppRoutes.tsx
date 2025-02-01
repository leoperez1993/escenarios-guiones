import { Route, Routes } from "react-router-dom";
import { routes } from "./RouteConfig";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.url} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
