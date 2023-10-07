import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/Mainlayout";
import Home from "../page/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
