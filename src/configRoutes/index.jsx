import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Index from "../pages/Index/Index";
import FormSearch from "../pages/Movies/Components/FormSearch";
import MoreViews from "../pages/MoreViews/MoreViews";
import ContactForm from "../pages/Contact/Components/ContactForm";
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
            element: <ContactForm />,
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
