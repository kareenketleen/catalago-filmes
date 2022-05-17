import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api-catalogo-filmes.herokuapp.com",
});

export default api;
