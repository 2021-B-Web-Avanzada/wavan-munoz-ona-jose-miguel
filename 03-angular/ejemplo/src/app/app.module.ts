import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbbidenComponent } from './rutas/ruta-forbbiden/ruta-forbbiden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {RutaReporteComponent} from "./modulos/modulo-inventario/rutas/ruta-reporte/ruta-reporte.component";
import {RouterModule} from "@angular/router";
import {BannerImagenesComponent} from "./Componentes/banner-imagenes/banner-imagenes/banner-imagenes.component";
import {BannerImagenesModule} from "./Componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbbidenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent
  ],
  //módulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BannerImagenesModule, //esto en el app.module
    HttpClientModule,
    FormsModule
  ],
  //servicios
  providers: [
    AuthService,
    EstaLogueadoGuard,
    EsAdministradorGuard
  ],
  //componente principal (aqui es donde empieza toodo)
  bootstrap: [AppComponent]
})
export class AppModule { }
