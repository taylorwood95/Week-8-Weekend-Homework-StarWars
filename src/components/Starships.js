import React from 'react'
import StarshipItem from './StarshipItem';
import "./Starships.css"

const Starships = ({starships}) => {

    const starshipNodes = starships.map((starship, index) => {
        return <StarshipItem key={index} starship={starship}/>
    });

    

  return (
    <>
    <h1 className='starship-header'>Starship List</h1>
    <ul>{starshipNodes}</ul>
    </>
  )
}

export default Starships