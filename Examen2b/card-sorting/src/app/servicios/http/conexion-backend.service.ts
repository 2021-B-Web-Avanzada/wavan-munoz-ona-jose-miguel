import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";

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
}
