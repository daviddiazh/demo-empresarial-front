import { Link } from "react-router-dom"
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='question' style={{margin: "0 200px"}}>

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
                        <td>{oneQuestion.category}</td>
                        <ReactQuill className='quill-editor'
                            readOnly='true'
                            preserveWhitespace='false'
                            value={oneQuestion.question}
                            modules={OneQuestionPrivate.modules}
                            theme="bubble"
                        />
                        <td>{oneQuestion.type}</td>
                    </tr>
                </thead>

            </table>
        
        </div>
    )
}

OneQuestionPrivate.modules = {toolbar: false}
export default OneQuestionPrivate