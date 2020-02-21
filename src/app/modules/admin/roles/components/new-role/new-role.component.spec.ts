/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewRoleComponent } from './new-role.component';

describe('NewRoleComponent', () => {
  let component: NewRoleComponent;
  let fixture: ComponentFixture<NewRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
