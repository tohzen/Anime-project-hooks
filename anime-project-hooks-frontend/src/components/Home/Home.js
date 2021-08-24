import React, {useContext} from "react";
import "./Home.css"
import {AnimeContext} from '../../context/AnimeContext'
import AnimeResults from "../Anime/AnimeResults";


function Home() {
  const {animeTitle, AnimeSearch, setAnimeTitle, animeArray, setAnimeArray} = useContext(AnimeContext)
  return (
  <div>
    <div>
  
      <input type="text" placeholder="Search Anime Here"  onChange={(e)=> setAnimeTitle(e.target.value)}/>
        <button type="submit" onClick={(e)=> AnimeSearch(e)}>Search</button>
    </div>
    <AnimeResults/>
  
  </div>
  )}

export default Home;