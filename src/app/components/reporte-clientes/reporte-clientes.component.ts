import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ClassesService}  from '../../services/classes.service';
import {WeeksService}  from '../../services/weeks.service';
import { HttpClient } from '@angular/common/http';
import {Class} from '../../models/class';
import {Week} from '../../models/week';
import {Grade} from '../../models/grade';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss'],
  providers: [ClassesService,WeeksService]
})
export class ReporteClientesComponent implements OnInit {

  fileContent: any;
  sub;
  id:string;
  weeks;
  current_week;
  current_grades;
  week_option:number;

  //Models
  class:Class;
  week_model:Week;
  grade_model:Grade;

  //Arrays
  weeks_number =[];
  grades = [];
  //clientes: Array<string>;
  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

 
  constructor(private _Activatedroute:ActivatedRoute,classesService:ClassesService,public weeksService:WeeksService) {

    this.class = new Class();
    this.week_model = new Week();
    this.grade_model = new Grade();

    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    classesService.getClass(this.id).subscribe((data: {}) => {

        this.class = data;
        console.log(data);
    
    });

    weeksService.getAllWeeks(this.id).subscribe((data: {}) => {
       this.weeks = data;

       console.log(data);

       for(var i=0; i<this.weeks.length; i++){
         this.weeks_number.push(i+1);
       }

    });

    

  }

  ngOnInit() {
  
  }

  public selectWeek():void
  {
    this.current_week = this.weeks[this.week_option-1];
    this.current_grades = this.current_week.grades;
  }

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    var grades_array: [string];
    var individual_grade;
    var gm = this.grade_model;
    var wm = this.week_model;
    var _id = this.id;
    var service = this.weeksService;
    var weeks;
    
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
      
      grades_array = self.fileContent.split("\n");

      
      wm.clase = _id;

      wm.grades = new Array<Grade>();
      weeks = new Array(); 

      
      
      for(var i=0;i<grades_array.length; i++)
      {
        individual_grade = grades_array[i].split(" ");

        
        gm.student_id = individual_grade[0];
        gm.academic_grade = individual_grade[1];
        gm.team_work_grade = individual_grade[2];
        gm.communication_grade = individual_grade[3];
        
        wm.grades.push(gm);

        gm = new Grade();

        
      }
      

      service.addWeek(wm).subscribe(week => weeks.push(week));

    }
    fileReader.readAsText(file);

  }


}
