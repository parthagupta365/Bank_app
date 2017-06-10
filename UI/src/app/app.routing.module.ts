import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {CreateacctComponent} from './components/createacct.component';
import {GetbalComponent} from './components/getbal.component';
import {GetstatementComponent} from './components/getstatement.component';

const appRoutes: Routes = [
  { path: 'create-acct', component: CreateacctComponent },
  { path: 'get-bal', component: GetbalComponent },
  { path: 'get-statement', component: GetstatementComponent},
  //{ path: '',   redirectTo: '/cart', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
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