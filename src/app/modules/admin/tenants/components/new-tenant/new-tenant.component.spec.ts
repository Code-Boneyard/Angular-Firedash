/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewTenantComponent } from './new-tenant.component';

describe('NewTenantComponent', () => {
  let component: NewTenantComponent;
  let fixture: ComponentFixture<NewTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
