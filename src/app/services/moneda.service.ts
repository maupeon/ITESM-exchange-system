import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  endpoint = 'https://api.exchangeratesapi.io/latest';
	 httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json',

 	 })
	};

  constructor(private http: HttpClient) {
    
  }

  private extractData(res: Response) {
  let body = res;
  return body || { };
  }

  getMoneda(){
    return this.http.get(this.endpoint).pipe(
	    map(this.extractData));
  }


/*{
  "base": "EUR",
  "date": "2019-04-08",

}*/
}
