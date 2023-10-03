import React from 'react'
import { Link } from 'react-router-dom'
// import DATA from '../assets/data'
// import Accomodation from '../pages/Accomodation';

export default function Cards({apartment}) {

  // const [value, setValue] = React.useState(0);

  return (
    <div>
        <Link className='card-link' to={`/accomodation/${apartment.id}`}>
            <article className='card'> 
             
                <img className='card-img' src={apartment.cover} alt={apartment.title}/>

                <div className='card-filter'>

                </div>
                
                <div className='card-title'>{apartment.title}</div>

            </article>
       </Link>
    </div>
  )
}
