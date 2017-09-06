import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

@Component({
  selector: 'route-time',
  templateUrl: './route-time.component.html',
  styles: ['.top-buffer { margin-top:20px; }']
})

export class RouteTimeComponent implements OnInit{


	@Input() trip_id: string;
  @Input() trip: Trip[];

  public isCollapsed = true;
  tripStopTime = [];
  stopTimeListById =[];
  calenderList: Calender[];
  calenderById: Calender[];

  closeResult: string;


  constructor(private _dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(){

    this._dataService.getStopTimeByTripId(this.trip_id)
    .subscribe(resData => this.tripStopTime = resData);
    this._dataService.getAllCalender()
    .subscribe(resData => this.calenderList = resData);

  }

  open(content, trip_id) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this._dataService.getStopTimeByTripId(trip_id)
    .subscribe(resData => this.stopTimeListById = resData);

    for(let trip of this.trip){
      console.log(trip.trip_id);
    }
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

  departTimeClick(){
    console.log('is click');

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