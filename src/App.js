import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import Header from "./components/Header";

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
      <Header />
      <section>
        <div className="container" style={{ height: 100 }}></div>
      </section>
      <section className="lists">
        {movieList.map((item, _key) => (
          <MovieRow key={_key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
