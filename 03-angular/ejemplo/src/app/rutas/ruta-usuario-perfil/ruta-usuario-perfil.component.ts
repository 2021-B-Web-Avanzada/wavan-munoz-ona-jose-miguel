import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserJPHServiceService} from "../../servicios/http/user-jphservice.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ModalEjemploComponent} from "../../Componentes/modales/modal-ejemplo/modal-ejemplo.component";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  usuarioActual?:UserJphInterface;
  formGroup?:FormGroup;
  valorKnob = 30;
  items=[
    {
      label:"update",
      icon: "pi pi-refresh",
      command: () =>{
        console.log("hola")
      }
    },
    {label:"setup",icon:"pi pi-cog", routerLink:['/setup']}
  ];

  model = {
    left:true,
    middle:false,
    right:true
  };

  constructor(
    private readonly activatedRoute:ActivatedRoute,
    private readonly userJPHService:UserJPHServiceService,
    private readonly formBuilder:FormBuilder,
    private readonly router:Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params;

    parametroRuta$
      .subscribe(
        {
          next: (parametrosRuta) => {
            console.log(parametrosRuta);
            this.idUsuario = +parametrosRuta['idUsuario'];
            this.buscarUsuario(this.idUsuario);
          }
        }
      )
  }

  buscarUsuario(id:number){
    const buscarUsuarioPorId$ = this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) => {
            this.usuarioActual = data;
            this.prepararFormulario();
          },
          error: (error) => {
            console.error(error);
          }
        }
      )
  }
  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group({
        email: new FormControl({
            value: this.usuarioActual ? this.usuarioActual.email : ''  ,
            disabled:false
          },
          [
            Validators.required,
            Validators.minLength(3)
          ]),
        esAdministrador: new FormControl(true)
      });
    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe(
      {
        next: (valor) => {
          console.log(valor, this.formGroup)
          if(this.formGroup?.valid){
            console.log('YUPI')
          } else {
            console.log(':(')
          }
        }
      });
  }

  prepararObjeto(){
    if(this.formGroup){
      const email = this.formGroup.get('email')
      if (email){
        return {
          email: email.value
        }
      }
    }
    return {
      email: ''
    }
  }

  actualizarUsuairo(){
    if(this.usuarioActual){
      const valoresActualizar = this.prepararObjeto();
      const actualizar$ = this.userJPHService
        .actualizarPorId(
          this.usuarioActual.id,
          valoresActualizar
        );
      actualizar$
        .subscribe({
          next: (datos)=>{
            console.log({datos});
            const url = ['/app','usuario'];
            this.router.navigate(url);
          },
          error: (error) => {
            console.error({error})
          }
        });
    }
  }

  abrirDialogo(){
    const referenciaDialogo = this.dialog.open(
      ModalEjemploComponent,
      {
        data: {
          animal: 'Oso'
        }
      }
    );

    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe({
          next(datos){
            console.log(datos);
          }
        }
      )
  }

  guardar(){
    console.log("GUARDAR");
  }
}
