import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom"

const QuestionsPrivate = ({question}) => {  

    
    return(
        <div className='question' style={{margin: "0 100px"}}>

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
                        <td>{question.question}</td>
                        <td>{question.type}</td>
                        <td>{<Link to={`/private/question/${question.id}`} className="btn btn-primary" style={{background: "#0d6efd", border: "none"}}>
                            Ver Pregunta
                        </Link>}</td>
                    </tr>
                </thead>
                
                
            </table>


            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}

            
        
        </div>
    )
}

export default QuestionsPrivate