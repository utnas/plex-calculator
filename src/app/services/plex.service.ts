import {Injectable} from "@angular/core";
import {Plex} from "../reducers/plex";
import {Database} from "@ngrx/db";
import {Observable} from "rxjs";

@Injectable()
export class PlexService {

  constructor(private db: Database) {
    this.db.open('plex_app');
  }

  public addPlex(plex: Plex): Observable<Plex> {
    return this.db.insert('plex', [plex]);
  }
}
