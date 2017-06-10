import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AcctService} from '../services/acct.service';
import {Transpec} from '../transpec';



@Component({
    moduleId:module.id,
  selector: 'get-statement',
  templateUrl: './getstatement.component.html',
  
})
export class GetstatementComponent {
account_num : number;
fromdt : Date;
todt : Date;
acctrans:Transpec[];
constructor(private acctservice: AcctService,private _flashMessagesService: FlashMessagesService){
    
}
  get_statement(event:Event){
      event.preventDefault();
    
      
  this.acctservice.getStatement(this.account_num,this.fromdt,this.todt)
   .subscribe( trans => {
     
     this.acctrans =[];
     this.acctrans=trans;
     console.log(trans);
       this.account_num = null;
       this.fromdt=null;
       this.todt=null;
     
    });
  }
}