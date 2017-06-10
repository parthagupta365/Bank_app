import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';
interface Credentials {
  username: string,
  password: string
}

@Component({
    moduleId:module.id,
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  credentials: Credentials;

  constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService) {}

  onLogin(credentials) {
    this.acctservice.login(credentials);
  }
}