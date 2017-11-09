import { Component, OnInit, Input } from '@angular/core';

import { AliceSpringsDataService } from '../../AliceSpringsData.service';
import { DataService } from '../../data.service';

import {CacheService, CacheStoragesEnum} from 'ng2-cache/ng2-cache';

//import data type
import { Routes as Routes} from '../../datatype';
import { Trip as Trip} from '../../datatype';
import { Calendar as Calendar} from '../../datatype';
import { Shape as Shape} from '../../datatype';
import { StopTime as StopTime} from '../../datatype';
import { Stop as Stop} from '../../datatype';

@Component({
	selector: 'alicesprings-route',
	templateUrl: './alicesprings-route.component.html',
	styleUrls: ['./alicesprings-route.component.css'],
	providers: [ CacheService ]
})
export class AlicespringsRouteComponent implements OnInit {

	@Input() aRoute: Routes;
	@Input() routes: Routes[];
	@Input() trips: Trip[];

	public tripsById: Trip[];
	public stopTimes: StopTime[];


	stop_time_by_FULLW_0: Trip[] = [];
	stop_time_by_FULLWT_0: Trip[] = [];
	stop_time_by_FULLWTM_0: Trip[] = [];
	stop_time_by_FULLWF_0: Trip[] = [];
	stop_time_by_WESA_0: Trip[] = [];
	stop_time_by_WESAN_0: Trip[] = [];
	stop_time_by_WESU_0: Trip[] = [];

	stop_time_by_FULLW_1: Trip[] = [];
	stop_time_by_FULLWT_1: Trip[] = [];
	stop_time_by_FULLWTM_1: Trip[] = [];
	stop_time_by_FULLWF_1: Trip[] = [];
	stop_time_by_WESA_1: Trip[] = [];
	stop_time_by_WESAN_1: Trip[] = [];
	stop_time_by_WESU_1: Trip[] = [];

	private trip_id_cache: string[] = [];
	save_txt: string;

	constructor(private _aliceDataService: AliceSpringsDataService, private _dataService: DataService) {

		_aliceDataService.getAllStopTimes().subscribe(resData => this.setStopTimes(resData));
	}

	ngOnInit() {

		this.tripsById = this.trips.filter(item => item.getRouteId() === this.aRoute.getRouteId());
		this.sortingTripDate();

		setTimeout(()=>{
			console.log(this.stopTimes.length);
		},3000);

	}

	setStopTimes(resData: any[]){

		this.stopTimes = [];
		for(let stopTime of resData){
			this.stopTimes.push(new StopTime(
				stopTime.trip_id,
				stopTime.arrival_time,
				stopTime.departure_time,
				stopTime.stop_id,
				stopTime.stop_sequence,
				stopTime.stop_headsign,
				stopTime.pickup_type,
				stopTime.drop_off_type,
				stopTime.shape_dist_traveled
				));
		}

	}

	setData(trip_id: any){
		this._aliceDataService.trip_id = trip_id;
	}

	setFavourite(trip_id: string){

		if(this.trip_id_cache.indexOf(trip_id) == -1){
			this.trip_id_cache.push(trip_id);
		}else{
			this.trip_id_cache.splice(this.trip_id_cache.indexOf(trip_id), 1);
		}
		this.trip_id_cache.sort((a,b) => 0 - (a > b ? -1 : 1));
		this._dataService.setTripIdCache(this.trip_id_cache);
		this.trip_id_cache = this._dataService.getTripIdCache();

	}

	setFav(trip_id: string){
		if(this.trip_id_cache.indexOf(trip_id)> -1){
			this.save_txt = 'Saved!';
			return 'fav-btn';
		}else{
			this.save_txt = 'Save Me';
			return 'no-fav-btn';
		}
	}

	sortingTripDate(){

		for(let trip of this.tripsById){

			if(trip.getDirectionId() == 0){

				switch (trip.getServiceId()) {
					case "FULLW":
					this.stop_time_by_FULLW_0.push(trip);
					break;

					case "FULLWT":
					this.stop_time_by_FULLWT_0.push(trip);
					break;

					case "FULLWTM":
					this.stop_time_by_FULLWTM_0.push(trip);
					break;

					case "FULLWF":
					this.stop_time_by_FULLWF_0.push(trip);
					break;

					case "WESA":
					this.stop_time_by_WESA_0.push(trip);
					break;

					case "WESAN":
					this.stop_time_by_WESAN_0.push(trip);
					break;

					case "WESU":
					this.stop_time_by_WESU_0.push(trip);
					break;

				}
			}else{

				switch (trip.getServiceId()) {
					case "FULLW":
					this.stop_time_by_FULLW_1.push(trip);
					break;

					case "FULLWT":
					this.stop_time_by_FULLWT_1.push(trip);
					break;

					case "FULLWTM":
					this.stop_time_by_FULLWTM_1.push(trip);
					break;

					case "FULLWF":
					this.stop_time_by_FULLWF_1.push(trip);
					break;

					case "WESA":
					this.stop_time_by_WESA_1.push(trip);
					break;

					case "WESAN":
					this.stop_time_by_WESAN_1.push(trip);
					break;

					case "WESU":
					this.stop_time_by_WESU_1.push(trip);
					break;

				}

			}

		}

	}


}
