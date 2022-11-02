import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>&nbsp;&nbsp;
            <Link to="/survey/42">Questionnaire</Link>&nbsp;&nbsp;
            <Link to="/freelances">Freelances</Link>&nbsp;&nbsp;
        </nav>
    )
}

export default Header