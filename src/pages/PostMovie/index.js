import React from "react";
import "./styles.css";

import Header from "../../components/Header";
import RequestMovieInfo from "../../components/RequestMovie";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="cadastro">
      <Header />
      <section>
        <div className="container" style={{ height: 100 }} />
      </section>
      <RequestMovieInfo />
    </div>
  );
};
