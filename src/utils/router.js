import { createBrowserRouter } from "react-router-dom";

import {
    LandingPage,
    NewsDetailPage
} from "../pages";

export const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/news/:id", element: <NewsDetailPage /> }
]);