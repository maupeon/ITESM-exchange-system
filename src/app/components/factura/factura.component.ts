import { Component, OnInit,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FacturasService}  from '../../services/facturas.service';
import {MonedaService}  from '../../services/moneda.service';
import {Factura} from '../../models/factura'
import {Concepto} from '../../models/concepto';

@Component({
  selector: 'factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {

  facturaModel:Factura;
  conceptos: Concepto[];
  facturas;
  id:string;
  sub;
  currencyStatus;


  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router, facturasService:FacturasService,public monedaService:MonedaService) {

                 this.sub=this._Activatedroute.paramMap.subscribe(params => {
		             console.log(params);
		             this.id = params.get('id');
		     	   });

             this.facturaModel = new Factura();
             this.conceptos = new Array();

             facturasService.getFacturaById(this.id).subscribe((data: any) => {
               console.log(data);
               this.facturaModel = data;
               this.conceptos = this.facturaModel.concepto;
               this.currencyStatus = "EUR";

             });

   }

   moneda(currency:string){
     console.log(this.facturaModel.impuesto);
     this.monedaService.getMoneda().subscribe((data2:any) => {
       if(this.currencyStatus == "EUR" && currency != "EUR"){
         this.facturaModel.impuesto = Math.round(this.facturaModel.impuesto*(data2.rates[currency]));
         this.facturaModel.total = Math.round(this.facturaModel.total*(data2.rates[currency]));
         this.currencyStatus = currency;


       }else if(this.currencyStatus == "MXN" && currency != "MXN" && currency != "USD"){
         this.facturaModel.impuesto = Math.round(this.facturaModel.impuesto/(data2.rates["MXN"]));
         this.facturaModel.total = Math.round(this.facturaModel.total/(data2.rates["MXN"]));


         this.currencyStatus = currency;

       }else if(this.currencyStatus == "MXN" && currency != "MXN" && currency != "EUR"){
         this.facturaModel.impuesto = Math.round((this.facturaModel.impuesto/(data2.rates["MXN"]))*(data2.rates[currency]));
         this.facturaModel.total = Math.round((this.facturaModel.total/(data2.rates["MXN"]))*(data2.rates[currency]));

         this.currencyStatus = currency;

       }else if(this.currencyStatus == "USD" && currency != "USD" && currency != "MXN"){
         this.facturaModel.impuesto = Math.round(this.facturaModel.impuesto/(data2.rates["USD"]));
         this.facturaModel.total = Math.round(this.facturaModel.total/(data2.rates["USD"]));
         this.currencyStatus = currency;

       }else if(this.currencyStatus == "USD" && currency != "USD" && currency != "EUR"){
         this.facturaModel.impuesto = Math.round((this.facturaModel.impuesto/(data2.rates["USD"]))*(data2.rates[currency]));
         this.facturaModel.total = Math.round((this.facturaModel.total/(data2.rates["USD"]))*(data2.rates[currency]));
         this.currencyStatus = currency;

       }

     });

   }


  ngOnInit() {
  }

}
