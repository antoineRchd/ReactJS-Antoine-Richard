import { Link } from "react-router-dom";

const Navigation = ({children}) => {
    return (
    <>
    <header>
    <ul className="menu">
        <li>
        <Link to="/">Accueil</Link>
        </li>
    </ul>

    {children}
    </header>
    </>
    );
};

export default Navigation;