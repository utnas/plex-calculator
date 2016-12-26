import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DBModule} from "@ngrx/db";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {APP_ROUTES} from "./routes";
import {reducer} from "./reducers";
import {schema} from "./db";
import {AppComponent} from "./app.component";
import {PlexListComponent} from "./components/plex-list/plex-list.component";
import {PlexComponent} from "./components/plex/plex.component";
import {PlexEffects} from "./effects/plex";
import {PlexService} from "./services/plex.service";

@NgModule({
  declarations: [
    AppComponent,
    PlexListComponent,
    PlexComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,

    HttpModule,

    RouterModule.forRoot(APP_ROUTES, {useHash: true}),

    StoreModule.provideStore(reducer),

    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    //EffectsModule.run(PlexEffects),

    DBModule.provideDB(schema),
  ],
  providers: [
    PlexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
