import {Http,Headers } from '@angular/http';
import {Injectable} from  '@angular/core';
import 'rxjs/add/operator/map';


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
}