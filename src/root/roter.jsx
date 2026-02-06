import {
    createBrowserRouter,
    
} from "react-router-dom";
import Mainrouter from "./Mainrouter";
import Home from "./Home/Home";
import Mybook from "../pages/Mybooking/Mybook";
import Doctordetails from "../component/Doctors/Doctordetails/Doctordetails";



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
                path : '/booking',
                element : <Mybook/>
            },
            {
                path: '/details/:id',
                loader: async () => {
                    const res = await fetch('/Doctors.json')
                    return res.json()
                },
                element: <Doctordetails />
            },
            

        ]
    },
]);