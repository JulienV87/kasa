import React from 'react'
import CollapseButton from './CollapseButton'

export default function DescriptionAccomodation({apartment}) {




  return (
    <div>

    <div className='container-description-accomodation'>

        <div className='container-title-location'>
            <div className='accomodation-title'>{apartment.title}</div>
            <div className='accomodation-location'>{apartment.location}</div>
        </div> 

        <div className='container-host-picture'>
            <div className='accomodation-host'>{apartment.host.name}</div>
            <div className='host-picture'>
                <img src={apartment.host.picture} alt=''/>
            </div>
        </div>

    </div>

    <div className='container-tags-rates'>

            <div className='accomodation-tags'>{apartment.tags}</div>
        
            <div className='accomodation-rates'>{apartment.rating}</div>

    </div>


    <div className='container-collapse-button'>

            <div className='description-collapse-button'>{<CollapseButton title="Description" description={apartment.description}/>}
            </div>

            <div className='description-collapse-button'>{<CollapseButton title="Equipements" description={apartment.equipments}/>}
            </div>
        
    </div>

    </div>
  )
}
