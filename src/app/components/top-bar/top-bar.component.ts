import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Empresa} from '../../models/empresa';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Input() currentUser:Empresa;
  public activeLang:string;
  isCollapsed = false;
  username:string;

  @Output() Collapsing = new EventEmitter<boolean>();
  @Output() TranslateEvent = new EventEmitter<string>();

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService){

        this.username = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.username);
  	}

  ngOnInit() {
  }

  Collapse(){
    this.isCollapsed = !this.isCollapsed;
    this.Collapsing.emit(this.isCollapsed);
  }

  Lenguaje(lang) {
    this.activeLang = lang;
    this.TranslateEvent.emit(this.activeLang);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }


}
