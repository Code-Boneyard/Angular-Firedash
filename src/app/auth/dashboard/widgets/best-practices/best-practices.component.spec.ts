/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestPracticesComponent } from './best-practices.component';

describe('BestPracticesComponent', () => {
  let component: BestPracticesComponent;
  let fixture: ComponentFixture<BestPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
