import React, { useState } from 'react';


export default function Carrousel({apartment}) {//{id,pictures}

  const [index, setIndex] = React.useState(0);

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
            style={{width: "100%", heigh:"100%", objectFit: "cover"}}
          />
        ))}
      </div>

      <div className='display-image-numbers'>
        <span>{index + 1} / {apartment.pictures.length - 1}</span>
      </div>


      <div className="left-arrow" onClick={onGoLeft}>
        <span role="img" aria-label="left">
          ⬅️
        </span>
      </div>

      <div className="right-arrow" onClick={onGoRight}>
        <span role="img" aria-label="left">
          ➡️
        </span>
      </div>
  </div>
  )
}
