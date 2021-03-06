import { Component, OnInit } from '@angular/core';
import {UserJPHServiceService} from "../../servicios/http/user-jphservice.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

 arreglo: UserJphInterface[] = [];
 buscarUsuario = '';

  constructor(
    private readonly userJphService:UserJPHServiceService,
    private readonly router:Router,
    private readonly activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$
      .subscribe( //aqui empieza a ejecutarse el observable
        {
          next: (queryParams)=>{ //try
            this.buscarUsuario = queryParams['name']
            this.buscarUsuarios();
            },
          error: () => {
            //catch
          },
          complete: () => {
            //finally
          }
        }
      )
    //this.buscarUsuarios();
  }

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app', 'usuario'], //armamos la URL /app/usuario,
        {
          queryParams: {
            name: this.buscarUsuario //?name=Miguel
          }
        }
      );
  }

  buscarUsuarios() {
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })
      .subscribe({
          next: (datos) => {
            //esto es como el .then de promesa
            this.arreglo = datos;
            this.buscarUsuario = '';
            console.log({datos})
          },
          error: (error) => {
            //esto es como un catch
            console.error({error})
          }
        }
      )
  }

  gestionarUsuario(idUsuario:number){
    const ruta = ['/app','usuario',idUsuario];
    this.router.navigate(ruta);
  }
}
