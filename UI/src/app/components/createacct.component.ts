import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';



@Component({
    moduleId:module.id,
  selector: 'create-acct',
  templateUrl: './createacct.component.html',
  
})
export class CreateacctComponent {
account_num : number;
username : string;
password : String;
currency : String;
balance : Number;
constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService){
    
}
  account_register(event:Event){
      event.preventDefault();
    var newAcct = {
      account_num:this.account_num,
          username:this.username,
          passwordSalt:this.password,
          
          currency:this.currency,
          balance:this.balance
    }
  this.acctservice.addAcct(newAcct)
   .subscribe( accts => {
     console.log(accts);
     
     this._flashMessagesService.show('Account created successfully', { cssClass: 'alert-success', timeout: 10000 });
    this.account_num = null;
     this.balance =null;
     this.username ="";
     this.password = "";
     this.currency =""; 
    });
  }
}