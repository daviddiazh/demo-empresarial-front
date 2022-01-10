import { Link } from "react-router-dom"
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';

const OneQuestionPublic = ({question}) => {

    return(
        <div className='question' style={{margin: "0 200px"}}>

            <h1 className="m-5">Pregunta</h1>
            
            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Pregunta</th>
                        <th>Estado Pregunta</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>{question.category}</td>
                            <ReactQuill className='quill-editor'
                                readOnly='true'
                                preserveWhitespace='false'
                                value={question.question}
                                modules={question.modules}
                                theme="bubble"
                            />
                        <td>{question.type}</td>
                    </tr>
                </thead>

            </table>

            <h3 className="m-5">Respuestas de esta pregunta</h3>
    
        
        </div>
    )
}

OneQuestionPublic.modules = {toolbar: false}
export default OneQuestionPublic