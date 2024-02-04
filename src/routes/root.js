import { createBrowserRouter } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ImageContainer />,
        // errorElement: <ErrorPage />,
    },
    {
        path: '/test',
        element: <dic>hi</dic>
    }
]);

export default router;