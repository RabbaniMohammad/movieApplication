import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Current() {
  const value = useLocation();
  const getData = () => {
    const list = localStorage.getItem("favmov");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [val, setVal] = useState(getData());
  const addFav = () => {
    setVal([
      ...val,
      { img: value.state[0], name: value.state[2], view: value.state[1] },
    ]);
    alert("Movie has been added to favourite list");
  };
  useEffect(() => {
    localStorage.setItem("favmov", JSON.stringify(val));
  }, [val]);
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${value.state[0]}`}
          alt=""
        />
        <h1>{value.state[2]}</h1>
        <p>{value.state[1]}</p>
        <button onClick={addFav}>add to favoroite</button>
      </div>

      <Link to="/">Go Home</Link>
    </>
  );
}
