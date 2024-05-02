import logo from '@/assets/logo-monochrome.svg'

export const Footer = () => {
    return (
        <footer>
            <img className="logo-mono" src={logo} alt="Kasa logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}