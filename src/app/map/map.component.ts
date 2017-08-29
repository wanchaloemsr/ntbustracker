import { Component, OnInit } from '@angular/core';
import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

//json file require
import { ShapesService } from '../shapes.service';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	shapes = [];
	allStops = [];
	routeShape = [];

	title: string = 'My first AGM project';

	iconUrl: string = './assets/icon/map-marker.png';
	stopIconUrl: string = './assets/icon/bus-stop-sign.png';


	lat: number = -12.483321;
	lng: number = 130.997988;
	zoom: number = 15;
	minZoom:number = 11;
	routeNumber: string = '10';

	text:any;

	latitudeArray: number[] = [];
	longitudeArray: number[] = [];

		constructor(private _shapesService: ShapesService) { }

	ngOnInit() {
		this._shapesService.getShapes()
			.subscribe(resShapesData => this.shapes = resShapesData)
		this._shapesService.getStops()
			.subscribe(resStopsData => this.allStops = resStopsData);
		this._shapesService.getShapes()
	}


	//markers property
	markers: Marker [] = [
	{
		name: 'Here',
		lat: -12.483321,
		lng: 130.997988,
		iconUrl:'./assets/icon/map-marker.png'
	},
	{
		name: '2',
		lat: -12.37546,
		lng: 130.90056,
		iconUrl:'./assets/icon/map-marker.png'
	}
	]

	changeListener($event) : void {
		this.text = readThis($event.target);
		console.log(this.text);
	}


	  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }


	//listen to map zoom level
	zoomChange(event){
		console.log(event);

	}

}




//Show specific route function
function displayARoute(): void {

}


//file reader
	function readThis(inputValue: any) : any {
		console.log(inputValue)
		var file:File = inputValue.files[0]; 
		var myReader:FileReader = new FileReader();

		myReader.onloadend = function(e){
			// you can perform an action with readed data here
			console.log(myReader.result);
		}
		//myReader.readAsBinaryString(file);

		myReader.readAsText(file);
		return myReader.result;

	}

interface Marker{
	name?: string;
	lat: number;
	lng: number;
	iconUrl: string;
}

function getShapesByID(shapesID: string, shapes: any){

	var routeShape = [];

	for (var i = shapes.length - 1; i >= 0; i--) {
		if(shapes[i].shapes_id == 'i1_shp'){
			console.log(shapes[i].shapes_id);
			routeShape[i] == shapes[i];
		}
	}

	return routeShape;

}