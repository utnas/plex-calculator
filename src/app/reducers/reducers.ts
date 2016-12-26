import {ActionReducer, combineReducers} from "@ngrx/store";
import {Actions} from "@ngrx/effects";
import * as plex from "./plex";

export interface State {
  plex: plex.State
}

const reducers = {
  plex: plex.reducer
};

export function reducer(state: State, action: Actions) {
  const productionReducer: ActionReducer<State> = combineReducers(reducers);
}
