import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  endpoint = 'http://localhost:3000/clientes';
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

  getClienteById(rfc): Observable<any>{
    return this.http.get(
      this.endpoint + '?' +
      'filter={"where":{"rfc":"'+rfc+'"},"fields":{"rfc":true,"nombre":true,"apellido":true,"direccion":true,"correo":true}}').pipe(
    map(this.extractData));
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

  getClientesByEmpresa()
  {
    return[
      {
        rfc:"VCD2p4f3g",
        nombre:"Juan",
        apellido:"Pérez",
        direccion:"México"

      },
      {
        rfc:"FCDf35g4t",
        nombre:"Maria",
        apellido:"Ortiz",
        direccion:"México"

      },
      {
        rfc:"PLKncoejv3",
        nombre:"Jorge",
        apellido:"Vela",
        direccion:"México"

      }

    ];

  }
}
