import React, {useEffect, useState} from "react";
import FilmList from "../components/FilmList";
import FilmDetail from "../components/FilmDetail";
import CharacterDetail from "../components/CharacterDetail";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Starships from "../components/Starships";


const StarWarsContainer = () => {

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [characters, setCharacters] = useState([])
    const [starships, setStarships] = useState([])

    useEffect(() => {

        getFilms()
    }, []);

    useEffect(() => {
        setCharacters([])
        getCharacters();

    }, [selectedFilm])

    useEffect (() => {
        setStarships([])

        getStarships()
    }, [])

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

    const getStarships = () => {
        fetch("https://swapi.dev/api/starships/")
        .then(res => res.json())
        .then(data  => setStarships(data.results.splice(0,5)))

    };


    const getFilms = () => {
        fetch("https://swapi.dev/api/films/")
        .then(res => res.json())
        .then((data) => {

        
        
        setFilms(data.results.sort((a,b)=> {return a.episode_id - b.episode_id}))

    })}
        
      
    

    const onFilmClick = (film) => {

          setSelectedFilm(film)
          


    
};
   
     
       

    

  


    return (
        <>
        <div className="header">Star Wars</div>
        <FilmDetail film={selectedFilm} characters={characters}/>
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<FilmList films={films} onFilmClick={onFilmClick}/>} />
        <Route path="/starships" element={<Starships starships={starships}/>}/>
        </Routes> 
        </Router>
        

         
    
        
        
     
     

        
        </>
    )
}

export default StarWarsContainer;

