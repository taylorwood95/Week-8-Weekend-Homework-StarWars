import React from "react";
import CharacterDetail from "./CharacterDetail";


const FilmDetail = ({characters, film}) => {

    const characterNodes = characters.map((character, index) => {
        return <CharacterDetail key={index} character={character}/>
    })



  return (
    <div>
        
            
            <ul>{characterNodes}</ul>
        
    </div>
  )
}

export default FilmDetail;