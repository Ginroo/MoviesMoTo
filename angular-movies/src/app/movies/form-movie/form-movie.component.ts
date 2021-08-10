import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkDown(content: string){
   this.form.get('summary').setValue(content);
  }

  saveChanges (){
    this.onSaveChanges.emit(this.form.value);
  }
}
