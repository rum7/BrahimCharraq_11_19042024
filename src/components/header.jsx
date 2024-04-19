import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <h1>Kasa</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="about">À propos</Link></li>

                    <li><Link to="apartments/c67ab8a7">apartments c67ab8a7</Link></li>
                    <li><Link to="apartments/b9123946">apartments b9123946</Link></li>
                    <li><Link to="apartments/46d188c5">apartments 46d188c5</Link></li>
                </ul>
            </nav>
        </>
    )
}