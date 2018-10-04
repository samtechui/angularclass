import {Component, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputemail;
  inputpwd;


  @Output() userCreated = new EventEmitter<{ userName: string, userPwd: string }>();

  onUserCreate() {
    this.userCreated.emit({userName: this.inputemail, userPwd: this.inputpwd});

  }

}
