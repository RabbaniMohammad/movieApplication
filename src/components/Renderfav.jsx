import React from "react";

export default function Renderfav() {
  const items = JSON.parse(localStorage.getItem("favmov"));
  if (!items) return;
  return (
    <>
      {items.map((ele) => {
        return (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${ele.img}`}
              alt="img not found"
            />
            <h1>{ele.name}</h1>
            <p>{ele.view}</p>
          </>
        );
      })}
    </>
  );
}
