import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        const data = await response.json();
        setMovies(data); // сохраняем данные в состоянии
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // пустой массив зависимостей, чтобы useEffect вызывался только один раз

  return (
    <div className="App">
      {movies.map((movie, index) => (
        <div className='Movie_box'>
          <div className='Info_box'>

            <div className='Title'><h1>{movie.movie.length > 16 ? movie.movie.substring(0,16)+ '...':movie.movie}</h1></div>
            <div className='Rating'><span>{movie.rating}</span></div>
            <div><a href={movie.imdb_url}>View</a></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
