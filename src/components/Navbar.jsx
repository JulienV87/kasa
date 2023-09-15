import { Link } from "react-router-dom"
import Logo from "../assets/logo-kasa.png"

export default function Navbar() {
  return (

    <nav className="navbar">
        <div>
            <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div>
            <Link to="/" className="menu">Accueil</Link>
            <Link to="/about-us" className="menu">A propos</Link>
        </div>
    </nav>
  )
}
