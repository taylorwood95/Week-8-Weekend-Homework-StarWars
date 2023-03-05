import React from 'react'
import "./Starshipitem.css"

const StarshipItem = ({starship}) => {

    if(!starship){
        return null
    };


  return (
    <div className='starship-list'>
     <p>Name: {starship.name} </p> 
    
    
    </div>
  )
}

export default StarshipItem