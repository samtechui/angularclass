import {Component, OnInit} from '@angular/core';
import {SampleService} from './sample.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SampleService]
})
export class AppComponent {
 name:string;
 name1:string='';
 std:any[];
  title = 'myapp';
  constructor(private sas:SampleService){}
  ss() {
    this.sas.getProfile();
    this.name = this.sas.name;
    this.std = this.sas.students;
    console.log(this.std);
  }
  keyupevent(eventsasasas:any){
    this.name1=eventsasasas.target.value;
    console.log(this.name1);
  }
  postd(){
    this.sas.postProfile();
  }

}
