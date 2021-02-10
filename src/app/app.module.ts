import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ButtonsModule } from "ngx-bootstrap/buttons";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";
import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movie/movie-list/movie-list.component";
import { MovieCardComponent } from "./movie/movie-card/movie-card.component";
import { FilterPipe } from "./Pipes/filter.pipe";
import { SortPipe } from "./Pipes/sort.pipe";
import { ComingSoonPipe } from "./Pipes/comingsoon.pipe";
import { SampleComponent } from "./movie/sample/sample.component";
import { MovieService } from "./services/movie.service";

const appRoutes: Routes = [{ path: "", component: MovieListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    FilterPipe,
    SortPipe,
    ComingSoonPipe,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
