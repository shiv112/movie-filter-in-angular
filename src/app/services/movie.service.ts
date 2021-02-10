import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  // getMovie(arg0: number) {
  //   throw new Error("Method not implemented.");
  // }
  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe(
      (data) => (obj = data),
      (error) => console.log(error)
    );
  }

  public getJSON(): Observable<any> {
    return this.http
      .get("./data/movie.json")
      .map((res: any) => res.json())
      .catch((error: any) => console.log(error));
  }
}
