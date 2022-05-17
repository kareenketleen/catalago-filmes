import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

import Header from "../../components/Header";

import api from "../../services/api";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const loadMovie = async () => {
      let { data } = await api.get(`/movies/${id}`);
      setMovie(data);
    };
    loadMovie();
  }, []);

  return (
    <div className="description">
      <Header />

      <section>
        <div className="container" style={{ height: 100 }} />
      </section>

      <h1 className="title-description">{movie.title}</h1>
      <div className="content" key={movie.id}>
        <img className="img-description" src={movie.image_url} alt="movie" />
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};
