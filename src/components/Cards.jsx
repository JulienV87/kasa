import React from 'react'
import { Link } from 'react-router-dom'
// import DATA from '../assets/data'
// import Accomodation from '../pages/Accomodation';

export default function Cards({id,title,cover}) {

  // const [value, setValue] = React.useState(0);

  return (
    <div>
        <Link className='card-link' to={`/accomodation/${id}`}>
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
