import { Component, OnInit } from "@angular/core";
import { IMovieMain } from "src/app/model/imovieMain";
import { MOVIES } from "src/data/movie";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  public movies: IMovieMain[] = MOVIES;
  Name = "";
  SearchName = "";
  SortbyParam = "";

  ngOnInit(): void {
    this.SortbyParam = "";
  }
}
