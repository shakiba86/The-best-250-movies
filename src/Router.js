import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SingleMovie from "./pages/SingleMovie";
// import NotFound from "./Pages/NotFound";
// import SingeItem from "./Pages/sigleItem";
import Genres from "./pages/Genres";
import SingleGenre from "./pages/SingleGenre";
// import SearchResult from "./Pages/searchresult";

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
    // {
    //     path:"/search",
    //     element:<SearchResult/>,
    // },
    {
        path:"/genres/:genreId",
        element:<SingleGenre/>,
    },
    // {
    //     path:"*",
    //     element:<NotFound/>,
    // }
])
export default function Router() {
    return(
        <RouterProvider router={routes}></RouterProvider>
    )
}