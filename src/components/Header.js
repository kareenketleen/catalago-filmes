import React from "react";
import "./Header.css";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import HomeIcon from "@material-ui/icons/Home";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <header className="black">
      <div className="header--logo">
        <a href="/">
          <HomeIcon style={{ fontSize: 40 }} />
        </a>
      </div>
      <div className="header--item">
        <a href="/">
          <AddToPhotosIcon style={{ fontSize: 40 }} />
        </a>
      </div>
    </header>
  );
};
