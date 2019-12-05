import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name:'bulk'
})

export class BulkPipe implements PipeTransform{
  transform(value:any, demo:any){
    return "Mr. "+value; 
  }

}