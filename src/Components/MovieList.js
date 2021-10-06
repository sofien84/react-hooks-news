import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Movies , name, ratingSearch}) => {

    return (
        <div>
           {Movies.filter(el=>el.name.toUpperCase().includes(name.toUpperCase().trim())&& el.rate>= ratingSearch).map(el=><MovieCard el={el}/>)}
        </div>
    )
}

export default MovieList
