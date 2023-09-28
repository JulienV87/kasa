import React from 'react'
import Carousel from '../components/Carousel'

export default function Accomodation() {

    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ];

  return (
     <div>
      <h1>React Image Carousel</h1>
      <Carousel images={images} />
    </div>
  )
}
