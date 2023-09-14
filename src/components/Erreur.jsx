import { Link } from "react-router-dom"

export default function Erreur() {
  return (
    <div>
        <h1>Erreur 404</h1>
    <Link to="/">
        <p>Retour à la page d'accueil</p> 
    </Link>
    </div>
  )
}
