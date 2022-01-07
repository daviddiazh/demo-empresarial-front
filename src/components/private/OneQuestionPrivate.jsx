import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='question'>
            <p>{oneQuestion.category} - {oneQuestion.question} - <small>{oneQuestion.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        
        </div>
    )
}

export default OneQuestionPrivate