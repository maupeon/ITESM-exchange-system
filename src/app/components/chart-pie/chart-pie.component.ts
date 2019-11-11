import { Component, OnInit } from '@angular/core';
import {FacturasService} from '../../services/facturas.service';

@Component({
  selector: 'chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  public pieChartLabels = ['Exitosas','Pendientes','Canceladas'];
  public pieChartData=[];
  public pieChartType = 'pie';

  constructor(facturasService:FacturasService) {
    this.pieChartData.push(facturasService.getFacturaStatus()[0].exitosas);
    this.pieChartData.push(facturasService.getFacturaStatus()[0].pendientes);
    this.pieChartData.push(facturasService.getFacturaStatus()[0].canceladas);

  }

  ngOnInit() {
  }

}
