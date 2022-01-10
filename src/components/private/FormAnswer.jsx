import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import TextEditor from "../../hooks/TextEditor";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FormAnswer = ({idQuestion}) => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch();

    const [ body, setBody ] = useState("");

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        const formData = { userId: state.user.uid, questionId:idQuestion, answer: body, position: 1 }
        dispatch(postAnswer(formData));
        setBody("");
    }

    return(

        <div>
            <form onSubmit={submitForm} onChange={updateFormData}>
                <TextEditor body={body} setBody={setBody}/>
                <button type="submit" className="btn btn-success" style={{border: "none", margin: "30px 0"}}>Enviar Respuesta</button>
            </form>
        </div>

    )

}

export default FormAnswer