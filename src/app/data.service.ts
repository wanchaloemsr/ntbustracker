import  { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import '../../node_modules/rxjs/add/operator/map';
import {Observable} from '../../node_modules/rxjs/Observable';

@Injectable()
export class DataService{

	shape = [];


	private _url:string = "../assets/data/google-transit/shapes-json.json";
	private _shape_id_url:string = "../assets/data/google-transit/shapes-id.json";
	private _stop_url:string = "../assets/data/google-transit/stops.json";
	private _interchange_Url:string = "../assets/data/google-transit/interchanges.json";
	private _key_shape_id_url:string = "../assets/data/google-transit/shape-keyed.json";
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

	getStops(){
		return this._http.get(this._stop_url)
					.map((response: Response) => response.json());
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