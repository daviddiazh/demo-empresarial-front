import { Link } from "react-router-dom"

const QuestionsPrivate = ({question}) => {  

    return(
        <div className='question'>
            <p>{question.category}  - <small>{question.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
        
        </div>
    )
}

export default QuestionsPrivate