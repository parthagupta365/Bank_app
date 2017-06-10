import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import {CreateacctComponent} from './components/createacct.component';
import {GetbalComponent} from './components/getbal.component';
import {GetstatementComponent} from './components/getstatement.component';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent,CreateacctComponent,GetbalComponent,GetstatementComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule,AppRoutingModule,FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
