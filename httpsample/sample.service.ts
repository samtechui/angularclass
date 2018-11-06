import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  name:string;
  age:number;
  found:boolean;
  constructor(private httpClient:HttpClient){}
  getProfile(){
    this.httpClient.get('src/data.json')
      .subscribe(
        (data:any[])=>{
          this.name = data[0].name;
          this.age = data[0].age;
          console.log(data);
        }
      );
  }
}
