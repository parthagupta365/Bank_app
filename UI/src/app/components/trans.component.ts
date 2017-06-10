import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';



@Component({
    moduleId:module.id,
  selector: 'trans-acct',
  templateUrl: './trans.component.html',
  
})
export class TransComponent {

          from_account_num: number;
          to_account_num:number;
          trans_type: string;
          trans_date: Date;
          currency: string;
          amount: number;
constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService){
    
}
add_trans(event:Event){
      event.preventDefault();
    var newTrans = {
      from_account_num: this.from_account_num,
          to_account_num: this.to_account_num,
          trans_type: this.trans_type,
          trans_date: this.trans_date,
          currency: this.currency,
          amount: this.amount
    }
  this.acctservice.addTrans(newTrans)
   .subscribe( trans => {
     console.log(trans);
     
     this._flashMessagesService.show('Transaction created successfully', { cssClass: 'alert-success', timeout: 10000 });
    this.from_account_num = null;
          this.to_account_num = null;
          this.trans_type = "";
          this.trans_date = null;
          this.currency = "";
          this.amount = null;
    });
  }
}