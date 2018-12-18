import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student from app component';
  name;
  heroes = [
    {name:'Windstorm',id:'101'},
    {name:'Bombasto',id:'102'},
    {name:'Magneta',id:'103'},
    {name:'Tornado',id:'104'}
    ];
  submit() {
    alert('am from parent alert');
  }
}
