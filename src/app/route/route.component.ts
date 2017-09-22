import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {


  @Input() stopTimeList: StopTime[];
  @Input() allRoutes= [];
  @Input() allTrips= [];
  @Input() calender = [];

	route_id:string;

  constructor(route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

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