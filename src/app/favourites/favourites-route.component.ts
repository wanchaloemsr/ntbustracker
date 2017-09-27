import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router} from '@angular/router';
import { StopTime as FavouriteStopTime,} from '../datatype';

@Component({
  selector: 'app-favourites-route',
  templateUrl: './favourites-route.component.html',
  styleUrls: ['./favourites-route.component.css']
})

export class FavouritesRouteComponent implements OnInit {

	@Input() route_id: string;

	aRoute: Routes;
	allRoutes = [];

	constructor(_dataService: DataService){
		
		this.aRoute = new Routes();

		_dataService.getAllRoutes()
			.subscribe(resData => this.setARoute(resData.filter(item => 
				item.route_id === this.route_id)));

	}

	ngOnInit(){

	}

	setARoute(routeData: Routes[]){

		for(let route of routeData){
				this.aRoute.route_id = route.route_id;
				this.aRoute.agency_id = route.agency_id;
				this.aRoute.route_short_name = route.route_short_name;
				this.aRoute.route_long_name = route.route_long_name;
				this.aRoute.route_desc = route.route_desc;
				this.aRoute.route_type = route.route_type;
				this.aRoute.route_url = route.route_url;
				this.aRoute.route_color = route.route_color;
				this.aRoute.route_text_color = route.route_text_color;
		}

	}

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