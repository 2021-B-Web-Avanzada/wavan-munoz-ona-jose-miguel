import { Component, OnInit } from '@angular/core';
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {Museo} from "../../servicios/http/interfaces/Museo";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {
  listaMuseos: Museo[] = []
  terminoBusqueda:string = '';
  constructor(
    private readonly apiService :ConexionBackendService,
    private readonly activatedRoute:ActivatedRoute,
    private readonly router:Router,
    private dialogoError: MatSnackBar
  ) { }

  ngOnInit(): void {
    const queryParams$ = this.activatedRoute
      .queryParams
    queryParams$.subscribe({
      next: (parametros) =>{
        this.terminoBusqueda = parametros['nombre'];
        this.cargarMuseos()
      }
    }
    )
  }

  cargarMuseos(){
    this.apiService.listarMuseos(this.terminoBusqueda)
      .subscribe({
        next: (values)=>{
          console.log(values)
          this.listaMuseos = values
        }
      })
  }

  cambiarUrl(){
    this.router
      .navigate(
        ['/museos'],
        {
          queryParams: {
            nombre: this.terminoBusqueda
          }
        }
      )
  }

  editarMuseo(id:string){
    this.router
      .navigate(['/museos',id,'editar'])
  }

  eliminarMuseo(museo:Museo){
    this.apiService.eliminarMuseo(museo.id)
      .subscribe(
        {
          next: (info) => {
            const indice = this.listaMuseos.indexOf(museo);
            this.listaMuseos.splice(indice,1);
          },
          error: (err) =>{
            this.dialogoError.open('Ha existido un error, intente nuevamente',
                                    'Ok')
          }
        }
      )
  }

  verObrasMuseo(idMuseo:string){
    this.router
      .navigate(['/museos',idMuseo,'obras'])
  }
}
