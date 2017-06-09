import { Component } from '@angular/core';
import {AcctService} from './services/acct.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AcctService]
})
export class AppComponent {
  title = 'app';
}
