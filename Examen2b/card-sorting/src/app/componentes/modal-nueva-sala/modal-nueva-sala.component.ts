import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {environment} from "../../../environments/environment";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-nueva-sala',
  templateUrl: './modal-nueva-sala.component.html',
  styleUrls: ['./modal-nueva-sala.component.scss']
})
export class ModalNuevaSalaComponent implements OnInit {
  cartas = environment.opcionesCartas;
  identificadorSala:string ='';
  formGroup = this.fb.group({
    nombreUsuario: new FormControl('',[
      Validators.required
    ]),
    listaCartas: new FormControl('', [
      Validators.required
    ])
  });
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private readonly api:ConexionBackendService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.api.obtenerIdSala()
      .subscribe(
        {
          next: (elemento) =>{
            this.identificadorSala = elemento.idSala;
          }
        }
      )
  }

}
