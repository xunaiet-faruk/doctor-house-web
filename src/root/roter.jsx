import {
    createBrowserRouter,
    
} from "react-router-dom";
import Mainrouter from "./Mainrouter";
import Home from "./Home/Home";
import Mybook from "../pages/Mybooking/Mybook";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainrouter/>,
        children : [
            {
                index : true,
                path : '/',
                element : <Home/>
            },
            {
                path : '/mybooking',
                element : <Mybook/>
            }
        ]
    },
]);