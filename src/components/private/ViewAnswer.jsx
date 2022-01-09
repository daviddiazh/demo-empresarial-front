import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';

const ViewAnswer = ({answer}) => {  

    return(
        <div className='question'>

            <div className='question'>

            <ReactQuill className='quill-editor'
                readOnly='true'
                preserveWhitespace='false'
                value={answer.answer}
                modules={ViewAnswer.modules}
                className='respuestas'
            />

            </div>
        
        </div>
    )
}
ViewAnswer.modules = {toolbar: false}

export default ViewAnswer