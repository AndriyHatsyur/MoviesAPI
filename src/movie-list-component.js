import { Component } from "./component";
import { getTrandingMovie, searchMovie } from "./api";

class MovieListComponent extends Component {
  async beforeRender() {
    const movie = await getTrandingMovie();
    this.setData(movie);
  }

  afterUpdate() {
    this.formSubmit();
  }

  async getSearchMovie(query) {
    const movie = await searchMovie(query);
    this.setData(movie);
  }

  formSubmit() {
    const form = document.getElementById("form");
    const submit = e => {
      e.preventDefault();
      const query = document.getElementById("query");
      if (query.value !== "") {
        this.getSearchMovie(query.value);
      }
    };
    form.addEventListener("submit", submit);
  }

  template() {
    if (!this.data) return "Loading...";

    let listMovie = this.data.map(
      m => `<li><a href="#movie/${m.id}">${m.title}</a></li>`
    );
    return `
    <form id='form'>
      <input id='query' type="text"/>
      <button type="submit" >Searh</button>
    </form>
    <ul>${listMovie.join("")}</ul>
    `;
  }
}

export const movieListComponent = new MovieListComponent({
  selector: "movie-list"
});
