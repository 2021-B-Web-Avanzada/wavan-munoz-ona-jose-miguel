import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Museo} from "./interfaces/Museo";
import {map, Observable} from "rxjs";
import {Obra} from "./interfaces/Obra.";

@Injectable({
  providedIn: 'root'
})
export class ConexionBackendService{
  constructor(
    private readonly clienteHttp:HttpClient
  ) {
  }

  listarMuseos(nombre?:string):Observable<Museo[]>{
    const url = environment.apiUrl + '/museos';
    let parametrosConsulta = {};
    if (nombre){
      parametrosConsulta = {nombre};
    }
    return this.clienteHttp.get<Museo[]>(url, {
      params: parametrosConsulta
    })
  }

  crearMuseo(infoMuseo:Museo):Observable<Museo>{
    const url = environment.apiUrl + '/museo';
    return this.clienteHttp
      .post<Museo>(url,infoMuseo)
  }

  consultarMuseo(idMuseo:string):Observable<Museo>{
    const url = environment.apiUrl + '/museo/' + idMuseo;
    return this.clienteHttp
      .get<Museo>(url);
  }

  actualizarMuseo(museoEditado:Museo):Observable<Museo>{
    const url = environment.apiUrl + '/museo/' + museoEditado.id;
    return this.clienteHttp
      .put<Museo>(url, museoEditado);
  }

  eliminarMuseo(idMuseo:string):Observable<Museo>{
    const url = environment.apiUrl + '/museo/' + idMuseo;
    return this.clienteHttp
      .delete<Museo>(url)
  }

  crearObra(infoObra:Obra, idMuseo:string):Observable<Obra>{
    const url = environment.apiUrl + '/museo/' + idMuseo +'/obra';
    return this.clienteHttp
      .post<Obra>(url,
        infoObra)
  }

  listarObrasDeMuseo(idMuseo:string):Observable<Obra[]>{
    const url = environment.apiUrl + '/museo/'+ idMuseo + '/obras';
    return this.clienteHttp
      .get<Obra[]>(url);
  }

  eliminarObrasDeMuseo(idMuseo:string, idObra:string):Observable<Obra>{
    const url = environment.apiUrl + '/museo/' + idMuseo + '/obra/' + idObra;
    return this.clienteHttp
      .delete<Obra>(url);
  }

  actualizarObraMuseo(idMuseo:string,obraEditada:Obra):Observable<Obra>{
    const url = environment.apiUrl + '/museo/' + idMuseo + '/obra/' + obraEditada.id;
    return this.clienteHttp
      .put<Obra>(url,obraEditada);
  }

  consultarObra(idMuseo:string,idObra:string):Observable<Obra>{
    const url = environment.apiUrl + '/museo/' + idMuseo + '/obra/' + idObra;
    return this.clienteHttp
      .get<Obra>(url);
  }
}
