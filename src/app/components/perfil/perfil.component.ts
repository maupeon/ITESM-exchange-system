import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../models/teacher';
import {Router, ActivatedRoute} from '@angular/router';
import {TeachersService}  from '../../services/teachers.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilModel:Teacher;
  teacher:Teacher[];
  submitted = false;

  mail = JSON.parse(localStorage.getItem('currentUser')).mail;

  constructor(public teachersService:TeachersService) {

    this.perfilModel = new Teacher();

  }

  onSubmit() {
    this.submitted = true;
    this.teachersService.updateTeacher(this.perfilModel._id,this.perfilModel).subscribe(teacher => console.log(teacher));
    console.log(this.perfilModel);

  }

  ngOnInit() {
    
    this.teachersService.getTeacherById(this.mail).subscribe((data: {}) => {
      
      if(data != null)
      {
        this.perfilModel = data;
        
      }
      
    });
    

  }

}
