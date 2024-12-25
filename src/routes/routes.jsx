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
import FoodPage from "../pages/FoodPage";
import { API } from "../api";
import FoodPurchasePage from "../pages/FoodPurchasePage";

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
        path: "/food/:id",
        element: <FoodPage />,
        loader: ({ params }) => API.get(`/food/${params.id}`),
      },
      {
        path: "/food-purchase/:id",
        element: (
          <PrivateRoutes>
            <FoodPurchasePage />
          </PrivateRoutes>
        ),
        loader: ({ params }) => API.get(`/food/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => API.get(`/gallery`),
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
