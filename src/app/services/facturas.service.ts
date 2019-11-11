import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  endpoint = 'http://localhost:3000/facturas';
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

  getAllClasses(id): Observable<any> {
    return this.http.get(this.endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  getAllFacturas(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
	    map(this.extractData));
  }

  getFacturaById(id): Observable<any>{
    return this.http.get(this.endpoint + '/' + id).pipe(
    map(this.extractData));
  }

  getMyFacturas(rfc): Observable<any>{
    return this.http.get(this.endpoint + '?' + 'filter={"where":{"rfc_proveedor":"'+rfc+'"}}').pipe(
    map(this.extractData));
  }

  addFactura(factura): Observable<any>{
    console.log(factura);
    return this.http.post<any>(this.endpoint + '/', JSON.stringify(factura), this.httpOptions).pipe(
      tap((factura) => console.log(`added factura`)),
      catchError(this.handleError<any>('addFactura'))
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

    getFacturaStatus(){
      return[{
        exitosas: "424",
        pendientes: "120",
        canceladas: "50"

      }];
    }

    getMisFacturas(){
      return[{
        id:"1",
        proveedor: "Walmart",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 150,
        total: 34756,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn",
        estatus: "Exitosa"
    	},{
        id:"2",
        proveedor: "Superama",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 230,
        total: 12300,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn",
        estatus: "Exitosa"
    	},{
        id:"3",
        proveedor: "ITESM",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V.",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 320,
        total: 22000,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn",
        estatus: "Exitosa"
    	},{
        id:"4",
        proveedor: "ITESM2",
        cliente: "Fomento Económico Mexicano S.A.B. de C.V. 2",
        direccion_proveedor: "México",
        direccion_cliente: "México",
        rfc_Cliente: "Afkgneòari",
        rfc_proveedor: "BVoejgno",
        fecha: "12-03-18",
        concepto: ["CocaCola","Sprite"],
        cantidad: [200,100],
        precio_unitario: [5,5],
        importe: [1000,500],
        impuesto: 320,
        total: 22000,
        firmaDigital: "neijfbvnoejnbeo",
        selloDigital: "ñeiubnroutbn",
        estatus: "Exitosa"
    	}

    	];

    }

}
