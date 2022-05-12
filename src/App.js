import './App.css';
/*
import Sidebar from './Components/Sidebar'
import DisplayFilms from './Components/DisplayFilms'
import NavigationBar from './Components/NavigationBar'
*/


import 'bootstrap/dist/css/bootstrap.min.css'
/*
import {Container, Row} from 'react-bootstrap'

*/
import {useState} from 'react';

import MovieFormRoute from './Routes/MovieFormRoute';
import FilterMoviesRoute from './Routes/FilterMoviesRoute';

import dayjs from 'dayjs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const fakeMovies = [
  {title: "Space Jam", favorite: true, rating: 5, date: dayjs('05-09-1999')}, 
  {title: "Interstellar", favorite: true, rating: 5, date: dayjs('03-05-2022')},
  {title: "Pulp Fiction", favorite: true, rating: 5 , date: dayjs("2022-04-10")},
  {title: "21 Grams", favorite: true, rating: 4 , date: dayjs("2022-03-17")},
  {title: "Star Wars", favorite: false, rating: 0 },
  {title: "Matrix", favorite: true, rating: 0},
  {title: "Shrek", favorite: false, rating: 3 , date: dayjs("2022-03-21")},
];
/*
const filters = [{name: "All", comparator: (film) => true}, {name: "Favorite", comparator: (film) => film.favorite}, {name: "Best rated", comparator: (film) => film.rating === 5}, {name: "Seen Last Month", comparator: (film) => (film.date > dayjs().subtract(30, "day") && film.date < dayjs())}, {name: "Unseen", comparator: (film) => film.date ? false : true}];
*/

function App() {
/*
  const [filterState, setFilterState] = useState("All");
*/  
  const [movies, setMovies] = useState(fakeMovies);
/*
  const handleChangeFilter = (state) => {
    if(filterState !== state){
      setFilterState(state);
    }
  }
*/
  const handleToggleFavorite = (title) => {
    const newMovies = [...movies];
    const film = newMovies.find(film => film.title === title);
    film.favorite = !film.favorite;
    setMovies(newMovies);
  }

  const handleChangeRating = (title, rating) => {
    const newMovies = [...movies];
    const film = newMovies.find(film => film.title === title);
    film.rating = rating;
    setMovies(newMovies);
  }

  const handleDeleteFilm = (title) => {
    const newMovies = movies.filter(film => film.title !== title);
    setMovies(newMovies);
  }

  const handleAddFilm = (film) => {
    movies.map(f => f.title).includes(film.title) ? alert("Movie already exists") : setMovies([...movies, film]);
  }

  const handleEditFilm = (film, oldTitle) => {
    const newMovies = movies.filter(film => film.title !== oldTitle);
    newMovies.map(f => f.title).includes(film.title) ? alert("There is already a movie with this title") : setMovies([...newMovies, film]);
  }

  return (
    /*
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Container fluid>
          <Row className="vh-100">
            <Sidebar options={filters.map((filt) => filt.name)} filterState={filterState} changeState={handleChangeFilter} />
            <DisplayFilms editFilm={handleEditFilm} addFilm={handleAddFilm} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filter={filterState} films={movies.filter(filters.find((filt) => filt.name === filterState).comparator)}/>
          </Row>
        </Container>
      </main>
    </div>
    */

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilterMoviesRoute movies={movies} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filterState={"All"}/>}/>
        <Route path="/favorite" element={<FilterMoviesRoute movies={movies} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filterState={"Favorite"}/>}/>
        <Route path="/best-rated" element={<FilterMoviesRoute movies={movies} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filterState={"Best Rated"}/>}/>
        <Route path="/seen-last-month" element={<FilterMoviesRoute movies={movies} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filterState={"Seen Last Month"}/>}/>
        <Route path="/unseen" element={<FilterMoviesRoute movies={movies} deleteFilm={handleDeleteFilm} changeRating={handleChangeRating} toggleFavorite={handleToggleFavorite} filterState={"Unseen"}/>}/>
        <Route path="/add-movie" element={<MovieFormRoute label="Add a new movie" addFilm={handleAddFilm} editFilm={handleEditFilm}/>}/>
        <Route path="/edit-movie" element={<MovieFormRoute label="Edit movie" addFilm={handleAddFilm} editFilm={handleEditFilm}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
