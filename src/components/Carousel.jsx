import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import DATA from '../assets/data';


export default function Carrousel() {//{id,pictures}

  const [index, setIndex] = React.useState(0);
  const {id} = useParams();
  const targetApartment = DATA.find((apartment) => apartment.id === id);
  const onGoLeft = () => {
    if (index - 1 < 0) {
      setIndex(DATA.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onGoRight = () => {
    if (index >= DATA.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="carousel">
    <div style={{
          display: "flex",
          flexDirection: "row",
          background: "red",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 1s",
          transform: `translateX(${index * -100}%)`
        }}>
        {targetApartment.pictures.map((picture, loopIndex) => (
          <img
            key={`apart-picture--${loopIndex + 1}`}
            src={picture}
            alt={`${targetApartment.title}-${loopIndex + 1}`}
          />
        ))}
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
