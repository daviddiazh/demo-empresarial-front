import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"
import { app, google } from "../service/firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch , useSelector  } from "react-redux"
import {loginAction ,loggedAction} from "../actions/AuthorActions"
import imggoogle from "../media/googleLogo.png";


const PublicLayout = () => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signInWithPopup(google)
        .then(user =>{
             dispatch(loginAction(user.user.multiFactor.user.email , 
                user.user.multiFactor.user.displayName,
                user.user.multiFactor.user.uid,
                user.user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")    
        })
        .catch()
      }

      
useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
      if(user){
        dispatch(loggedAction(user.multiFactor.user.email , 
            user.multiFactor.user.displayName,
            user.multiFactor.user.uid,
            user.multiFactor.user.photoURL))
            navigate("/private/QuestionsPage")
        }
})},[])




    return (
        <div>
            <Navbar elements={publicNavbar}/>
            

            <button className="btn btn-light" style={{margin: "50px 0"}} onClick={handler}><img src={imggoogle} width={25} height={25}></img> Iniciar con Google</button>
            <Outlet/>
            <Footer/>
        </div>
    )
}
    
export default PublicLayout
