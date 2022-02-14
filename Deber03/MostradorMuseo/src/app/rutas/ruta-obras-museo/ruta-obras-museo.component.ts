import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {Obra} from "../../servicios/http/interfaces/Obra.";
import {Museo} from "../../servicios/http/interfaces/Museo";

@Component({
  selector: 'app-ruta-obras-museo',
  templateUrl: './ruta-obras-museo.component.html',
  styleUrls: ['./ruta-obras-museo.component.scss']
})
export class RutaObrasMuseoComponent implements OnInit {
  idMuseo:string = '';
  infoMuseo?:Museo;
  listaObras: Obra[] = [];
  constructor(
    private readonly rutaActual:ActivatedRoute,
    private readonly apiService:ConexionBackendService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const parametrosRuta$ = this.rutaActual.params;
    parametrosRuta$.subscribe({
      next: (parametros) => {
        this.idMuseo = parametros['idMuseo'];
        this.cargarObrasMuseo()
      }
    });
  }

  cargarObrasMuseo(){
    this.apiService.listarObrasDeMuseo(this.idMuseo)
      .subscribe({
        next: (listaObras) => {
          this.listaObras = listaObras;
          console.log(this.listaObras);
        }
      });
    this.apiService.consultarMuseo(this.idMuseo)
      .subscribe({
        next: (museo)=>{
          this.infoMuseo = museo;
        }
      });
  }

  editarObra(idObra:string){
    this.router.navigate(['/museos',this.idMuseo,'obra',idObra])
  }

  eliminarObra(obra:Obra){
    const indice = this.listaObras.indexOf(obra);
    this.apiService.eliminarObrasDeMuseo(this.idMuseo,obra.id)
      .subscribe({
        next: (datos) =>{
          this.listaObras.splice(indice,1);
        }
      });
  }

}
