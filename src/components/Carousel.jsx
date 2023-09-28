import React, { useState } from 'react';


export default function Carrousel({images}) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
    <button onClick={prevImage} className="nav-button">
      &lt;
    </button>
    <img src={images[currentImageIndex]} alt={`${currentImageIndex}`} />
    <button onClick={nextImage} className="nav-button">
      &gt;
    </button>
  </div>
  )
}
