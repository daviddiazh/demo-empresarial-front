import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom"

import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';

const QuestionsPrivate = ({ question, deleteQuestion }) => {  

    
    return(
        <div className='question' style={{margin: "0 200px"}}>

            <table className="table table-bordered table-striped">

                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Pregunta</th>
                        <th>Estado Pregunta</th>
                        <th>Ver Pregunta</th>
                        
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <td>{question.category}</td>
                        {/* <td>{question.question}</td> */}
                        <td><ReactQuill className='quill-editor'
                            readOnly='true'
                            preserveWhitespace='false'
                            value={question.question}
                            modules={QuestionsPrivate.modules}
                            theme="bubble"
                        /></td>
                        <td>{question.type}</td>
                        <td>{<Link to={`/private/question/${question.id}`} className="btn btn-primary" style={{background: "#0d6efd", border: "none"}}>
                            Ver Pregunta
                        </Link>}</td>
                        <td>
                            {deleteQuestion &&  (
                                <button className="btn btn-danger" 
                                    id={question.id}
                                    onClick={() => deleteQuestion(question.id)}
                                    >Eliminar Pregunta
                                </button>
                            )}
                        </td>
                    </tr>
                </thead>
   
            </table>

            
        </div>
    )
}

QuestionsPrivate.modules = {toolbar: false}
export default QuestionsPrivate