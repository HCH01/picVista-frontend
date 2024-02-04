import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import ImageContainer from "../components/ImageContainer";
import Category from "../pages/Category";
import CategoryOpts from "../components/CategoryOpts";

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <NavBar/>,
        children:[ {
            path: "/",
            element: <ImageContainer/>
        },
        {
            path: "/category",
            element: <Category/>,
            children:[ {
                path: "/category",
                element: <CategoryOpts/>
            },
            {
                path: "/category/:category",
                element : <ImageContainer/>
            }]
        }
    ]
    },
    {
        path: "/sign",
        element: <div>signin</div>
    },
]);

export default mainRouter;