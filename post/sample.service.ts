import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  students:any[];
  name:string;
  age:number;
  found:boolean;
  constructor(private httpClient:HttpClient){}
  getProfile(){
    this.httpClient.get('src/data.json')
      .subscribe(
        (data:any[])=>{
          this.students = data;
          console.log(this.students);
          this.age = data[0].age;
          console.log(data);
        }
      );
  }
  postProfile(){
    this.httpClient.post('https://my-json-server.typicode.com/samtechui/angularclass',
      {
        "id": "505",
        "name": "sampath",
        "age": "28"
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        },
        /*complete => {
          console.log("complete", complete);
        }*/
      );
  }
}
