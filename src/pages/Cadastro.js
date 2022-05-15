import React from "react";
import "./Cadastro.css";
import Header from "../components/Header";
import RequestMovieInfo from "../components/RequestMovieInfo";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Header />
      <section>
        <div className="container" style={{ height: 100 }}></div>
      </section>
      <RequestMovieInfo />
    </div>
  );
};
