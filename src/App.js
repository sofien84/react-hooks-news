import React, {useState} from 'react'
import MovieList from './Components/MovieList'
import Navbarr from './Components/Navbar/Navbarr'
import  {MoviesData} from './Components/MoviesData' 
import AddMovie from './Components/AddMovie/AddMovie'
import './App.css'

const App = () => {
  const [Movies, setMovies] = useState(MoviesData)
  const [name, setName] = useState ("")
  const [ratingSearch, setRatingSearch] = useState(0)
  const Addfilm = (newmovie) => {

    return setMovies([...Movies, newmovie])
  }

  return (
    <div>
      <Navbarr name={name} setName={setName}  ratingSearch={ratingSearch}  setRatingSearch={setRatingSearch}/>
      <div className = "positionADD" style={{alignItems:"center"}}>
        <span>
        <MovieList Movies={Movies}  name={name}  ratingSearch={ratingSearch}/>
        </span>
        <span>  
         <AddMovie Addfilm={Addfilm}/>
        </span>
      </div>
    </div>
  );
}

export default App;
