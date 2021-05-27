import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: "Spider-Man",
      releaseDate: new Date(),
      price: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: "Moana",
      releaseDate: new Date('7-12-2021'),
      price: 1100.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }];

    // this.moviesFutureRelease = [{
    //   title: "Avengers Engdgame",
    //   releaseDate: new Date('6-8-2021'),
    //   price: 1700.99
    // },
    // {
    //   title: "Infinity War",
    //   releaseDate: new Date('6-28-2021'),
    //   price: 1500.99
    // }];
    this.moviesFutureRelease = [];
  }
  
  moviesInTheaters: { title: string; releaseDate: Date; price: number; poster: string }[] | undefined;
  moviesFutureRelease: { title: string; releaseDate: Date; price: number;  poster: string}[] | undefined ;
}
