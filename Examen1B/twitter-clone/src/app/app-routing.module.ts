import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {RutaExploreComponent} from "./rutas/ruta-explore/ruta-explore.component";
import {RutaNotificationsComponent} from "./rutas/ruta-notifications/ruta-notifications.component";
import {RutaMessagesComponent} from "./rutas/ruta-messages/ruta-messages.component";
import {RutaBookmarksComponent} from "./rutas/ruta-bookmarks/ruta-bookmarks.component";
import {RutaListsComponent} from "./rutas/ruta-lists/ruta-lists.component";
import {RutaProfileComponent} from "./rutas/ruta-profile/ruta-profile.component";
import {RutaAllNotificationsComponent} from "./rutas/ruta-all-notifications/ruta-all-notifications.component";
import {RutaMentionNotificationComponent} from "./rutas/ruta-mention-notification/ruta-mention-notification.component";

const routes: Routes = [
  {
    path: 'home',
    component: RutaHomeComponent
  },
  {
    path: "explore",
    component: RutaExploreComponent
  },
  {
    path: "notifications",
    component: RutaNotificationsComponent,
    children:[
      {
        path: '',
        component: RutaAllNotificationsComponent
      },
      {
        path: 'mentions',
        component: RutaMentionNotificationComponent
      }
    ]
  },
  {
    path: "messages",
    component: RutaMessagesComponent
  },
  {
    path: "bookmarks",
    component: RutaBookmarksComponent
  },
  {
    path: "lists",
    component: RutaListsComponent
  },
  {
    path: "profile",
    component: RutaProfileComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
