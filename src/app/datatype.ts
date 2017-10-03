export class Trip {
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

export class StopTime{

  private trip_id: string;
  private arrival_time: string;
  private departure_time: string;
  private stop_id: string;
  private stop_sequence: number;
  private stop_headsign: string;
  private pickup_type: string;
  private drop_off_type: string;
  private shape_dist_traveled: string;

  constructor(
  	trip_id: string,
  	arrival_time: string,
  	departure_time: string,
  	stop_id: string,
  	stop_sequence: number,
  	stop_headsign: string,
  	pickup_type: string,
  	drop_off_type: string,
  	shape_dist_traveled: string
  	){

  	this.trip_id = trip_id;
    this.arrival_time = arrival_time;
  	this.stop_sequence = stop_sequence;
  	this.stop_id = stop_id;
  	this.stop_headsign = stop_headsign;
  	this.shape_dist_traveled = shape_dist_traveled;
  	this.pickup_type = pickup_type;
  	this.drop_off_type = drop_off_type;
  	this.departure_time = departure_time;

  }

  getTripId(){
  	return this.trip_id;
  }

  getArrivalTime(){
  	return this.arrival_time.slice(0, this.arrival_time.indexOf(':', 4));
  }

  getDepartureTime(){
  	return this.departure_time.slice(0, this.departure_time.indexOf(':', 4));
  }

  getStopId(){
  	return this.stop_id;
  }

  getStopSequence(){
  	return this.stop_sequence;
  }

  getStopHeadsign(){
  	return this.stop_headsign;
  }

  getPickupType(){
  	return this.pickup_type;
  }

  getDropoffType(){
  	return this.drop_off_type;
  }

  getShapeDistTraveled(){
  	return this.shape_dist_traveled;
  }

}