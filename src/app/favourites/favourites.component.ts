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

  stopTimeList = [];
  allStops =[];
  allRoutes = [];

  constructor(_dataService: DataService) {
    this.trip_id_cache = [];
    this.fav_trip_list = [];
    this._dataService = _dataService;
    this._dataService.getAllTrip().subscribe(resData => this.getFavouriteList(resData));
    this._dataService.getAllStopTime().subscribe(resData => this.stopTimeList = resData);
    this._dataService.getStops().subscribe(resData => this.allStops = resData);
    this._dataService.getAllRoutes().subscribe(resData => this.allRoutes = resData);



  }

  ngOnInit() {

    this.trip_id_cache = this._dataService.getTripIdCache();

  }

   setData(route_id:string, trip_id: string){
    this._dataService.stopTimeList = this.stopTimeList;
    this._dataService.trip_id = trip_id;
    this._dataService.allStops = this.allStops;
    this._dataService.route_id = route_id;
    this._dataService.allRoutes = this.allRoutes;
  }


  getFavouriteList(allTrips : any[]){
    this.allTrips = allTrips;
    if(this.trip_id_cache.length > 0){
      this.fav_trip_list = [];
      for(let trip of this.trip_id_cache){
        for(let list of allTrips.filter(item => item.trip_id === trip)){ 

          let trip = new Trip(list.route_id, list.service_id, list.trip_id, 
            list.trip_headsign, list.direction_id, list.block_id, list.shape_id);
          this.fav_trip_list.push(trip);
        }
      }
    }else{
      this.fav_trip_list = [];
    }
  }

  removeFavourite(trip_id: string){
    this.trip_id_cache.splice(this.trip_id_cache.indexOf(trip_id), 1);
    this._dataService.setTripIdCache(this.trip_id_cache);
    this.trip_id_cache = this._dataService.getTripIdCache();
    this.getFavouriteList(this.allTrips);
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