import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() login = new EventEmitter<string>();

  onLogin(usuario: string) {
    this.login.emit(usuario);
  }

}
