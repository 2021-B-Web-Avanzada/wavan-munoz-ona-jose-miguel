import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaNuevoMuseoComponent} from "./rutas/ruta-nuevo-museo/ruta-nuevo-museo.component";
import {RutaEditarMuseoComponent} from "./rutas/ruta-editar-museo/ruta-editar-museo.component";
import {RutaNuevaObraComponent} from "./rutas/ruta-nueva-obra/ruta-nueva-obra.component";
import {RutaObrasMuseoComponent} from "./rutas/ruta-obras-museo/ruta-obras-museo.component";
import {RutaEditarObraComponent} from "./rutas/ruta-editar-obra/ruta-editar-obra.component";

const routes: Routes = [
  {
    path:'museos',
    component:RutaHomeComponent
  },
  {
    path: 'museos/nuevo',
    component: RutaNuevoMuseoComponent
  },
  {
    path: 'museos/:idMuseo/editar',
    component: RutaEditarMuseoComponent
  },
  {
    path: 'obra/nueva',
    component: RutaNuevaObraComponent
  },
  {
    path: 'museos/:idMuseo/obras',
    component: RutaObrasMuseoComponent
  },
  {
    path: 'museos/:idMuseo/obra/:idObra',
    component: RutaEditarObraComponent
  },
  {
    path: '',
    redirectTo: '/museos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
