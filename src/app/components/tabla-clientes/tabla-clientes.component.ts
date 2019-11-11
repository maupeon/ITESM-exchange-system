import { Component, OnInit,Input } from '@angular/core';
import {Grade} from '../../models/grade';

@Component({
  selector: '[tabla-clientes]',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit {

  @Input() grade;

  constructor() {}

  ngOnInit() {
    //console.log(this.grade);
  }

}
