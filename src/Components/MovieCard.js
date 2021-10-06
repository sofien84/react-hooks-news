import React from 'react'
import Rating from './Rating/Rating'

import './MovieCard.css'

const MovieCard = ({el}) => {
    return (
        <div>

<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"src={el.url}/>
      <h1>{el.name}</h1>
      <span class="rating"><Rating rate={el.rate}/></span>
           <h4>{el.date}</h4>
      <br/>
      <span class="minutes">{el.duration}</span>
      <br/>

    <p class="type">{el.type}</p>
    </div>

    <br/>
    <div class="movie_desc">
    <br/>
    <br/>
    <br/>
    <br/>
      <p class="text">
              {el.description} 
      </p>
    </div>
    
  </div>
  <div class="blur_back bright_back"><img    style={{ height: " 100%", width: "100%"}}  src={el.url} /></div>
</div>


         </div>
    )
}

export default MovieCard
