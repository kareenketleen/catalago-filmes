import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api-catalogo-filmes.herokuapp.com",
  //Mudar URL em DEV baseURL: "http://localhost:3333"
});

export default api;
