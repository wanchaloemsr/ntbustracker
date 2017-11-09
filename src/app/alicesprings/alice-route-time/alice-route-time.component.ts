import { Component, OnInit, Input } from '@angular/core';

//import data type
import { Routes as Routes} from '../../datatype';
import { Trip as Trip} from '../../datatype';
import { Calendar as Calendar} from '../../datatype';
import { Shape as Shape} from '../../datatype';
import { StopTime as StopTime} from '../../datatype';
import { Stop as Stop} from '../../datatype';

@Component({
	selector: 'alice-route-time',
	templateUrl: './alice-route-time.component.html',
	styleUrls: ['./alice-route-time.component.css']
})
export class AliceRouteTimeComponent implements OnInit {

	@Input() aRoute: Routes;
	@Input() stopTimes: StopTime[];
	@Input() aTrip: Trip;

	public stopTimesByTripId: StopTime[];
	public a_trip_id: string;

	constructor() { }

	ngOnInit() {

		this.stopTimesByTripId = this.stopTimes.filter(item => item.getTripId() === this.aTrip.getTripId())

	}


}
