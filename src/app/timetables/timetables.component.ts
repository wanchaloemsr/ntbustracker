import { Component, OnInit} from '@angular/core';


import { DataService } from '../data.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';
 
declare var BUILD_VERSION: string;

@Component({
	selector: 'app-timetables',
	templateUrl: './timetables.component.html',
	styleUrls: ['./timetables.component.css'],
    providers: [ CacheService ]
})



export class TimetablesComponent implements OnInit {

	searchtext = '';
	allRoutes = [];
	searchRoutes: Routes[] = [];
	routeNumberArray = [];
	route_id: string;
	allTrips = [];

	stopTimeList= [];

	stopIdResult: string;
	tripIdToRouteId: string;
	stopNumberResult: StopTime[];
	stopNumberDiv = [];
	timeOutRef: any;

	calender = [];

	allShapes= [];

	liveData: any;


	searchCount: number;

	public model: any;



	constructor(private _dataService: DataService, private _cacheService: CacheService) {

		_dataService.getAllRoutes()
		.subscribe(resShapesData => this.allRoutes = resShapesData);

		_dataService.getAllStopTime()
		.subscribe(resShapesData => {this.stopTimeList = resShapesData}
			, err => {console.log('Something went wrong!')});

		_dataService.getAllTrip()
		.subscribe(resShapesData => this.allTrips = resShapesData);


    	_dataService.getAllCalender()
      	.subscribe(resData => this.calender = resData);

	}

	ngOnInit() {

	}

	onSelect(route_id: string){
		this.route_id = route_id;

	}


	searchFromRouteNumber(){

		this.searchRoutes = [];
		this.routeNumberArray = [];
		this.searchCount = 0;

		for(let route of this.allRoutes){

			if(route.route_id.search(this.searchtext) > -1){
				this.searchRoutes.push(route);
				this.searchCount ++;
				this.routeNumberArray.push(route.route_id);
			}
		}
	}

	onChange(event){
		if(this.timeOutRef){
			clearTimeout(this.timeOutRef);
		}

		if (event.length > 0) {
			// code...
			this.timeOutRef = setTimeout(() => {
				this.searchFromStopNumber();
			},1000);
		}
			
 
		

	}

	searchFromStopNumber(){

		this.stopNumberResult = [];


		for(let stopList of this.stopTimeList){

			if(stopList.stop_id.search(this.searchtext.toUpperCase())> -1){

				this.stopNumberDiv = stopList.trip_id.split("_",1);
				for(let div of this.stopNumberDiv){
					  
					if(this.stopIdResult != div){
					this.stopNumberResult.push(stopList);
					this.stopIdResult = div;

					}
				}

			}
		}

		clearTimeout(this.timeOutRef);

	}


}

export class Routes{

	constructor(route_id: string,
		agency_id: string,
		route_short_name: string,
		route_long_name: string,
		route_desc: string,
		route_type: number,
		route_url: string,
		route_color: string,
		route_text_color: string){

		this.route_id = route_id;
		this.agency_id = agency_id;
		this.route_short_name = route_short_name;
		this.route_long_name = route_long_name;
		this.route_desc = route_desc;
		this.route_type = route_type;
		this.route_url = route_url;
		this.route_color = route_color;
		this.route_text_color = route_text_color;

	}

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

export interface Post {
    title:string;
    body:string
}