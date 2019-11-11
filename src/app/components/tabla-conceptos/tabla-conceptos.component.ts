import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[tabla-conceptos]',
  templateUrl: './tabla-conceptos.component.html',
  styleUrls: ['./tabla-conceptos.component.scss']
})
export class TablaConceptosComponent implements OnInit {

  @Input() concepto;

  constructor() { }

  ngOnInit() {
  }

}
