//calennder
export class Calendar{
  private service_id: string;
  private monday: number;
  private tuesday: number;
  private wednesday: number;
  private thursday: number;
  private friday: number;
  private saturday: number;
  private sunday: number;
  private start_date: number;
  private end_date: number;

  constructor (

    service_id: string,
    monday: number,
    tuesday: number,
    wednesday: number,
    thursday: number,
    friday: number,
    saturday: number,
    sunday: number,
    start_date: number,
    end_date: number

    ){

    this.service_id = service_id;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
    this.sunday = sunday;
    this.start_date = start_date;
    this.end_date = end_date;

  }

  getServiceId(){
    return this.service_id;
  }

  getMonday(){
    return this.monday;
  }

  getTuesday(){
    return this.tuesday;
  }

  getWednesday(){
    return this.wednesday;
  }

  getThursday(){
    return this.thursday;
  }

  getFriday(){
    return this.friday;
  }

  getSaturday(){
    return this.saturday;
  }

  getSunday(){
    return this.sunday;
  }

  getStartDate(){
    return this.start_date;
  }

  getEndDate(){
    return this.end_date;
  }

}

//Interchange
export class Interchange{

}

//Route
export class Routes{

  private route_id: string;
  private agency_id: string;
  private route_short_name: number;
  private route_long_name: string;
  private route_desc: string;
  private route_type: number;
  private route_url: string;
  private route_color: string;
  private route_text_color: string;

  constructor(

  route_id: string,
  agency_id: string,
  route_short_name: number,
  route_long_name: string,
  route_desc: string,
  route_type: number,
  route_url: string,
  route_color: string,
  route_text_color: string
    ){

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

  getRouteId(){
    return this.route_id;
  }

  getAgencyId(){
    return this.agency_id;
  }

  getRouteShortName(){
    return this.route_short_name;
  }

  getRouteLongName(){
    return this.route_long_name;
  }

  getRouteDesc(){
    return this.route_desc;
  }

  getRouteType(){
    return this.route_type;
  }

  getRouteUrl(){
    return this.route_url;
  }

  getRouteColor(){
    return this.route_color;
  }

  getTextColor(){
    return this.route_text_color;
  }

}

//Shape
export class Shape{

   shape_id: string;
   shape_pt_lat: number;
   shape_pt_lon: number;
   shape_pt_sequence: number;
   shape_dist_traveled: number;

}

//ShapeID
export class ShapeID{

   shape_id: string;
   shape_lat: number;
   shape_lon: number;
   zoom: number;

}

//Stop
export class Stop{
  stop_id: string;
   stop_name: string;
   stop_desc: string;
   stop_lat: number;
   stop_lon: number;
   zone_id: number;
}

//StopTime
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

//Trip
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
    shape_id: string
    ){

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


//LiveData
export class LiveData{
  private code: string;
  private datetime: string;
  private direction: string;
  private end: string;
  private end_time: string;
  private latitude: number;
  private longitude: number;
  private otr: number;
  private rego: string;
  private route: string;
  private start: string;
  private start_time: string;
  private status: string;

  constructor(code: string,
  datetime: string,
  direction: string,
  end: string,
  end_time: string,
  latitude: number,
  longitude: number,
  otr: number,
  rego: string,
  route: string,
  start: string,
  start_time: string,
  status: string){

  this.code = code;
  this.datetime = datetime;
  this.direction = direction;
  this.end = end;
  this.end_time = end_time;
  this.latitude = latitude;
  this.longitude = longitude;
  this.otr = otr;
  this.rego = rego;
  this.route = route;
  this.start = start;
  this.start_time = start_time;
  this.status = status;

  }

  getCode(){
    return this.code;
  }

  getDirection(){
    return this.direction;
  }

  getEnd(){
    return this.end;
  }

  getEndTime(){
    return this.end_time.slice(0,5);
  }

  getLatitude(){
    return this.latitude;
  }

  getLongitude(){
    return this.longitude;
  }

  getOtr(){
    return this.otr;
  }

  getRego(){
    return this.rego;
  }

  getRoute(){
    return this.route;
  }

  getRouteNumber(){
    let route_id: string;
    let route = this.route.split(' ', 1);
    for(let r of route){
      if(r.search('Route') === -1){
        return this.route;
      }else{
        return this.route.slice(5);
      }
    }
  }

  getStart(){
    return this.start;
  }

  getStartTime(){
    return this.start_time.slice(0,5);
  }

  getStatus(){

    if(this.status.length>0){
      return this.status;
    }else{
      if (this.otr > -1 && this.otr < 1) {
        return 'On time';
        // code...
      }else if (this.otr <=-1){
        return this.otr.toString().substr(1, this.otr.toString().indexOf(".")) + " minute(s) early.";
      }else{
        return this.otr.toString().substr(0, this.otr.toString().indexOf(".")) + " minute(s) late.";
      }
    }
    
  }

}