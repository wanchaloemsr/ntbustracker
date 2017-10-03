import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { DataService } from '../data.service';


@Component({
  selector: 'route-time',
  templateUrl: './route-time.component.html',
  styleUrls: ['./route-time.component.css']
})

export class RouteTimeComponent implements OnInit{

  @Input() stopTimeList: StopTime[];
  @Input() aTrip: Trip;

  stopTimeListById: StopTime[];
  modalStopTimeListById: StopTime[];

  closeResult: string;

  enable = false;

  a_trip_array = [];
  a_trip_id: string;

  constructor(private _dataService: DataService, private modalService: NgbModal, private _route: Router) { }

  ngOnInit(){
    //Use this if modal is enable
    this.stopTimeListById = this.stopTimeList.filter(item => item.trip_id === this.aTrip.trip_id);
    this.setARouteId();
  }

  navigateTo(){
    this._dataService.stopTimeList = this.stopTimeList;
    this._route.navigate(['route/' + this.aTrip.shape_id]);
  }


  setARouteId(){
    if(this.aTrip.trip_id.search("Link") > -1){
      this.a_trip_id = this.aTrip.trip_id.split('_', 1)[0];
    }else {
      this.a_trip_id = this.aTrip.trip_id.split('_', 1)[0].slice(1);
    }
  }

  checkTextLength(){
    if(this.a_trip_id.length == 2){
      return 'twoalpha';
    }else if(this.a_trip_id.length ==3){
      return 'threealpha';
    }else if(this.a_trip_id.length > 3){
      return 'morealpha';
    }else{
      return 'onealpha';
    }
  }

  open(content, trip_id) {

    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.modalStopTimeListById = this.stopTimeListById;
    

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

export class Trip{

  route_id: string;
  service_id: string;
  trip_id: string;
  trip_headsign: string;
  direction_id: number;
  block_id: string;
  shape_id: string;

}

export class Calender{

  service_id: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  start_date: string;
  end_date: string;

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