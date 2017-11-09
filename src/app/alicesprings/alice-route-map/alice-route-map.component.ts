import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { AgmPolyline, AgmMarker, PolylineManager } from '@agm/core';

import { AliceSpringsDataService } from '../../AliceSpringsData.service';

import { Routes as Routes} from '../../datatype';
import { Trip as Trip} from '../../datatype';
import { Calendar as Calendar} from '../../datatype';
import { Shape as Shape} from '../../datatype';
import { StopTime as StopTime} from '../../datatype';
import { Stop as Stop} from '../../datatype';

@Component({
  selector: 'app-alice-route-map',
  templateUrl: './alice-route-map.component.html',
  styleUrls: ['./alice-route-map.component.css']
})
export class AliceRouteMapComponent implements OnInit {

  public shape_id: number;
  public mapStyle: any[];

  public lat = -23.700630;
  public long = 133.877877;

  public minZoom = 10;

  public shapes: Shape[] = [];

  stopTimes = [];

  stops = [];

  aStopList = [];
  stopListByID = [];

  aStopTime : AStopTime;

  trip_id : any;

  allStopTimes = [];

    stopIcon: string = '../assets/icon/Untitled-1.png';

  constructor(_dataService: AliceSpringsDataService, route: ActivatedRoute, private _route: Router) { 

    this.shape_id = route.snapshot.params['shape_id'];
    this.stops = _dataService.allStops;
    this.allStopTimes = _dataService.allStopTimes;
    this.trip_id = _dataService.trip_id;
    

    if(_dataService.trip_id !== undefined){
      _dataService.getShapeByID(Number(this.shape_id)).subscribe(resData => this.setShape(resData));
      _dataService.getMapStyle()
      .subscribe(resData => this.mapStyle = resData);

    }else{
      this._route.navigate(['/alicesprings']);

    }
    
    


  }

  ngOnInit() {
    console.log(this.shape_id);
    console.log("Trip: " + this.trip_id);
    console.log("Stop: " + this.stops.length);
    this.setData();

  }

  setShape(resData: any[]){

    this.shapes = [];

    for(let shape of resData){

      this.shapes.push(new Shape(shape.shape_id, shape.shape_pt_lat, shape.shape_pt_lon,
        shape.shape_sequence, shape.shape_dist_traveled));

    }

  }

    setData(){

      this.stopTimes = this.allStopTimes.filter(item => item.trip_id === this.trip_id);

    for(let stop of this.stopTimes){
      this.aStopList.push(stop.stop_id);
    }

    console.log("Astop: "+ this.aStopList.length);

    for(let ss of this.stops){
      for(let stop_id of this.aStopList){
        if(ss.stop_id === stop_id){
          this.stopListByID.push(ss);
        }
      }
    }

  }

    setLabel(stop_id:string){
    return this.stopTimes.filter(item => item.stop_id === stop_id)[0].stop_sequence.toString();

  }

    stopIsClick(stop_id: string){

    for(let stop of this.stopTimes){
      if(stop.stop_id === stop_id){

        this.aStopTime = new AStopTime(stop.stop_id, stop.stop_sequence, stop.trip_id, stop.stop_headsign, stop.shape_dist_traveled, 
          stop.pickup_type, stop.drop_off_type, stop.departure_time, stop.arrival_time);
      }
    }

  }


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