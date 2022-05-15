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
    <div className="container">
      <form>
        <div>
          <label>
            Autor do Upload:
            <input id="author" />
          </label>
        </div>
        <div>
          <label>
            Título Do Filme:
            <input id="title" />
          </label>
        </div>
        <div>
          <label>
            Descrição Do Filme:
            <textarea id="description" />
          </label>
        </div>
        <div>
          <label>
            Pôster Do Filme:
            <input
              type="file"
              accept="image/png, image/jpg"
              id="cover"
              onChange={readFile}
            />
          </label>
        </div>
        <div>
          <button id="submit" onClick={handleSubmit}>
            Postar
          </button>
          <button id="cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default RequestMovieInfo;
