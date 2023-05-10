import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import WorldCatalog from "../../features/world/WorldCatalog";
import ActorCatalog from "../../features/actors/ActorCatalog";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ActorDetails from "../../features/actors/ActorDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'worldscatalog', element: <WorldCatalog />},
            {path: 'actorscatalog/:world', element: <ActorCatalog />},
            {path: 'actor/:world/:id', element: <ActorDetails />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />}
        ]
    }
])