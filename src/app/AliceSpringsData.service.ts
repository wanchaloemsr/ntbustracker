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


	//URL
	private _route_url = "../assets/data/alice-springs/routes.json";
	private _trip_url = "../assets/data/alice-springs/trips.json";
	private _calendar_url = "../assets/data/alice-springs/calendar.json";
	private _shape_url = "../assets/data/alice-springs/shapes.json";
	private _stop_time_url = "../assets/data/alice-springs/stop_times.json";
	private _stop_url = "../assets/data/alice-springs/stops.json";

	constructor(private _http:Http, private _cacheService: CacheService){

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

	getAllStops(){
		return this._http.get(this._stop_url)
					.map((response: Response) => response.json());
	}


}

