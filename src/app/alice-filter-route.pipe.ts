import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAliceRoute'
})
export class FilterAliceRoutePipe implements PipeTransform {

  transform(value: any, term: any): any {
  	console.log(term);
    if (term === undefined){
    	return value;
    }else if(term ==""){
      return  null;
    }else{
      return value.filter(function(data){
        return data.getRouteShortName().toString().toLowerCase().includes(term.toLowerCase());
      });
    }
      
  }

}
