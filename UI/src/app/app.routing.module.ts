import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {CreateacctComponent} from './components/createacct.component';


const appRoutes: Routes = [
  { path: 'create-acct', component: CreateacctComponent },
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