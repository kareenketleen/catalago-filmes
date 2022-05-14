import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
// eslint-disable-next-line
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, _key) => (
          <MovieRow key={_key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
