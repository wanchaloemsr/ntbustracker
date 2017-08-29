import  { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import '../../node_modules/rxjs/add/operator/map';
import {Observable} from '../../node_modules/rxjs/Observable';

@Injectable()
export class ShapesService{

	shape = [];


	private _url:string = "../assets/data/google-transit/shapes-json.json";
	private _stopJSONUrl:string = "../assets/data/google-transit/stops.json";

	constructor(private _http:Http){

	}

	getShapes(){
		return this._http.get(this._url)
					.map((response: Response) => response.json());
	}

	getShape(): Observable<Shape[]> {
		return this._http.get(this._url)
					.map((response: Response) => response.json());
	}

	getStops(){
		return this._http.get(this._stopJSONUrl)
					.map((response: Response) => response.json());
	}


}

export class Shape{

   shape_id: string;
   shape_pt_lat: number;
   shape_pt_lon: number;
   shape_pt_sequence: number;
   shape_dist_traveled: number;

}