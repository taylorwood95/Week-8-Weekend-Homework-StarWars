import React from "react";
import FilmItem from "./FilmItem";
import "./FilmList.css"




 const FilmList = ({films, onFilmClick}) =>  {

    const filmNodes = films.map((film) => {
        return <FilmItem key={film.episode_id} film={film} onFilmClick={onFilmClick}/>
    })




  return (
    <div>
        <p className="movie-list">Movie List</p>
    <ul>{filmNodes}</ul>
    </div>
  )
}

export default FilmList