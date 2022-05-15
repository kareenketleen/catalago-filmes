import "./RequestMovieInfo.css";
import { useState } from "react";

const RequestMovieInfo = () => {
  const [blobFile, setBlobFile] = useState(null);

  function handleSubmit() {
    const inputTitle = document.getElementById("title");
    const taDescription = document.getElementById("description");

    const request = {
      title: inputTitle.value,
      description: taDescription.value,
      cover: blobFile,
    };
  }

  return (
    <div className="container">
      <form>
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
              onChange={(e) => {
                let reader = new FileReader();

                reader.readAsDataURL(e.target.files[0]);

                reader.onload = function () {
                  //console.log(reader.result);
                  setBlobFile(reader.result);
                };

                reader.onerror = function () {
                  setBlobFile("No image");
                };
              }}
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
