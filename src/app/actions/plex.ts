import {type} from "../util";
import {Action} from "@ngrx/store";
import {Plex} from "../reducers/plex";

export const ActionTypes = {
  SEARCH: type('[Plex] Search'),
  ADD: type('[Plex] Add'),
  SELECT: type('[Plex] Select'),
  DELETE: type('[Plex] Delete'),
  COMPLETE: type('[Plex] Complete'),
};

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: string) {
  }
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: Plex) {
  }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: string) {
  }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: string) {
  }
}

export class CompleteAction implements Action {
  type = ActionTypes.COMPLETE;

  constructor(public payload: string) {
  }
}

export type Actions
  = SearchAction
  | AddAction
  | DeleteAction
  | CompleteAction
  | SelectAction;
