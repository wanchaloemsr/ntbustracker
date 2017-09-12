import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
})

export class RouteComponent implements OnInit{

  @Input() route_id: string;
  @Input() stopTimeList: StopTime[];
  @Input() allRoutes= [];
  @Input() allTrips= [];
  @Input() calender = [];

  closeResult: string;
  trips = [];
  aRoute = [];
  aTrip = [];
  origin: string;
  destination: string;

  isTwoWaysRoute = false;


  stop_time_by_FULLW_0 = [];
  stop_time_by_FULLWT_0 = [];
  stop_time_by_FULLWTM_0 = [];
  stop_time_by_FULLWF_0 = [];
  stop_time_by_WESA_0 = [];
  stop_time_by_WESAN_0 = [];
  stop_time_by_WESU_0 = [];

  stop_time_by_FULLW_1 = [];
  stop_time_by_FULLWT_1 = [];
  stop_time_by_FULLWTM_1 = [];
  stop_time_by_FULLWF_1 = [];
  stop_time_by_WESA_1 = [];
  stop_time_by_WESAN_1 = [];
  stop_time_by_WESU_1 = [];


  constructor(private _dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(){

    this.trips = this.allTrips.filter(item => item.route_id === this.route_id);
    this.sortingTripDate();
    this.checkIfTwoway();
    console.log("Is two ways? " + this.isTwoWaysRoute);

  }

  sortingTripDate(){

    for(let trip of this.trips){

      if(trip.direction_id == 0){

        switch (trip.service_id) {
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

        switch (trip.service_id) {
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

  checkIfTwoway(){

    if(this.route_id === '4' || this.route_id === '5' || this.route_id === '8' 
      || this.route_id === '9' || this.route_id === '10' || this.route_id === '447' 
      || this.route_id === '450' || this.route_id === '446' || this.route_id === '21' 
      || this.route_id === '22' || this.route_id === '25' || this.route_id === '28'
      || this.route_id === '445'){

      this.isTwoWaysRoute = true;
    this.setOriginAndDestination();

  }else{

    this.isTwoWaysRoute = false;

  }

}

setOriginAndDestination(){

  switch (this.route_id) {

    case "4":
    this.origin = "Casuarina";
    this.destination = "Darwin";
    break;

    case "5":
    this.origin = "Casuarina";
    this.destination = "Darwin";
    break;

    case "8":
    this.origin = "Darwin";
    this.destination = "Palmerston";
    break;

    case "9":
    this.origin = "Casuarina";
    this.destination = "Palmerston";
    break;

    case "10":
    this.origin = "Casuarina";
    this.destination = "Darwin";
    break;

    case "21":
    this.origin = "Hospital Precinct";
    this.destination = "Darwin";
    break;

    case "22":
    this.origin = "Leanyer";
    this.destination = "Darwin";
    break;

    case "25":
    this.origin = "Karama";
    this.destination = "Darwin";
    break;

    case "28":
    this.origin = "Humpty Doo";
    this.destination = "Darwin";
    break;

    case "445":
    this.origin = "Humpty Doo";
    this.destination = "Palmerston";
    break;

    case "446":
    this.origin = "Bees Creek";
    this.destination = "Palmerston";
    break;

    case "447":
    this.origin = "Humpty Doo";
    this.destination = "Palmerston";
    break;

    case "450":
    this.origin = "Humpty Doo";
    this.destination = "Palmerston";
    break;

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