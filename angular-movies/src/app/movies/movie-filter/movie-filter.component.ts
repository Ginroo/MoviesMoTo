import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}];

  movies = [
    { title: "Spider-Man",
    releaseDate: new Date(),
    price: 1400.99,
    poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: "Moana",
      releaseDate: new Date('7-12-2021'),
      price: 1100.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: "Inception",
      releaseDate: new Date('7-12-2021'),
      price: 1000.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }];

    originalMovies = this.movies;

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    })

    this.form.valueChanges
    .subscribe(values => 
      {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
  }
  
  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(values.title.toLowerCase()) !== -1);
    }
  }

  //#region clear form
  clearForm(){
      this.form.reset();
  }
  //#endregion

}
