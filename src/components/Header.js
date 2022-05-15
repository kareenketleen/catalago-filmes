import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import HomeIcon from "@material-ui/icons/Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <header className="black">
      <div className="header--logo">
        <Link to="/">
          <HomeIcon style={{ fontSize: 40 }} />
        </Link>
      </div>
      <div className="header--item">
        <Link to="/cadastro">
          <AddToPhotosIcon style={{ fontSize: 40 }} />
        </Link>
      </div>
    </header>
  );
};
