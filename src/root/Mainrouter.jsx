import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer/Footer'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Mainrouter = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

            <ToastContainer />
        </>
    )
}

export default Mainrouter
