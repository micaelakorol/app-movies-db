import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error";
import Index from "../pages/Index/Index";
import FormSearch from "../pages/Movies/FormSearch";
import MoreViews from "../pages/MoreViews/MoreViews";
//Route configuration:
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/top",
            element: <MoreViews />,
          },
          {
            path: "/movies",
            element: <FormSearch />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);
