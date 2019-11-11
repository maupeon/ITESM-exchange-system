import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: '[tabla-facturas]',
  templateUrl: './tabla-facturas.component.html',
  styleUrls: ['./tabla-facturas.component.scss']
})
export class TablaFacturasComponent implements OnInit {

  @Input() class;

  constructor() {}

  ngOnInit() {
  }

}
