import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/Mainlayout";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import ServiceDetails from "../page/ServiceDetails/ServiceDetails";
import Contact from "../page/Contact/Contact";
import Services from "../page/Services/Services";
import SendMessage from "../components/SendMessage/SendMessage";
import Team from "../page/Team/Team";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/sendMessage",
        element: <SendMessage />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

export default Router;
