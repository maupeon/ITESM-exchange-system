import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Empresa} from '../../models/empresa';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    @Input() collapseMessage: boolean;
    @Input() currentUser:Empresa;
    isCollapsed: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.isCollapsed = this.collapseMessage;
  }

  hidden = false;

  Click($event:any){
    this.hidden = ($event);
    console.log("click", $event);
  }

}
