import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model:any = {};
  title = 'myapp';
  onSubmit() {
    alert(JSON.stringify(this.model));
  }

}
