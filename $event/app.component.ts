import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  values = '';

  onKey(vals) { // without type info
    this.values += vals.target.value + ' | ';
  }
}
