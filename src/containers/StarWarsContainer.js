import React, {useEffect, useState} from "react";
import FilmList from "../components/FilmList";
import FilmDetail from "../components/FilmDetail";
import CharacterDetail from "../components/CharacterDetail";


const StarWarsContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        getFilms()
    }, []);

    useEffect(() => {
        setCharacters([])
        getCharacters();

    }, [selectedFilm])

    const getCharacters = () => {
        if(selectedFilm){
            const characterPromises = selectedFilm.characters.map((character) => {
                return fetch(character).then(res => res.json())
            })

        
        Promise.all ( characterPromises )
        .then( data  => 
        setCharacters(data)
        
    
        );
    }};


    const getFilms = () => {
        fetch("https://swapi.dev/api/films/")
        .then(res => res.json())
        .then((data) => {

        
        
        setFilms(data.results.sort((a,b)=> {return a.episode_id - b.episode.id}))

    })}
        
      
    

    const onFilmClick = (film) => {

          setSelectedFilm(film)

    
};
   
     
       

    

  


    return (
        <>
        <div>Star Wars Container</div>

         
    
        <FilmList films={films} onFilmClick={onFilmClick}/>
         <FilmDetail film={selectedFilm} characters={characters}/> 
     

        
        </>
    )
}

export default StarWarsContainer;

