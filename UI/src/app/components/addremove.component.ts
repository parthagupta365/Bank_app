import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';



@Component({
    moduleId:module.id,
  selector: 'add-remove',
  templateUrl: './addremove.component.html',
  
})
export class AddremoveComponent {
account_num : number;
benusername : string;
ben_acct : number;
re_account_num : number;
re_benusername : string;
constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService){
    
}
  addben(event:Event){
      event.preventDefault();
    
  this.acctservice.addBen(this.account_num,this.benusername,this.ben_acct)
   .subscribe( accts => {
     console.log(accts);
     
     this._flashMessagesService.show('Beneficiary added successfully', { cssClass: 'alert-success', timeout: 10000 });
    this.account_num = null;
     this.ben_acct =null;
     this.benusername ="";
      
    });
  }

  removeben(event:Event){
      event.preventDefault();
    
  this.acctservice.removeBen(this.re_account_num,this.re_benusername)
   .subscribe( accts => {
     console.log(accts);
     
     this._flashMessagesService.show('Beneficiary removed successfully', { cssClass: 'alert-success', timeout: 10000 });
    this.re_account_num = null;
     this.re_benusername ="";
     
      
    });
  }
}