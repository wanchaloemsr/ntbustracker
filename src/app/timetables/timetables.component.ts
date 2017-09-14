import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
	selector: 'app-timetables',
	templateUrl: './timetables.component.html',
	styleUrls: ['./timetables.component.css']
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

	calender = [];

	allShapes= [];



	searchCount: number;

	public model: any;

  	formatter = (result: string) => result.toUpperCase();

  	search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this.routeNumberArray.filter(v => v.indexOf(term.toLowerCase()) > -1).slice(0, 10));


	constructor(private _dataService: DataService) { }

	ngOnInit() {

		this._dataService.getAllRoutes()
		.subscribe(resShapesData => this.allRoutes = resShapesData);
		console.log("All List: " + this.allRoutes.length);


		this._dataService.getAllStopTime()
		.subscribe(resShapesData => {this.stopTimeList = resShapesData}
			, err => {console.log('Something went wrong!')});
		console.log("Stop List: " + this.stopTimeList.length);

		this._dataService.getAllTrip()
		.subscribe(resShapesData => this.allTrips = resShapesData);


    this._dataService.getAllCalender()
      .subscribe(resData => this.calender = resData);



	}

	onSelect(route_id: string){
		this.route_id = route_id;
		console.log(this.route_id);

	}

	searchFromRouteNumber(){

		this.searchRoutes = [];
		this.routeNumberArray = [];
		this.searchCount = 0;

		for(let route of this.allRoutes){

			if(route.route_id.search(this.searchtext) > -1){
				console.log(route.route_id);
				this.searchRoutes.push(route);
				this.searchCount ++;
				this.routeNumberArray.push(route.route_id);
			}
		}
	}

	searchFromStopNumber(){

		this.stopNumberResult = [];


		for(let stopList of this.stopTimeList){

			if(stopList.stop_id.search(this.searchtext)> -1){

				console.log(stopList.trip_id.slice(1, -2));

				if(this.stopIdResult != stopList.trip_id.slice(1, -3)){
					this.stopNumberResult.push(stopList);
					this.stopIdResult == stopList.trip_id.slice(1, -3);
				}


			}
		}
		console.log("S Stop Num: " + this.stopNumberResult.length);
		console.log("Stop List: " + this.stopTimeList.length);

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