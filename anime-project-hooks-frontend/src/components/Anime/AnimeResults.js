import React, {useContext, useEffect} from "react";
import axios from "axios";
import { AnimeContext } from "../../context/AnimeContext";
import { withRouter } from "react-router-dom";
import {useParams} from "react-router-dom"
import {Link } from "react-router-dom"

function AnimeResults(props) {
    
    const {animeArray, AnimeSearch } = useContext(AnimeContext)
    console.log(animeArray)
    useEffect(() => {
        AnimeSearch();
        
    }, []);
    
    return (
        
        <div>

        {animeArray.map((item) => (
            
            <div className="searchItemContainer"key={item.mal_id} >
        
            <ul>
            <div>{item.title}
            <li> <Link to={{pathname:`/AnimeDetails/${item.mal_id}`}}><img src={item.image_url} alt="" /></Link> </li> </div>
            
            </ul>
            </div>
            ))}
            </div>
            );
        }
        export default AnimeResults;