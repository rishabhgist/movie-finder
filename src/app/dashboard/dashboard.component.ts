import { Component, OnInit } from '@angular/core';
import { MOVIES } from 'src/model/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies = MOVIES;
 
  constructor() { }
  searchMovie = '';

  ngOnInit(): void {
  }

  search() {
     if (this.searchMovie === '' || !this.searchMovie)
      this.movies = MOVIES;
    else {
      this.movies = MOVIES;
      this.movies = this.movies.filter(movie => movie.movieTitle?.startsWith(this.searchMovie.toLowerCase()));
    }
  }

  clear() {
      this.searchMovie = '';
      this.movies = MOVIES;
  }

}
