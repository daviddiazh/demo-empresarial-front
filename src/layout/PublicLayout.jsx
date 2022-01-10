import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"



const PublicLayout = () => {

    return (
        <div>
            <Navbar elements={publicNavbar}/>
            <Outlet />
            <Footer/>
        </div>
    )

}
    
export default PublicLayout
