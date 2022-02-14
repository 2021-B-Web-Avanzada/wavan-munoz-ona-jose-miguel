import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Museo} from "../../servicios/http/interfaces/Museo";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ruta-editar-museo',
  templateUrl: './ruta-editar-museo.component.html',
  styleUrls: ['./ruta-editar-museo.component.scss']
})
export class RutaEditarMuseoComponent implements OnInit {
  formGroup?: FormGroup;
  idMuseo:string = '';
  museo?:Museo;
  constructor(
    private readonly rutaActual:ActivatedRoute,
    private readonly formBuilder:FormBuilder,
    private readonly apiService:ConexionBackendService,
    private readonly router:Router,
    private readonly errorBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    const parametrosRuta$ = this.rutaActual.params;
    parametrosRuta$.subscribe(
      {
        next: (parametros)=>{
          this.idMuseo = parametros['idMuseo'];
          this.consultarMuseo()
        }
      }
    )
  }

  prepararFormulario(){
    if(this.museo){
      this.formGroup = this.formBuilder.group({
        idMuseo: new FormControl({
          value: this.museo.id,
          disabled:true
        },[
          Validators.required
        ]),
        nombre: new FormControl({
          value: this.museo.nombre,
          disabled:false
        },[
          Validators.required
        ]),
        direccion: new FormControl({
          value: this.museo.direccion,
          disabled:false
        },[
          Validators.required
        ]),
        horaApertura: new FormControl({
          value: this.museo.horaApertura,
          disabled:false
        } ,[
          Validators.required,
          Validators.min(0),
          Validators.max(23)
        ]),
        costoEntrada: new FormControl({
          value: this.museo.costoEntrada,
          disabled:false
        }, [
          Validators.required,
          Validators.min(0)
        ])
      });
    }
  }

  obtenerObjeto(){
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
      const actualizacion$ = this.apiService.actualizarMuseo(informacionMuseo);
      actualizacion$.subscribe({
          next: (dato) => {
            this.router.navigate(['museos']);
          },
          error: (err) =>{
            this.errorBar.open('Ocurrio un error, intente nuevamente', 'OK')
          }
        }
      );
    }
  }

  consultarMuseo(){
    if(this.idMuseo){
      this.apiService.consultarMuseo(this.idMuseo)
        .subscribe(
          {
            next: (museoInfo) =>{
              this.museo = museoInfo;
              this.prepararFormulario();
            }
          }
        )
    }
  }
}
