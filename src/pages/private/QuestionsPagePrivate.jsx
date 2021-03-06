import {useEffect, useState} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)

    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])

    const [ filtro, setFiltro ] = useState("");

    
  
    
    return (
        <>

            <h1 className='m-5'>Preguntas</h1>

            <input
                className="form-control  mb-5 m-auto"
                placeholder="Buscar preguntas por categoria o estado..."
                type="text"
                onChange={(e) => setFiltro(e.target.value.toUpperCase())}
                style={{width: "500px"}}
            ></input>  
            
            

            {error&& <h1>{error}</h1>}
            {questions && questions.filter( busqueda => busqueda.category.includes(filtro) || busqueda.type.includes(filtro) ).map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
               
            })}
            
        </>
    )
}

export default QuestionsPagePrivate
