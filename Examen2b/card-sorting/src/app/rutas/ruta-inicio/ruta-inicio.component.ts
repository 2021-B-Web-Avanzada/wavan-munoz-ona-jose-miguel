import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalNuevaSalaComponent} from "../../componentes/modal-nueva-sala/modal-nueva-sala.component";


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
    public dialogo: MatDialog
  ) { }

  ngOnInit(): void {
  }

  unirseASala(){}

  crearSalaNueva(){
    this.dialogo.open(
      ModalNuevaSalaComponent,{
        height: "55vh",
        width: "40vw"
      }
    )
  }
}


