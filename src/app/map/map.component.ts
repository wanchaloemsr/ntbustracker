import { Component, OnInit} from '@angular/core';
import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

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

	iconUrl: string = './assets/icon/map-marker.png';
	busIconUrl: string = './assets/icon/bus-md.png';
	stopIconUrl: string = './assets/icon/bus-stop-sign-none.png';
	interchangeIconUrl: string = './assets/icon/interchange-icon-lg.png';

	lat: number = -12.479048;
	lng: number = 130.987067;

	zoom: number = 11;
	minZoom:number = 8;

	text:any;
	interval: any;

	selectedShapeID: string;

  	screenHeight: number;

	shape2 = [];

	liveDataArray: any[] = [];

	onChange(newValue) {
		console.log(newValue);
		this.selectedShapeID = newValue;
		this._dataService.getShapeByID(newValue)
		.subscribe(resShapesData => this.aShape = resShapesData);
		console.log(this.zindex);
	}	

	latitudeArray: number[] = [];
	longitudeArray: number[] = [];

	constructor(private _dataService: DataService) { 

		this.refreshData();
    		this.interval = setInterval(() => { 
       				 this.refreshData(); 
    		}, 10000);
	}

	open(){
		console.log("Marker clicked");
	}

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

	refreshData(){
    setTimeout(()=>{
			this.liveDataArray = this._dataService.getPublicBus();
			console.log("Map Data: "+ this.liveDataArray.length);
		}, 1000);
	}

	placeMarker($event){
		console.log($event.coords.lat);
		console.log($event.coords.lng);
	}

	setMyLocation(){
		this.getLocation();
	}

	getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    	}
	}

	showPosition(position) {

		let lat = position.coords.latitude;
		let lng = position.coords.longitude;

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
			this.busIconUrl = './assets/icon/bus-lg.png';
			this.stopZoomLevel = true;

		}else if (event >= 13){
			this.stopIconUrl = './assets/icon/bus-stop-sm.png';
			this.interchangeIconUrl = './assets/icon/interchange-icon-md.png';
			this.busIconUrl = './assets/icon/bus-md.png';
			this.stopZoomLevel = true;
		}else{
			this.stopZoomLevel = false;
			this.interchangeIconUrl = './assets/icon/interchange-icon-lg.png';
		}

	}

}

