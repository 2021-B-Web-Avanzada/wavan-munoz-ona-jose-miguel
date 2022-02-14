import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaNuevoMuseoComponent } from './rutas/ruta-nuevo-museo/ruta-nuevo-museo.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RutaEditarMuseoComponent } from './rutas/ruta-editar-museo/ruta-editar-museo.component';
import { RutaNuevaObraComponent } from './rutas/ruta-nueva-obra/ruta-nueva-obra.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { RutaObrasMuseoComponent } from './rutas/ruta-obras-museo/ruta-obras-museo.component';
import { RutaEditarObraComponent } from './rutas/ruta-editar-obra/ruta-editar-obra.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaNuevoMuseoComponent,
    RutaEditarMuseoComponent,
    RutaNuevaObraComponent,
    RutaObrasMuseoComponent,
    RutaEditarObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
