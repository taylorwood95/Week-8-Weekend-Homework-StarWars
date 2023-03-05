import React from 'react'
import "./FilmItem.css"

const FilmItem = ({film, onFilmClick}) => {

    const handleClick = () => {
        onFilmClick(film)
    }

  return (
    <div className='div'>
    <p className='title'>{film.title}</p>
    <p  className='episode-id'>{film.episode_id}</p>
    <button className="button" onClick={handleClick}>More Details</button>
    <hr></hr>
    
   
    
    </div>
  )
}

export default FilmItem