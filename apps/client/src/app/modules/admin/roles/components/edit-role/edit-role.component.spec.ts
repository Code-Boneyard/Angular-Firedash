/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRoleComponent } from './edit-role.component';

describe('EditRoleComponent', () => {
  let component: EditRoleComponent;
  let fixture: ComponentFixture<EditRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
