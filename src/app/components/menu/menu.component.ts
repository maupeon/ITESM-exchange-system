import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../models/empresa';
import {EmpresaService}  from '../../services/empresa.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [EmpresaService]
})
export class MenuComponent implements OnInit {

  empresaModel:Empresa;
  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(empresaService:EmpresaService) {

    this.empresaModel = new Empresa();
    empresaService.getEmpresaById(this.rfc).subscribe((empresa: {}) => {
      this.empresaModel = empresa
      console.log(this.empresaModel);
    });
  }

  ngOnInit() {
  }

}
