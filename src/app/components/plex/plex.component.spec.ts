/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlexComponent } from './plex.component';

describe('PlexComponent', () => {
  let component: PlexComponent;
  let fixture: ComponentFixture<PlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
