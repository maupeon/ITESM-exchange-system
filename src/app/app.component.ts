import { Component, Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Teacher } from './models/teacher';
import { AuthGuard } from './guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'web-application';
  public activeLang = 'es';
  public changeCurrency;
  isCollapsed:boolean;
  currentUser: Teacher;

  constructor( private translate: TranslateService,
  private authenticationService: AuthenticationService){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    	this.translate.setDefaultLang(this.activeLang);
  	}

  receiveCollapse($event:any){
    this.isCollapsed = $event;
    console.log(this.isCollapsed);
  }

  public cambiarLenguaje($event:any) {
    this.activeLang = $event;
    this.translate.use($event);
  }

  public cambiarCurrency($event:any) {
    this.changeCurrency = $event;
    console.log(this.changeCurrency);
  }



}
