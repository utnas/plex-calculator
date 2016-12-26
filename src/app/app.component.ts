import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "./reducers/reducers";
import {AddAction} from "./actions/plex";
import {Plex} from "./reducers/plex";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private store$: Store<State>) {

  }

  ngOnInit(): void {
    const plex = new Plex();
    this.store$.dispatch(new AddAction(plex));
  }

}
