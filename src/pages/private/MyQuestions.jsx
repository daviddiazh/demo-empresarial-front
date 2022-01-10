import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserQuestion, deleteQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"
import FormQuestion from "../../components/private/FormQuestion"


 
const MyQuestions = (id) => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)
    
    useEffect(() =>{
        dispatch(getUserQuestion(user.uid));
    },[])

    const sweetAlert = (id) => {
        const Swal = require('sweetalert2')
        Swal.fire({
            title: '¿Estás seguro de eliminar la pregunta?',
            text: "En caso de si, esta acción no se puede revertir en el futuro.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteQuestion(id, myQuestions))
                Swal.fire(
                'Eliminado!',
                'Tu pregunta se ha borrado correctamente.',
                'success'
              )
            }
          })
    }

    return (
        <>
            <h2 className="m-4">Estas son tus preguntas</h2>
            <p style={{fontSize: "19px"}}>Bienvenid@ <span style={{color: "#0d6efd"}}> {user.name}</span> Email: <span style={{color: "#0d6efd"}}>{user.email}</span></p>
            {myQuestions && myQuestions.map((question)=>{
                return(
                    <QuestionsPrivate key={question.id} question={question} deleteQuestion={sweetAlert}/>
                    )
            }) }
        
            {error && <h1>Ocurrio un error </h1>}

        </>
    )
}

export default MyQuestions
