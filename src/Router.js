import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import Genres from "./pages/Genres";
import SingleGenre from "./pages/SingleGenre";
import SearchResult from "./pages/SearchResult";
import ContactUs from "./pages/ContactUs";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
    },
    {
        path:"/movies",
        element:<MoviePage/>,
    },
    {
        path:"/movies/:id",
        element:<SingleMovie/>,
    },
    {
        path:"/genres",
        element:<Genres/>,
    },
    {
        path:"/search",
        element:<SearchResult/>,
    },
    {
        path:"/contactus",
        element:<ContactUs/>,
    },
    {
        path:"/genres/:genreId",
        element:<SingleGenre/>,
    },
    {
        path:"*",
        element:<NotFound/>,
    }
])
export default function Router() {
    return(
        <RouterProvider router={routes}></RouterProvider>
    )
}