import { Injectable, OnDestroy, Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {CacheService, CacheStorageAbstract, CacheLocalStorage} from 'ng2-cache/ng2-cache';

//import data type
import { Routes as Routes} from './datatype';
import { Trip as Trip} from './datatype';
import { Calendar as Calendar} from './datatype';
import { Shape as Shape} from './datatype';
import { StopTime as StopTime} from './datatype';
import { Stop as Stop} from './datatype';

@Injectable()

export class AliceSpringsDataService{

	//variable declaretion
	public routes: Routes[];
	public trip_id: any;
	public allStops = [];
	public allStopTimes = [];

	//URL
	private _route_url = "../assets/data/alice-springs/routes.json";
	private _trip_url = "../assets/data/alice-springs/trips.json";
	private _calendar_url = "../assets/data/alice-springs/calendar.json";
	private _shape_url = "../assets/data/alice-springs/shapes.json";
	private _stop_time_url = "../assets/data/alice-springs/stop_times.json";
	private _stop_url = "../assets/data/alice-springs/stops.json";
	private _map_style = "../assets/data/config/map-style.json"

	constructor(private _http:Http, private _cacheService: CacheService){

		this.getAllStops().subscribe(resData => this.allStops = resData);
		this.getAllStopTimes().subscribe(resData => this.allStopTimes = resData);

	}

	getAllRoutes(){
		return this._http.get(this._route_url)
					.map((response: Response) => response.json());
	}

	getAllTrips(){
		return this._http.get(this._trip_url)
					.map((response: Response) => response.json());
	}

	getTripByRouteId(route_id: string): Observable<Trip[]>{
		return this._http.get(this._trip_url)
					.map((response: Response) => response.json()
					.filter(item => item.route_id === route_id));
	}

	getAllCalendar(){
		return this._http.get(this._calendar_url)
					.map((response: Response) => response.json());
	}

	getAllShapes(){
		return this._http.get(this._shape_url)
					.map((response: Response) => response.json());
	}

	getAllStopTimes(){
		return this._http.get(this._stop_time_url)
					.map((response: Response) => response.json());
	}

	getStopTimesById(trip_id: number): Observable<AStop[]> {
		return this._http.get(this._stop_time_url)
					.map((response: Response) => response.json()
					.filter(item => item.trip_id === trip_id));
	}

	getAllStops(){
		return this._http.get(this._stop_url)
					.map((response: Response) => response.json());
	}

	getMapStyle(){
		return this._http.get(this._map_style)
					.map((response: Response) => response.json());
	}

	getShapeByID(shape_id: number): Observable<AShape[]> {
		console.log("SDFS: "+ shape_id);
		return this._http.get(this._shape_url)
					.map((response: Response) => response.json()
					.filter(item => item.shape_id === shape_id));
	}


}

export class AShape{

   shape_id: number;
   shape_pt_lat: number;
   shape_pt_lon: number;
   shape_pt_sequence: number;
   shape_dist_traveled: number;

}

export class AStop{
  stop_id: string;
   stop_name: string;
   stop_desc: string;
   stop_lat: number;
   stop_lon: number;
   zone_id: number;
}