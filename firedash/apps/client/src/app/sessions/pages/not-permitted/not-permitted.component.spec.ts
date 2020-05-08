/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotPermittedComponent } from './not-permitted.component';

describe('NotPermittedComponent', () => {
  let component: NotPermittedComponent;
  let fixture: ComponentFixture<NotPermittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotPermittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPermittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
