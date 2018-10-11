import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
transform(valuesss: string){
  return valuesss.substr(0,4);
}
}
