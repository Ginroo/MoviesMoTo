import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = {title: 'Spider-Man: No Way Home', inTheaters: true, summary: 'Test TUbe',
                    releaseDate: new Date(), trailer: 'ABCDE', poster: 'https://lh3.googleusercontent.com/proxy/7iapLhnFhdWGCn-CXT2-odqFG0_9k1x6BmAeY80u2SSOlXzclCYabcRp-coaV75UcdrVWhZKdljZmz8ADRbW2aGnG5SekAjidejMcqA1iCgB1AhDxS-uQKLfMFPHodjQpZ2_EwZ42GMiv-Jr2a-bRiouAauM20uAGfw'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
  }

}
