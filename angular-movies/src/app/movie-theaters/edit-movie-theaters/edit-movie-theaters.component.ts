import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theater-form/movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theaters',
  templateUrl: './edit-movie-theaters.component.html',
  styleUrls: ['./edit-movie-theaters.component.css']
})
export class EditMovieTheatersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = {name: 'Rogin House', 
  latitude: 14.706859664291095, 
  longitude: 121.1299302576663}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}
