import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLocation'
})
export class FilterLocationPipe implements PipeTransform {

  transform(value: any, term: any): any {
  	console.log(term);
    if (term === undefined){
    	return value;
    }
    return value.filter(function(data){
    	console.log(data.route_desc.toLowerCase().includes(term.toLowerCase()));
    	return (data.route_long_name + data.route_desc).toLowerCase().includes(term.toLowerCase());
    });
  }

}
