import {Map} from "immutable";
import * as plex from "../actions/plex";
import {ActionTypes} from "../actions/plex";

export interface State {
  entities: Map<string, Plex>;
  selectedPlexId: string | '';
}

const initialState: State = {
  entities: Map<string, Plex>(),
  selectedPlexId: '',
};

export function reducer(state: State = initialState, action: plex.Actions): State {

  switch (action.type) {

    case ActionTypes.ADD: {
      const plex: Plex = action.payload;

      if (state.entities.get(plex.id)) {
        return state;
      }

      return Object.assign({}, state, {
        entities: state.entities.set(plex.id, plex)
      });
    }

    case ActionTypes.SELECT: {
      const plexId: string = action.payload;
      const plex = state.entities.get(plexId);

      if (plex) {
        return Object.assign({}, state, {selectedPlexId: plexId});
      }
      return Object.assign({}, state, {selectedPlexId: ''});
    }

    case ActionTypes.DELETE: {
      const plexId: string = action.payload;

      return Object.assign({}, state, {entities: state.entities.delete(plexId)});
    }

    case ActionTypes.COMPLETE: {
      const actionName: string = action.payload;

      return Object.assign({}, state, {})
    }

    default: {
      return state;
    }
  }

}

export function getEntities(state: State) {
  return state.entities;
}

export function getSelectedPlex(state: State) {
  return state.selectedPlexId;
}

export class Plex {
  private _id: string;

  constructor() {
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
