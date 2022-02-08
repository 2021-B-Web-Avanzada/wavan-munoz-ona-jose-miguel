import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaForbbidenComponent} from "./rutas/ruta-forbbiden/ruta-forbbiden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {EstaLogueadoGuard} from "./servicios/auth/esta-logueado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {RutaUsuarioPerfilComponent} from "./rutas/ruta-usuario-perfil/ruta-usuario-perfil.component";

const routes: Routes = [
  {
    path: 'inicio',
    canActivate:[EstaLogueadoGuard],
    component: RutaInicioComponent
  },
  {
    path:'app',
    component: RutaAppComponent,
    children:[
      {
        path:'usuario',
        component: RutaUsuarioComponent
      },
      {
        path: 'usuario/:idUsuario',
        component: RutaUsuarioPerfilComponent
      },
      {
        path: 'post',
        component: RutaPostComponent,
        canActivate: [EsAdministradorGuard]
      }
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'forbidden',
    component: RutaForbbidenComponent
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'lazy-inventario',
    loadChildren: () =>  import("./modulos/modulo-inventario/modulo-inventario.module") //import('./modulos/modulo-inventario/modulo-inventario.module')
      .then(m => m.ModuloInventarioModule)
  }
  ,
  {//para cuando va a una pagina que no existe
    path:'**',
    component: RutaNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
