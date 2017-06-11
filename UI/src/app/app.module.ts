import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import {CreateacctComponent} from './components/createacct.component';
import {GetbalComponent} from './components/getbal.component';
import {GetstatementComponent} from './components/getstatement.component';
import {AddremoveComponent} from './components/addremove.component';
import {TransComponent} from './components/trans.component';
import {LoginComponent} from './components/login.component';
import {UnauthorizedComponent} from './components/unauthorized.component';
import {AcctService} from './services/acct.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './authguard';

@NgModule({
  declarations: [
    AppComponent,CreateacctComponent,GetbalComponent,GetstatementComponent,AddremoveComponent,TransComponent,LoginComponent,UnauthorizedComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule,AppRoutingModule,FlashMessagesModule
  ],
  providers: [AuthGuard,AcctService],
  bootstrap: [AppComponent]
})
export class AppModule { }
