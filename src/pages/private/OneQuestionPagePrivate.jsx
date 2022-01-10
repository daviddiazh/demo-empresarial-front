import { useDispatch,useSelector } from "react-redux";
import { loadById, deleteAnswer } from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePrivate = () => {
    const {id}=useParams();
    
    const dispatch = useDispatch()
    const {oneQuestion} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])
    console.log("aparece ", oneQuestion);

    const deleteAnswers = (id) => {
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
                dispatch(deleteAnswer(id))
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
            <h1 className="mt-5">Pregunta</h1>
            {oneQuestion && 
            <>
                 <OneQuestionPrivate oneQuestion={oneQuestion}/>

                <h4>Responder a esta pregunta</h4>

                 <FormAnswer idQuestion={oneQuestion.id}></FormAnswer>
                 <h3>Respuestas de esta pregunta</h3>
                 {oneQuestion.answers&&oneQuestion.answers.map((answer)=>{
                     console.log(answer.id, "id")
                     return(
                         <ViewAnswer key={answer.id} answer={answer} deleteAnswer={deleteAnswers}/>
                     )
                 }) }
            </>     
            }

            
        </>
    )
}

export default OneQuestionPagePrivate
