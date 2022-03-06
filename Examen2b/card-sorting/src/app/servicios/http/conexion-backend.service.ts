import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {Sala} from "./interfaces/Sala";

@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService {

  constructor(
    private readonly clienteHttp: HttpClient
  ) { }

  obtenerIdSala(){
    const url = environment.backUrl + '/nuevaSala';
    return this.clienteHttp.get(url)
      .pipe(
        map(
          (elemento) => {
            return elemento as {idSala:string}
          }
        )
      );
  }

  comprobarSala(idSala:string){
    const url = environment.backUrl + '/'+idSala+'/verificar'
    return this.clienteHttp.get(url)
      .pipe(
        map(
          (elemento) => {
            return elemento as {validez:boolean}
          }
        )
      )
  }

  crearSala(sala:Sala){
    const url = environment.backUrl + '/crearSala';
    return this.clienteHttp
      .post(url,sala)
  }

  consultarSala(idSala:string){
    const url = environment.backUrl + '/consultarSala/' + idSala;
    return this.clienteHttp.get<{sala?:Sala}>(url);
  }

  registrarUsuarioEnSala(idSala:string,nombreUsuario:string){
    const url = environment.backUrl + '/sala/'+idSala+'/unirUsuario';
    return this.clienteHttp.post(url,
      {nombreUsuario}
      )
  }
}
