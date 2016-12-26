/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlexListComponent } from './plex-list.component';

describe('PlexListComponent', () => {
  let component: PlexListComponent;
  let fixture: ComponentFixture<PlexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
