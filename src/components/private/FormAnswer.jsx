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
        // postAnswer(formData);
        console.log(formData);
        dispatch(postAnswer(formData));
        setBody("");
    }

    return(

        <div>
            <form onSubmit={submitForm}>
                <h1>Respuestas</h1>
                <label>Añade una respuesta.</label>
                <TextEditor body={body} setBody={setBody} />
                {/* <input required name="answer" type="text" placeholder='Ingresa acá una respuesta'></input> */}
                {/* <input hidden name="userId" type="text" value={state.user.uid} ></input>
                <input hidden name="questionId" type="text" value={idQuestion} ></input> */}
                <button type="submit">Enviar Respuesta</button>
            </form>
        </div>

    )

}

export default FormAnswer