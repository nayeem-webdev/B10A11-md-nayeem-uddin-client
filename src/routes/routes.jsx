import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AddFoodPage from "../pages/AddFoodPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoutes from "./PrivateRoutes";
import Account from "../pages/Account";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";

const routes = createBrowserRouter([
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
        path: "/add-food",
        element: (
          <PrivateRoutes>
            <AddFoodPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoutes>
            <Account />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
