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
  title = 'myapp';
  constructor(private sas:SampleService){}
  ss(){
    this.sas.getProfile();
    this.name= this.sas.name;
  }

}
