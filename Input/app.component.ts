import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1;
  num2;
  parentproperty = 'parent property value';
  result: number;
addition() {this.result = Number(this.num1) + Number(this.num2); }


  submit() {
    alert('welcome');
  }
}
