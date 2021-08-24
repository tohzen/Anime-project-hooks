import React, {useContext, useEffect} from 'react';
import { AnimeContext } from '../../context/AnimeContext';
import { useParams } from 'react-router-dom';

const AnimeDetails = (props) => {
    let {id} = useParams();


    const { fetchAnime, detailsArray, detailsTitle, setDetailsTitle, synopsis, setSynopsis, image_url, setImage_url, type, setType, episodes, setEpisodes, score, setScore} = useContext(AnimeContext)

    if(detailsArray != []) {
      setDetailsTitle(detailsArray.title)
      setSynopsis(detailsArray.synopsis)
      setImage_url(detailsArray.image_url)
      setType(detailsArray.type)
      setEpisodes(detailsArray.episodes)
      setScore(detailsArray.score)
      
      console.log(detailsArray)
    }
    
    
    useEffect(() => {
      fetchAnime(id);
    },[]) 

    return (

        <div style={{ display: "flex" }}>
          <div>
            <img src= {image_url} alt={""} />
          </div>
          <ol>
          <li>Anime Title: {detailsTitle}</li>
            <li>Type: {type}</li> 
            <li> episodes: {episodes}</li> 
            <li> score: {score}</li> 
            <li> synopsis: {synopsis}</li> 
            
          </ol>
          
          
        </div>
        
    )
}

export default AnimeDetails;