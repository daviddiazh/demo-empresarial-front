import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='question' style={{margin: "0 200px"}}>
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}

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
                        <td>{oneQuestion.question}</td>
                        <td>{oneQuestion.type}</td>
                    </tr>
                </thead>

            </table>
        
        </div>
    )
}

export default OneQuestionPrivate