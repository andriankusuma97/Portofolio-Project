import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import HomePage from '../pages/HomePage'
import PortofolioPage from "../pages/Project";



const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/project",
        element: <PortofolioPage/>,
      }
    ],
  },
]);

export default router