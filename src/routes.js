import { movieListComponent } from "./movie-list-component";
import { movieDeteilComponent } from "./movie-deteil-component";
export const routes = [
  { path: "", component: movieListComponent },
  { path: "movie", component: movieDeteilComponent }
];
