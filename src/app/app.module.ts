import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxAsideModule } from 'ngx-aside';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ReporteFacturaComponent } from './components/reporte-factura/reporte-factura.component';
import { ReporteClientesComponent } from './components/reporte-clientes/reporte-clientes.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { TablaFacturasComponent } from './components/tabla-facturas/tabla-facturas.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { FacturaComponent } from './components/factura/factura.component';
import { GenerarFacturaComponent } from './components/generar-factura/generar-factura.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TablaConceptosComponent } from './components/tabla-conceptos/tabla-conceptos.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor   } from './helpers/error.interceptor';


const routes: Routes = [
    {
        path: '',
        component: ReporteFacturaComponent,
        canActivate: [AuthGuard]

    },
    {
          path: 'login',
          component: LoginComponent
    }
    ,{
        path: 'reporte-clientes/:id',
        component: ReporteClientesComponent,
        canActivate: [AuthGuard]
    }
    ,{
        path: 'app-footer',
        component: FooterComponent,
        canActivate: [AuthGuard]
    },{
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuard]
      }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    ReporteFacturaComponent,
    ReporteClientesComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    RegistroClientesComponent,
    PerfilComponent,
    RegistroEmpresaComponent,
    TablaFacturasComponent,
    TablaClientesComponent,
    FacturaComponent,
    GenerarFacturaComponent,
    ChartPieComponent,
    RegistroUsuarioComponent,
    TablaConceptosComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserModule,
    ChartsModule,
    TooltipModule.forRoot(),
    NgxAsideModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    NgbModule
  ],
  exports:[RouterModule],
  providers: [CookieService,
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
