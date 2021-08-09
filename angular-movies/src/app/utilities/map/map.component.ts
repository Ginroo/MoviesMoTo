import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinatesMap } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude,value.longitude]));
  }

  @Input()
  initialCoordinates: coordinatesMap[] = [];

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 18, 
        attribution: 'Movies Mo To' })
    ],
    zoom: 20,
    center: latLng(14.706824381900816 , 121.12992918512649)
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(latitude,longitude);
    this.layers = [];
    this.layers.push(marker([latitude,longitude]))
    this.onSelectedLocation.emit({latitude,longitude});
  }

}
