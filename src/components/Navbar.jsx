import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/logements">Logements</Link>
        <Link to="/about-us">A propos</Link>
    </nav>
  )
}
