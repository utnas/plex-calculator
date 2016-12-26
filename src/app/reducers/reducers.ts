import {ActionReducer, combineReducers} from "@ngrx/store";
import {createSelector} from "reselect";
import {Actions} from "@ngrx/effects";
import * as plex from "./plex";
import {getEntities} from "./plex";

export interface State {
  plex: plex.State
}

const reducers = {
  plex: plex.reducer
};

export function reducer(state: State, action: Actions) {
  const productionReducer: ActionReducer<State> = combineReducers(reducers);
}

function getPlexState(state: State) {
  return state.plex;
}

export const getPlexEntities = createSelector(getPlexState, getEntities);
