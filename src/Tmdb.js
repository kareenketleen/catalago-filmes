//const API_KEY = "9a190ffc621faf73533eeb5e5714f366";
//const API_BASE = "https://api.themoviedb.org/3";
//const API_KEY = "9a190ffc621faf73533eeb5e5714f366";
const API_BASE = "http://localhost:3333";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  getHomeList: async () => {
    return [
      {
        slug: "recent",
        title: "Recentemente Adicionados",
        items: await basicFetch(`/movies`),
      },
      // {
      //   slug: "toprated",
      //   title: "Em Alta",
      //   items: await basicFetch(
      //     `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "action",
      //   title: "Ação",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "comedy",
      //   title: "Comédia",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "horror",
      //   title: "Terror",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "romance",
      //   title: "Romance",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "documentary",
      //   title: "Documentários",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
    ];
  },

  // getMovieInfo: async (movieId, type) => {
  //   let info = {};

  //   if (movieId) {
  //     switch (type) {
  //       case "movie":
  //         info = await basicFetch(
  //           `/movie/${movieId}?languade=pt-BR&api_key=${API_KEY}`
  //         );
  //         break;
  //       case "tv":
  //         info = await basicFetch(
  //           `/tv/${movieId}?languade=pt-BR&api_key=${API_KEY}`
  //         );
  //         break;
  //       default:
  //         info = null;
  //         break;
  //     }
  //   }
  //   return info;
  // },
};
