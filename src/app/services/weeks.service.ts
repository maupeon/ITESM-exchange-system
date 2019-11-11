import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeeksService {
  endpoint = 'http://localhost:3000/weeks';
	 httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json',

 	 })
	};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllWeeks(id): Observable<any>{
    return this.http.get(this.endpoint + '?' + 'filter={"where":{"clase":"'+id+'"}}').pipe(
    map(this.extractData));
  }

  addWeek(week): Observable<any>{
    console.log(week);
    return this.http.post<any>(this.endpoint + '/', JSON.stringify(week), this.httpOptions).pipe(
      tap((week) => console.log(`added week`)),
      catchError(this.handleError<any>('addweek'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
