import { Link } from "react-router-dom"

export default function Erreur() {
  return (
    <div className="erreur-page">
        <h1 className="erreur-404">404</h1>
        <p className="erreur-texte">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">
        <p className="erreur-home">Retour à la page d'accueil</p> 
    </Link>
    </div>
  )
}
