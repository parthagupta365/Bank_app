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
}