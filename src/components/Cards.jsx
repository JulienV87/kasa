import React from 'react'
import { Link } from 'react-router-dom'
import DATA from '../assets/data'

export default function Cards({title,cover}) {

    const [value, setValue] = React.useState(0);

  return (
    <div>
        <Link className='card-link'>
            <article className='card'> 
             
                <img className='card-img' src={cover} alt={title}/>

                <div className='card-filter'>

                </div>
                
                <div className='card-title'>{title}</div>

            </article>
       </Link>
    </div>
  )
}
