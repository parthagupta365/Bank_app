import {Http,Headers } from '@angular/http';
import {Injectable} from  '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()

export class AcctService{
    
    constructor(private http: Http){
    console.log('AcctService initialized...');
    
}

    addAcct(newAcct){
        console.log(newAcct);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/home/create_acct',JSON.stringify(newAcct),{headers: headers})
        .map(res => res.json());
    }
    getBal(newAcct){
        return this.http.get('http://localhost:3000/home/balanceinfo/'+newAcct).map( res => res.json());
    }
    getStatement(newAcct,fromdt,todt){
        return this.http.get('http://localhost:3000/home/statement/'+newAcct+'/'+fromdt+'/'+todt).map( res => res.json());
    }
    addBen(account_num,benusername,ben_acctname){
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/home/addbeneficiary/'+account_num+'/'+benusername+'/'+ben_acctname,{headers: headers})
        .map(res => res.json());
    }
    removeBen(account_num,benusername){
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/home/removebeneficiary/'+account_num+'/'+benusername,{headers: headers})
        .map(res => res.json());
    }
    addTrans(newTrans){
       console.log(newTrans);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/home/transfer',JSON.stringify(newTrans),{headers: headers})
        .map(res => res.json()); 
    }

    login(credentials) {
    this.http.post('https://localhost:3000/home/login', credentials)
      .map(res => res.json())
      .subscribe(
        
        data => localStorage.setItem('id_token', data.token),
        error => console.log(error)
      );
  }
  loggedIn() {
  return tokenNotExpired();
}
logout() {
    localStorage.removeItem('id_token'); 
  }
}