import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  userDetails = [];

  onuserCreated(userData: { userName: string, userPwd: string }) {
    this.userDetails.push({
      userName: userData.userName,
      userPwd: userData.userPwd
    });
    console.log('userdata', userData);
  }

}
