import { Component, OnInit } from '@angular/core';
import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	title: string = 'My first AGM project';


	lat: number = -12.483321;
	lng: number = 130.997988;
	zoom: number = 15;
	minZoom:number = 11;
	routeNumber: string = '10';

	text:any;

	latitudeArray: number[] = [];
	longitudeArray: number[] = [];

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

	file: File;

	reader = new FileReader();

	changeListener($event) : void {
		this.text = readThis($event.target);
		console.log(this.text);
	}

	constructor() { }



	ngOnInit() {
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