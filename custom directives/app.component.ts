import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements onchange(){
  ngOnChanges(changes: SimpleChanges) {
    alert('on change');
  }


