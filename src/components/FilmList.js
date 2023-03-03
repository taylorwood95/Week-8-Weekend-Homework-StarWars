import React from "react";
import FilmItem from "./FilmItem";



 const FilmList = ({films, onFilmClick}) =>  {

    const filmNodes = films.map((film) => {
        return <FilmItem key={film.episode_id} film={film} onFilmClick={onFilmClick}/>
    })




  return (
    <div>
        <p>Movie List</p>
    <ul>{filmNodes}</ul>
    </div>
  )
}

export default FilmList