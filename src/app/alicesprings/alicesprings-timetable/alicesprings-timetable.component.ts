import { Component, OnInit, HostListener } from '@angular/core';
import { AliceSpringsDataService } from '../../AliceSpringsData.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


//import data type
import { Routes as Routes} from '../../datatype';
import { Trip as Trip} from '../../datatype';
import { Calendar as Calendar} from '../../datatype';
import { Shape as Shape} from '../../datatype';
import { StopTime as StopTime} from '../../datatype';
import { Stop as Stop} from '../../datatype';


@Component({
	selector: 'app-alicesprings-timetable',
	templateUrl: './alicesprings-timetable.component.html',
	styleUrls: ['./alicesprings-timetable.component.css']
})
export class AlicespringsTimetableComponent implements OnInit {

	public routes: Routes[];
	public trips: Trip[];
	public tripByRouteID: Trip[];

	searchtext: string = '';
	searchFilter:string;

	constructor(private _dataService: AliceSpringsDataService) { 


	}

	ngOnInit() {

		this._dataService.getAllRoutes().subscribe(resData => this.setRoutes(resData));
		this._dataService.getAllTrips().subscribe(resData => this.setTrips(resData));

	}

	private setRoutes(resData: any[]){

		this.routes = [];

		for(let route of resData){
			let aRoute = new Routes(route.route_id, route.agency_id, route.route_short_name
				, route.route_long_name, route.route_desc, route.route_type, route.route_url
				, route.route_color, route.route_text_color);
			this.routes.push(aRoute);
		}

	}

	private setTrips(resData: any[]){

		this.trips = [];

		for(let trip of resData){

			this.trips.push(new Trip(

				trip.route_id,
			    trip.service_id,
			    trip.trip_id,
			    trip.trip_headsign,
			    trip.direction_id,
			    trip.block_id,
			    trip.shape_id

				));
		}
	}

	toTheTop(){

		window.scrollTo(0, 0);

	}

	@HostListener("window:scroll", [])
	onWindowScroll() {

		let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      return "scroll-top-btn-show";
    } else{
      return "scroll-top-btn-hide";
    }
		
	}

}

