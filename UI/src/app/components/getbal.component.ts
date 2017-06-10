import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';
import {Acctspec} from '../acctspec';



@Component({
    moduleId:module.id,
  selector: 'get-bal',
  templateUrl: './getbal.component.html',
  
})
export class GetbalComponent {
account_num : number;
acct:Acctspec[];
constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService){
    
}
  get_balance(event:Event){
      event.preventDefault();
    var newAcct = {
      account_num:this.account_num,
          
    }
  this.acctservice.getBal(this.account_num)
   .subscribe( bal => {
     console.log(JSON.stringify(bal));
     this.acct =[];
     this.acct=bal;
     console.log(this.acct);
     //this._flashMessagesService.show('Account created successfully', { cssClass: 'alert-success', timeout: 10000 });
    this.account_num = null;
     
    });
  }
}