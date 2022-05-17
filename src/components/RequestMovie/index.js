import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

const RequestMovieInfo = () => {
  const history = useHistory();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("author", author);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    console.log(formData.getAll("image"));

    await api.post("/movies", formData);

    history.push("/");
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];

    setPreview(URL.createObjectURL(file));
    setImage(file);
  }

  return (
    <div className="post-container">
      <h2 className="title">Novo filme</h2>
      <div className="form-container">
        <div className="movie-image">
          <div className={`movie-image-title ${!preview ? "border" : ""}`}>
            <label className="movie-title-label" htmlFor="movie-image-file">
              {preview ? (
                <img src={preview} width={150} alt="movie poster" />
              ) : (
                "clique para adicionar uma capa"
              )}
            </label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Autor</label>
            <input
              className="author"
              required
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Título</label>
            <input
              className="title"
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Descrição</label>
            <textarea
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input
            id="movie-image-file"
            type="file"
            accept="image/png, image/jpg"
            onChange={handleChangeImage}
          />
          <div className="actions">
            <button onClick={handleSubmit}>Postar</button>

            <Link className="cancel" to="/">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestMovieInfo;
