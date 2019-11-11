import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  endpoint = 'https://api-itesm.azurewebsites.net/teachers';
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

  getTeacherById(mail): Observable<any>{
      return this.http.get(this.endpoint + '/' + mail).pipe(
      map(this.extractData));
  }

  updateTeacher (mail, teacher): Observable<any> {
    return this.http.put(this.endpoint + '/' + mail, JSON.stringify(teacher), this.httpOptions).pipe(
      tap(_ => console.log(`updated teacher`)),
      catchError(this.handleError<any>('updateTeacher'))
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
