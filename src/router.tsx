import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Genre from "./pages/GenrePage";
import Details from "./pages/BookDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/genre",
        element: <Genre/>
    },
    {
        path: "/details",
        element: <Details/>
    }
])

export default router;