import {Link} from "react-router-dom"
import logo from "../media/iconoddhtransparente.png";
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import {  useDispatch ,useSelector  } from "react-redux"
import {loggedAction,logoutAction} from "../actions/AuthorActions"
import { privateNavbar } from "../utils/NavbarList";
import PublicLayout from "../layout/PublicLayout";

const Navbar = ({elements}) => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

    
    
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "#0d6efd"}}>
                
                <img style={{marginLeft: "50px"}} src={logo} alt="Logo DDH" width={80} height={60} />
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" style={{color: "#000"}}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">

                        {elements.map((item, index) => {
                            return(
                                <li key={index} className="nav-item active">
                                    <Link
                                    className="nav-link fs-5 text-decoration-none" style={{marginLeft: "20px"}}
                                    to={item.url}
                                    >
                                        <span>{item.titulo}</span>
                                    </Link>
                                </li>
                            )
                        })}

                        
                    </ul>
                </div>
                
                { state.user 
                    ? <button style={{marginRight: "50px"}} className="btn btn-danger" onClick={handler}>Salir</button> 
                    : null 
                }
            </nav>
        </div>
    )
}

export default Navbar
