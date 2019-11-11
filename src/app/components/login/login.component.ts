import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    rfc;
    contrasena;

  public activeLang:string;

  @Output() TranslateEvent = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService){
      localStorage.getItem('currentUser')
    }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Lenguaje(lang) {
    this.activeLang = lang;
    this.TranslateEvent.emit(this.activeLang);
  }

  onSubmit() {
      this.submitted = true;
      this.loading = true;
      console.log(""+this.rfc +" " +this.contrasena);
      this.authenticationService.login(this.rfc, this.contrasena)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
                  console.log("Entro")
              });
  }

}
