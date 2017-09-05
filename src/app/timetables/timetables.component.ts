import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css']
})
export class TimetablesComponent implements OnInit {

	tripByID = [];
	allRoutes = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  		this._dataService.getTripByRouteID('1')
		.subscribe(resShapesData => this.tripByID = resShapesData);
		this._dataService.getAllRoutes()
		.subscribe(resShapesData => this.allRoutes = resShapesData);

  }

}
