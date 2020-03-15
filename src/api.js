const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjBkNjBmNWFhMTRlNTZjZmQyM2ZhZWI0NjczNzgwNyIsInN1YiI6IjVlNmQxNGZlYTliOWE0MDAxODlmZGFmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jIXupbX7Vx1lzHOm87Ny0DYaEP0UibEfW_MWGY4wpao";

const baseUrl = "https://api.themoviedb.org/3/";

const headers = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + apiKey
  }
};

const APIget = url => fetch(baseUrl + url, headers);

const APIMovieGet = async url => {
  let response = await APIget(url);
  let { results } = await response.json();
  return results;
};

export const getTrandingMovie = () => APIMovieGet("/trending/movie/day");

export const getMovieRecommendations = async id =>
  APIMovieGet(`movie/${id}/recommendations`);

export const searchMovie = async query =>
  APIMovieGet(`/search/movie?query=${query}`);

export const getMovie = async id => {
  let response = await APIget(`/movie/${id}`);
  return await response.json();
};
