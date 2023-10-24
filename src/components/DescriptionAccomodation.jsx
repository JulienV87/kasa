import React from 'react'
import CollapseButton from './CollapseButton'
import RedStar from '../assets/star-active.png'
import GreyStar from '../assets/star-unactive.png'


export default function DescriptionAccomodation({apartment}) {

    // const rating = apartment.rating;
  
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


            <div>
					{apartment.tags.map((tag, index) => {
					return (
							<button className='accomodation-tags' key={index}>{tag}</button>
								)
							})}
			</div>

            <div>
					{[...Array(5)].map((star, index) => {
						const ratingValue = index + 1;
					return (
							<img className='rate-image' key={index} src={ratingValue <= apartment.rating ? RedStar : GreyStar} alt="star" />
								)
							})}
                        
			</div>

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
