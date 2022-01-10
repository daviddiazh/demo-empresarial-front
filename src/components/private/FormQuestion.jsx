import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import TextEditor from "../../hooks/TextEditor";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FormQuestion = () => {

  const navigate = useNavigate()

    const state =useSelector(state=>state.auth)

    const [ body, setBody ] = useState("");

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(form.current[1].value);
        const envioDatos = {
          userId: form.current[0].value,
          question: body,
          type: form.current[1].value,
          category: form.current[2].value,
          email: state.user.email
        }
        postQuestion(envioDatos,navigate)
    }

    return(
        <div>
            <h1 className='m-5'>Añade una nueva pregunta</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <TextEditor body={body} setBody={setBody}/>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
                <label className=" font-medium">Estado de la pregunta</label>
                <select required className="" name="type" defaultValue="" style={{border: "none", margin: "50px 20px", width:"200px", height: "30px"}}>
                  <option disabled type=""value="">Seleccionar</option>
                  <option type="String">OPEN</option>
                  <option type="String">OPINION</option>
                  <option type="String">WITH_RESULT</option>
                  <option type="String">WITH_EVIDENCE</option>
                </select>
                <label className="font-medium">Categoria</label>
                <select required name="category" defaultValue="" style={{border: "none", margin: "50px 20px", width:"200px", height: "30px"}}>
                  <option disabled type=""value="">Seleccionar</option>
                  <option type="String">TECHNOLOGY_AND_COMPUTER</option>
                  <option type="String">SCIENCES</option>
                  <option type="String">SOFTWARE_DEVELOPMENT</option>
                  <option type="String">SOCIAL_SCIENCES</option>
                  <option type="String">LANGUAGE</option>
                </select>
                <button type="submit" className='btn btn-success '>Enviar</button>
            </form>

        </div>
    )

}


export default FormQuestion