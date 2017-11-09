import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAliceLocation'
})
export class FilterAliceLocationPipe implements PipeTransform {

  transform(value: any, term: any): any {
  	console.log(term);
    if (term === undefined){
    	return value;
    }else if(term ==""){
      return  null;
    }else{
      return value.filter(function(data){
        return data.getRouteLongName().toLowerCase().includes(term.toLowerCase());
      });
    }
      
  }

}
