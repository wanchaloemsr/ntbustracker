import { Component, OnInit} from '@angular/core';
import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

//json file require
import { DataService } from '../data.service';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	shapes = [];
	shapeIDs = [];
	aShape = [];
	allStops = [];
	interchangeList = [];
	routeShape = [];
	zindex = 10000;

	location = {};

	stopZoomLevel = false;

	mapStyle = [];

	shapeID: any;

	title: string = 'My first AGM project';

	iconUrl: string = './assets/icon/map-marker.png';
	stopIconUrl: string = './assets/icon/bus-stop-sign-none.png';
	interchangeIconUrl: string = './assets/icon/interchange-icon-lg.png';


	lat: number = -12.479048;
	lng: number = 130.987067;
	zoom: number = 11;
	minZoom:number = 10;
	routeNumber: string = '10';

	text:any;

	selectedShapeID: string;

	onChange(newValue) {
		console.log(newValue);
		this.selectedShapeID = newValue;
		this._dataService.getShapeByID(newValue)
		.subscribe(resShapesData => this.aShape = resShapesData);
		console.log(this.zindex);
	}	



	latitudeArray: number[] = [];
	longitudeArray: number[] = [];

	constructor(private _dataService: DataService) { }

	ngOnInit() {
		this._dataService.getShapeByID(this.selectedShapeID)
		.subscribe(resShapesData => this.aShape = resShapesData);
		this._dataService.getShapes()
		.subscribe(resShapesData => this.shapes = resShapesData);
		this._dataService.getShapeIDs()
		.subscribe(resShapesData => this.shapeIDs = resShapesData);
		this._dataService.getStops()
		.subscribe(resStopsData => this.allStops = resStopsData);
		this._dataService.getInterchanges()
		.subscribe(resStopsData => this.interchangeList = resStopsData);
		this._dataService.getMapStyle()
		.subscribe(resStopsData => this.mapStyle = resStopsData);

		
		
	}

	changeListener($event) : void {
		this.text = readThis($event.target);
		console.log(this.text);
	}


	placeMarker($event){
		console.log($event.coords.lat);
		console.log($event.coords.lng);
	}


	//listen to map zoom level and change stop signs size
	zoomChange(event){
		console.log(event);
		if (event >= 17){
			this.stopIconUrl = './assets/icon/bus-stop-lg.png';
			this.interchangeIconUrl = './assets/icon/interchange-icon-lg.png';
			this.stopZoomLevel = true;

		}else if (event >= 15){
			this.stopIconUrl = './assets/icon/bus-stop-md.png';
			this.interchangeIconUrl = './assets/icon/interchange-icon-md.png';
			this.stopZoomLevel = true;

		}else if (event >= 13){
			this.stopIconUrl = './assets/icon/bus-stop-sm.png';
			this.interchangeIconUrl = './assets/icon/interchange-icon-md.png';
			this.stopZoomLevel = true;
		}else{
			this.stopZoomLevel = false;
			this.interchangeIconUrl = './assets/icon/interchange-icon-lg.png';
		}

	}

}

function remove_duplicates(arr) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = true;
	}
	arr = [];
	for (let key in obj) {
		arr.push(key);
	}
	return arr;
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

