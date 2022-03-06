import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {ConexionBackendService} from "../http/conexion-backend.service";
import {map, Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PaginaCreadaGuard implements CanActivate{
  constructor(
    private readonly apiService:ConexionBackendService,
    private readonly enrutador:Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const parametro = route.params['idJuego'];
    return this.apiService.comprobarSala(parametro)
      .pipe(
        map((resultado)=>{
          if(!resultado.validez){
            this.enrutador.navigate(['/inicio']);
          }
          return resultado.validez
        })
      )
  }
}
