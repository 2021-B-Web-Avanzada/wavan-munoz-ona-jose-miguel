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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { ModalEjemploComponent } from './Componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import {SocketIoModule} from "ngx-socket-io";
import { RutaSalaComponent } from './rutas/ruta-sala/ruta-sala.component';

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
    RutaAppComponent,
    RutaUsuarioPerfilComponent,
    ModalEjemploComponent,
    RutaSalaComponent
  ],
  //m??dulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BannerImagenesModule, //esto en el app.module
    HttpClientModule,
    FormsModule, //esta es para los template forms
    ReactiveFormsModule,
    InputSwitchModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgbButtonsModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',
      options: {}
    })
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
