import "./RequestMovieInfo.css";
import axios from "axios";

const API_BASE = "http://localhost:3333/movies";

const RequestMovieInfo = () => {
  let formData = new FormData();

  const readFile = (e) => {
    if (e.target && e.target.files[0]) {
      formData.append("image", e.target.files[0], e.target.files[0].name);
    }
  };

  function handleSubmit() {
    const inputAuthor = document.getElementById("author");
    const inputTitle = document.getElementById("title");
    const taDescription = document.getElementById("description");

    formData.append("author", inputAuthor.value);
    formData.append("title", inputTitle.value);
    formData.append("description", taDescription.value);

    axios
      .post(API_BASE, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="body-cadastro">
      <h2 id="cadastro-filme">Cadastrando um Filme</h2>
      <form>
        <div id="label-author">
          <label>
            Autor:
            <input id="author" required type="text" />
          </label>
        </div>
        <div id="label-title">
          <label>
            Título:
            <input id="title" required type="text" />
          </label>
        </div>
        <div id="label-description">
          <label>
            Descrição:
            <textarea id="description-textarea" required />
          </label>
        </div>
        <div id="label-poster-filme">
          <label>
            Selecione o pôster do filme:
            <input
              id="poster-filme"
              type="file"
              required
              accept="image/png, image/jpg"
              onChange={readFile}
            />
          </label>
        </div>
        <div id="buttons">
          <button id="btn-postar" onClick={handleSubmit}>
            Postar
          </button>
          <button id="btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default RequestMovieInfo;
