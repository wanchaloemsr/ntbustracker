import { Component, OnInit, Input } from '@angular/core';

import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

import { DataService } from '../data.service';



@Component({
  selector: 'app-maproute',
  templateUrl: './maproute.component.html',
  styleUrls: ['./maproute.component.css']
})
export class MaprouteComponent implements OnInit {

	@Input() shape_id: string;

	allShapes= [];
	aShape: ShapeID[];

	lat: number = -12.479048;
	lng: number = 130.987067;
	zoom: number = 11;
	minZoom:number = 11;

	mapStyle = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this._dataService.getMapStyle()
		.subscribe(resStopsData => this.mapStyle = resStopsData);
	

	this._dataService.getAShape(this.shape_id)
		.subscribe(resData => this.aShape = resData);
	console.log(this.aShape.length);
	console.log("Shape ID : " + this.shape_id);
	this.setMap();

  }

  setMap(){

  	for(let shape of this.aShape){

  		this.lat = shape.shape_lat;
  		this.lng = shape.shape_lon;
  		this.zoom = shape.zoom;
  	}

  }



}


export class ShapeID{

   shape_id: string;
   shape_lat: number;
   shape_lon: number;
   zoom: number;

}