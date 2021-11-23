import React from 'react'
import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import apiCalls from '../config/api';

const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';

const Genres = () => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        apiCalls.genre().then(data => {
            setGenre(data.genres);
        });
        // fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MY_API_KEY}`)
        // .then(res => res.json())
        // .then(data => {
        //     setGenre(data.genres)
        // });
    },[])

    const genres = genre.map(el => <NavLink to={`/catalog/${el.id}`} key={el.id} className="genre">{el.name}</NavLink>)
    return (
        <div className="genres">
            {genres}
        </div>
    )
}

export default Genres
