import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error";
import Index from "../pages/Index/Index";
import Movies from "../pages/Movies/Movies";
import First from "../pages/OnTheAir/First";
//Route configuration:
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                errorElement: <Error />, //para no perder el layoutPublic
                children: [
                    {
                        index: true,
                        element: <Index />,
                    },
                    {
                        path: "/top",
                        element: <First />,
                    },
                    {
                        path: "/movies",
                        element: <Movies />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);