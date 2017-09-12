import { Component, OnInit } from '@angular/core';


import { DataService } from '../data.service';


@Component({
	selector: 'app-timetables',
	templateUrl: './timetables.component.html',
	styleUrls: ['./timetables.component.css']
})


export class TimetablesComponent implements OnInit {

	searchtext = '';
	allRoutes = [];
	searchRoutes: Routes[] = [];
	route_id: string;
	allTrips = [];

	stopTimeList= [];
	calender = [];


	constructor(private _dataService: DataService) { }

	ngOnInit() {

		this._dataService.getAllRoutes()
		.subscribe(resShapesData => this.allRoutes = resShapesData);
		this._dataService.getAllStopTime()
		.subscribe(resShapesData => {this.stopTimeList = resShapesData}
			, err => {console.log('Something went wrong!')});
		console.log(this.allRoutes.length);

		this._dataService.getAllTrip()
		.subscribe(resShapesData => this.allTrips = resShapesData);


    this._dataService.getAllCalender()
      .subscribe(resData => this.calender = resData);




	}

	onSelect(route_id: string){
		this.route_id = route_id;
		console.log(this.route_id);

	}

	searchFromInput(){

		this.searchRoutes = [];

		for(let route of this.allRoutes){

			if(route.route_id.search(this.searchtext) > -1){
				console.log(route.route_id);
				this.searchRoutes.push(route);
			}
		}
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