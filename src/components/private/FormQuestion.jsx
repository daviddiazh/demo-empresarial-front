import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';


const FormQuestion = () => {

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData)
      }

    return(
        <div>
            <h1>Este es un fomulario de question.</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
                <label className=" font-medium">Type</label>
                <select required className="" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Type</option>
                  <option type="String">ARTES</option>
                  <option type="String">CIENCIAS_AGRARIAS</option>
                  <option type="String">CIENCIAS_ECONOMICAS</option>
                  <option type="String">CIENCIAS_EXACTAS_NATURALES</option>
                  <option type="String">CIENCIAS_FARMACEUTICAS_ALIMENTARIAS</option>
                  <option type="String">CIENCIAS_SOCIALES_HUMANAS</option>
                  <option type="String">COMUNICACIONES</option>
                  <option type="String">DERECHO_CIENCIAS_POLITICAS</option>
                  <option type="String">EDUCACION</option>
                  <option type="String">ENFERMERIA</option>
                  <option type="String">INGENIERIA</option>
                  <option type="String">MEDICINA</option>
                  <option type="String">ODONTOLOGIA</option>
                  <option type="String">SALUD_PUBLICA</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required name="category"  defaultValue="Category"className="">
                  <option disabled type="String"  value="">Category</option>
                  <option type="String">ARTES</option>
                  <option type="String">CIENCIAS_AGRARIAS</option>
                  <option type="String">CIENCIAS_ECONOMICAS</option>
                  <option type="String">CIENCIAS_EXACTAS_NATURALES</option>
                  <option type="String">CIENCIAS_FARMACEUTICAS_ALIMENTARIAS</option>
                  <option type="String">CIENCIAS_SOCIALES_HUMANAS</option>
                  <option type="String">COMUNICACIONES</option>
                  <option type="String">DERECHO_CIENCIAS_POLITICAS</option>
                  <option type="String">EDUCACION</option>
                  <option type="String">ENFERMERIA</option>
                  <option type="String">INGENIERIA</option>
                  <option type="String">MEDICINA</option>
                  <option type="String">ODONTOLOGIA</option>
                  <option type="String">SALUD_PUBLICA</option>
                </select>
                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}

export default FormQuestion