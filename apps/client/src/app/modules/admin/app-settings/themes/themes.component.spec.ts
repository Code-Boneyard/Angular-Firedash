/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThemesComponent } from './themes.component';

describe('ThemesComponent', () => {
  let component: ThemesComponent;
  let fixture: ComponentFixture<ThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
