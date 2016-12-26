import {Injectable} from "@angular/core";
import {ActionTypes, AddAction, CompleteAction, SelectAction, DeleteAction} from "../actions/plex";
import {Effect, Actions} from "@ngrx/effects";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {empty} from "rxjs/observable/empty";
import {of} from "rxjs/observable/of";
import {PlexService} from "../services/plex.service";

@Injectable()
export class PlexEffects {

  constructor(private actions$: Actions, private service: PlexService) {
  }

  @Effect()
  addPlex$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD)
    .map((action: AddAction) => action.payload)
    .switchMap(plex => {
      if (!plex) {
        return empty();
      }
      return this.service.addPlex(plex)
        .map(plex => new AddAction(plex))
        .catch(() => of(new CompleteAction(ActionTypes.ADD)));
    });

  @Effect()
  selectPlex$: Observable<Action> = this.actions$
    .ofType(ActionTypes.SELECT)
    .debounceTime(300)
    .map((action: SelectAction) => action.payload)
    .switchMap(plex => {
      if (!plex) {
        return empty();
      }
      return this.service.selectPlex(plex)
        .map(plex => new AddAction(plex))
        .catch(() => of(new CompleteAction(ActionTypes.ADD)));
    });

  @Effect()
  deletePlex$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD)
    .map((action: DeleteAction) => action.payload)
    .switchMap(plex => {
      if (!plex) {
        return empty();
      }
      return this.service.deletePlex(plex)
        .map(plex => new AddAction(plex))
        .catch(() => of(new CompleteAction(ActionTypes.ADD)));
    });

  @Effect()
  searchPlex$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD)
    .map((action: AddAction) => action.payload)
    .switchMap(plex => {
      if (!plex) {
        return empty();
      }
      return this.service.addPlex(plex)
        .map(plex => new AddAction(plex))
        .catch(() => of(new CompleteAction(ActionTypes.ADD)));
    });
}
