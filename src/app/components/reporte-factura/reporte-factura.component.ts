import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TeachersService}  from '../../services/teachers.service';
import {ClassesService}  from '../../services/classes.service';
import {Teacher} from '../../models/teacher';

@Component({
  selector: 'reporte-factura',
  templateUrl: './reporte-factura.component.html',
  styleUrls: ['./reporte-factura.component.scss'],
  providers: [TeachersService]
})
export class ReporteFacturaComponent implements OnInit {

  perfil:Teacher;
  classes = [];
  //facturas;
  mail = JSON.parse(localStorage.getItem('currentUser')).mail;

  constructor(teachersService: TeachersService,classesService:ClassesService) {
    
    this.perfil = new Teacher();
    teachersService.getTeacherById(this.mail).subscribe((data: {}) => {
      
      if(data != null)
      {
        this.perfil = data;
        for(var i=0;i<this.perfil.classes.length;i++)
        {
          classesService.getClass(this.perfil.classes[i]).subscribe((data: {}) => {
      
            if(data != null)
            {
              this.classes.push(data);
            }
            
          });

        }
        
      }
    });
    
  }

  ngOnInit() {
  }

}
