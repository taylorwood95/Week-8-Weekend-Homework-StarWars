import React from 'react'
import "./CharacterDetail.css"

const CharacterDetail= ({character}) => {
  return (


    <div className="div">
        <p className='character-name'>{character.name}</p>
    </div>

  )
}

export default CharacterDetail
