import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <img className="logo" src="./src/assets/logo_color.svg" alt="Kasa logo" />
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="about">À propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}