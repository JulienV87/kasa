import React from 'react'
import { useParams } from "react-router-dom";
import DATA from '../assets/data';
import Carousel from '../components/Carousel'
import DescriptionAccomodation from '../components/DescriptionAccomodation';


export default function Accomodation() {
  const {id} = useParams();
  const targetApartment = DATA.find((apartment) => apartment.id === id);
  return (
    <div className="App">
      <Carousel apartment={targetApartment}/>

     
          <DescriptionAccomodation
            apartment={targetApartment}
          />
       
    </div>
  )
}
