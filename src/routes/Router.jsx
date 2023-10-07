import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/Mainlayout";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
