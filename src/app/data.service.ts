import  { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import '../../node_modules/rxjs/add/operator/map';
import {Observable} from '../../node_modules/rxjs/Observable';

@Injectable()
export class DataService{

	shape = [];


	private _url:string = "../assets/data/google-transit/shapes-json.json";
	private _shape_id_url:string = "../assets/data/google-transit/shapes-id.json";
	private _stopJSONUrl:string = "../assets/data/google-transit/stops.json";
	private _key_shape_id_url:string = "../assets/data/google-transit/shape-keyed.json";

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

export class ShapeID{

   shape_id: string;

}