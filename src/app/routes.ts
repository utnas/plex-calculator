import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {PlexListComponent} from "./plex-list/plex-list.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: PlexListComponent
  }
];
