import React, { useEffect, useState } from "react";

import MovieRow from "../../components/MovieRow";
import Header from "../../components/Header";

import api from "../../services/api";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let { data } = await api.get("/movies");
      setMovieList(data);
    };

    loadAll();
  }, []);
  return (
    <div className="page">
      <Header />
      <section>
        <div className="container" style={{ height: 100 }} />
      </section>
      <section className="lists">
        <MovieRow title="Últimos filmes adicionados" items={movieList} />
      </section>
    </div>
  );
};

export default Home;
