import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  private trip_id_cache: string[];
  private _dataService: DataService;
  private fav_trip_list: Trip[];
  private allTrips = [];

  constructor(_dataService: DataService) {
    this.trip_id_cache = [];
    this.fav_trip_list = [];
    this._dataService = _dataService;
    this._dataService.getAllTrip().subscribe(resData => this.getFavouriteList(resData));


  }

  ngOnInit() {

    this.trip_id_cache = this._dataService.getTripIdCache();

  }

  getFavouriteList(allTrips : any[]){

    if(this.trip_id_cache.length > 0){
      this.fav_trip_list = [];
      for(let trip of this.trip_id_cache){
        for(let list of allTrips.filter(item => item.trip_id === trip)){ 

          let trip = new Trip(list.route_id, list.service_id, list.trip_id, 
            list.trip_headsign, list.direction_id, list.block_id, list.shape_id);
          console.log("Trip OD: " +  trip.getShapeId());
          this.fav_trip_list.push(trip);
        }
      }
    }

    console.log("Trip list: " + this.fav_trip_list.length);

    this.printFav();
  }

  printFav(){
    for(let trip of this.fav_trip_list){
      console.log(trip.getRouteId());
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