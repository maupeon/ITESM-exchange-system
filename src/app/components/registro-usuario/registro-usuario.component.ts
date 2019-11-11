import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  public activeLang:string;

  @Output() TranslateEvent = new EventEmitter<string>();

  constructor(){
  	}

  ngOnInit() {

  }

  Lenguaje(lang) {
    this.activeLang = lang;
    this.TranslateEvent.emit(this.activeLang);
  }

}
