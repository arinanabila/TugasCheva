import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayouts";
import LandingPage from "./pages/LandingPage"; 

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/movies", 
                element: <HomePage />
            }
        ] 
    },
]);

export default router;