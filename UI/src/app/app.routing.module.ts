import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {CreateacctComponent} from './components/createacct.component';
import {GetbalComponent} from './components/getbal.component';
import {GetstatementComponent} from './components/getstatement.component';
import {AddremoveComponent} from './components/addremove.component';
import {TransComponent} from './components/trans.component';
import {LoginComponent} from './components/login.component';
import {UnauthorizedComponent} from './components/unauthorized.component';
import {AcctService} from './services/acct.service';
import { AuthGuard } from './authguard';

const appRoutes: Routes = [
  { path: 'create-acct', component: CreateacctComponent },
  { path: 'get-bal', component: GetbalComponent },
  { path: 'get-statement', component: GetstatementComponent},
  {path: 'add-remove', component: AddremoveComponent},
  {path: 'trans-acct', component: TransComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}