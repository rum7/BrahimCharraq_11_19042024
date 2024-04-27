import { NavLink } from "react-router-dom"
import '@/pages/notfound.style.css'

export const NotFound = () => {
    return (
        <main className="pageNotFound">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </main>
    )
}