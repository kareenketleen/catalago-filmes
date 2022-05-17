import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import HomeIcon from "@material-ui/icons/Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <header className="black">
      <Link className="btn-link link-home" to="/">
        <HomeIcon style={{ fontSize: 40 }} />
      </Link>
      <Link className="btn-link link-new-post" to="/post-movie">
        <AddToPhotosIcon style={{ fontSize: 40 }} />
      </Link>
    </header>
  );
};
