import React, { useState } from 'react';
import arrowLeft from '../assets/Arrow-Left.png'
import arrowRight from '../assets/Arrow-Right.png'


export default function Carrousel({apartment}) {//{id,pictures}

  const [index, setIndex] = React.useState(0);
  const length = apartment.pictures.length

  const onGoLeft = () => {
    if (index - 1 < 0) {
      setIndex(apartment.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onGoRight = () => {
    if (index >= apartment.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="carousel">
    <div style={{ transform: `translateX(${index * -100}%)`, }} className="carousel-images">
          
        {apartment.pictures.map((picture, loopIndex) => (
          <img
            key={`apart-picture--${loopIndex + 1}`}
            src={picture}
            alt={`${apartment.title}-${loopIndex + 1}`}
            style={{minWidth: "100%", objectFit: "cover"}}
          />
        ))}
      </div>

      <div className='display-image-numbers'>
        <span>{index + 1} / {apartment.pictures.length}</span>
      </div>


      {length > 1 && (<div className="left-arrow" onClick={onGoLeft}>
        <img 
        src={arrowLeft} 
        alt="show content" 
        className='arrowLeft'
        />
      </div>)}

      {length > 1 && (<div className="right-arrow" onClick={onGoRight}>
        <img 
        src={arrowRight} 
        alt="show content" 
        className='arrowRight'
        />
      </div>)}
  </div>
  )
}
