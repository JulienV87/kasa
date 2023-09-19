import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards() {

    
  return (
    <div>
        <Link className='card-link'>
            <article className='card'> 
                <image className='card-image'></image>
                <h2 className='card-title'>Titre de la location</h2>
            </article>
       </Link>
    </div>
  )
}
