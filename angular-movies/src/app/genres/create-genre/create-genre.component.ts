import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms'
import { genreCreationDTO } from '../genres.model';
// import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
   
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    //saving 
    console.log(genreCreationDTO);
    this.router.navigate(['./genres'])
  }

}
