import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaJuegoComponent} from "./rutas/ruta-juego/ruta-juego.component";
import {PaginaCreadaGuard} from "./servicios/guardas/pagina-creada.guard";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'juego/:idJuego/:nombreUsuario',
    component: RutaJuegoComponent,
    canActivate: [PaginaCreadaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
