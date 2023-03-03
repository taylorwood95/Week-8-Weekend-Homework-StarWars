import React from 'react'

const FilmItem = ({film, onFilmClick}) => {

    const handleClick = () => {
        onFilmClick(film)
    }

  return (
    <div>
    <p>{film.title}</p>
    <button onClick={handleClick}>More Info</button>
    <hr></hr>
    
   
    
    </div>
  )
}

export default FilmItem