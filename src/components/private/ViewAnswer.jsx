import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';

const ViewAnswer = ({answer, deleteAnswer}) => {  

    const state = useSelector(state => state.auth)

    return(
        <div className='question'>

            <div className='question'>

                <ReactQuill className='quill-editor'
                    readOnly='true'
                    preserveWhitespace='false'
                    value={answer.answer}
                    modules={ViewAnswer.modules}
                    theme="bubble"
                    className='respuestas'
                />

                {deleteAnswer && (
                                
                    <button
                        id={answer.id}
                        className="btn-danger"
                        onClick={() => deleteAnswer(answer.id)}>
                        Eliminar Respuesta
                    </button>
                )}

            </div>
        
        </div>
    )
}
ViewAnswer.modules = {toolbar: false}

export default ViewAnswer
