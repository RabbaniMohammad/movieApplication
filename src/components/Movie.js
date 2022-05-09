import react, { useEffect, useState } from "react";
import "../Styling/App.css";
import { Link } from "react-router-dom";
import Renderfav from "./Renderfav";

export default function Movie() {
  let data;
  const [letter, setLetter] = useState("");
  const [movieData, setMovieData] = useState([]);

  const getInitial = async () => {
    try {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="jaws"`;
      let res = await fetch(url);
      data = await res.json();
      setMovieData([...data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  if (!letter) {
    getInitial();
  }

  const getData = async () => {
    try {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${letter}"`;
      let res = await fetch(url);
      data = await res.json();
      // setMovieData([...data.results]);
    } catch (error) {
      console.log(error);
    }
  };
  const setData = (e) => {
    e.preventDefault();
    setMovieData([...data.results]);
  };
  return (
    <>
      <div className="App">
        <form action="#">
          <input
            type="text"
            onChange={(e) => {
              setLetter(e.target.value);
            }}
          />
          <input type="submit" value="submit" onClick={(e) => setData(e)} />
        </form>
        <div className="flex">
          {movieData.map((ele) => {
            return (
              <div class="flex-items">
                <div>
                  <Link
                    to="./Current"
                    state={[ele.poster_path, ele.overview, ele.original_title]}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w1280/${ele.poster_path}`}
                      alt="Image not found"
                    />
                  </Link>
                  <p class="overview">{ele.overview}</p>
                </div>
                <h1>{ele.original_title}</h1>
                <p>Rating {ele.popularity}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h1>Favourite List</h1>
      <Renderfav />
    </>
  );
}
