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
	routeShape = [];

	shapeID: any;

	title: string = 'My first AGM project';

	iconUrl: string = './assets/icon/map-marker.png';
	stopIconUrl: string = './assets/icon/bus-stop-sign-none.png';


	lat: number = -12.479048;
	lng: number = 130.987067;
	zoom: number = 11;
	minZoom:number = 11;
	routeNumber: string = '10';

	text:any;

	selectedShapeID: string;

	onChange(newValue) {
		console.log(newValue);
		this.selectedShapeID = newValue;
		this._dataService.getShapeByID(newValue)
		.subscribe(resShapesData => this.aShape = resShapesData);
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
		
	}

	//Map Style
	style = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "color": "#f5f5f2"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-3"
            },
            {
                "gamma": "1.00"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5ce"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fff0b1"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-99"
            },
            {
                "lightness": "-100"
            },
            {
                "gamma": "5.09"
            },
            {
                "weight": "1.22"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-34"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0a00ff"
            },
            {
                "saturation": "-77"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43321e"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff6c00"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "0.75"
            },
            {
                "saturation": "-68"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7eced"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-49"
            },
            {
                "saturation": "-53"
            },
            {
                "gamma": "0.79"
            }
        ]
    }
]

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
		if (event >= 15){
			this.stopIconUrl = './assets/icon/bus-stop-sign.png';

		}else if (event >= 13){
			this.stopIconUrl = './assets/icon/bus-stop-sign-small.png';
		}else{
			this.stopIconUrl = './assets/icon/bus-stop-sign-none.png';
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

