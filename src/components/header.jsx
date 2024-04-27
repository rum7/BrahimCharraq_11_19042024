import { NavLink } from "react-router-dom"

import logo from '@/assets/logo_color.svg'

export const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Kasa logo" />
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li>
                        <NavLink 
                            to="about"
                            className={({ isActive }) => isActive ? "activeLink" : null }
                        >
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}