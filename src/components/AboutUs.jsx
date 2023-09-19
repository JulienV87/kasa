import React, { useState } from 'react';

export default function AboutUs() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='test'>
      
        <div className='collapse-container'>
        <button className='collapse-toggle' onClick={toggleCollapse}>FIabilité
        {isOpen ? ' ⬆️' : ' ⬇️'}
      </button>
      {isOpen && (
        <div className='collapse-text'>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
      )}
        </div>


        <div className='collapse-container'> 
        <button className='collapse-toggle' onClick={toggleCollapse}>Respect
        {isOpen ? ' ⬆️' : ' ⬇️'}
      </button>
      {isOpen && (
        <div className='collapse-text'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      )}
        </div>


        <div className='collapse-container'> 
        <button className='collapse-toggle' onClick={toggleCollapse}>Service
        {isOpen ? ' ⬆️' : ' ⬇️'}
      </button>
      {isOpen && (
        <div className='collapse-text'>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
      )}
        </div>


        <div className='collapse-container'>
        <button className='collapse-toggle' onClick={toggleCollapse}>Sécurité
        {isOpen ? ' ⬆️' : ' ⬇️'}
      </button>
      {isOpen && (
        <div className='collapse-text'>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      )}
        </div>
    
    </div>
  )
}
