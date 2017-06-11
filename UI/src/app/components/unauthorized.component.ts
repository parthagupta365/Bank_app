import { Component } from '@angular/core';
import {AcctService} from '../services/acct.service';

@Component({
    moduleId:module.id,
    selector:'unauthorized',
  template: `<h2>Unauthorized access</h2>`
})
export class UnauthorizedComponent {
  constructor(

  private acctservice: AcctService
) {}
}