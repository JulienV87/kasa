import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about-us">A propos</Link>
    </nav>
  )
}
