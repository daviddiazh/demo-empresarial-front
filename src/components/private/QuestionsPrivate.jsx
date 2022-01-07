import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom"

const QuestionsPrivate = ({question}) => {  

    



    return(
        <div className='question'>

        
            <p>{question.question}  - <small>{question.type}</small> <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link></p>

            {/*<table>
                <input
                    className="form-control  mb-3 "
                    placeholder="Buscar estudiante"
                    onChange={searchQuestion}
                ></input>
                <tr>
                    <th>Pregunta</th>
                    <th>Estado Pregunta</th>
                    <th>Ver Pregunta</th>
                </tr>
                <tr>
                    <td>{question.question}</td>
                    <td>{question.type}</td>
                    
                </tr>
            </table>*/}



            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}

            
        
        </div>
    )
}

export default QuestionsPrivate