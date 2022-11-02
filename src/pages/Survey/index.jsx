import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Survey() {

    const { questionNumber } = useParams()
    const nextQuestionNumber = parseInt(questionNumber) + 1
    let prevQuestionNumber = questionNumber
    if(questionNumber !== 1){
        prevQuestionNumber = parseInt(questionNumber) -1
    }
    
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>

            {questionNumber > 1 && <Link to={`/survey/${prevQuestionNumber}`} questionNumber={1} >Précedent</Link> } &nbsp;&nbsp;
            {questionNumber <= 10 &&<Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link> }
            {questionNumber > 10 && <Link to={`/results/`}>Resultats</Link> }
        </div>
    )
}

export default Survey