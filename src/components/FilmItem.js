import React from 'react'

const FilmItem = ({film, onFilmClick}) => {

    const handleClick = () => {
        onFilmClick(film)
    }

  return (
    <div>
    <p>{film.title}</p>
    <FilmItem onClick={handleClick}>{film.title}</FilmItem>
    
    </div>
  )
}

export default FilmItem