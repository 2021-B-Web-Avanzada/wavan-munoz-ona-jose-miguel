import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalNuevaSalaComponent} from "../../componentes/modal-nueva-sala/modal-nueva-sala.component";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {ModalUnirseSalaComponent} from "../../componentes/modal-unirse-sala/modal-unirse-sala.component";


@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  formGroup = this.fb.group({
    codigoSala: new FormControl('',
      [
        Validators.minLength(6),
        Validators.required
      ])
  })
  constructor(
    private fb: FormBuilder,
    public dialogo: MatDialog,
    private readonly apiService:ConexionBackendService
  ) { }

  ngOnInit(): void {
  }

  unirseASala(){
    const idSala = this.formGroup.get('codigoSala');
    if(idSala){
      this.apiService.comprobarSala(idSala.value)
        .subscribe({
          next: (elemento) => {
            if(elemento.validez){
              this.dialogo.open(
                ModalUnirseSalaComponent,
                {
                  height: "35vh",
                  width: "40vw",
                  data: {
                    idSala: idSala.value
                  }
                }
              )
            }
          }
        });
    }

  }

  crearSalaNueva(){
    this.dialogo.open(
      ModalNuevaSalaComponent,{
        height: "55vh",
        width: "40vw"
      }
    )
  }
}


