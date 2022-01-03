import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterSectionComponent } from './components/nav-items/twitter-section/twitter-section.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {NavItemsModule} from "./components/nav-items/nav-items.module";
import {UiElementsModule} from "./components/ui-elements/ui-elements.module";
import { RutaExploreComponent } from './rutas/ruta-explore/ruta-explore.component';
import { RutaNotificationsComponent } from './rutas/ruta-notifications/ruta-notifications.component';
import { RutaMessagesComponent } from './rutas/ruta-messages/ruta-messages.component';
import { RutaBookmarksComponent } from './rutas/ruta-bookmarks/ruta-bookmarks.component';
import { RutaListsComponent } from './rutas/ruta-lists/ruta-lists.component';
import { RutaProfileComponent } from './rutas/ruta-profile/ruta-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaExploreComponent,
    RutaNotificationsComponent,
    RutaMessagesComponent,
    RutaBookmarksComponent,
    RutaListsComponent,
    RutaProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavItemsModule,
    UiElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
