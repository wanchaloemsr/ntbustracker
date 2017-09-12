import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';


@Component({
  selector: 'route-time',
  templateUrl: './route-time.component.html',
  styles: ['.agm-map {height: 450px;}']
})

export class RouteTimeComponent implements OnInit{


	@Input() trip_id: string;
  @Input() trip_headsign: string;
  @Input() stopTimeList: StopTime[];


  public isCollapsed = true;
  tripStopTime = [];

  stopTimeListById: StopTime[];
  modalStopTimeListById: StopTime[];

  closeResult: string;

  a_trip_array = [];
  a_trip_id: string;

  constructor(private _dataService: DataService, private modalService: NgbModal) { }

  ngOnInit(){

    this.stopTimeListById = this.stopTimeList.filter(item => item.trip_id === this.trip_id);
    this.setATrip();

  }

  setATrip(){
    this.a_trip_array = this.trip_id.split("_", 1);
    for(let item of this.a_trip_array){

      this.a_trip_id = item;

    }
    this.a_trip_id = this.a_trip_id.slice(1, 3);
    console.log("Atrip : " + this.a_trip_id);
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