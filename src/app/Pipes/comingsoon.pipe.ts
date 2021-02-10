import { Pipe, PipeTransform } from "@angular/core";

import { MOVIES } from "src/data/movie";
import { IMovieMain } from "../model/imovieMain";

@Pipe({ name: "comingsoon" })
export class ComingSoonPipe implements PipeTransform {
  public movies: IMovieMain[] = MOVIES;
  transform(movies: IMovieMain[]) {
    return movies.filter((movie) => movie.comingsoon);
  }
}
