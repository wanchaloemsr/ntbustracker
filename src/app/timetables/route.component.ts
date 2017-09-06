import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
})

export class RouteComponent implements OnInit{

	@Input() route_id: string;

	closeResult: string;
	trips = [];
  

	constructor(private _dataService: DataService, private modalService: NgbModal) { }

	ngOnInit(){

		this._dataService.getTripByRouteID(this.route_id)
		.subscribe(resShapesData => this.trips= resShapesData);

	}

    loadData() {
    this._dataService.getTripByRouteID(this.route_id)
    .subscribe(resShapesData => this.trips= resShapesData);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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