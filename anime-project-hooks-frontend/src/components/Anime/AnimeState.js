import React, {useState} from "react";
import axios from "axios";
import { AnimeContext } from "../../context/AnimeContext";
import { withRouter } from "react-router-dom";

const AnimeState = (props) => {
    const [animeTitle, setAnimeTitle] = useState("")
    const [detailsTitle, setDetailsTitle] = useState("")
    const [type, setType] = useState("")
    const [episodes, setEpisodes] = useState("")
    const [image_url, setImage_url] = useState("")
    const [score, setScore] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [animeArray, setAnimeArray] = useState([])
    const [detailsArray, setDetailsArray] = useState([])

    async function fetchAnime(id) {

        try {
            let results = await axios.get(`https://api.jikan.moe/v3/anime/${id}`)
            if (results.status ===200) {
              setDetailsArray(results.data) 
            }
            console.log(results)
        } catch (e) {
            return (e)
        }
    }

    async function AnimeSearch(e) {
        try {
            let response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeTitle}`)
            if (response.status === 200) {
                setAnimeTitle(response.data.results.title)
                setImage_url(response.data.results.image_url)
                setAnimeArray(response.data.results)
            }
        } catch (e) {
            return (e)
        }
    }
    return (

        <AnimeContext.Provider value = {{AnimeSearch,   detailsArray, fetchAnime, animeTitle, setAnimeTitle, animeArray, setAnimeArray, detailsTitle, setDetailsTitle, synopsis, setSynopsis, image_url, setImage_url, type, setType, episodes, setEpisodes, score, setScore}} >
            {props.children}
        </AnimeContext.Provider>
    )

}

export default withRouter(AnimeState);