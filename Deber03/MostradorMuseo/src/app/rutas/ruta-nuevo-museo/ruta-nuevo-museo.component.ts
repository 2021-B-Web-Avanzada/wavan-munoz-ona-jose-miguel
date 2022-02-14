import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Museo} from "../../servicios/http/interfaces/Museo";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-nuevo-museo',
  templateUrl: './ruta-nuevo-museo.component.html',
  styleUrls: ['./ruta-nuevo-museo.component.scss']
})
export class RutaNuevoMuseoComponent implements OnInit {
  formGroup?: FormGroup;
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly apiService :ConexionBackendService,
    private errorBar:MatSnackBar,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.prepararFormulario()
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder.group({
      idMuseo: new FormControl('',[
        Validators.required
      ]),
      nombre: new FormControl('',[
        Validators.required
      ]),
      direccion: new FormControl('',[
        Validators.required
      ]),
      horaApertura: new FormControl('' ,[
        Validators.required,
        Validators.min(0),
        Validators.max(23)
      ]),
      costoEntrada: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ])
    });
  }

  obtenerObjeto() {
    if (this.formGroup) {
      const identificador = this.formGroup.get('idMuseo');
      const nombreMuseo = this.formGroup.get('nombre');
      const direccion = this.formGroup.get('direccion');
      const hora = this.formGroup.get('horaApertura');
      const costo = this.formGroup.get('costoEntrada');
      if (identificador && nombreMuseo && direccion && hora && costo) {
        const museo: Museo = {
          id: identificador.value,
          direccion: direccion.value,
          nombre: nombreMuseo.value,
          horaApertura: +hora.value,
          costoEntrada: +costo.value
        }
        return museo;
      }
    }
    return undefined;
  }

  enviarDatos(){
    const informacionMuseo = this.obtenerObjeto();
    if(informacionMuseo){
      const creacion$ = this.apiService.crearMuseo(informacionMuseo);
      creacion$.subscribe({
          next: (dato) => {
            this.router.navigate(['museos']);
          },
          error: (err) =>{
            this.errorBar.open('Error: Museo con id ya registrado', 'OK')
          }
        }
      );
    }
  }
}
