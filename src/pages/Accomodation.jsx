import React from 'react'
import { useParams } from "react-router-dom";
import DATA from '../assets/data';
import Carousel from '../components/Carousel'
import DescriptionAccomodation from '../components/DescriptionAccomodation';
import { Navigate } from "react-router-dom";





export default function Accomodation() {
  const {id} = useParams();
  const targetApartment = DATA.find((apartment) => apartment.id === id);
  if (!targetApartment) {
    return (
      <Navigate to="/erreur-404" replace={true} />
    )
  }
  return (
    <div>
      <Carousel apartment={targetApartment}/>
      <DescriptionAccomodation apartment={targetApartment}/>
    </div>
  )
}
