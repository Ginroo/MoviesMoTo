import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genereic-list',
  templateUrl: './genereic-list.component.html',
  styleUrls: ['./genereic-list.component.css']
})
export class GenereicListComponent implements OnInit {


  @Input()
  list: any;
  constructor() { }

  ngOnInit(): void {
  }

}
