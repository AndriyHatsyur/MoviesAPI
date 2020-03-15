import { Component } from "./component";
import { getMovie, getMovieRecommendations } from "./api";
import { get } from "https";

class MovieDeteilComponent extends Component {
  async beforeRender() {
    this.setData(null);
    let path = window.location.hash.slice(1).split("/");
    let movie = await getMovie(path[1]);
    let recommend = await getMovieRecommendations(path[1]);
    this.setData({ movie, recommend });
  }

  template() {
    if (!this.data) return "Loading...";

    let { movie, recommend } = this.data;
    let listRecommend = recommend.map(
      m => `<li><a href="#movie/${m.id}">${m.title}</a></li>`
    );
    return `
    <div>
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"/>
      <h2>${movie.original_title}</h2>
      <p>${movie.overview}</p>
    </div>
    <div>
      <h4>Recommendations</h4>
      <ul>${listRecommend.join("")}</ul>
    </div>
    `;
  }
}

export const movieDeteilComponent = new MovieDeteilComponent({
  selector: "movie-deteil"
});
