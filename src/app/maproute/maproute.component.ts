import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

import { DataService } from '../data.service';



@Component({
  selector: 'app-maproute',
  templateUrl: './maproute.component.html',
  styleUrls: ['./maproute.component.css']
})
export class MaprouteComponent implements OnInit {

  mapShape= [];
  aShape: ShapeID[];
  allShapes: ShapeID[];

  allStops: Stop[] =[];
  allRoutes = [];

  stopListByID: Stop[] = [] ;

  stopTimeList: StopTime[];
  stopList: StopTime[] = [];
  
  aStop: string[] =[];

  aStopTime: AStopTime;
  aRoute: ARoute;

  lat: number = -12.479048;
  lng: number = 130.987067;
  zoom: number = 11;
  minZoom:number = 11;

  a_trip_id: string;

  mapStyle = [];

  shape_id: string;
  trip_id: string;
  route_id: string;
  markerLabel:string;

  liveRoute: any[] = [];
  interval: any;

  screenHeight: number;

  stopIconUrl: string = './assets/icon/bus-stop-sign-none.png';

  busIconUrl: string = './assets/icon/bus.png';

  stopIcon: string = './assets/icon/Untitled-1.png';

  constructor(private _dataService: DataService, route: ActivatedRoute, private _route: Router) { 

    this.shape_id = route.snapshot.params['shape_id'];
    this.stopTimeList = _dataService.stopTimeList;
    this.trip_id = _dataService.trip_id;
    this.allStops = _dataService.allStops;
    this.route_id = _dataService.route_id;
    this.allRoutes = _dataService.allRoutes;

    console.log("H: "+ window.screen.height);
    console.log("W: "+ window.screen.width);


    if(this.checkTripID()){

      this._dataService.getMapStyle()
      .subscribe(resStopsData => this.mapStyle = resStopsData);
      this._dataService.getAShape(this.shape_id)
      .subscribe(resData => this.aShape = resData);
      this._dataService.getShapeID2(this.shape_id)
      .subscribe(resData => this.mapShape = resData);

      this.setData();
      this.setARoute();
      this.setATrip();

    }else{
      this._route.navigate(['/timetables']);
    }

  }

  ngOnInit() {

    this.screenHeight = window.screen.height - 200;

        this.refreshData();
        this.interval = setInterval(() => { 
                this.refreshData(); 
        }, 10000);



  }

  refreshData(){
    setTimeout(()=>{
      this.liveRoute = this._dataService.getLiveDataByRoute(this.route_id);
    }, 1000);

    console.log("SIXXXXXXXXXXX: "+ this.liveRoute.length);
  }

  setData(){

    this.stopList = this.stopTimeList.filter(item => item.trip_id === this._dataService.trip_id);

    for(let stop of this.stopList){
      this.aStop.push(stop.stop_id);
    }

    for(let ss of this.allStops){
      for(let stop_id of this.aStop){
        if(ss.stop_id === stop_id){
          this.stopListByID.push(ss);
        }
      }
    }

    for(let shape of this.mapShape){

      this.lat = shape.shape_lat;
      this.lng = shape.shape_lon;
      this.zoom = shape.zoom;
    }

  }

  setATrip(){
    let a_trip_array = this.trip_id.split("_", 1);
    for(let item of a_trip_array){

      this.a_trip_id = item;

    }

    if(this.a_trip_id.search('Man') == -1){

      if(this.a_trip_id.search('Link') == -1){
        this.a_trip_id = this.a_trip_id.slice(1, 3);
      }
      this.a_trip_id = this.a_trip_id.slice(0, 5);
    }
    else {
      this.a_trip_id = this.a_trip_id.slice(1, 4);
    }

  }

  setLabel(stop_id:string){
    return this.stopList.filter(item => item.stop_id === stop_id)[0].stop_sequence.toString();

  }

  setARoute(){
    let route: ARoute[] = this.allRoutes.filter(item => item.route_id === this.route_id);

    for(let temp of route){
      this.aRoute = new ARoute(temp.route_id, temp.agency_id, temp.route_short_name, temp.route_long_name, temp.route_desc,
        temp.route_type, temp.route_url, temp.route_color, temp.route_text_color);
    }
  }

  stopIsClick(stop_id: string){

    for(let stop of this.stopList){
      if(stop.stop_id === stop_id){

        this.aStopTime = new AStopTime(stop.stop_id, stop.stop_sequence, stop.trip_id, stop.stop_headsign, stop.shape_dist_traveled, 
          stop.pickup_type, stop.drop_off_type, stop.departure_time, stop.arrival_time);
      }
    }

  }

  checkTripID(){

    console.log("Trip IDIDID === " + this.trip_id);

    if(this.trip_id === undefined){
      return false;
    }else{
      return true;
    }

  }



}


export class ShapeID{

  shape_id: string;
  shape_lat: number;
  shape_lon: number;
  zoom: number;

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

export class AStopTime{

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
    stop_id: string,
    stop_sequence: number,
    trip_id: string,
    stop_headsign: string,
    shape_dist_traveled: string,
    pickup_type: string,
    drop_off_type: string,
    departure_time: string,
    arrival_time: string){

    this.stop_id = stop_id;
    this.stop_sequence = stop_sequence;
    this.stop_headsign = stop_headsign;
    this.shape_dist_traveled = shape_dist_traveled;
    this.pickup_type = pickup_type;
    this.drop_off_type = drop_off_type;
    this.departure_time = departure_time;
    this.arrival_time = arrival_time;

  }

}

export class ARoute{

  route_id: string;
  agency_id: string;
  route_short_name: string;
  route_long_name: string;
  route_desc: string;
  route_type: number;
  route_url: string;
  route_color: string;
  route_text_color: string;

  constructor( route_id: string,
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

}

export class Stop{
  stop_id: string;
  stop_name: string;
  stop_desc: string;
  stop_lat: number;
  stop_lon: number;
  zone_id: number;
}