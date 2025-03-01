import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Genre from "./pages/GenrePage";
import Details from "./pages/BookDetailsPage";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/home",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "genre",
                element: <Genre/>
            },
            {
                path: "details",
                element: <Details/>
            }
        ]
    }
])

export default router;