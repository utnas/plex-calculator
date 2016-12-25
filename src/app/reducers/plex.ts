import {Map} from "immutable";

export interface State {
  entities: Map<string, Plex>;
  selectedPlexId: string | '';
}

const initialState: State = {
  entities: Map<string, Plex>(),
  selectedPlexId: '',
};

export class Plex {
  constructor() {
  }
}
