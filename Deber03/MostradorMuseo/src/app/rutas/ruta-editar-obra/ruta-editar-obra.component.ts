import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Obra} from "../../servicios/http/interfaces/Obra.";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";

@Component({
  selector: 'app-ruta-editar-obra',
  templateUrl: './ruta-editar-obra.component.html',
  styleUrls: ['./ruta-editar-obra.component.scss']
})
export class RutaEditarObraComponent implements OnInit {
   idMuseo:string = '';
   idObra:string = '';
   obraEditable?:Obra;
  constructor(
    private readonly rutaActual:ActivatedRoute,
    private readonly apiService:ConexionBackendService
  ) { }

  ngOnInit(): void {
    const parametrosRuta$ = this.rutaActual.params;
    parametrosRuta$.subscribe({
      next: (parametros)=>{
        this.idMuseo = parametros['idMuseo'];
        this.idObra = parametros['idObra'];
        this.buscarObra()
      }
    })
  }

  buscarObra(){
    this.apiService.consultarObra(this.idMuseo,this.idObra)
      .subscribe({
        next: (obra) => {
          this.obraEditable = obra;
        }
      })
  }

}
