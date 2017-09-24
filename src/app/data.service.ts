import  { Injectable, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService{

	stopTimeList: StopTime[];

	trip_id: string;
	route_id: string;

	stopTime = [];
	shape = [];

	allStops = [];
	allRoutes = [];
	allShapes: ShapeID[];

	private _url:string = "../assets/data/google-transit/shapes-json.json";
	private _shape_id_url:string = "../assets/data/google-transit/shapes-id.json";
	private _stop_url:string = "../assets/data/google-transit/stops.json";
	private _interchange_Url:string = "../assets/data/google-transit/interchanges.json";
	private _key_shape_id_url:string = "../assets/data/google-transit/shape-keyed.json";
	private _shape_id2_url:string = "../assets/data/google-transit/shapes-id2.json";
	private _map_style_url: string = "../assets/data/config/map-style.json";

	private _trip_url: string = "../assets/data/google-transit/trips.json";
	private _routes_url: string = "../assets/data/google-transit/routes.json";
	private _stopTime_url: string = "../assets/data/google-transit/stop-time.json";
	private _calender_url: string = "../assets/data/google-transit/calender.json";

	constructor(private _http:Http){


	}

	getShapes(){
		return this._http.get(this._url)
					.map((response: Response) => response.json());
	}

	getShapeByID(shape_id: string): Observable<Shape[]> {
		return this._http.get(this._url)
					.map((response: Response) => response.json()
					.filter(item => item.shape_id === shape_id));
	}

	getShapeIDs(): Observable<ShapeID[]> {
		return this._http.get(this._shape_id_url)
					.map((response: Response) => response.json());
	}

	getShapeID2(shape_id: string): Observable<ShapeID[]> {
		console.log(this._http.get(this._shape_id2_url)
					.map((response: Response) => response.json()
					.filter(item => item.shape_id === shape_id)));
		return this._http.get(this._shape_id2_url)
					.map((response: Response) => response.json()
					.filter(item => item.shape_id === shape_id));
	}

	getStops(){
		return this._http.get(this._stop_url)
					.map((response: Response) => response.json());
	}

	getStopByID(stop_id:string): Observable<Stop[]>{
		return this._http.get(this._stop_url)
					.map((response: Response) => response.json()
					.filter(item => item.stop_id === stop_id));
	}

	getMapStyle(){
		return this._http.get(this._map_style_url)
					.map((response: Response) => response.json());
	}

	getInterchanges(){
		return this._http.get(this._interchange_Url)
					.map((response: Response) => response.json());
	}

	getTripByRouteID(route_id: string): Observable<Trip[]>{
		return this._http.get(this._trip_url)
					.map((response: Response) => response.json()
					.filter(item => item.route_id === route_id));
	}

	getAllTrip(): Observable<Trip[]>{
		return this._http.get(this._trip_url)
					.map((response: Response) => response.json());
	}

	getAllRoutes(): Observable<Trip[]>{
		return this._http.get(this._routes_url)
					.map((response: Response) => response.json());
	}

	getAllShapes(){
		return this._http.get(this._shape_id_url)
					.map((response: Response) => response.json());
	}

	getAShape(shape_id: string): Observable<ShapeID[]>{
		return this._http.get(this._url)
					.map((response: Response) => response.json()
					.filter(item => item.shape_id === shape_id));
	}

	getRouteByID(route_id: string): Observable<Routes[]>{
		return this._http.get(this._routes_url)
					.map((response: Response) => response.json()
					.filter(item => item.route_id === route_id));
	}

	getStopTimeByTripId(trip_id: string): Observable<StopTime[]>{
		return this._http.get(this._stopTime_url)
					.map((response: Response) => response.json()
					.filter(item => item.trip_id === trip_id));
	}

	getAllStopTime(): Observable<StopTime[]>{
		return this._http.get(this._stopTime_url)
					.map((response: Response) => response.json());
	}

	getAllCalender(){
		return this._http.get(this._calender_url)
					.map((response: Response) => response.json());
	}

	getCalenderByServiceId(service_id: string): Observable<Calender[]>{
		return this._http.get(this._calender_url)
					.map((response: Response) => response.json()
					.filter(item => item.service_id === service_id));
	}


	getLiveData(){

const fetch = require("node-fetch");
let parserString = require('xml2js').parseString;

let promise = (fetch('http://pub.ntgov-rtpi.tims.net.au/webapp/bustrk/PublicBus', {
	body : '<?xml version="1.0" encoding="utf-8" ?><request xmlns="urn:Bacchus"></request>',
	method: 'post',
	mode: 'no-cors',
	headers: {
		'Access-Control-Allow-Origin': 'http://localhost:4200'
	}
}
))
.then((response) => {
	// Get text/xml out of response body
	return response.text();
})
.then((textResponse) => {
	// Parse xml text to string and convert callback to promise
	return new Promise((resolve, reject) => {
		parserString(textResponse, function(err, result){
			if(err) {
				return reject(err);
			}
			return resolve(result);
		})

	})
})
.then((busData) => {
	// Get the data we want out of the XML data structure
	const arrays = busData.dataroot_public_bus_loc.public_bus_locs.map((list) => list.public_bus)
	return [].concat.apply([], arrays);
})
.then((busData) => {
	console.log(busData);
})
console.log("Promise " + promise);



}

}
export class Shape{

   shape_id: string;
   shape_pt_lat: number;
   shape_pt_lon: number;
   shape_pt_sequence: number;
   shape_dist_traveled: number;

}

export class ShapeID{

   shape_id: string;
   shape_lat: number;
   shape_lon: number;
   zoom: number;

}

export class ShapeIDs{

   shape_id: string;

}

export class Trip{

	route_id: string;
	service_id: string;
	trip_id: string;
	trip_headsign: string;
	direction_id: number;
	block_id: string;
	shape_id: string;

}

export class Routes{

	route_id: string;
	agency_id: string;
	route_short_name: string;
	route_long_name: string;
	route_desc: string;
	route_type: number;
	route_url: string;
	route_color: string;
	route_text_color: string;

}

export class StopTime{

	trip_id: string;
	arrival_time: string;
	departure_time: string;
	stop_id: string;
	stop_sequence: number;
	stop_headsign: string;
	pickup_type: string;
	drop_off_type: string;
	shape_dist_traveled: string;

}

export class Calender{

	service_id: string;
	monday: number;
	tuesday: number;
	wednesday: number;
	thursday: number;
	friday: number;
	saturday: number;
	sunday: number;
	start_date: string;
	end_date: string;

}

export interface Post {
    title:string;
    body:string
}

export class Stop{
  stop_id: string;
   stop_name: string;
   stop_desc: string;
   stop_lat: number;
   stop_lon: number;
   zone_id: number;
}