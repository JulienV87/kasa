import React from 'react'

export default function DescriptionAccomodation({apartment}) {




  return (
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
  )
}
