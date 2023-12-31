import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/Mainlayout";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import ServiceDetails from "../page/ServiceDetails/ServiceDetails";
import Contact from "../page/Contact/Contact";
import SendMessage from "../components/SendMessage/SendMessage";
import Team from "../page/Team/Team";
import PrivetRoute from "./PrivetRoute";
import Profile from "../page/Profile/Profile";
import AllServices from "../page/AllServices/AllServices";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/sendMessage",
        element: (
          <PrivetRoute>
            <SendMessage />
          </PrivetRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () => fetch("./services.json"),
      },
      {
        path: "/team",
        element: <Team />,
      },

      {
        path: "/services/:id",
        element: (
          <PrivetRoute>
            <ServiceDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Router;
