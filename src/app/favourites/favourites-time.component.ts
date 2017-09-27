import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { StopTime as FavouriteStopTime,} from '../datatype';


@Component({
  selector: 'app-favourites-time',
  templateUrl: './favourites-time.component.html',
  styleUrls: ['./favourites-time.component.css']
})

export class FavouritesTimeComponent implements OnInit {

	@Input() trip_id: string;

	allStopTime: FavouriteStopTime[];

	allStopTimes: StopTimes[];
	aTripStopTime: FavouriteStopTime[];

	constructor(_dataService: DataService, private _route: Router){

		this.allStopTimes = _dataService.allStopTimes;


	}

	ngOnInit(){
		this.setData();
	}

	setData(){
		this.aTripStopTime = [];
		if(this.allStopTimes !== undefined){

			for(let stopTime of this.allStopTimes.filter(item=> item.trip_id === this.trip_id)){
				let aStop = new FavouriteStopTime(  
					stopTime.trip_id,
					stopTime.arrival_time,
					stopTime.departure_time,
					stopTime.stop_id,
					stopTime.stop_sequence,
					stopTime.stop_headsign,
					stopTime.pickup_type,
					stopTime.drop_off_type,
					stopTime.shape_dist_traveled);

				this.aTripStopTime.push(aStop);

			}

		}else{
			this._route.navigate(['/timetables']);
		}

	}

}

class Trip {
  private route_id: string;
  private service_id: string;
  private trip_id: string;
  private trip_headsign: string;
  private direction_id: number;
  private block_id: string;
  private shape_id: string;

  constructor(
    route_id: string,
    service_id: string,
    trip_id: string,
    trip_headsign: string,
    direction_id: number,
    block_id: string,
    shape_id: string){

    this.route_id = route_id;
    this.service_id = service_id;
    this.trip_id = trip_id;
    this.trip_headsign = trip_headsign;
    this.direction_id =direction_id;
    this.block_id = block_id;
    this.shape_id = shape_id;

  }

  getRouteId(){
  	return this.route_id;
  }

  getServiceId(){
  	return this.service_id;
  }

  getTripId(){
  	return this.trip_id;
  }

  getTripHeadsign(){
  	return this.trip_headsign;
  }

  getDirectionId(){
  	return this.direction_id;
  }

  getBlockId(){
  	return this.block_id;
  }

  getShapeId(){
  	return this.shape_id;
  }

}

export class StopTimes{

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

  constructor(
  	trip_id: string,
  	arrival_time: string,
  	departure_time: string,
  	stop_id: string,
  	stop_sequence: number,
  	stop_headsign: string,
  	pickup_type: string,
  	drop_off_type: string,
  	shape_dist_traveled: string
  	){

  	this.trip_id = trip_id;
  	this.stop_sequence = stop_sequence;
  	this.stop_id = stop_id;
  	this.stop_headsign = stop_headsign;
  	this.shape_dist_traveled = shape_dist_traveled;
  	this.pickup_type = pickup_type;
  	this.drop_off_type = drop_off_type;
  	this.departure_time = departure_time;

  }

  getTripId(){
  	return this.trip_id;
  }

  getArrivalTime(){
  	return this.arrival_time;
  }

  getDepartureTime(){
  	return this.departure_time;
  }

  getStopId(){
  	return this.stop_id;
  }

  getStopSequence(){
  	return this.stop_sequence;
  }

  getStopHeadsign(){
  	return this.stop_headsign;
  }

  getPickupType(){
  	return this.pickup_type;
  }

  getDropoffType(){
  	return this.drop_off_type;
  }

  getShapeDistTraveled(){
  	return this.shape_dist_traveled;
  }

}