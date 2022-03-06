import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import { CartaComponent } from './componentes/carta/carta.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { ModalNuevaSalaComponent } from './componentes/modal-nueva-sala/modal-nueva-sala.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import { ModalUnirseSalaComponent } from './componentes/modal-unirse-sala/modal-unirse-sala.component';
import { RutaJuegoComponent } from './rutas/ruta-juego/ruta-juego.component';
import {SocketIoModule} from "ngx-socket-io";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    CartaComponent,
    ModalNuevaSalaComponent,
    ModalUnirseSalaComponent,
    RutaJuegoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    SocketIoModule.forRoot({
      url:'ws://localhost:8080',
      options: {}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
